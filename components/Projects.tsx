import React from 'react'

const Projects: React.FC = () => {
    return (
        <section id='projects' className='max-w-7xl mx-auto px-6 py-16 flex flex-col gap-8'>
            <div className='border-b border-border/60 pb-4'>
                <p className='font-mono text-xs text-accent tracking-widest'>03 // SELECTED_WORKS</p>
            </div>

            <div className='flex flex-col gap-10'>
                <div className='bg-card/30 border border-border rounded-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-72 hover:border-accent/30 transition-colors duration-300'>
                    <div className='p-8 flex flex-col justify-between flex-grow md:w-3/5 gap-6'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-6 font-mono text-[10px] text-muted'>
                                <div className='flex flex-col'>
                                    <span>NEXTJS</span>
                                    <span className='text-accent/60'>01</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>REACT</span>
                                    <span className='text-accent/60'>02</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>TAILWIND</span>
                                    <span className='text-accent/60'>03</span>
                                </div>
                            </div>
                            
                            <h3 className='text-2xl font-bold text-foreground'>Noteitdown System</h3>
                            <p className='text-sm text-muted max-w-xl leading-relaxed'>
                                High-performance data log repository architecture engineered for rapid lookups and linear storage optimization operations.
                            </p>
                        </div>

                        <div className='flex gap-6 font-mono text-xs'>
                            <a href="https://github.com/Shivraj1712/notetdown-with-nextjs" target="_blank" rel="noopener noreferrer" className='text-accent hover:underline flex items-center gap-1'>
                                SOURCE_CODE // open_in_new
                            </a>
                            <a href="https://notetdown-with-nextjs.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-foreground hover:underline'>
                                LIVE_DEMO
                            </a>
                        </div>
                    </div>
                    
                    <div className='bg-card/50 border-t md:border-t-0 md:border-l border-border/40 md:w-2/5 flex items-center justify-center relative min-h-[160px] md:min-h-0 select-none'>
                        <span className='text-7xl md:text-8xl font-black text-muted/5 font-mono tracking-tighter'>ND</span>
                        <span className='absolute bottom-4 right-4 font-mono text-[9px] text-muted/40'>VERSION_1.0.0</span>
                    </div>
                </div>

                <div className='bg-card/30 border border-border rounded-xl overflow-hidden flex flex-col-reverse md:flex-row h-auto md:h-72 hover:border-accent/30 transition-colors duration-300'>
                    <div className='bg-card/50 border-b md:border-b-0 md:border-r border-border/40 md:w-2/5 flex items-center justify-center p-8 min-h-[160px] md:min-h-0'>
                        <div className='flex items-end gap-2.5 h-20 w-48'>
                            <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out] h-[30%]' />
                            <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out_200ms] h-[50%]' />
                            <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out_400ms] h-[40%]' />
                            <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out_600ms] h-[75%]' />
                            <div className='w-full bg-accent rounded-sm animate-[pulse_1.5s_infinite_ease-in-out_800ms] h-[95%]' />
                        </div>
                    </div>
                    
                    <div className='p-8 flex flex-col justify-between flex-grow md:w-3/5 gap-6'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-6 font-mono text-[10px] text-muted'>
                                <div className='flex flex-col'>
                                    <span>GOLANG</span>
                                    <span className='text-accent/60'>01</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>WEBSOCKETS</span>
                                    <span className='text-accent/60'>02</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>REDIS</span>
                                    <span className='text-accent/60'>03</span>
                                </div>
                            </div>

                            <h3 className='text-2xl font-bold text-foreground'>StockPulse Engine</h3>
                            <p className='text-sm text-muted max-w-xl leading-relaxed'>
                                Real-time market data streaming engine processing multi-exchange order books. Implements advanced noise filtering and predictive caching.
                            </p>
                        </div>

                        <div className='flex gap-6 font-mono text-xs'>
                            <a href="https://github.com/Shivraj1712/" target="_blank" rel="noopener noreferrer" className='text-accent hover:underline flex items-center gap-1'>
                                SOURCE_CODE // open_in_new
                            </a>
                            <span className='text-muted/50 cursor-not-allowed'>
                                WORK_IN_PROGRESS
                            </span>
                        </div>
                    </div>
                </div>

                <div className='bg-card/30 border border-border rounded-xl overflow-hidden flex flex-col md:flex-row h-auto md:h-72 hover:border-accent/30 transition-colors duration-300'>
                    <div className='p-8 flex flex-col justify-between flex-grow md:w-3/5 gap-6'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-6 font-mono text-[10px] text-muted'>
                                <div className='flex flex-col'>
                                    <span>GORM</span>
                                    <span className='text-accent/60'>01</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>POSTGRES</span>
                                    <span className='text-accent/60'>02</span>
                                </div>
                                <div className='flex flex-col'>
                                    <span>RENDER</span>
                                    <span className='text-accent/60'>03</span>
                                </div>
                            </div>

                            <h3 className='text-2xl font-bold text-foreground'>SpendGrid Ledger</h3>
                            <p className='text-sm text-muted max-w-xl leading-relaxed'>
                                Immutable financial ledger system with double-entry validation and distributed transaction management for high-volume payment processing.
                            </p>
                        </div>

                        <div className='flex gap-6 font-mono text-xs'>
                            <a href="https://github.com/Shivraj1712/SpendGrid" target="_blank" rel="noopener noreferrer" className='text-accent hover:underline flex items-center gap-1'>
                                SOURCE_CODE // open_in_new
                            </a>
                            <a href="https://spend-grid-lovat.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-foreground hover:underline'>
                                LIVE_DEMO
                            </a>
                        </div>
                    </div>
                    
                    <div className='bg-card/50 border-t md:border-t-0 md:border-l border-border/40 md:w-2/5 flex items-center justify-center p-8 min-h-[160px] md:min-h-0 relative'>
                        <div className='border border-dashed border-accent/30 rounded-lg p-6 flex flex-col items-center justify-center gap-2 w-52 text-[10px] font-mono text-accent/60'>
                            <svg className="w-8 h-8 text-accent/80 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <span>LEDGER // SECURE</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects