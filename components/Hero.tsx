import React from 'react'

const Hero: React.FC = () => {
    return (
        <section className='min-h-[calc(100vh-4rem)] max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12'>
            <div className='flex flex-col items-start gap-6 w-full md:w-1/2'>
                <div className='inline-flex items-center gap-2 px-3 py-1.5 bg-card/50 border border-border rounded-md text-xs font-mono tracking-widest text-accent'>
                    <span className='h-2 w-2 rounded-md bg-accent animate-ping' />
                    • BACKEND_DEVELOPER
                </div>
                
                <div className='flex flex-col'>
                    <h1 className='text-5xl sm:text-6xl lg:text-[5.5rem] font-heading font-black tracking-tighter leading-[0.95] text-foreground'>
                        BUILDING
                    </h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-[5.5rem] font-heading font-black tracking-tighter leading-[0.95] text-accent'>
                        HIGH
                    </h1>
                    <h1 className='text-5xl sm:text-6xl lg:text-[5.5rem] font-heading font-black tracking-tighter leading-[0.95] text-muted/30'>
                        PRECISION
                    </h1>
                </div>

                <p className='text-sm sm:text-base text-muted max-w-xl leading-relaxed'>
                    Engineering distributed systems, message queuing, and low-latency architectural patterns. Defined by performance, scalability, and deterministic reliability.
                </p>

                <a 
                    href="#projects" 
                    className='inline-flex items-center gap-3 bg-accent text-background font-mono text-xs font-bold tracking-widest px-6 py-3.5 rounded-sm hover:bg-accent/90 transition-colors uppercase'
                >
                    EXPLORE_PROJECTS
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </a>
            </div>

            <div className='w-full md:w-1/2 flex justify-center items-center'>
                <div className='relative w-full max-w-lg aspect-[4/3] rounded-xl border border-border bg-card/30 overflow-hidden p-6 flex flex-col justify-between font-mono text-[10px] text-muted'>
                    <div className='flex items-center justify-between border-b border-border/40 pb-3'>
                        <span className='text-accent'>[SYS_MONITOR // DISPATCHER]</span>
                        <span className='text-accent/60'>LATENCY: 0.12ms</span>
                    </div>

                    <div className='flex-grow flex items-center justify-center py-4'>
                        <svg viewBox="0 0 400 200" className="w-full h-full text-accent/80">
                            <rect x="20" y="70" width="80" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <text x="60" y="105" fill="currentColor" textAnchor="middle" className="text-[9px] font-bold">PRODUCER</text>
                            
                            <rect x="160" y="60" width="80" height="80" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <text x="200" y="105" fill="currentColor" textAnchor="middle" className="text-[9px] font-bold">BROKER</text>
                            
                            <line x1="160" y1="80" x2="240" y2="80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            <line x1="160" y1="120" x2="240" y2="120" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                            
                            <rect x="300" y="70" width="80" height="60" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                            <text x="340" y="105" fill="currentColor" textAnchor="middle" className="text-[9px] font-bold">CONSUMER</text>

                            <path id="path1" d="M 100,100 L 160,100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                            <path id="path2" d="M 240,100 L 300,100" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />

                            <circle r="3.5" fill="currentColor">
                                <animateMotion dur="2.5s" repeatCount="indefinite" path="M 100,100 L 160,100" />
                            </circle>
                            <circle r="3.5" fill="currentColor" opacity="0.6">
                                <animateMotion dur="2.5s" begin="0.8s" repeatCount="indefinite" path="M 100,100 L 160,100" />
                            </circle>
                            <circle r="3.5" fill="currentColor" opacity="0.3">
                                <animateMotion dur="2.5s" begin="1.6s" repeatCount="indefinite" path="M 100,100 L 160,100" />
                            </circle>

                            <circle r="3.5" fill="currentColor">
                                <animateMotion dur="2s" repeatCount="indefinite" path="M 240,100 L 300,100" />
                            </circle>
                            <circle r="3.5" fill="currentColor" opacity="0.5">
                                <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M 240,100 L 300,100" />
                            </circle>
                        </svg>
                    </div>

                    <div className='border-t border-border/40 pt-3 flex justify-between text-[9px]'>
                        <span>STATUS: ACTIVE</span>
                        <span>RATE: 1.48M TPS</span>
                        <span>LOSS: 0.00%</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero