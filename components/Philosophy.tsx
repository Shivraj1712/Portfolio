'use client'

import React, { useRef } from 'react'
import { MARQUEE_ITEMS, PHILOSOPHY_PRINCIPLES } from '@/data/portfolio'
import { useGSAP } from '@gsap/react'
import { gsap, ScrollTrigger } from '@/lib/gsap'

const Philosophy: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const marqueeRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const marquee = marqueeRef.current
        if (marquee) {
            const width = marquee.scrollWidth / 2
            
            gsap.to(marquee, {
                x: -width,
                ease: "none",
                duration: 18,
                repeat: -1
            })
        }

        gsap.from(".phil-header", {
            opacity: 0,
            y: 20,
            duration: 0.8,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
            }
        })

        gsap.from(".phil-card", {
            opacity: 0,
            y: 40,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".phil-cards-container",
                start: "top 75%",
                toggleActions: "play none none none"
            }
        })

        gsap.from(".phil-quote", {
            opacity: 0,
            scale: 0.98,
            duration: 1.2,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".phil-quote",
                start: "top 80%",
                toggleActions: "play none none none"
            }
        })

    }, { scope: containerRef })

    return (
        <section 
            id="philosophy" 
            ref={containerRef}
            className='w-full py-20 flex flex-col gap-12 border-t border-border/40 overflow-hidden bg-background/25'
        >
            <div className='max-w-7xl mx-auto px-6 w-full flex flex-col gap-4 phil-header'>
                <p className='font-mono text-xs text-accent tracking-widest uppercase'>03 // CORE_PHILOSOPHY</p>
                <h2 className='text-3xl sm:text-4xl font-black font-heading tracking-tighter text-foreground'>
                    ARCHITECTURE OVER AD-HOC
                </h2>
                <p className='text-sm sm:text-base text-muted max-w-2xl leading-relaxed'>
                    A rigorous and highly structured approach to software construction where latency boundaries are guarded, memory allocations minimized, and API layouts contract-driven.
                </p>
            </div>

            <div className="w-full bg-card/40 border-y border-border/60 py-4 flex overflow-hidden whitespace-nowrap relative select-none">
                <div 
                    ref={marqueeRef}
                    className="flex gap-12 text-[10px] font-mono font-bold tracking-widest text-accent/80 uppercase"
                >
                    {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
                        <div key={idx} className="flex items-center gap-12">
                            <span>{item}</span>
                            <span className="text-muted/30">//</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full phil-cards-container">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {PHILOSOPHY_PRINCIPLES.map((principle) => (
                        <div 
                            key={principle.title}
                            className='phil-card bg-card/20 border border-border/80 p-6 rounded-xl flex flex-col justify-between gap-4 card-glow-hover shadow-sm'
                        >
                            <div className="flex justify-between items-start">
                                <h4 className='font-heading text-lg font-black tracking-tight text-foreground'>
                                    {principle.title}
                                </h4>
                                <span className='font-mono text-[9px] text-accent/60 bg-accent/5 px-2 py-0.5 border border-accent/20 rounded-md font-bold'>
                                    {principle.iconCode}
                                </span>
                            </div>
                            <p className='text-xs text-muted leading-relaxed'>
                                {principle.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full mt-6">
                <div className="phil-quote bg-card/10 border-l-2 border-accent p-8 md:p-10 rounded-r-xl max-w-4xl shadow-sm">
                    <p className="text-base sm:text-lg italic text-foreground leading-relaxed font-mono">
                        "Premature optimization may be the root of all evil, but poor systems architecture guarantees it. Make it correct, make it clean, and size your pipelines for linear growth."
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Philosophy
