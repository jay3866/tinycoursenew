"use client"

import React from 'react'

interface AnimatedDoodleProps {
  className?: string
  width?: number | string
  height?: number
}

export default function AnimatedDoodle({ className = "", width = 200, height = 30 }: AnimatedDoodleProps) {
  return (
    <div className={className}>
      <svg width={width} height={height} viewBox="0 0 310 20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 15 C 60 5, 110 25, 160 15 C 210 5, 260 25, 300 15"
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
            values="500; 0; 0"
            keyTimes="0; 0.4; 1"
            dur="4s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  )
}
