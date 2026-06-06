'use client'

import React, { useRef, useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const Navbar: React.FC = () => {
    const navbarRef = useRef<HTMLElement>(null)

    useGSAP(() => {
        gsap.from(navbarRef.current, {
            y: -20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
    }, { scope: navbarRef, dependencies: [] })

    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const anchor = target.closest('a')
            if (!anchor) return
            
            const href = anchor.getAttribute('href')
            if (href && href.startsWith('#') && href.length > 1) {
                e.preventDefault()
                const targetId = href.substring(1)
                const element = document.getElementById(targetId)
                if (!element) return
                
                const navbarHeight = 80
                const targetHeight = element.getBoundingClientRect().height
                const viewportHeight = window.innerHeight
                
                let scrollPosition = 0
                if (targetHeight < (viewportHeight - navbarHeight)) {
                    const offset = (viewportHeight - navbarHeight - targetHeight) / 2
                    scrollPosition = window.scrollY + element.getBoundingClientRect().top - navbarHeight - offset
                } else {
                    scrollPosition = window.scrollY + element.getBoundingClientRect().top - navbarHeight
                }
                
                window.scrollTo({
                    top: scrollPosition,
                    behavior: 'smooth'
                })
            }
        }
        document.addEventListener('click', handleAnchorClick)
        return () => document.removeEventListener('click', handleAnchorClick)
    }, [])

    return (
        <header 
            ref={navbarRef}
            className="fixed top-0 left-0 w-full z-[1000] border-b border-border bg-background/80 backdrop-blur-md py-5"
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between font-mono text-xs tracking-wider">
                <div>
                    <a href="#" className="font-bold text-foreground hover:text-accent text-sm">
                        SHIVRAJ // SYSTEMS
                    </a>
                </div>
                
                <nav className="hidden md:flex items-center gap-8 text-muted font-bold">
                    <a href="#skills" className="hover:text-accent transition-colors">01 // SKILLS</a>
                    <a href="#projects" className="hover:text-accent transition-colors">02 // PROJECTS</a>
                    <a href="#philosophy" className="hover:text-accent transition-colors">03 // PHILOSOPHY</a>
                    <a href="#footer" className="hover:text-accent transition-colors">04 // CONTACT</a>
                </nav>

                <div>
                    <a 
                      href="#footer" 
                      className="border border-accent text-accent px-5 py-2 rounded-md hover:bg-accent hover:text-background font-bold transition-all duration-300 text-xs tracking-widest"
                    >
                      HIRE_ME
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar