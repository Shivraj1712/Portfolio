'use client'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'

const Navbar: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <header className='sticky top-0 z-[1000] w-full border-b border-border bg-background/80 backdrop-blur-md'>
            <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <a href="#" className='font-mono text-sm tracking-widest text-accent font-bold hover:opacity-80 transition-opacity'>
                        SHIVRAJ // P.01
                    </a>
                </div>
                
                <nav className='hidden md:flex items-center gap-8 font-mono text-xs tracking-wider'>
                    <a href="#projects" className='text-muted hover:text-foreground transition-colors'>PROJECTS</a>
                    <a href="#philosophy" className='text-muted hover:text-foreground transition-colors'>PHILOSOPHY</a>
                    <a href="#footer" className='text-muted hover:text-foreground transition-colors'>CONTACT</a>
                    <a href="#terminal" className='border border-accent/30 text-accent px-3 py-1 rounded hover:bg-accent hover:text-accent-foreground transition-all duration-200'>
                        TERMINAL
                    </a>
                </nav>

                <div className='md:hidden'>
                    <button onClick={() => setMenuOpen(!isMenuOpen)} className='focus:outline-none' aria-label='Toggle Menu'>
                        {isMenuOpen ? <X className='text-accent' size="20" /> : <Menu size="20" className='text-accent' />}
                    </button>
                </div>
            </div>
            
            {isMenuOpen && (
                <div className='md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-4 font-mono text-xs tracking-wider'>
                    <a href="#projects" onClick={() => setMenuOpen(false)} className='text-muted hover:text-foreground py-2 border-b border-border/50'>PROJECTS</a>
                    <a href="#philosophy" onClick={() => setMenuOpen(false)} className='text-muted hover:text-foreground py-2 border-b border-border/50'>PHILOSOPHY</a>
                    <a href="#footer" onClick={() => setMenuOpen(false)} className='text-muted hover:text-foreground py-2 border-b border-border/50'>CONTACT</a>
                    <a href="#terminal" onClick={() => setMenuOpen(false)} className='text-accent py-2 border-b border-border/50'>TERMINAL</a>
                </div>
            )}
        </header>
    )
}

export default Navbar