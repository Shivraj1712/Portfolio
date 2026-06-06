import React from 'react'

const Skills: React.FC = () => {
    const languages = [
        { name: 'C++', code: '01' },
        { name: 'GOLANG', code: '02' },
        { name: 'TYPESCRIPT', code: '03' },
        { name: 'JAVASCRIPT', code: '04' }
    ]

    const infrastructure = [
        { name: 'FIBER_V2', code: '01' },
        { name: 'RENDER', code: '02' },
        { name: 'GORM POSTGRESQL', code: '03' },
        { name: 'NEXTJS', code: '04' },
        { name: 'VERCEL', code: '05' }
    ]

    return (
        <section id="skills" className='max-w-7xl mx-auto px-6 py-16 flex flex-col gap-8'>
            <div className='border-b border-border/60 pb-4'>
                <p className='font-mono text-xs text-accent tracking-widest'>02 // TECH_STACK</p>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className="bg-card/40 border border-border rounded-xl p-6 flex flex-col gap-6">
                    <div className='flex items-center gap-2 border-b border-border/40 pb-3'>
                        <span className='h-1.5 w-1.5 rounded-full bg-accent' />
                        <h3 className='font-mono text-xs tracking-widest text-foreground font-bold'>LANGUAGES</h3>
                    </div>
                    
                    <div className='grid grid-cols-2 gap-3'>
                        {languages.map((lang) => (
                            <div key={lang.name} className='bg-background/50 border border-border/80 hover:border-accent/40 hover:bg-background/80 transition-all duration-200 p-4 rounded-md h-20 flex flex-col justify-between font-mono'>
                                <span className='text-xs text-foreground font-bold'>{lang.name}</span>
                                <span className='text-[9px] text-muted/60'>{lang.code}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-card/40 border border-border rounded-xl p-6 flex flex-col gap-6">
                    <div className='flex items-center gap-2 border-b border-border/40 pb-3'>
                        <span className='h-1.5 w-1.5 rounded-full bg-accent' />
                        <h3 className='font-mono text-xs tracking-widest text-foreground font-bold'>INFRASTRUCTURE</h3>
                    </div>
                    
                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                        {infrastructure.map((infra) => (
                            <div key={infra.name} className='bg-background/50 border border-border/80 hover:border-accent/40 hover:bg-background/80 transition-all duration-200 p-4 rounded-md h-20 flex flex-col justify-between font-mono'>
                                <span className='text-[10px] text-foreground font-bold leading-tight'>{infra.name}</span>
                                <span className='text-[9px] text-muted/60'>{infra.code}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills