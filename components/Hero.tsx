'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLAnchorElement>(null)
    
    const rateRef = useRef<HTMLSpanElement>(null)
    const latencyRef = useRef<HTMLSpanElement>(null)
    const lossRef = useRef<HTMLSpanElement>(null)

    useGSAP(() => {
        const curtain = document.getElementById("page-curtain")
        if (curtain) {
          curtain.style.transform = "translateY(-100%)"
        }

        const tl = gsap.timeline({ defaults: { ease: "power4.out" } })

        tl.from(".hero-badge", {
            y: 20,
            opacity: 0,
            duration: 0.6,
            delay: 0.2
        })
        .from(".headline-line span", {
            yPercent: 100,
            duration: 0.8,
            stagger: 0.1
        }, "-=0.4")
        .from(".hero-desc", {
            y: 20,
            opacity: 0,
            duration: 0.6
        }, "-=0.5")
        .from(".hero-cta", {
            y: 20,
            opacity: 0,
            duration: 0.6
        }, "-=0.5")
        .from(".hero-visual", {
            scale: 0.95,
            opacity: 0,
            duration: 1
        }, "-=0.8")

        const stats = { rate: 0, latency: 4.85, loss: 10.0 }
        
        gsap.to(stats, {
            rate: 1.48,
            duration: 2.5,
            ease: "power2.out",
            onUpdate: () => {
                if (rateRef.current) rateRef.current.innerText = `${stats.rate.toFixed(2)}M`
            }
        })

        gsap.to(stats, {
            latency: 0.12,
            duration: 2.0,
            ease: "power3.inOut",
            onUpdate: () => {
                if (latencyRef.current) latencyRef.current.innerText = `${stats.latency.toFixed(2)}ms`
            }
        })

        gsap.to(stats, {
            loss: 0.00,
            duration: 1.8,
            ease: "power2.inOut",
            onUpdate: () => {
                if (lossRef.current) lossRef.current.innerText = `${stats.loss.toFixed(2)}%`
            }
        })

        const btn = buttonRef.current
        if (btn) {
            const handleMouseMove = (e: MouseEvent) => {
                const rect = btn.getBoundingClientRect()
                const x = e.clientX - rect.left - rect.width / 2
                const y = e.clientY - rect.top - rect.height / 2
                
                gsap.to(btn, {
                    x: x * 0.35,
                    y: y * 0.35,
                    duration: 0.3,
                    ease: "power2.out"
                })
            }

            const handleMouseLeave = () => {
                gsap.to(btn, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "elastic.out(1, 0.3)"
                })
            }

            btn.addEventListener("mousemove", handleMouseMove)
            btn.addEventListener("mouseleave", handleMouseLeave)

            return () => {
                btn.removeEventListener("mousemove", handleMouseMove)
                btn.removeEventListener("mouseleave", handleMouseLeave)
            }
        }

    }, { scope: containerRef })

    return (
        <section 
            ref={containerRef}
            className='min-h-[calc(100vh-5rem)] max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-16 overflow-hidden'
        >
            <div className='flex flex-col items-start gap-8 w-full md:w-1/2'>
                <div className='hero-badge inline-flex items-center gap-2 px-3 py-1.5 bg-card/60 border border-border/80 rounded-md text-[10px] font-mono tracking-widest text-accent'>
                    <span className='h-2 w-2 rounded-full bg-accent animate-ping' />
                    • SYSTEM_DISPATCHER_ACTIVE
                </div>
                
                <div className='flex flex-col select-none'>
                    <h1 className='headline-line relative overflow-hidden h-[60px] sm:h-[80px] lg:h-[110px] text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-foreground'>
                        <span className="absolute left-0 top-0">BUILDING</span>
                    </h1>
                    <h1 className='headline-line relative overflow-hidden h-[60px] sm:h-[80px] lg:h-[110px] text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-accent'>
                        <span className="absolute left-0 top-0">HIGH</span>
                    </h1>
                    <h1 className='headline-line relative overflow-hidden h-[60px] sm:h-[80px] lg:h-[110px] text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-muted/30'>
                        <span className="absolute left-0 top-0">PRECISION</span>
                    </h1>
                </div>

                <p className='hero-desc text-base sm:text-lg text-muted max-w-xl leading-relaxed'>
                    Hi, I am <strong className="text-foreground font-semibold">Shivrajsinh Maharaul</strong>. I design and engineer high-performance backend systems, distributed architectures, and scalable web servers using Go. Focused on code efficiency, database optimization, and architectural clarity.
                </p>

                <div className='hero-cta'>
                    <a 
                        ref={buttonRef}
                        href="#projects" 
                        className='relative inline-flex items-center gap-3 bg-accent text-background font-mono text-xs font-bold tracking-widest px-8 py-4 rounded-sm hover:scale-[1.02] shadow-[0_0_20px_var(--glow-cyan)] hover:shadow-[0_0_35px_var(--cyan-accent)] transition-all duration-300 uppercase'
                    >
                        EXPLORE_WORKS
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className='hero-visual w-full md:w-1/2 flex justify-center items-center'>
                <div className='relative w-full max-w-lg aspect-[4/3] rounded-xl border border-border bg-card/20 overflow-hidden p-6 flex flex-col justify-between font-mono text-[10px] text-muted terminal-screen shadow-[inset_0_0_40px_rgba(0,0,0,0.6)]'>
                    <div className='flex items-center justify-between border-b border-border/40 pb-3'>
                        <span className='text-accent font-bold'>[SYS_MONITOR // DISPATCHER]</span>
                        <div className="flex items-center gap-1.5">
                            <span className="text-accent/60">LATENCY:</span>
                            <span ref={latencyRef} className="text-foreground font-bold">4.85ms</span>
                        </div>
                    </div>

                    <div className='flex-grow flex items-center justify-center py-4'>
                        <svg viewBox="0 0 400 200" className="w-full h-full text-accent/80">
                            <rect x="20" y="70" width="80" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-90" />
                            <text x="60" y="105" fill="currentColor" textAnchor="middle" className="text-[9px] font-bold tracking-wider">PRODUCER</text>
                            
                            <rect x="160" y="60" width="80" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <text x="200" y="105" fill="currentColor" textAnchor="middle" className="text-[9px] font-bold tracking-wider">BROKER</text>
                            
                            <line x1="160" y1="80" x2="240" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-40" />
                            <line x1="160" y1="120" x2="240" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-40" />
                            
                            <rect x="300" y="70" width="80" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-90" />
                            <text x="340" y="105" fill="currentColor" textAnchor="middle" className="text-[9px] font-bold tracking-wider">CONSUMER</text>

                            <path id="path1" d="M 100,100 L 160,100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-accent/40" />
                            <path id="path2" d="M 240,100 L 300,100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-accent/40" />

                            <circle r="3.5" fill="currentColor" className="text-accent shadow-[0_0_10px_var(--cyan-accent)]">
                                <animateMotion dur="2.2s" repeatCount="indefinite" path="M 100,100 L 160,100" />
                            </circle>
                            <circle r="3.5" fill="currentColor" opacity="0.6">
                                <animateMotion dur="2.2s" begin="0.7s" repeatCount="indefinite" path="M 100,100 L 160,100" />
                            </circle>
                            <circle r="3.5" fill="currentColor" opacity="0.3">
                                <animateMotion dur="2.2s" begin="1.4s" repeatCount="indefinite" path="M 100,100 L 160,100" />
                            </circle>

                            <circle r="3.5" fill="currentColor" className="text-accent shadow-[0_0_10px_var(--cyan-accent)]">
                                <animateMotion dur="1.8s" repeatCount="indefinite" path="M 240,100 L 300,100" />
                            </circle>
                            <circle r="3.5" fill="currentColor" opacity="0.5">
                                <animateMotion dur="1.8s" begin="0.9s" repeatCount="indefinite" path="M 240,100 L 300,100" />
                            </circle>
                        </svg>
                    </div>

                    <div className='border-t border-border/40 pt-3 flex justify-between text-[9px] font-bold'>
                        <span className="flex items-center gap-1">STATUS: <span className="text-accent">ACTIVE</span></span>
                        <span className="flex items-center gap-1">RATE: <span ref={rateRef} className="text-foreground">0.00M</span></span>
                        <span className="flex items-center gap-1">LOSS: <span ref={lossRef} className="text-foreground">10.00%</span></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero