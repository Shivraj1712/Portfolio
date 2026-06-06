'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import { useActiveSection } from '@/lib/hooks'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/lib/gsap'

const Navbar: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false)
    const headerRef = useRef<HTMLElement>(null)
    
    const activeSection = useActiveSection(['projects', 'philosophy', 'skills', 'footer'], 120)

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 30)
      }
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useGSAP(() => {
      const tl = gsap.timeline()
      tl.from(headerRef.current, {
        yPercent: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(".nav-anim-item", {
        y: -10,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3")
    }, { scope: headerRef })

    return (
        <header 
            ref={headerRef}
            className={`sticky top-0 z-[1000] w-full border-b transition-all duration-300 ${
              isScrolled 
                ? 'border-border bg-background/85 backdrop-blur-md py-3' 
                : 'border-transparent bg-transparent py-5'
            }`}
        >
            <div className='max-w-7xl mx-auto px-6 flex items-center justify-between'>
                <div className='flex items-center gap-2 nav-anim-item'>
                    <a href="#" className='font-mono text-base tracking-widest text-accent font-bold hover:opacity-80 transition-opacity'>
                        SHIVRAJ // P.01
                    </a>
                </div>
                
                <nav className='hidden md:flex items-center gap-8 font-mono text-xs tracking-wider'>
                    {[
                      { label: 'PROJECTS', id: 'projects' },
                      { label: 'PHILOSOPHY', id: 'philosophy' },
                      { label: 'TECH_STACK', id: 'skills' },
                      { label: 'CONTACT', id: 'footer' }
                    ].map((item) => (
                      <a 
                        key={item.id}
                        href={`#${item.id}`} 
                        className={`nav-anim-item relative py-1 hover:text-foreground transition-colors duration-300 ${
                          activeSection === item.id ? 'text-accent font-semibold' : 'text-muted'
                        }`}
                      >
                        {item.label}
                        {activeSection === item.id && (
                          <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent origin-left transition-transform duration-300 scale-x-100" />
                        )}
                      </a>
                    ))}
                    
                    <a 
                      href="#footer" 
                      className='nav-anim-item border border-accent/30 text-accent px-4 py-1.5 rounded-sm hover:bg-accent hover:text-background font-bold tracking-widest transition-all duration-300'
                    >
                      HIRE_ME
                    </a>
                  </nav>

                <div className='md:hidden nav-anim-item'>
                    <button onClick={() => setMenuOpen(!isMenuOpen)} className='focus:outline-none cursor-pointer' aria-label='Toggle Menu'>
                        {isMenuOpen ? <X className='text-accent' size="20" /> : <Menu size="20" className='text-accent' />}
                    </button>
                </div>
            </div>
            
            {isMenuOpen && (
                <div className='md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-4 font-mono text-xs tracking-wider animate-[fadeIn_0.2s_ease-out]'>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className={`py-2 border-b border-border/50 ${activeSection === 'projects' ? 'text-accent' : 'text-muted'}`}>PROJECTS</a>
                    <a href="#philosophy" onClick={() => setMenuOpen(false)} className={`py-2 border-b border-border/50 ${activeSection === 'philosophy' ? 'text-accent' : 'text-muted'}`}>PHILOSOPHY</a>
                    <a href="#skills" onClick={() => setMenuOpen(false)} className={`py-2 border-b border-border/50 ${activeSection === 'skills' ? 'text-accent' : 'text-muted'}`}>TECH_STACK</a>
                    <a href="#footer" onClick={() => setMenuOpen(false)} className={`py-2 border-b border-border/50 ${activeSection === 'footer' ? 'text-accent' : 'text-muted'}`}>CONTACT</a>
                </div>
            )}
        </header>
    )
}

export default Navbar