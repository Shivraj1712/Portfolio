'use client'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import { Separator } from './ui/separator'

const Navbar: React.FC = () => {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)

    return (
        <header>
            <div className='sticky insect z-[1000] flex items-center justify-around flex-col px-4 w-full py-1 bg-card text-foreground'>
                <div className='flex items-center justify-between md:justify-around w-full md:min-w-[70vw]'>
                    <div className='flex items-center justify-around gap-4 p-3'>
                        <h1 className='text-accent text-xl md:text-2xl lg:text-3xl font-bold'>Shivrajsinh Maharaul</h1>
                    </div>
                    <div className='hidden md:flex items-center justify-around gap-8 text-muted text-sm font-semibold tracking-wider'>
                        <a href="#skills" className='hover:text-accent transition duration-200'>SKILLS</a>
                        <a href="#projects" className='hover:text-accent transition duration-200'>PROJECTS</a>
                        <a href="#footer" className='hover:text-accent transition duration-200'>CONTACT</a>
                    </div>
                    <div className='md:hidden'>
                        <button onClick={() => setMenuOpen(!isMenuOpen)} className='focus:outline-none' aria-label='Toggle Menu'>
                            {isMenuOpen ? <X className='text-accent' size="24" /> : <Menu size="24" className='text-accent' />}
                        </button>
                    </div>
                </div>
                <Separator />
                {isMenuOpen &&
                    <div className='w-full md:hidden flex flex-col gap-2 p-3 text-start'>
                        <a href="#skills" onClick={() => setMenuOpen(false)} className='text-muted hover:text-accent transition duration-200 text-sm font-semibold tracking-wider py-1.5'>SKILLS</a>
                        <Separator />
                        <a href="#projects" onClick={() => setMenuOpen(false)} className='text-muted hover:text-accent transition duration-200 text-sm font-semibold tracking-wider py-1.5'>PROJECTS</a>
                        <Separator />
                        <a href="#footer" onClick={() => setMenuOpen(false)} className='text-muted hover:text-accent transition duration-200 text-sm font-semibold tracking-wider py-1.5'>CONTACT</a>
                        <Separator />
                    </div>
                }
            </div>
        </header>
    )
}

export default Navbar