'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PHILOSOPHY_PRINCIPLES } from '@/data/portfolio'

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
  const [activeFile, setActiveFile] = useState<keyof typeof CONFIG_FILES>("directives.yaml")

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
        
        {/* Left Side: Directory Tree Navigator (lg:col-span-4) */}
        <div className="lg:col-span-4 glass-panel p-5 flex flex-col gap-5 hover:border-white/10 transition-colors w-full">
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
        <div className="lg:col-span-8 glass-panel p-6 sm:p-8 flex flex-col justify-between min-h-[300px] hover:border-white/20 transition-all duration-300 relative overflow-hidden group border-l-2 border-l-neon-teal w-full">
          <div className="absolute inset-0 bg-neon-teal/[0.005] group-hover:bg-neon-teal/[0.01] transition-all duration-300 pointer-events-none" />
          
          <div className="flex justify-between items-center text-[9px] text-muted/40 uppercase mb-4 border-b border-white/[0.08] pb-2">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-teal animate-pulse" />
              <span>EDIT_VIEW: {activeFile}</span>
            </div>
            <span className="text-neon-teal font-bold uppercase">READ_ONLY</span>
          </div>

          {/* Config Editor Body */}
          <div className="my-auto py-2 overflow-x-auto no-scrollbar w-full bg-black/35 border border-white/[0.08] rounded-xl p-5">
            <AnimatePresence mode="wait">
              <motion.pre
                key={activeFile}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="text-[9.5px] sm:text-[10.5px] text-muted/90 leading-relaxed font-mono select-text"
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
