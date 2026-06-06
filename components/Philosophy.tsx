'use client'

import React, { useRef } from 'react'
import { PHILOSOPHY_PRINCIPLES } from '@/data/portfolio'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const Philosophy: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".phil-bento-anim", {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        })
    }, { scope: containerRef, dependencies: [] })

    return (
        <section 
            id="philosophy"
            ref={containerRef} 
            className="flex flex-col gap-10 w-full scroll-mt-28"
        >
            <div className="border-b border-border pb-4">
                <span className="font-mono text-sm text-accent tracking-widest uppercase font-bold">
                    NODE_04 // CORE_PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tighter text-foreground uppercase mt-2">
                    Architectural Directives
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                <div className="phil-bento-anim lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {PHILOSOPHY_PRINCIPLES.map((principle) => (
                        <div 
                            key={principle.title}
                            className="bg-card border border-border p-6 sm:p-8 rounded-2xl flex flex-col justify-between h-56 sm:h-64 font-mono card-glow-hover shadow-sm"
                        >
                            <div className="flex justify-between items-start">
                                <h4 className="text-sm font-bold text-foreground uppercase">
                                    {principle.title}
                                </h4>
                                <span className="text-xs text-accent border border-accent/20 bg-accent/5 px-2.5 py-1.5 rounded font-bold">
                                    {principle.iconCode}
                                </span>
                            </div>
                            <p className="text-xs sm:text-sm text-muted leading-relaxed font-sans">
                                {principle.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="phil-bento-anim lg:col-span-1 bg-card border border-border p-6 sm:p-8 rounded-2xl flex flex-col justify-center min-h-[200px] sm:min-h-[256px] font-mono text-sm sm:text-base text-foreground italic leading-relaxed card-glow-hover shadow-sm border-l-4 border-l-accent">
                    "Minimize third-party dependencies, structure code around data layouts, and maintain explicit transaction bounds across all service instances."
                </div>

            </div>
        </section>
    )
}

export default Philosophy
