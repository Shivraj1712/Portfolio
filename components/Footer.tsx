'use client'

import React, { useRef } from 'react'
import { SOCIAL_LINKS } from '@/data/portfolio'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.from(".footer-bento-anim", {
            opacity: 0,
            y: 20,
            stagger: 0.08,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        })
    }, { scope: footerRef, dependencies: [] })

    return (
        <footer 
            id="footer"
            ref={footerRef} 
            className="w-full max-w-8xl mx-auto px-6 sm:px-8 pb-20 mt-16 scroll-mt-28"
        >
            <div className="footer-bento-anim bg-card border border-border rounded-2xl p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-16 font-mono card-glow-hover shadow-sm">
                <div className="border-b border-border/60 pb-6 flex justify-between items-center">
                    <div>
                        <span className="text-sm text-accent font-bold tracking-widest uppercase">
                            NODE_05 // SYSTEM_DISPATCH
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground uppercase mt-2">
                            Get In Touch
                        </h2>
                    </div>
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-sm items-start">
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <span className="text-accent font-bold tracking-widest text-lg">SHIVRAJ // MAHARAUL</span>
                        <p className="text-sm text-muted max-w-sm font-sans leading-relaxed">
                            Building backend APIs, designing web applications, and hosting services on Vercel and Render. Open to software developer roles, collaborations, and internships.
                        </p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 font-bold tracking-wider text-xs pt-4">
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-muted/40 text-[10px] uppercase">EMAIL_ADDR:</span>
                                    <a 
                                        href="mailto:Shivrajmaharaul688@gmail.com" 
                                        className="text-foreground hover:text-accent transition-colors break-words text-[11px]"
                                    >
                                        SHIVRAJMAHARAUL688@GMAIL.COM
                                    </a>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <span className="text-muted/40 text-[10px] uppercase">CALL_ADDR:</span>
                                    <a 
                                        href="tel:+916355540489" 
                                        className="text-foreground hover:text-accent transition-colors text-[11px]"
                                    >
                                        +91 6355540489
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-muted/40 text-[10px] uppercase">LINKEDIN_ADDR:</span>
                                    <a
                                        href={SOCIAL_LINKS.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground hover:text-accent transition-colors text-[11px]"
                                    >
                                        LINKEDIN
                                    </a>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <span className="text-muted/40 text-[10px] uppercase">GITHUB_ADDR:</span>
                                    <a
                                        href={SOCIAL_LINKS.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground hover:text-accent transition-colors text-[11px]"
                                    >
                                        GITHUB
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <span className="text-muted/40 text-[10px] uppercase">INSTAGRAM_ADDR:</span>
                                    <a
                                        href={SOCIAL_LINKS.instagram}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground hover:text-accent transition-colors text-[11px]"
                                    >
                                        INSTAGRAM
                                    </a>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <span className="text-muted/40 text-[10px] uppercase">X_ADDR:</span>
                                    <a
                                        href={SOCIAL_LINKS.x}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground hover:text-accent transition-colors text-[11px]"
                                    >
                                        TWITTER / X
                                    </a>
                                </div>
                            </div>
                        </div>

                        <span className="text-xs text-accent/50 font-bold mt-8">© 2026 // OPEN SOURCE PIPELINE</span>
                    </div>

                    <div className="lg:col-span-7 flex flex-col gap-8 bg-background border border-border p-6 sm:p-8 rounded-2xl w-full justify-between min-h-[280px]">
                        <div className="flex flex-col gap-5">
                            <div className="border-b border-border/60 pb-3 flex justify-between items-center">
                                <span className="text-xs text-accent font-bold uppercase tracking-wider">BOOK_A_CALL_ROUTER</span>
                                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                            </div>
                            
                            <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight uppercase">
                                Let's Discuss Opportunities
                            </h3>
                            
                            <p className="text-sm text-muted leading-relaxed font-sans">
                                Schedule an interview, ask about my project experiences, or discuss freelance work. Click below to initiate a direct call or connect instantly.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
                            <a 
                                href="tel:+916355540489" 
                                className="flex-1 bg-accent text-background text-xs font-bold tracking-widest py-4.5 rounded-lg hover:bg-accent/80 transition-colors uppercase text-center cursor-pointer"
                            >
                                CALL_NOW: +91 63555 40489
                            </a>
                            
                            <a 
                                href="https://wa.me/916355540489" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex-1 border border-border hover:border-accent hover:text-accent text-foreground text-xs font-bold tracking-widest py-4.5 rounded-lg transition-all uppercase text-center cursor-pointer"
                            >
                                CHAT_ON_WHATSAPP
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer