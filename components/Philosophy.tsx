import React from 'react'

const Philosophy: React.FC = () => {
    return (
        <section id="philosophy" className='max-w-7xl mx-auto px-6 py-16 flex flex-col gap-6 border-t border-border/40'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-3xl md:text-4xl font-black font-heading tracking-tighter text-foreground border-b-2 border-accent pb-2 w-max'>
                    CORE PHILOSOPHY
                </h2>
                <p className='text-base md:text-lg text-muted max-w-2xl leading-relaxed'>
                    A rigorous approach to software construction where every byte and cycle is accounted for.
                </p>
            </div>
        </section>
    )
}

export default Philosophy

