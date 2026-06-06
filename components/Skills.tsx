'use client'

import React, { useRef } from 'react'
import { LANGUAGES_DATA, INFRASTRUCTURE_DATA } from '@/data/portfolio'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const Skills: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".skills-header", {
            opacity: 0,
            x: -20,
            duration: 0.8,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none none"
            }
        })

        gsap.from(".skill-card", {
            opacity: 0,
            y: 30,
            stagger: 0.05,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                toggleActions: "play none none none"
            }
        })
    }, { scope: sectionRef })

    return (
        <section 
            id="skills" 
            ref={sectionRef}
            className='max-w-7xl mx-auto px-6 py-20 flex flex-col gap-10 border-t border-border/40'
        >
            <div className='skills-header border-b border-border/40 pb-4'>
                <p className='font-mono text-xs text-accent tracking-widest uppercase'>02 // TECH_STACK</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className="bg-card/30 border border-border/80 rounded-xl p-6 flex flex-col gap-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]">
                    <div className='flex items-center gap-2 border-b border-border/40 pb-3'>
                        <span className='h-1.5 w-1.5 rounded-full bg-accent animate-pulse' />
                        <h3 className='font-mono text-xs tracking-widest text-foreground font-bold'>LANGUAGES</h3>
                    </div>
                    
                    <div className='grid grid-cols-2 gap-3'>
                        {LANGUAGES_DATA.map((lang) => (
                            <div 
                                key={lang.name} 
                                className='skill-card bg-background/40 border border-border/60 hover:border-accent/40 hover:bg-background/80 transition-all duration-300 p-4 rounded-md h-20 flex flex-col justify-between font-mono card-glow-hover'
                            >
                                <span className='text-xs text-foreground font-bold tracking-wider'>{lang.name}</span>
                                <span className='text-[9px] text-accent/60 font-semibold'>{lang.code}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-card/30 border border-border/80 rounded-xl p-6 flex flex-col gap-6 shadow-[inset_0_0_20px_rgba(0,0,0,0.2)]">
                    <div className='flex items-center gap-2 border-b border-border/40 pb-3'>
                        <span className='h-1.5 w-1.5 rounded-full bg-accent animate-pulse' />
                        <h3 className='font-mono text-xs tracking-widest text-foreground font-bold'>INFRASTRUCTURE</h3>
                    </div>
                    
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                        {INFRASTRUCTURE_DATA.map((infra) => (
                            <div 
                                key={infra.name} 
                                className='skill-card bg-background/40 border border-border/60 hover:border-accent/40 hover:bg-background/80 transition-all duration-300 p-4 rounded-md h-20 flex flex-col justify-between font-mono card-glow-hover'
                            >
                                <span className='text-[10px] text-foreground font-bold leading-tight tracking-wider'>{infra.name}</span>
                                <span className='text-[9px] text-accent/60 font-semibold'>{infra.code}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills