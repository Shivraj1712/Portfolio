'use client'

import React, { useRef } from 'react'
import { SOCIAL_LINKS } from '@/data/portfolio'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from(".footer-item", {
            opacity: 0,
            y: 15,
            stagger: 0.08,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        })
    }, { scope: footerRef })

    return (
        <footer 
            id="footer" 
            ref={footerRef}
            className='w-full border-t border-border/40 bg-background/50 py-12'
        >
            <div className='max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 font-mono text-[10px] text-muted'>
                
                <div className='footer-item flex flex-col gap-2'>
                    <span className='text-accent font-bold tracking-widest text-xs'>SHIVRAJ // MAHARAUL</span>
                    <span className="text-muted/80">© 2026 // DESIGNED FOR PERFORMANCE. BUILT FOR SCALE.</span>
                    <span className="text-[9px] text-accent/50">STATUS: AVAILABLE FOR CONTRACTS</span>
                </div>

                <div className='footer-item flex flex-col sm:flex-row gap-8 text-[11px] font-bold tracking-wider'>
                    <div className='flex flex-col gap-1.5'>
                        <span className="text-muted/40 font-mono text-[9px]">ENQUIRIES:</span>
                        <a 
                            href="mailto:Shivrajmaharaul688@gmail.com" 
                            className="text-foreground hover:text-accent transition-colors"
                        >
                            SHIVRAJMAHARAUL688@GMAIL.COM
                        </a>
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <span className="text-muted/40 font-mono text-[9px]">NETWORKS:</span>
                        <div className="flex gap-6">
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-accent transition-colors"
                            >
                                GITHUB
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground hover:text-accent transition-colors"
                            >
                                LINKEDIN
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer