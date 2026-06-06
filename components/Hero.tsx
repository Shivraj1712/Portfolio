'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } })
        tl.from(".hero-bento-anim", {
            opacity: 0,
            y: 40,
            duration: 1,
            stagger: 0.15
        })
    }, { scope: containerRef, dependencies: [] })

    return (
        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full pt-4">
            <div className="hero-bento-anim lg:col-span-2 bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between gap-8 sm:gap-10 min-h-[380px] sm:min-h-[420px] lg:min-h-[440px] card-glow-hover">
                <div className="flex flex-col gap-5 sm:gap-6 items-start w-full">
                    <div className="px-3 py-1 bg-background border border-border text-xs font-mono tracking-widest text-accent flex items-center gap-2 font-bold rounded-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                        NODE_01 // INGEST
                    </div>

                    <div className="flex flex-col font-heading leading-none gap-2 sm:gap-3 w-full overflow-hidden">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400 uppercase break-words w-full">
                            SHIVRAJSINH
                        </h1>
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-accent uppercase break-words w-full">
                            MAHARAUL
                        </h1>
                        <span className="text-xs sm:text-sm text-muted font-bold tracking-widest mt-2 sm:mt-3 font-mono">
                            &gt;&gt; BACKEND DEVELOPER & TECH ENTHUSIAST
                        </span>
                    </div>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted max-w-3xl leading-relaxed font-sans">
                        Developing backend APIs, designing responsive frontend dashboards, and deploying web applications to cloud platforms like Vercel and Render. Passionate about database performance, routing systems, and clean code.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4 font-mono text-xs font-bold tracking-wider">
                    <a 
                        href="#projects" 
                        className="bg-accent text-background px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:bg-accent/80 transition-colors text-center w-full sm:w-auto"
                    >
                        VIEW_PROJECTS
                    </a>
                    <a 
                        href="#footer" 
                        className="border border-border text-foreground px-8 sm:px-10 py-3.5 sm:py-4 rounded-lg hover:border-accent hover:text-accent transition-all text-center w-full sm:w-auto"
                    >
                        GET_IN_TOUCH
                    </a>
                </div>
            </div>

            <div className="hero-bento-anim lg:col-span-1 bg-card border border-border rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between font-mono text-xs text-muted terminal-screen card-glow-hover min-h-[320px] sm:min-h-[420px] lg:min-h-[440px]">
                <div className="flex justify-between items-center border-b border-border pb-4">
                    <span className="text-accent font-bold">MONITOR:01_INGESTION</span>
                    <span className="text-foreground">PING: 0.12ms</span>
                </div>
                
                <div className="flex-grow flex items-center justify-center my-6">
                    <svg viewBox="0 0 300 150" className="w-full h-auto max-w-[240px] lg:max-w-none text-accent">
                        <circle cx="50" cy="75" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <text x="50" y="80" textAnchor="middle" fill="currentColor" className="text-[10px] font-bold">IN</text>
                        
                        <rect x="120" y="50" width="60" height="50" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <text x="150" y="80" textAnchor="middle" fill="currentColor" className="text-[10px] font-bold">CORE</text>
                        
                        <circle cx="250" cy="75" r="15" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        <text x="250" y="80" textAnchor="middle" fill="currentColor" className="text-[10px] font-bold">OUT</text>

                        <line x1="65" y1="75" x2="120" y2="75" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                        <line x1="180" y1="75" x2="235" y2="75" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />

                        <circle r="3" fill="currentColor">
                            <animateMotion dur="2s" repeatCount="indefinite" path="M 65,75 L 120,75" />
                        </circle>
                        <circle r="3" fill="currentColor">
                            <animateMotion dur="1.5s" repeatCount="indefinite" path="M 180,75 L 235,75" />
                        </circle>
                    </svg>
                </div>

                <div className="border-t border-border pt-4 flex justify-between">
                    <span>BUFFERS: SECURED</span>
                    <span className="text-accent font-bold">RATE: 1.48M/s</span>
                </div>
            </div>
        </div>
    )
}

export default Hero