"use client"

import React from 'react'

interface AnimatedStarProps {
  className?: string
  width?: number | string
  height?: number | string
  flip?: boolean
  delay?: number
}

export default function AnimatedStar({ 
  className = "", 
  width = 40, 
  height = 40,
  flip = false,
  delay = 0
}: AnimatedStarProps) {
  return (
    <div className={className}>
      <svg 
        width={width} 
        height={height} 
        viewBox="0 0 60 60" 
        xmlns="http://www.w3.org/2000/svg"
        style={flip ? { transform: 'scaleX(-1)' } : {}}
      >
        <path
          d="M30 8 C31 9, 32 10, 33 11 L37 24 C38 25, 39 25, 40 25 L52 26 C51 28, 49 30, 39 36 C38 37, 38 38, 39 39 L44 52 C43 51, 41 49, 32 42 C31 41, 30 41, 29 41 L17 51 C18 49, 19 47, 21 36 C21 35, 20 34, 19 33 L8 26 C10 25, 12 25, 24 24 Z"
          fill="transparent"
          stroke="black"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="300"
          strokeDashoffset="300"
        >
          <animate
            attributeName="stroke-dashoffset"
            values="300; 0; 0"
            keyTimes="0; 0.4; 1"
            dur="6s"
            repeatCount="indefinite"
            begin={`${delay}s`}
          />
        </path>
      </svg>
    </div>
  )
}
