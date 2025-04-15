"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface FlickeringImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  flickerInterval?: [number, number]; // Min and max interval in ms
  flickerDuration?: number; // Duration of flicker in ms
}

export function FlickeringImage({
  src,
  alt,
  width,
  height,
  className = "",
  flickerInterval = [3000, 8000], // Default: flicker every 3-8 seconds
  flickerDuration = 150, // Default: flicker lasts 150ms
}: FlickeringImageProps) {
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Function to trigger a flicker
    const flicker = () => {
      setIsVisible(false);
      
      // Show the image again after the flicker duration
      setTimeout(() => {
        setIsVisible(true);
        
        // Schedule the next flicker
        scheduleNextFlicker();
      }, flickerDuration);
    };
    
    // Function to schedule the next flicker at a random interval
    const scheduleNextFlicker = () => {
      const [min, max] = flickerInterval;
      const nextFlickerTime = Math.random() * (max - min) + min;
      
      return setTimeout(flicker, nextFlickerTime);
    };
    
    // Start the flicker cycle
    const timerId = scheduleNextFlicker();
    
    // Clean up on unmount
    return () => clearTimeout(timerId);
  }, [flickerDuration, flickerInterval]);
  
  return (
    <div style={{ opacity: isVisible ? 1 : 0, transition: `opacity ${flickerDuration / 2}ms ease-in-out` }}>
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className={className} 
      />
    </div>
  );
}
