'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { SOCIAL_LINKS } from '@/data/portfolio'

// Inline SVG Icon components to ensure compile compatibility across all platforms
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const TwitterXIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
)

const Footer: React.FC = () => {
  return (
    <motion.footer 
      id="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-8xl mx-auto px-6 sm:px-8 pb-20 mt-16 scroll-mt-28"
    >
      <div className="glass-panel p-6 sm:p-10 lg:p-12 flex flex-col justify-between gap-16 font-mono text-[10px] text-muted hover:border-neon-teal/10 transition-colors duration-300 shadow-sm relative group">
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/0 to-neon-indigo/0 group-hover:from-neon-teal/[0.005] group-hover:to-neon-indigo/[0.005] rounded-2xl transition-all duration-500 pointer-events-none" />

        {/* Top Header */}
        <div className="border-b border-white/[0.04] pb-6 flex justify-between items-center relative z-10">
          <div>
            <span className="text-[9px] text-neon-teal font-bold tracking-widest uppercase">
              NODE_05 // SYSTEM_DISPATCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-foreground uppercase mt-2">
              Initialize Contact
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-emerald-400 font-bold uppercase tracking-widest animate-pulse">
              SECURE_ONLINE
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          </div>
        </div>

        {/* Connections Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-sm items-start relative z-10">
          
          {/* Left Panel: Address Metadata & Links */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="font-black tracking-widest text-lg">
              <span className="text-neon-teal">SHIVRAJSINH</span> <span className="text-muted/40">//</span> <span className="text-white">MAHARAUL</span>
            </span>
            
            <p className="text-sm font-sans text-muted leading-relaxed font-medium max-w-sm">
              Available for software engineering roles, core backend projects, and architectural collaborations. 
              Let's connect to build decoupled API pipelines and optimize database query endpoints.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 font-bold tracking-wider text-xs pt-4 font-mono">
              
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-muted/40 text-[8px] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <MailIcon className="text-neon-teal w-3.5 h-3.5" /> EMAIL_ADDR:
                  </span>
                  <a 
                    href={`mailto:${SOCIAL_LINKS.email}`} 
                    className="text-foreground hover:text-neon-teal transition-colors break-all text-[10px]"
                  >
                    {SOCIAL_LINKS.email.toUpperCase()}
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-muted/40 text-[8px] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <PhoneIcon className="text-neon-teal w-3.5 h-3.5" /> CALL_ADDR:
                  </span>
                  <a 
                    href={`tel:${SOCIAL_LINKS.phone}`} 
                    className="text-foreground hover:text-neon-teal transition-colors text-[10px]"
                  >
                    {SOCIAL_LINKS.phone}
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-muted/40 text-[8px] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <LinkedinIcon className="text-neon-teal w-3.5 h-3.5" /> LINKEDIN:
                  </span>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-neon-teal transition-colors text-[10px]"
                  >
                    LINKEDIN PROFILE
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-muted/40 text-[8px] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <GithubIcon className="text-neon-teal w-3.5 h-3.5" /> GITHUB:
                  </span>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-neon-teal transition-colors text-[10px]"
                  >
                    GITHUB REPOS
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-muted/40 text-[8px] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <InstagramIcon className="text-neon-teal w-3.5 h-3.5" /> INSTAGRAM:
                  </span>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-neon-teal transition-colors text-[10px]"
                  >
                    INSTAGRAM FEED
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-muted/40 text-[8px] uppercase tracking-widest flex items-center gap-1.5 font-bold">
                    <TwitterXIcon className="text-neon-teal w-3.5 h-3.5" /> X_TWITTER:
                  </span>
                  <a
                    href={SOCIAL_LINKS.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-neon-teal transition-colors text-[10px]"
                  >
                    TWITTER_X
                  </a>
                </div>
              </div>

            </div>

            <div className="text-[9px] text-muted/30 font-bold mt-8">
              © {new Date().getFullYear()} // PORTFOLIO_SECURE_INGRESS
            </div>
          </div>

          {/* Right Panel: Ingress Call to Action Router */}
          <div className="lg:col-span-7 flex flex-col gap-8 bg-black/30 border border-white/[0.04] p-6 sm:p-8 rounded-2xl w-full justify-between min-h-[300px] hover:border-neon-teal/10 transition-colors duration-300">
            <div className="flex flex-col gap-5">
              <div className="border-b border-white/[0.04] pb-3 flex justify-between items-center text-[9px]">
                <span className="text-neon-teal font-bold uppercase tracking-widest font-mono">COMMUNICATION_INGRESS_ROUTER</span>
                <span className="text-muted/40 font-mono">LOCATION: {SOCIAL_LINKS.location.toUpperCase()}</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-foreground tracking-tight uppercase font-heading">
                Let's Discuss Opportunities
              </h3>
              
              <p className="text-sm font-sans text-muted leading-relaxed font-medium">
                Schedule a backend review, code interview, or discuss project architecture deployment. 
                Initiate a direct call or open a secure chat on WhatsApp below.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full pt-4">
              <a 
                href={`tel:${SOCIAL_LINKS.phone}`} 
                className="flex-1 bg-neon-teal text-background text-[10px] font-bold tracking-widest py-4 rounded-lg hover:bg-neon-teal/90 transition-all uppercase text-center cursor-pointer shadow-[0_4px_14px_rgba(116,255,165,0.15)] hover:shadow-[0_4px_20px_rgba(116,255,165,0.3)] hover:-translate-y-[1px]"
              >
                CALL_DIRECT: {SOCIAL_LINKS.phone}
              </a>
              
              <a 
                href={SOCIAL_LINKS.whatsapp} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 border border-white/[0.08] hover:border-neon-teal hover:text-neon-teal text-foreground text-[10px] font-bold tracking-widest py-4 rounded-lg transition-all uppercase text-center cursor-pointer hover:bg-neon-teal/[0.02]"
              >
                CHAT_ON_WHATSAPP
              </a>
            </div>
          </div>

        </div>
      </div>
    </motion.footer>
  )
}

export default Footer