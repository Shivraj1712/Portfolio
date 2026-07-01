'use client'

import React, { useState } from 'react'
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BackgroundGridProps {
  children?: React.ReactNode
  className?: string
  patternClassName?: string
  type?: 'grid' | 'dot'
  showRadialMask?: boolean
}

export const BackgroundGrid: React.FC<BackgroundGridProps> = ({
  children,
  className,
  patternClassName,
  type = 'grid',
  showRadialMask = true,
}) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [isHovered, setIsHovered] = useState(false)

  function handleMouseMove({ clientX, clientY, currentTarget }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // Soft glowing ambient cursor spotlight (radial gradient follow)
  const spotlightBg = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, oklch(0.74 0.16 165 / 0.055), transparent 80%)`

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative w-full overflow-hidden bg-background min-h-full",
        className
      )}
    >
      {/* Moving cursor spotlight */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none transition duration-300 z-0"
          style={{ background: spotlightBg }}
        />
      )}

      {/* Pattern background layer */}
      <div
        className={cn(
          "absolute inset-0 pointer-events-none z-0",
          type === 'grid' ? 'bg-grid-pattern' : 'bg-dot-pattern',
          showRadialMask && 'radial-mask',
          patternClassName
        )}
      />

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  )
}

export default BackgroundGrid
