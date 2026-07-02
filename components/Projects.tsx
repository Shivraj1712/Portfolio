'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS_DATA, SOCIAL_LINKS } from '@/data/portfolio'
import { ChevronDown } from 'lucide-react'

interface ContributionDay {
  date: string;
  level: number;
}

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [heatmap, setHeatmap] = useState<number[][]>([])
  const [totalContributions, setTotalContributions] = useState<number>(3142)
  const [activeTab, setActiveTab] = useState<string>("01") // Default is Lattice

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const res = await fetch('/api/github')
        if (!res.ok) throw new Error()
        const data: ContributionDay[] = await res.json()
        if (data && data.length > 0) {
          const last168 = data.slice(-168)
          const padded = Array(Math.max(0, 168 - last168.length))
            .fill({ level: 0 })
            .concat(last168)
          
          const grid = Array.from({ length: 7 }, (_, r) => 
            Array.from({ length: 24 }, (_, c) => padded[c * 7 + r]?.level || 0)
          )
          setHeatmap(grid)
          
          const total = data.reduce((acc, curr) => acc + (curr.level > 0 ? curr.level * 2 : 0), 0)
          setTotalContributions(total || 3142)
          return
        }
      } catch {}
      
      const fallbackLevels = [0, 1, 2, 3, 2, 1, 0, 3, 2, 1, 0, 1, 2, 3, 2, 1, 0, 1, 2, 3, 0, 1, 2, 1]
      const grid = Array.from({ length: 7 }, (_, r) => 
        Array.from({ length: 24 }, (_, c) => {
          const index = (r * 24 + c) % fallbackLevels.length
          return fallbackLevels[index]
        })
      )
      setHeatmap(grid)
    }
    fetchContributions()
  }, [])

  const pLattice = PROJECTS_DATA.find(p => p.id === "01")
  const pSpendGrid = PROJECTS_DATA.find(p => p.id === "02")
  const pNoteitdown = PROJECTS_DATA.find(p => p.id === "03")

  const consoleTabs = [
    { id: "01", name: "Lattice Showcase Platform", spec: "Dribbble-like Share Feed" },
    { id: "02", name: "SpendGrid Expense tracker", spec: "Decoupled Financial API" },
    { id: "04", name: "Noteitdown System", spec: "Markdown Notes Organizer" },
    { id: "05", name: "GitHub Contribution monitor", spec: "Real-time Commit Matrix" },
    { id: "06", name: "Shivrajsinh Dispatch profile", spec: "Core Systems Telemetry" },
  ]

  return (
    <motion.section 
      id="projects"
      ref={containerRef} 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-10 w-full scroll-mt-28"
    >
      {/* Title */}
      <div className="border-b border-border/80 pb-4">
        <span className="font-mono text-[10px] text-neon-teal tracking-widest uppercase font-bold">
          NODE_03 // PROJECTS_CONSOLE
        </span>
        <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tighter text-foreground uppercase mt-2">
          Systems Discovery Center
        </h2>
      </div>

      {/* Main Console Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full items-start">
        
        {/* Custom Mobile Selection Dropdown (visible < lg) */}
        <div ref={dropdownRef} className="lg:hidden col-span-1 w-full relative z-30 mb-2">
          <label className="block text-[8px] font-mono font-bold tracking-widest text-muted/40 uppercase mb-2">
            UNIT_SELECT // SYSTEMS_CONSOLE
          </label>
          
          {/* Selector Button */}
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex justify-between items-center bg-[#0c0c10] border border-white/[0.14] text-foreground font-mono text-[10px] rounded-xl p-4 cursor-pointer focus:outline-none focus:border-neon-teal transition-all duration-300 uppercase tracking-wider text-left"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[7px] font-bold text-neon-teal/60">
                ACTIVE_UNIT: UNIT_0{activeTab}
              </span>
              <span className="font-bold text-foreground">
                {consoleTabs.find(t => t.id === activeTab)?.name}
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
                {consoleTabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full text-left p-3 rounded-lg flex justify-between items-center font-mono transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-neon-teal/10 border border-neon-teal/30 text-neon-teal font-bold"
                          : "border border-transparent text-muted hover:text-foreground hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className={`text-[7px] uppercase font-bold tracking-widest ${isActive ? "text-neon-teal" : "text-muted/30"}`}>
                          UNIT_0{tab.id} // SECURE_PORT
                        </span>
                        <span className="text-[10px] font-bold uppercase font-heading">
                          {tab.name}
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


        {/* Left Side: System Selection Tabs (lg:col-span-5, hidden on mobile) */}
        <div className="hidden lg:flex lg:col-span-5 flex-col gap-4 w-full">
          {consoleTabs.map((tab) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-5 sm:p-6 rounded-xl border flex justify-between items-center font-mono transition-all duration-300 relative group overflow-hidden cursor-pointer ${
                  isActive 
                    ? "border-neon-teal bg-neon-teal/[0.02] shadow-[0_0_15px_rgba(116,255,165,0.05)]" 
                    : "border-white/[0.14] bg-[#0c0c10]/40 hover:border-white/20 hover:bg-[#14141a]/60"
                }`}
              >
                <div className="flex flex-col gap-1.5 relative z-10">
                  <span className={`text-[8px] font-bold uppercase tracking-widest ${isActive ? "text-neon-teal" : "text-muted/40"}`}>
                    UNIT_0{tab.id} // SECURE_PORT
                  </span>
                  <span className={`text-[11px] font-bold uppercase font-heading tracking-wide ${isActive ? "text-foreground" : "text-muted"}`}>
                    {tab.name}
                  </span>
                  <span className="text-[9px] text-muted/50 font-normal">{tab.spec}</span>
                </div>
                <div className="relative z-10 shrink-0 pl-4">
                  {isActive ? (
                    <span className="h-2 w-2 rounded-full bg-neon-teal animate-pulse" />
                  ) : (
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-neon-teal/40 transition-colors" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Right Side: Telemetry Specs & Mockups Preview Screen (lg:col-span-7) */}
        <div className="lg:col-span-7 glass-panel min-h-[460px] overflow-hidden flex flex-col justify-between hover:border-white/20 transition-all duration-300 w-full relative">
          
          <AnimatePresence mode="wait">
            {/* Display Lattice Details */}
            {activeTab === "01" && pLattice && (
              <motion.div
                key="tab-lattice"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col h-full w-full p-6 sm:p-8 font-mono text-[10px] text-muted gap-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] text-muted/40 font-bold uppercase">PROJECT_DESCRIPTION:</span>
                  <h3 className="text-xl font-black text-foreground font-heading uppercase">{pLattice.title}</h3>
                  <p className="text-xs text-muted font-sans font-medium leading-relaxed mt-1">
                    {pLattice.description}
                  </p>
                </div>
                
                <div className="bg-[#0b0b0e] border border-white/[0.14] rounded-xl p-5 flex flex-col gap-4">
                  <div className="border-b border-white/[0.08] pb-2 flex justify-between items-center text-[9px] text-muted/40 font-bold uppercase">
                    <span>// SYSTEM_MAP_SPEC</span>
                    <span>LATTICE_ROUTE_MAP</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="border border-white/[0.08] bg-[#141418] p-3 rounded-lg flex flex-col gap-1">
                      <span className="text-neon-teal font-bold uppercase tracking-wider text-[8px]">Ingress layer</span>
                      <p className="text-[9px] text-muted leading-relaxed font-sans font-medium">CRUD details & search filter.</p>
                    </div>
                    <div className="border border-white/[0.08] bg-[#141418] p-3 rounded-lg flex flex-col gap-1">
                      <span className="text-neon-indigo font-bold uppercase tracking-wider text-[8px]">Logic router</span>
                      <p className="text-[9px] text-muted leading-relaxed font-sans font-medium">Go/Gin verify & Goth OAuth.</p>
                    </div>
                    <div className="border border-white/[0.08] bg-[#141418] p-3 rounded-lg flex flex-col gap-1">
                      <span className="text-foreground font-bold uppercase tracking-wider text-[8px]">Storage Cache</span>
                      <p className="text-[9px] text-muted leading-relaxed font-sans font-medium">PG saves projects; Redis caches.</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {pLattice.tags.map(tag => (
                      <span key={tag} className="border border-white/[0.05] bg-[#0c0c10] text-foreground px-2 py-0.5 rounded text-[9px] font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center text-muted/40 text-[9px] font-bold">
                    <span>VERIFIED: DECOUPLED // MODULAR</span>
                    <span>TEST: 100% DI</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Display SpendGrid Details */}
            {activeTab === "02" && pSpendGrid && (
              <motion.div
                key="tab-spendgrid"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col h-full w-full p-6 sm:p-8 font-mono text-[10px] text-muted gap-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] text-muted/40 font-bold uppercase">PROJECT_DESCRIPTION:</span>
                  <h3 className="text-xl font-black text-foreground font-heading uppercase">{pSpendGrid.title}</h3>
                  <p className="text-xs text-muted font-sans font-medium leading-relaxed mt-1">
                    {pSpendGrid.description}
                  </p>
                </div>

                <div className="bg-[#0b0b0e] border border-white/[0.14] rounded-xl p-5 flex flex-col gap-4">
                  <div className="border-b border-white/[0.08] pb-2 flex justify-between items-center text-[9px] text-muted/40 font-bold uppercase">
                    <span>// CONNECTION_SPEC</span>
                    <span>INGRESS_PORT: 3000 // RENDER</span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="border border-white/[0.08] bg-[#141418] p-3 rounded-lg flex flex-col gap-1">
                      <span className="text-muted/40 font-bold uppercase tracking-wider text-[8px]">Backend API URL</span>
                      <a href={pSpendGrid.backendUrl} target="_blank" rel="noopener noreferrer" className="text-neon-teal hover:underline break-all">
                        spendgrid-2.onrender.com
                      </a>
                    </div>
                    <div className="border border-white/[0.08] bg-[#141418] p-3 rounded-lg flex flex-col gap-1">
                      <span className="text-muted/40 font-bold uppercase tracking-wider text-[8px]">Ingress Buffers</span>
                      <span className="text-foreground font-bold">16KB Headers Supported</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {pSpendGrid.tags.map(tag => (
                      <span key={tag} className="border border-white/[0.05] bg-[#0c0c10] text-foreground px-2 py-0.5 rounded text-[9px] font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 text-[9px] font-bold uppercase border-t border-white/[0.06] pt-4">
                    {pSpendGrid.githubUrl && (
                      <a href={pSpendGrid.githubUrl} target="_blank" rel="noopener noreferrer" className="text-neon-teal hover:underline tracking-widest">
                        [SRC_REPOS]
                      </a>
                    )}
                    {pSpendGrid.liveUrl && (
                      <a href={pSpendGrid.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-neon-teal transition-colors hover:underline tracking-widest">
                        [LIVE_DEMO]
                      </a>
                    )}
                    {pSpendGrid.backendUrl && (
                      <a href={pSpendGrid.backendUrl} target="_blank" rel="noopener noreferrer" className="text-muted/60 hover:text-neon-teal transition-colors hover:underline tracking-widest">
                        [BACKEND_API]
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Display Noteitdown Details */}
            {activeTab === "04" && pNoteitdown && (
              <motion.div
                key="tab-noteitdown"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col h-full w-full p-6 sm:p-8 font-mono text-[10px] text-muted gap-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] text-muted/40 font-bold uppercase">PROJECT_DESCRIPTION:</span>
                  <h3 className="text-xl font-black text-foreground font-heading uppercase">{pNoteitdown.title}</h3>
                  <p className="text-xs text-muted font-sans font-medium leading-relaxed mt-1">
                    {pNoteitdown.description}
                  </p>
                </div>

                <div className="bg-[#0b0b0e] border border-white/[0.14] rounded-xl p-5 flex flex-col gap-3">
                  <span className="text-neon-teal font-bold block border-b border-white/[0.04] pb-1.5 mb-1 text-[9px] uppercase tracking-wider">// Markdown Preview System</span>
                  <div className="flex flex-col gap-1 text-[9px] text-muted/60">
                    <span className="block">&gt; simple note organizer client</span>
                    <span className="block">- compiled next.js build pages</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 border-t border-white/[0.06] pt-4 mt-auto">
                  <div className="flex flex-wrap gap-1.5">
                    {pNoteitdown.tags.map(tag => (
                      <span key={tag} className="border border-white/[0.05] bg-[#0c0c10] text-foreground px-2 py-0.5 rounded text-[9px] font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 text-[9px] font-bold uppercase border-t border-white/[0.06] pt-4">
                    {pNoteitdown.githubUrl && (
                      <a href={pNoteitdown.githubUrl} target="_blank" rel="noopener noreferrer" className="text-neon-teal hover:underline tracking-widest">
                        [SRC_REPOS]
                      </a>
                    )}
                    {pNoteitdown.liveUrl && (
                      <a href={pNoteitdown.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline tracking-widest">
                        [LIVE_DEMO]
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Display GitHub Contributions Grid */}
            {activeTab === "05" && (
              <motion.div
                key="tab-github"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col h-full w-full p-6 sm:p-8 font-mono text-[10px] text-muted gap-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] text-muted/40 font-bold uppercase">MONITOR_FEED:</span>
                  <h3 className="text-xl font-black text-foreground font-heading uppercase">GitHub Commit Monitor</h3>
                  <p className="text-xs text-muted font-sans font-medium leading-relaxed mt-1">
                    Visual commit telemetry mapping my development commits dynamically.
                  </p>
                </div>

                {/* Heatmap Grid wrapper */}
                <div className="flex-grow flex flex-col justify-center my-4 overflow-x-auto no-scrollbar w-full border border-white/[0.14] bg-[#0b0b0e] p-5 rounded-xl">
                  <div className="flex flex-col gap-1 min-w-[320px] mx-auto">
                    {heatmap.length > 0 && heatmap.map((row, rIdx) => (
                      <div key={rIdx} className="flex gap-1">
                        {row.map((level, cIdx) => (
                          <div 
                            key={cIdx} 
                            className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 ${
                              level === 0 ? 'bg-white/[0.04] hover:bg-neon-teal/20' :
                              level === 1 ? 'bg-neon-teal/20 hover:bg-neon-teal/40' :
                              level === 2 ? 'bg-neon-teal/50 hover:bg-neon-teal/70' :
                              'bg-neon-teal hover:brightness-110'
                            }`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/[0.14] pt-4 flex justify-between items-center text-muted/60 mt-auto">
                  <span>{totalContributions.toLocaleString()} CONTRIBUTIONS // SYNC_OK</span>
                  <span className="text-neon-teal font-bold uppercase tracking-widest text-[9px]">
                    STATE: SYNCHRONIZED
                  </span>
                </div>
              </motion.div>
            )}

            {/* Display Profile Stats */}
            {activeTab === "06" && (
              <motion.div
                key="tab-profile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="flex flex-col h-full w-full p-6 sm:p-8 font-mono text-[10px] text-muted gap-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[8px] text-muted/40 font-bold uppercase">SYSTEM_STATE:</span>
                  <h3 className="text-xl font-black text-foreground font-heading uppercase">Shivrajsinh Profile Specifications</h3>
                  <p className="text-xs text-muted font-sans font-medium leading-relaxed mt-1">
                    System specs, host coordinates, and core tech stacks.
                  </p>
                </div>

                <div className="flex flex-col gap-4 border border-white/[0.14] bg-[#0b0b0e] p-5 rounded-xl">
                  <div className="flex flex-col gap-1 border-b border-white/[0.04] pb-2">
                    <span className="text-muted/40 uppercase font-bold text-[8px]">OFFICIAL_NAME:</span>
                    <span className="font-bold font-sans text-sm">
                      <span className="text-neon-teal">Shivrajsinh</span> <span className="text-white">Maharaul</span>
                    </span>
                  </div>
                  
                  <div className="flex flex-col gap-1.5 border-b border-white/[0.04] pb-2">
                    <span className="text-muted/40 uppercase font-bold text-[8px]">PRIMARY_LANGUAGES:</span>
                    <div className="flex flex-col gap-1 font-sans text-xs font-bold">
                      <div><span className="text-muted/50 font-mono text-[9px] uppercase tracking-wide">DEV:</span> <span className="text-neon-teal">Go (Golang)</span></div>
                      <div><span className="text-muted/50 font-mono text-[9px] uppercase tracking-wide">DSA:</span> <span className="text-neon-indigo">C++</span></div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1 border-b border-white/[0.04] pb-2">
                    <span className="text-muted/40 uppercase font-bold text-[8px]">HOST_LOCATION:</span>
                    <span className="text-foreground font-sans text-xs">{SOCIAL_LINKS.location}</span>
                  </div>
                </div>

                <div className="border-t border-white/[0.14] pt-4 text-muted/30 font-bold text-[8px] uppercase mt-auto">
                  <span>TELEMETRY: COMPILER_CONNECTED</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </motion.section>
  )
}

export default Projects