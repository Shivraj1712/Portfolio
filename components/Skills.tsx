'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  LANGUAGES_DATA, 
  FRAMEWORKS_DATA, 
  DATABASES_DATA, 
  CLOUD_AUTH_DATA 
} from '@/data/portfolio'
import { CardHoverEffect } from '@/components/ui/CardHoverEffect'

const Skills: React.FC = () => {
  const stackLayers = [
    {
      id: "LAYER_01",
      title: "Core Logic & Runtimes",
      loadPrefix: "LANG_0",
      data: LANGUAGES_DATA,
      description: "Compiled languages used to construct thread-safe routines and data processing engines.",
    },
    {
      id: "LAYER_02",
      title: "Routing & Frameworks",
      loadPrefix: "FRAME_0",
      data: FRAMEWORKS_DATA,
      description: "Web microframeworks deployed to map secure, lightweight REST routers.",
    },
    {
      id: "LAYER_03",
      title: "Databases & Caching",
      loadPrefix: "DB_0",
      data: DATABASES_DATA,
      description: "Structured storage engines and quick memory cache pools managed via ORMs.",
    },
    {
      id: "LAYER_04",
      title: "Deployment & Auth",
      loadPrefix: "SYS_0",
      data: CLOUD_AUTH_DATA,
      description: "Containerized environments and verification keys ensuring system integrity.",
    },
  ]

  const renderSkillCard = (item: any, loadPrefix: string) => (
    <div 
      className="bg-[#0b0b0e] border border-white/[0.1] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)] p-4 rounded-xl flex flex-col justify-between font-mono h-20 group-hover/card:border-neon-teal/20 transition-all duration-300 w-full"
    >
      <span className="text-[11px] text-foreground font-black tracking-wider uppercase">
        {item.name}
      </span>
      <span className="text-[8px] text-neon-teal/40 font-bold tracking-widest font-mono uppercase">
        {loadPrefix}{item.code}
      </span>
    </div>
  )

  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-10 w-full scroll-mt-28"
    >
      {/* Title */}
      <div className="border-b border-border/80 pb-4">
        <span className="font-mono text-[10px] text-neon-teal tracking-widest uppercase font-bold">
          NODE_02 // STACK_COMPILATION
        </span>
        <h2 className="text-3xl sm:text-4xl font-black font-heading tracking-tighter text-foreground uppercase mt-2">
          Architecture Layer Stack
        </h2>
      </div>

      {/* Vertical Stack Layers */}
      <div className="flex flex-col gap-8 w-full">
        {stackLayers.map((layer, idx) => (
          <motion.div
            key={layer.id}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center hover:border-neon-teal/10 transition-colors duration-300 relative group"
          >
            {/* Left side detail details */}
            <div className="lg:col-span-4 flex flex-col gap-2 relative z-10 border-l border-white/[0.08] pl-4 lg:border-l-0 lg:pl-0">
              <span className="text-[9px] text-neon-teal font-bold font-mono tracking-widest uppercase">
                {layer.id} // SECURE_SPEC
              </span>
              <h3 className="text-lg sm:text-xl font-black text-foreground tracking-tight uppercase font-heading group-hover:text-neon-teal transition-colors">
                {layer.title}
              </h3>
              <p className="text-xs text-muted font-sans font-medium leading-relaxed max-w-sm mt-1">
                {layer.description}
              </p>
            </div>

            {/* Right side interactive grid panel */}
            <div className="lg:col-span-8 relative z-10">
              <CardHoverEffect
                items={layer.data}
                className="grid grid-cols-2 sm:grid-cols-3 gap-2 py-0"
                renderCard={(item) => renderSkillCard(item, layer.loadPrefix)}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Skills