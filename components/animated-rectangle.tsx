"use client"

import React from 'react'

interface AnimatedRectangleProps {
  className?: string
  width?: number | string
  height?: number | string
}

export default function AnimatedRectangle({ 
  className = "", 
  width = "100%", 
  height = "100%"
}: AnimatedRectangleProps) {
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
        <path
          d="M8,23 C6,18 7,12 12,8 C18,5 25,7 30,6 C40,5 50,4 60,5 C70,6 80,5 87,10 C93,15 95,22 94,28 C95,38 96,48 95,58 C94,68 95,78 90,85 C85,91 78,93 72,92 C62,93 52,94 42,93 C32,92 22,93 15,88 C9,83 7,76 8,70 C7,60 6,50 7,40 C8,30 7,28 8,23 Z"
          fill="transparent"
          stroke="black"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="500"
          strokeDashoffset="500"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="500; 0; 0; 0; 0"
            keyTimes="0; 0.2; 0.9; 0.95; 1"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
