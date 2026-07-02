'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const CONFIG_FILES = {
  "directives.yaml": `# Core Architectural Directives
directives:
  backend_focus: true
  type_safety: strict
  testability: 100%
  principles:
    - focus: "Build solid, easy-to-read systems"
    - queries: "Write fast database queries"
    - security: "Keep user data safe"`,

  "database.conf": `# Database and State Configuration
database:
  engine: "Neon PostgreSQL"
  caching: "Redis namespace sync"
  orm: "GORM model binding"
  pooling: "serverless_active"
  transactions:
    acid_integrity: true
    automatic_rollback: true`,

  "infrastructure.json": `{
  "infrastructure": {
    "runtimes": ["go_gin", "go_fiber"],
    "environments": ["docker_container"],
    "hosting": "edge_networks",
    "verification": "session_tokens_plus_goth_oauth"
  }
}`
}

const Philosophy: React.FC = () => {
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [activeFile, setActiveFile] = useState<keyof typeof CONFIG_FILES>("directives.yaml")

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <motion.section 
      id="philosophy"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-10 w-full scroll-mt-28"
    >
      {/* Title */}
      <div className="border-b border-border/80 pb-4">
        <span className="font-mono text-[10px] text-neon-teal tracking-widest uppercase font-bold">
          NODE_04 // CORE_PHILOSOPHY
        </span>
        <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tighter text-foreground uppercase mt-2">
          Architectural Directives
        </h2>
      </div>

      {/* Editor Split Panel Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full font-mono text-[10px] text-muted items-start">
        
        {/* Custom Mobile Directory Explorer Dropdown Selector (visible < lg) */}
        <div ref={dropdownRef} className="lg:hidden col-span-1 w-full relative z-30 mb-2">
          <label className="block text-[8px] font-mono font-bold tracking-widest text-muted/40 uppercase mb-2">
            // SELECT_FILE (PROJECT_EXPLORER)
          </label>
          
          {/* Selector Button */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center bg-[#0c0c10] border border-white/[0.14] text-foreground font-mono text-[10px] rounded-xl p-4 cursor-pointer focus:outline-none focus:border-neon-teal transition-all duration-300 uppercase tracking-wider text-left"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[7px] font-bold text-neon-teal/60">
                ACTIVE_FILE: config/systems/
              </span>
              <span className="font-bold text-foreground">
                📄 {activeFile}
              </span>
            </div>
            <motion.div
              animate={{ rotate: isDropdownOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="text-neon-teal"
            >
              <ChevronDown className="h-4 w-4" />
            </motion.div>
          </button>

          {/* Animated Options List */}
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8, scale: 0.96 }}
                animate={{ opacity: 1, y: 4, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.96 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 right-0 w-full mt-1.5 p-2 flex flex-col gap-1 z-40 bg-[#0d0d12] border border-white/[0.12] rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.9)]"
              >
                {Object.keys(CONFIG_FILES).map((fileName) => {
                  const isActive = activeFile === fileName
                  return (
                    <button
                      key={fileName}
                      onClick={() => {
                        setActiveFile(fileName as keyof typeof CONFIG_FILES)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full text-left p-3 rounded-lg flex justify-between items-center font-mono transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-neon-teal/10 border border-neon-teal/30 text-neon-teal font-bold"
                          : "border border-transparent text-muted hover:text-foreground hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>📄</span>
                        <span className="text-[10px] font-bold">
                          {fileName}
                        </span>
                      </div>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-neon-teal animate-pulse" />
                      )}
                    </button>
                  )
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Left Side: Directory Tree Navigator (lg:col-span-4, hidden on mobile) */}
        <div className="hidden lg:flex lg:col-span-4 glass-panel p-4 sm:p-5 flex flex-col gap-5 hover:border-white/10 transition-colors w-full">
          <div className="border-b border-white/[0.08] pb-2 text-[9px] text-muted/40 font-bold uppercase tracking-wider">
            // PROJECT_EXPLORER
          </div>
          
          <div className="flex flex-col gap-2.5">
            <div className="text-[9px] text-muted/50 font-bold flex items-center gap-1.5 pl-1.5 select-none">
              <span>📁</span>
              <span>config / systems /</span>
            </div>
            
            <div className="flex flex-col gap-1.5 pl-4 border-l border-white/[0.08]">
              {Object.keys(CONFIG_FILES).map((fileName) => {
                const isActive = activeFile === fileName
                return (
                  <button
                    key={fileName}
                    onClick={() => setActiveFile(fileName as keyof typeof CONFIG_FILES)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-all cursor-pointer ${
                      isActive 
                        ? "bg-neon-teal/5 text-neon-teal border border-neon-teal/20 font-bold" 
                        : "text-muted hover:text-foreground hover:bg-white/[0.02] border border-transparent"
                    }`}
                  >
                    <span>📄</span>
                    <span className="text-[10px]">{fileName}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="border-t border-white/[0.06] pt-3 text-[8px] text-muted/30 uppercase tracking-widest">
            DIR: SECURE_ROOT
          </div>
        </div>

        {/* Right Side: Mock Editor Terminal Panel (lg:col-span-8) */}
        <div className="lg:col-span-8 glass-panel p-4 sm:p-6 md:p-8 flex flex-col justify-between min-h-[300px] hover:border-white/20 transition-all duration-300 relative overflow-hidden group border-l-2 border-l-neon-teal w-full">
          <div className="absolute inset-0 bg-neon-teal/[0.005] group-hover:bg-neon-teal/[0.01] transition-all duration-300 pointer-events-none" />
          
          <div className="flex justify-between items-center text-[9px] text-muted/40 uppercase mb-4 border-b border-white/[0.08] pb-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-teal animate-pulse" />
              <span>EDIT_VIEW: {activeFile}</span>
            </div>
            <span className="text-neon-teal font-bold uppercase">READ_ONLY</span>
          </div>

          {/* Config Editor Body */}
          <div className="my-auto py-2 overflow-x-auto no-scrollbar w-full bg-black/35 border border-white/[0.08] rounded-xl p-3 sm:p-5">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeFile}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="text-[9.5px] sm:text-[10.5px] text-muted/90 leading-relaxed font-mono select-text whitespace-pre-wrap break-words border-0 bg-transparent p-0 rounded-none text-left"
              >
                {CONFIG_FILES[activeFile]}
              </motion.pre>
            </AnimatePresence>
          </div>

          <div className="text-[8px] text-muted/30 uppercase mt-4 text-right">
            <span>// PIPELINE_COMPILER_ENFORCED</span>
          </div>
        </div>

      </div>
    </motion.section>
  )
}

export default Philosophy
