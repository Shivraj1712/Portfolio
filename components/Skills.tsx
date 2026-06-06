'use client'

import React, { useRef } from 'react'
import { LANGUAGES_DATA, INFRASTRUCTURE_DATA } from '@/data/portfolio'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const Skills: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".skills-bento-anim", {
            opacity: 0,
            y: 30,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        })
    }, { scope: sectionRef, dependencies: [] })

    return (
        <section 
            id="skills"
            ref={sectionRef} 
            className="flex flex-col gap-10 w-full scroll-mt-28"
        >
            <div className="border-b border-border pb-4">
                <span className="font-mono text-sm text-accent tracking-widest uppercase font-bold">
                    NODE_02 // SYSTEM_COMPILATION
                </span>
                <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tighter text-foreground uppercase mt-2">
                    Tech Stack Specification
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="skills-bento-anim bg-card border border-border rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col gap-10 card-glow-hover shadow-sm">
                    <div className="flex items-center gap-2 border-b border-border pb-4 font-mono">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        <h3 className="text-sm tracking-widest text-foreground font-bold uppercase">01 // LANGUAGES</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {LANGUAGES_DATA.map((lang) => (
                            <div 
                                key={lang.name} 
                                className="bg-background border border-border p-6 rounded-xl flex flex-col justify-between font-mono h-24 card-glow-hover"
                            >
                                <span className="text-base text-foreground font-bold tracking-wider">{lang.name}</span>
                                <span className="text-xs text-accent/50 font-bold">LOAD_CODE_{lang.code}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-bento-anim bg-card border border-border rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col gap-10 card-glow-hover shadow-sm">
                    <div className="flex items-center gap-2 border-b border-border pb-4 font-mono">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                        <h3 className="text-sm tracking-widest text-foreground font-bold uppercase">02 // INFRASTRUCTURE</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {INFRASTRUCTURE_DATA.map((infra) => (
                            <div 
                                key={infra.name} 
                                className="bg-background border border-border p-6 rounded-xl flex flex-col justify-between font-mono h-24 card-glow-hover"
                            >
                                <span className="text-sm text-foreground font-bold tracking-wider">{infra.name}</span>
                                <span className="text-xs text-accent/50 font-bold">DISP_ADDR_{infra.code}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills