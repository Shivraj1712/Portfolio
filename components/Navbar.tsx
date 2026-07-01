'use client'

import React from 'react'
import FloatingNav from '@/components/ui/FloatingNav'

const Navbar: React.FC = () => {
  const navItems = [
    { name: "01 // SKILLS", link: "#skills" },
    { name: "02 // PROJECTS", link: "#projects" },
    { name: "03 // PHILOSOPHY", link: "#philosophy" },
    { name: "04 // CONTACT", link: "#footer" },
  ]

  return (
    <NavbarContainer>
      <FloatingNav navItems={navItems} />
    </NavbarContainer>
  )
}

// Simple layout wrapper for structural rendering if required, or fallback logo
const NavbarContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      {/* Floating menu itself */}
      {children}

      {/* A static header that appears as a subtle branding badge on desktops */}
      <header className="absolute top-0 left-0 w-full z-40 py-6 pointer-events-none">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between font-mono text-[10px] tracking-widest text-muted/50">
          <div className="pointer-events-auto">
            <a href="#" className="font-bold hover:text-neon-teal transition-colors">
              SHIVRAJSINH // SYSTEMS_API_v1.0
            </a>
          </div>
          <div>
            <span>PING_OK: 12ms</span>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar