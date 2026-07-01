'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TracingBeamProps {
  children: React.ReactNode
  className?: string
}

export const TracingBeam: React.FC<TracingBeamProps> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setSvgHeight(ref.current.offsetHeight)
    }
  }, [])

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    {
      stiffness: 500,
      damping: 90,
    }
  )

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 10]),
    {
      stiffness: 500,
      damping: 90,
    }
  )

  return (
    <div
      ref={ref}
      className={cn("relative w-full max-w-7xl mx-auto h-full", className)}
    >
      {/* Scroll timeline SVG - Hidden on small viewports */}
      <div className="absolute -left-4 md:-left-20 top-3 hidden md:block">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          className="relative w-4 h-full flex flex-col items-center"
        >
          {/* Top light indicator dot */}
          <div className="absolute top-0 w-3 h-3 rounded-full border border-border bg-background flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-neon-teal animate-ping" />
            <div className="w-1.5 h-1.5 rounded-full bg-neon-teal absolute" />
          </div>

          {/* SVG timeline tracer */}
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="w-5"
            aria-hidden="true"
          >
            {/* Background trace line */}
            <path
              d={`M 10 0 V ${svgHeight}`}
              fill="none"
              stroke="oklch(0.16 0.01 240)"
              strokeWidth="2"
            />
            {/* Active scroll progress path */}
            <motion.path
              d={`M 10 0 V ${svgHeight}`}
              fill="none"
              stroke="url(#glowGradient)"
              strokeWidth="2.5"
              strokeDasharray="4 4"
              style={{
                strokeDashoffset: y2,
              }}
            />
            {/* Linear Gradient definition */}
            <defs>
              <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--neon-teal)" stopOpacity="0" />
                <stop offset="50%" stopColor="var(--neon-teal)" stopOpacity="1" />
                <stop offset="100%" stopColor="var(--neon-indigo)" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  )
}

export default TracingBeam
