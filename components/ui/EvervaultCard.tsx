'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { cn } from '@/lib/utils'

// Random letters matching a web showcase framework
const CHARS = "dribbblelatticecrudpostsearchfilterprofileprojectusergo"

export const EvervaultCard: React.FC<{
  text?: string;
  className?: string;
}> = ({ text, className }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [randomString, setRandomString] = useState("")

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let str = ""
    for (let i = 0; i < 400; i++) {
      str += CHARS[Math.floor(Math.random() * CHARS.length)]
    }
    setRandomString(str)

    const interval = setInterval(() => {
      setRandomString((prev) => {
        const arr = prev.split("")
        for (let i = 0; i < 15; i++) {
          const index = Math.floor(Math.random() * arr.length)
          arr[index] = CHARS[Math.floor(Math.random() * CHARS.length)]
        }
        return arr.join("")
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  function onMouseMove({ clientX, clientY }: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return
    const { left, top } = containerRef.current.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  const maskImage = useMotionTemplate`radial-gradient(130px at ${mouseX}px ${mouseY}px, white, transparent)`
  const glowBg = useMotionTemplate`radial-gradient(150px at ${mouseX}px ${mouseY}px, oklch(0.74 0.16 165 / 0.1), transparent)`

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      className={cn(
        "relative group/card flex items-center justify-center w-full h-full bg-[#0b0b0e]/30 border-b md:border-b-0 md:border-r border-white/[0.14] overflow-hidden cursor-crosshair p-6 min-h-[360px]",
        className
      )}
    >
      {/* Spotlight glow underlayer */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition duration-300"
        style={{ background: glowBg }}
      />

      {/* Floating letters background */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.07] group-hover/card:opacity-[0.14] transition duration-500">
        <motion.div
          className="absolute inset-0 bg-transparent text-[10px] font-mono leading-none tracking-widest text-muted/70 break-all p-4 h-full"
          style={{
            maskImage,
            WebkitMaskImage: maskImage,
          }}
        >
          <div className="w-full h-full select-none pointer-events-none font-bold text-neon-teal">
            {randomString}
          </div>
        </motion.div>
      </div>

      {/* Project Showcase Mockup UI */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between font-mono text-[9px] text-muted gap-5">
        
        {/* Mock Search & Filter Bar */}
        <div className="flex flex-col gap-2 bg-[#0c0c10] border border-white/[0.1] rounded-lg p-3 w-full shadow-sm">
          <div className="flex justify-between items-center text-muted/40 pb-1.5 border-b border-white/[0.04]">
            <span>EXPLORE_FEED // DISCOVER</span>
            <span>v1.0.3</span>
          </div>
          <div className="flex gap-2 w-full">
            <div className="flex-1 bg-[#141418] border border-white/[0.08] px-2.5 py-1.5 rounded text-muted/60 flex items-center gap-1">
              <span>🔍 Search work...</span>
            </div>
            <div className="bg-[#141418] border border-white/[0.08] px-2 py-1.5 rounded text-neon-teal font-bold flex items-center gap-1">
              <span>Filter ▾</span>
            </div>
          </div>
        </div>

        {/* Project Card Feed Mockups */}
        <div className="flex flex-col gap-3.5 w-full flex-grow justify-center">
          
          {/* Mock Card 1 */}
          <div className="bg-[#0c0c10] border border-white/[0.1] rounded-lg p-3 flex flex-col gap-2.5 shadow-sm group-hover/card:border-white/[0.2] transition-colors duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-neon-teal/20 text-neon-teal font-bold flex items-center justify-center text-[8px] border border-neon-teal/20">S</span>
                <span className="text-foreground font-bold font-sans">shivrajsinh_maharaul</span>
              </div>
              <span className="text-neon-teal font-bold">[Post #12]</span>
            </div>
            <div className="bg-[#141418] border border-white/[0.05] rounded h-16 flex items-center justify-center text-muted/30 select-none relative overflow-hidden">
              <span>[Lattice Project Share Visual]</span>
              <div className="absolute bottom-1 right-1 px-1 bg-black/50 text-[7px] border border-white/[0.05] rounded text-muted/60">
                Go + Postgres
              </div>
            </div>
          </div>

          {/* Mock Card 2 */}
          <div className="bg-[#0c0c10] border border-white/[0.1] rounded-lg p-3 flex flex-col gap-2.5 shadow-sm opacity-60 group-hover/card:opacity-90 transition-opacity duration-300">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-full bg-neon-indigo/20 text-neon-indigo font-bold flex items-center justify-center text-[8px] border border-neon-indigo/20">A</span>
                <span className="text-foreground font-bold font-sans">alex_designer</span>
              </div>
              <span className="text-muted/40">[Post #08]</span>
            </div>
            <div className="bg-[#141418] border border-white/[0.05] rounded h-14 flex items-center justify-center text-muted/30 select-none">
              <span>[UI Design Mockup Card]</span>
            </div>
          </div>

        </div>

        {/* Footer Stats Monitor */}
        <div className="flex justify-between items-center border-t border-white/[0.06] pt-3 text-[8px] text-muted/40 uppercase">
          <span>PROJECTS_COUNT: 14</span>
          <span>FEEDS: ACTIVE</span>
        </div>

      </div>
    </div>
  )
}

export default EvervaultCard
