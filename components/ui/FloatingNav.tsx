'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface NavItem {
  name: string
  link: string
  icon?: React.ReactNode
}

interface FloatingNavProps {
  navItems: NavItem[]
  className?: string
}

export const FloatingNav: React.FC<FloatingNavProps> = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    // Set initial scroll value
    setLastScrollY(window.scrollY)
  }, [])

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!
      
      // Calculate current scroll position in pixels
      const currentScrollY = window.scrollY

      // If scrolling up, show navbar
      if (direction < 0) {
        setVisible(true)
      } 
      // If scrolling down and past initial threshold, hide navbar
      else if (direction > 0 && currentScrollY > 100) {
        setVisible(false)
      }

      setLastScrollY(currentScrollY)
    }
  })

  // Smooth scroll handler for anchor links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('#')) {
      e.preventDefault()
      const targetId = link.substring(1)
      const element = document.getElementById(targetId)
      if (!element) return

      const scrollOffset = 120 // Spacing from top of viewport to prevent any overlap
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - scrollOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-6 inset-x-0 mx-auto border border-white/[0.12] bg-black/60 backdrop-blur-xl rounded-full shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_10px_30px_rgba(0,0,0,0.5)] z-[5000] px-4 sm:px-8 py-2.5 sm:py-3.5 items-center justify-center space-x-3.5 sm:space-x-8",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <a
            key={`link-${idx}`}
            href={navItem.link}
            onClick={(e) => handleLinkClick(e, navItem.link)}
            className="relative text-muted hover:text-neon-teal font-mono text-[9.5px] sm:text-[11px] font-bold tracking-wider transition-colors duration-200 flex items-center gap-1"
          >
            {navItem.icon && <span className="text-[12px] sm:text-[14px]">{navItem.icon}</span>}
            <span className="hidden sm:inline">{navItem.name}</span>
            <span className="sm:hidden">{navItem.name.replace(/^\d+\s*\/\/\s*/, '')}</span>
          </a>
        ))}
        
        <a
          href="#footer"
          onClick={(e) => handleLinkClick(e, '#footer')}
          className="border border-neon-teal/40 bg-neon-teal/5 text-neon-teal hover:bg-neon-teal hover:text-background px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-mono text-[9.5px] sm:text-[11px] font-bold tracking-wider transition-all duration-300 shadow-[0_0_10px_rgba(116,255,165,0.05)] hover:shadow-[0_0_15px_rgba(116,255,165,0.2)] shrink-0"
        >
          HIRE_ME
        </a>
      </motion.div>
    </AnimatePresence>
  )
}

export default FloatingNav
