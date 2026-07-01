'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface PreloaderProps {
  onComplete: () => void;
}

const BOOT_LOGS = [
  { p: 8, text: "[ INIT ] Initializing kernel bootstrap sequence..." },
  { p: 18, text: "[ COMP ] Loading system configuration modules..." },
  { p: 32, text: "[ CONN ] Spawning database pool endpoints..." },
  { p: 48, text: "[ DISK ] Mount successful (Neon PostgreSQL at Gujrat, IN)" },
  { p: 62, text: "[ MEM  ] Redis namespaces mapped: session:auth" },
  { p: 76, text: "[ AUTH ] Goth OAuth active on GitHub/LinkedIn gateways" },
  { p: 88, text: "[ DISP ] Generating Lattice portfolio interfaces..." },
  { p: 98, text: "[ OK   ] BOOT COMPLETE. STABLE SYSTEM STATE REACHED." }
]

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [logs, setLogs] = useState<string[]>([])

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    const duration = 3500 // Extended duration (3.5 seconds) for a premium cinematic feel
    const intervalTime = 30
    const step = 100 / (duration / intervalTime)

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step
        if (next >= 100) {
          clearInterval(timer)
          return 100
        }
        return next
      })
    }, intervalTime)

    return () => clearInterval(timer)
  }, [])

  // Append logs dynamically as progress matches thresholds
  useEffect(() => {
    const activeLogs = BOOT_LOGS.filter(log => progress >= log.p).map(log => log.text)
    setLogs(activeLogs)

    if (progress === 100) {
      const delay = setTimeout(() => {
        onComplete() // Trigger reveal of main screen
      }, 700)
      return () => clearTimeout(delay)
    }
  }, [progress, onComplete])

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden select-none pointer-events-none bg-[#07070a]">
      
      {/* Cyber Sweeping Scanline Overlay */}
      <motion.div 
        initial={{ y: "-100%" }}
        animate={{ y: "200%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 w-full h-[4px] bg-neon-teal/10 shadow-[0_0_20px_5px_rgba(116,255,165,0.15)] z-40 pointer-events-none"
      />

      {/* Top Panel - Slides Up on exit */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 0.95, ease: [0.85, 0, 0.15, 1] }}
        className="absolute top-0 left-0 w-full h-[50vh] bg-[#0c0c12] border-b border-white/[0.08] pointer-events-auto"
      />

      {/* Bottom Panel - Slides Down on exit */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.95, ease: [0.85, 0, 0.15, 1] }}
        className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#0c0c12] border-t border-white/[0.08] pointer-events-auto"
      />

      {/* Center Diagnostic Control Container */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-8 px-6 text-center z-50 pointer-events-auto"
      >
        {/* Header Identity */}
        <div className="flex flex-col gap-2 items-center">
          <span className="text-3xl sm:text-4xl font-black font-heading tracking-[0.25em] text-foreground uppercase">
            <span className="text-neon-teal">SHIVRAJSINH</span> <span className="text-white">SYSTEMS</span>
          </span>
          <span className="text-[10px] text-neon-teal font-mono font-bold tracking-widest uppercase flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-teal animate-ping" />
            BOOTING_INGRESS_CONTROLLER
          </span>
        </div>

        {/* Glowing Telemetry Screen Panel */}
        <div className="w-full max-w-lg border border-white/[0.14] bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-[0_12px_40px_rgba(0,0,0,0.7)] flex flex-col gap-5 text-left font-mono">
          <div className="flex justify-between items-center border-b border-white/[0.08] pb-3 text-[9px] text-muted/40 font-bold">
            <span>SYS_KERN_BOOT // INGRESS_OK</span>
            <span>STATE: {progress === 100 ? "READY" : "LOADING"}</span>
          </div>

          {/* Progress Counters */}
          <div className="flex justify-between items-center">
            <span className="text-2xl sm:text-3xl font-black text-foreground">
              [ {Math.round(progress).toString().padStart(3, '0')}% ]
            </span>
            
            {/* Horizontal Progress Bar */}
            <div className="w-32 sm:w-48 h-1 bg-white/[0.04] border border-white/[0.08] rounded-full overflow-hidden">
              <div 
                className="h-full bg-neon-teal shadow-[0_0_12px_rgba(116,255,165,0.4)] transition-all duration-75 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Terminal Logs Window */}
          <div className="bg-black/55 border border-white/[0.08] rounded-xl p-4 min-h-[140px] flex flex-col gap-2.5 overflow-hidden select-none">
            {logs.map((log) => (
              <div
                key={log}
                className="text-[9px] text-muted leading-relaxed font-bold tracking-wider break-all flex gap-2"
              >
                <span className="text-neon-teal">✔</span>
                <span className="text-muted/80">{log}</span>
              </div>
            ))}
            {progress < 100 && (
              <div className="flex gap-2 items-center text-[9px] text-neon-teal font-bold animate-pulse">
                <span>&gt;</span>
                <span className="h-2.5 w-1.5 bg-neon-teal" />
              </div>
            )}
          </div>
        </div>

        {/* Footer Telemetry Specs */}
        <div className="absolute bottom-10 left-0 w-full px-8 flex justify-between text-[8px] text-muted/30 font-mono font-bold uppercase tracking-wider">
          <span>ROOT_INGRESS: SHIVRAJSINH_MAHARAUL</span>
          <span>HOST: GUJARAT_IN</span>
        </div>
      </motion.div>

    </div>
  )
}

export default Preloader
