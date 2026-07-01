'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardHoverEffectProps {
  items: any[]
  className?: string
  renderCard: (item: any, idx: number) => React.ReactNode
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } 
  }
}

export const CardHoverEffect: React.FC<CardHoverEffectProps> = ({
  items,
  className,
  renderCard,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.05 }}
      className={cn("grid grid-cols-1 md:grid-cols-2 gap-4 py-2", className)}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          variants={itemVariants}
          whileHover={{ scale: 1.015, rotateX: 1.8, rotateY: -1.8 }}
          style={{ transformStyle: "preserve-3d" as any, perspective: "1000px" as any }}
          className="relative group block p-2 h-full w-full cursor-pointer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neon-teal/[0.04] border border-neon-teal/20 block rounded-2xl shadow-[0_0_20px_rgba(116,255,165,0.03)]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.18, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.05, ease: "easeIn" },
                }}
              />
            )}
          </AnimatePresence>
          
          <div className="relative z-20 h-full w-full">
            {renderCard(item, idx)}
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default CardHoverEffect
