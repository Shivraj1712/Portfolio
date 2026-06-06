'use client'

import React, { useRef, useState, useEffect } from 'react'
import { PROJECTS_DATA } from '@/data/portfolio'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

interface ContributionDay {
    date: string;
    level: number;
}

const Projects: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [heatmap, setHeatmap] = useState<number[][]>([])
    const [totalContributions, setTotalContributions] = useState<number>(3142)

    useGSAP(() => {
        gsap.from(".project-bento-anim", {
            opacity: 0,
            y: 40,
            stagger: 0.12,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        })
    }, { scope: containerRef, dependencies: [] })

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

    const pStockPulse = PROJECTS_DATA.find(p => p.id === "01")
    const pSpendGrid = PROJECTS_DATA.find(p => p.id === "02")
    const pNoteItDown = PROJECTS_DATA.find(p => p.id === "03")

    return (
        <section 
            id="projects"
            ref={containerRef} 
            className="flex flex-col gap-10 w-full scroll-mt-28"
        >
            <div className="border-b border-border pb-4">
                <span className="font-mono text-sm text-accent tracking-widest uppercase font-bold">
                    NODE_03 // SYSTEM_EXECUTION
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tighter text-foreground uppercase mt-2">
                    Production Core Pipelines
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                
                {pSpendGrid && (
                    <div className="project-bento-anim lg:col-span-2 bg-card border border-border rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] hover:border-accent/40 card-glow-hover font-mono shadow-sm">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-center text-xs text-muted">
                                <span>SYSTEM_ID: #{pSpendGrid.id}</span>
                                <span className="text-accent font-bold">ACTIVE_STATE</span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight uppercase">
                                {pSpendGrid.title}
                            </h3>

                            <p className="text-sm sm:text-base text-muted leading-relaxed font-sans max-w-2xl">
                                {pSpendGrid.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap gap-2 text-xs text-accent">
                                {pSpendGrid.tags.map((tag) => (
                                    <span key={tag} className="border border-accent/20 bg-accent/5 px-2.5 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-border pt-5 text-xs font-bold">
                                <div className="flex gap-6">
                                    {pSpendGrid.githubUrl && (
                                        <a href={pSpendGrid.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                            SRC_REPOS
                                        </a>
                                    )}
                                    {pSpendGrid.liveUrl && (
                                        <a href={pSpendGrid.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
                                            LIVE_DEMO
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {pStockPulse && (
                    <div className="project-bento-anim lg:col-span-1 bg-card border border-border rounded-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[380px] sm:min-h-[420px] hover:border-accent/40 card-glow-hover font-mono shadow-sm">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-center text-xs text-muted">
                                <span>SYSTEM_ID: #{pStockPulse.id}</span>
                                <span className="text-amber-500 font-bold">WIP</span>
                            </div>

                            <h3 className="text-2xl font-black text-foreground tracking-tight uppercase">
                                {pStockPulse.title}
                            </h3>

                            <p className="text-sm text-muted leading-relaxed font-sans">
                                {pStockPulse.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap gap-2 text-xs text-accent">
                                {pStockPulse.tags.map((tag) => (
                                    <span key={tag} className="border border-accent/20 bg-accent/5 px-2.5 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-border pt-5 text-xs font-bold">
                                <div className="flex flex-col gap-2.5 w-full">
                                    <div className="flex justify-between text-accent">
                                        <span>BUILDING_STATE</span>
                                        <span>{pStockPulse.progress}%</span>
                                    </div>
                                    <div className="w-full h-1 bg-background border border-border rounded-full overflow-hidden">
                                        <div 
                                            className="h-full bg-accent transition-all duration-1000"
                                            style={{ width: `${pStockPulse.progress}%` }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {pNoteItDown && (
                    <div className="project-bento-anim lg:col-span-1 bg-card border border-border rounded-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] hover:border-accent/40 card-glow-hover font-mono shadow-sm">
                        <div className="flex flex-col gap-6">
                            <div className="flex justify-between items-center text-xs text-muted">
                                <span>SYSTEM_ID: #{pNoteItDown.id}</span>
                                <span className="text-accent font-bold">ACTIVE_STATE</span>
                            </div>

                            <h3 className="text-2xl font-black text-foreground tracking-tight uppercase">
                                {pNoteItDown.title}
                            </h3>

                            <p className="text-sm text-muted leading-relaxed font-sans">
                                {pNoteItDown.description}
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex flex-wrap gap-2 text-xs text-accent">
                                {pNoteItDown.tags.map((tag) => (
                                    <span key={tag} className="border border-accent/20 bg-accent/5 px-2.5 py-0.5 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="border-t border-border pt-5 text-xs font-bold">
                                <div className="flex gap-6">
                                    {pNoteItDown.githubUrl && (
                                        <a href={pNoteItDown.githubUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                                            SRC_REPOS
                                        </a>
                                    )}
                                    {pNoteItDown.liveUrl && (
                                        <a href={pNoteItDown.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">
                                            LIVE_DEMO
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="project-bento-anim lg:col-span-2 bg-card border border-border rounded-2xl p-6 sm:p-10 flex flex-col justify-between min-h-[320px] sm:min-h-[360px] card-glow-hover font-mono shadow-sm">
                    <div className="flex justify-between items-center border-b border-border pb-4">
                        <span className="text-accent font-bold text-xs">MONITOR:02_CONTRIBUTION_DYNAMICS</span>
                        <span className="text-xs text-muted">GITHUB INTEGRATION FEED</span>
                    </div>

                    <div className="flex-grow flex flex-col justify-center my-6 overflow-x-auto no-scrollbar w-full">
                        <div className="flex flex-col gap-1 min-w-[320px]">
                            {heatmap.length > 0 && heatmap.map((row, rIdx) => (
                                <div key={rIdx} className="flex gap-1">
                                    {row.map((level, cIdx) => (
                                        <div 
                                            key={cIdx} 
                                            className={`w-3.5 h-3.5 rounded-sm transition-all duration-300 ${
                                                level === 0 ? 'bg-border/60 hover:bg-accent/20' :
                                                level === 1 ? 'bg-accent/30 hover:bg-accent/50' :
                                                level === 2 ? 'bg-accent/60 hover:bg-accent/80' :
                                                'bg-accent hover:brightness-110'
                                            }`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t border-border pt-4 flex justify-between text-xs text-muted">
                        <span>{totalContributions.toLocaleString()} CONTRIBUTIONS // LIVE_FEED</span>
                        <span className="text-accent font-bold">STATE: SYNCHRONIZED</span>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects