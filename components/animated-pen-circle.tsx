"use client"

import React, { useEffect, useState, useRef } from 'react'

interface AnimatedPenCircleProps {
  className?: string
  width?: number | string
  height?: number | string
  color?: string
}

export default function AnimatedPenCircle({ 
  className = "", 
  width = "100%", 
  height = "100%",
  color = "black" // Default is black
}: AnimatedPenCircleProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [penPosition, setPenPosition] = useState({ x: 50, y: 10 });
  const animationRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number>(0);
  const progressRef = useRef<number>(0);
  const visibleRef = useRef<boolean>(true);
  
  // Animation constants
  const DRAW_DURATION = 1500; // 1.5 seconds to draw
  const HOLD_DURATION = 7000; // 7 seconds to hold
  const FADE_DURATION = 500;  // 0.5 seconds to fade out
  const TOTAL_DURATION = DRAW_DURATION + HOLD_DURATION + FADE_DURATION + 500; // Total animation cycle
  
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (!lastTimeRef.current) {
        lastTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - lastTimeRef.current;
      
      // Calculate where we are in the animation cycle
      const totalProgress = (progressRef.current + elapsed) % TOTAL_DURATION;
      progressRef.current = totalProgress;
      
      // Drawing phase (0 to DRAW_DURATION)
      if (totalProgress < DRAW_DURATION) {
        const drawProgress = totalProgress / DRAW_DURATION;
        setProgress(drawProgress);
        
        // Calculate pen position along the circle
        const angle = drawProgress * 2 * Math.PI;
        const x = 50 + 40 * Math.sin(angle);
        const y = 50 - 40 * Math.cos(angle);
        setPenPosition({ x, y });
        
        if (!visibleRef.current) {
          setVisible(true);
          visibleRef.current = true;
        }
      } 
      // Hold phase (DRAW_DURATION to DRAW_DURATION + HOLD_DURATION)
      else if (totalProgress < DRAW_DURATION + HOLD_DURATION) {
        setProgress(1); // Keep the circle fully drawn
      } 
      // Fade out phase
      else if (totalProgress < DRAW_DURATION + HOLD_DURATION + FADE_DURATION) {
        if (visibleRef.current) {
          setVisible(false);
          visibleRef.current = false;
        }
      }
      // Reset phase - nothing visible, waiting to restart
      else {
        setProgress(0);
      }
      
      lastTimeRef.current = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  // Calculate the stroke-dashoffset based on progress
  const dashOffset = 300 * (1 - progress);
  
  return (
    <div className={`absolute inset-0 ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 100 100" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* The circle path */}
        <path
          d="M 50,10 A 40,40 0 0 1 90,50 A 40,40 0 0 1 50,90 A 40,40 0 0 1 10,50 A 40,40 0 0 1 50,10"
          fill="transparent"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="300"
          strokeDashoffset={dashOffset}
          style={{ opacity: visible ? 1 : 0 }}
        />
        
        {/* The pen tip */}
        <circle 
          cx={penPosition.x} 
          cy={penPosition.y} 
          r="3" 
          fill={color}
          style={{ opacity: visible && progress < 1 ? 1 : 0 }}
        />
      </svg>
    </div>
  )
}
