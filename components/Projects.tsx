'use client'

import React, { useRef } from 'react'
import { PROJECTS_DATA } from '@/data/portfolio'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const Projects: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".projects-header", {
            opacity: 0,
            x: -20,
            duration: 0.8,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        })

        const cards = gsap.utils.toArray<HTMLElement>(".project-card")
        cards.forEach((card, index) => {
            const direction = index % 2 === 0 ? -60 : 60
            gsap.from(card, {
                opacity: 0,
                x: direction,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    toggleActions: "play none none none"
                }
            })
        })
    }, { scope: containerRef })

    return (
        <section 
            id='projects' 
            ref={containerRef}
            className='max-w-7xl mx-auto px-6 py-20 flex flex-col gap-10'
        >
            <div className='projects-header border-b border-border/40 pb-4'>
                <p className='font-mono text-xs text-accent tracking-widest uppercase'>01 // SELECTED_WORKS</p>
            </div>

            <div className='flex flex-col gap-10'>
                {PROJECTS_DATA.map((project, index) => {
                    const isEven = index % 2 === 0
                    
                    return (
                        <div 
                            key={project.id}
                            className={`project-card bg-card/20 border border-border/80 rounded-xl overflow-hidden flex flex-col ${
                              isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                            } h-auto md:h-80 hover:border-accent/40 card-glow-hover shadow-md`}
                        >
                            <div className='p-8 flex flex-col justify-between flex-grow md:w-3/5 gap-6'>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-wrap gap-4 font-mono text-[10px] text-muted'>
                                        {project.tags.map((tag, tIdx) => (
                                            <div key={tag} className='flex flex-col'>
                                                <span className="font-bold tracking-wider">{tag}</span>
                                                <span className='text-accent/60'>0{tIdx + 1}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <h3 className='text-2xl font-black font-heading text-foreground tracking-tight'>
                                        {project.title}
                                    </h3>
                                    <p className='text-sm text-muted max-w-xl leading-relaxed'>
                                        {project.description}
                                    </p>
                                </div>

                                <div className='flex gap-6 font-mono text-[10px] tracking-wider uppercase font-bold'>
                                    {project.wip ? (
                                        <div className="flex flex-col gap-2 w-full max-w-[240px]">
                                            <div className="flex justify-between items-center text-amber-500">
                                                <span>SYSTEM_BUILD // WIP</span>
                                                <span>{project.progress}%</span>
                                            </div>
                                            <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-amber-500 transition-all duration-1000"
                                                    style={{ width: `${project.progress}%` }}
                                                />
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {project.githubUrl && (
                                                <a 
                                                    href={project.githubUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className='text-accent hover:underline flex items-center gap-1.5'
                                                >
                                                    SOURCE_CODE // OPEN
                                                </a>
                                            )}
                                            {project.liveUrl && (
                                                <a 
                                                    href={project.liveUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    className='text-foreground hover:underline'
                                                >
                                                    LIVE_DEMO
                                                </a>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className={`bg-card/40 border-t md:border-t-0 ${
                              isEven ? 'md:border-l' : 'md:border-r'
                            } border-border/40 md:w-2/5 flex items-center justify-center p-8 min-h-[180px] md:min-h-0 relative select-none overflow-hidden`}>
                                
                                {project.id === "01" && (
                                    <div className='flex items-end gap-3 h-20 w-52 opacity-80'>
                                        <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out] h-[35%]' />
                                        <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out_200ms] h-[65%]' />
                                        <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out_400ms] h-[45%]' />
                                        <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out_600ms] h-[80%]' />
                                        <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out_800ms] h-[95%]' />
                                    </div>
                                )}

                                {project.id === "02" && (
                                    <div className='border border-dashed border-accent/20 rounded-lg p-6 flex flex-col items-center justify-center gap-2 w-52 text-[10px] font-mono text-accent/60 bg-background/20'>
                                        <svg className="w-8 h-8 text-accent/80 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                        </svg>
                                        <span className="font-bold">LEDGER // SECURED</span>
                                    </div>
                                )}

                                {project.id === "03" && (
                                    <>
                                        <span className='text-8xl font-black text-muted/5 font-mono tracking-tighter'>ND</span>
                                        <span className='absolute bottom-4 right-4 font-mono text-[9px] text-muted/30'>VERSION_1.0.0</span>
                                    </>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects