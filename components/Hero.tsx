'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FlipWords } from '@/components/ui/FlipWords'

const WORDS = [
  "DECOUPLED ARCHITECTURES",
  "THREAD-SAFE DATA PIPELINES",
  "HIGH-PERFORMANCE API GATEWAYS",
  "SECURE SESSION STATES",
  "DATABASE OPTIMIZATIONS",
]

const TERMINAL_LOGS = [
  { status: "✔", level: "OK", source: "LATTICE", message: "Decoupled Gin/Fiber service layers initialized." },
  { status: "✔", level: "OK", source: "NEON-PG", message: "PostgreSQL pool connected using GORM." },
  { status: "✔", level: "OK", source: "REDIS", message: "Session storage active on namespace 'session:auth'." },
  { status: "⚡", level: "SEC", source: "MIDDLE", message: "Auth filters mounted: JWT + OAuth2 handshake." },
  { status: "⚡", level: "INF", source: "ROUTER", message: "Fiber engine listening on port :8080" },
  { status: "✔", level: "OK", source: "SPENDGRID", message: "Go REST API custom 16KB header buffers active." },
  { status: "✔", level: "OK", source: "NEON-PG", message: "ACID consistency boundary verified." },
]

const Hero: React.FC = () => {
  const [logs, setLogs] = useState<typeof TERMINAL_LOGS>([])
  const terminalContainerRef = useRef<HTMLDivElement>(null)
  const [cpu, setCpu] = useState(24)
  const [mem, setMem] = useState(42)

  useEffect(() => {
    let activeLogs = TERMINAL_LOGS.slice(0, 4)
    setLogs(activeLogs)

    let logCounter = 4
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = prev[logCounter % prev.length]
        const updated = [...prev, TERMINAL_LOGS[logCounter % TERMINAL_LOGS.length]]
        if (updated.length > 8) updated.shift() // Show more scrolling logs
        return updated
      })
      
      setCpu(Math.floor(Math.random() * 20) + 15)
      setMem(Math.floor(Math.random() * 5) + 40)
      logCounter++
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight
    }
  }, [logs])

  return (
    <div className="flex flex-col w-full relative z-10">
      
      {/* Background radial glows */}
      <div className="absolute top-[20vh] left-1/4 w-[350px] h-[350px] bg-neon-teal/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[20vh] right-1/4 w-[350px] h-[350px] bg-neon-indigo/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* PART 1: Main Title Intro View (Takes up the entire viewport on load) */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center text-center w-full min-h-[calc(100vh-160px)] max-w-4xl mx-auto gap-8 relative z-10"
      >
        <div className="px-3.5 py-1.5 bg-[#0b0b0e] border border-white/[0.14] text-[9.5px] font-mono tracking-widest text-neon-teal flex items-center gap-2 font-bold rounded-md shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-neon-teal animate-ping" />
          SYSTEM_INGRESS // SHIVRAJSINH_MAHARAUL
        </div>

        <div className="flex flex-col font-heading leading-none gap-2 w-full mt-2">
          <span className="text-[10px] text-muted font-bold tracking-[0.3em] font-mono mb-2 uppercase text-muted/40">
            // BACKEND SYSTEMS ENGINEER
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-none font-heading">
            <span className="text-neon-teal">SHIVRAJSINH</span> <span className="text-white">MAHARAUL</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mt-4 text-center font-mono">
            <span className="text-[10px] sm:text-xs text-muted/40 font-bold uppercase tracking-wider">
              PIPELINES:
            </span>
            <FlipWords words={WORDS} className="text-base sm:text-lg md:text-xl text-neon-teal" />
          </div>
        </div>

        <p className="text-sm sm:text-base text-muted max-w-2xl leading-relaxed font-sans mt-3 font-medium">
          I build clean, safe, and fast backend systems. I focus on database performance and secure logins. I use AI to quickly write frontend code so that I can spend 100% of my focus on database optimization and solid backend logic.
        </p>

        <div className="flex flex-wrap justify-center gap-4 font-mono text-[10px] font-bold tracking-wider mt-4">
          <a 
            href="#telemetry" 
            className="bg-neon-teal text-background hover:bg-neon-teal/90 px-8 py-3.5 rounded-lg transition-all text-center shadow-[0_4px_14px_rgba(116,255,165,0.2)] hover:shadow-[0_4px_22px_rgba(116,255,165,0.4)] hover:-translate-y-[1px]"
          >
            DISPATCH_MONITOR
          </a>
          <a 
            href="#projects" 
            className="border border-white/[0.14] text-foreground px-8 py-3.5 rounded-lg hover:border-neon-teal hover:text-neon-teal transition-all text-center hover:bg-neon-teal/[0.02]"
          >
            EXPLORE_SYSTEMS
          </a>
        </div>
      </motion.div>

      {/* PART 2: Expansive Diagnostics Terminal View (Appears on scroll directly below) */}
      <motion.div 
        id="telemetry"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl mx-auto glass-panel flex flex-col justify-between font-mono text-[10px] text-muted hover:border-neon-teal/20 transition-all duration-300 min-h-[500px] overflow-hidden group z-10 mt-16 scroll-mt-28"
      >
        {/* Terminal Header Bar */}
        <div className="flex justify-between items-center bg-[#09090b]/80 border-b border-white/[0.14] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
            <span className="ml-3 text-foreground font-bold tracking-widest uppercase text-muted/50">
              SYS_TELEMETRY:MONITOR_v1.0
            </span>
          </div>
          <span className="text-neon-teal font-bold tracking-widest animate-pulse flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-neon-teal" />
            LIVE_LOGGING
          </span>
        </div>

        {/* Live system indicators */}
        <div className="bg-[#0b0b0e] border-b border-white/[0.14] px-6 py-3 flex justify-between text-[9px] text-muted/40 font-mono">
          <div className="flex gap-8">
            <span>CPU_LOAD: <span className="text-neon-teal font-bold">{cpu}%</span></span>
            <span>MEM_LOAD: <span className="text-neon-indigo font-bold">{mem}%</span></span>
            <span>STORAGE_CAP: <span className="text-foreground font-bold">14.2% UTIL</span></span>
            <span>NETWORK: SECURE_LINK</span>
          </div>
          <span>RUN_PORT: 8080 // fiber</span>
        </div>

        {/* Expanded terminal logs list */}
        <div 
          ref={terminalContainerRef}
          className="flex-grow p-6 overflow-y-auto no-scrollbar flex flex-col gap-3 bg-[#060608]/45 font-mono max-h-[320px] min-h-[300px]"
        >
          {logs.map((log, index) => (
            <motion.div
              key={`${log.message}-${index}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className="flex gap-3 items-start text-[10px] leading-relaxed break-all"
            >
              <span className={log.level === 'SEC' ? "text-neon-indigo font-bold shrink-0" : "text-neon-teal font-bold shrink-0"}>
                {log.status}
              </span>
              <span className="text-muted/40 font-bold shrink-0">[{log.source}]</span>
              <span className="text-muted/90 font-medium">{log.message}</span>
            </motion.div>
          ))}
          {/* Blinking Cursor */}
          <div className="flex gap-2 items-center text-[10px] text-neon-teal font-bold select-none">
            <span>&gt;</span>
            <span className="h-3 w-1.5 bg-neon-teal animate-pulse" />
          </div>
        </div>

        {/* Terminal Footer Info Bar */}
        <div className="bg-[#09090b]/80 border-t border-white/[0.14] px-6 py-4 flex justify-between items-center text-muted/40 text-[9px]">
          <span>COMPILER: GO_1.21 // SYNCHRONIZED</span>
          <span>INGRESS_IP: 127.0.0.1</span>
        </div>
      </motion.div>

    </div>
  )
}

export default Hero