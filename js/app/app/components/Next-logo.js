"use client"

import { useEffect, useState } from "react"
import Image from "next/image"


export default function NextLogo() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 2) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-24 h-24 flex items-center justify-center">
      
      {/* rotating outer ring */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <svg className="w-full h-full" viewBox="0 0 180 180" fill="none">
          <circle
            cx="90"
            cy="90"
            r="85"
            stroke="currentColor"
            strokeWidth="2"
            opacity="0.1"
          />
        </svg>
      </div>

      {/* Center imported SVG logo */}
      <Image
      width={50}
      height={50}
        src="images/nextlogo.svg"
        alt="Next Logo"
        className="absolute w-16 h-16"
      />

      {/* orbit dots */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full -translate-x-1/2" />
        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2" />
      </div>
    </div>
  )
}