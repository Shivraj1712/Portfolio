import React from 'react'

const Skills: React.FC = () => {
    return (
        <section id="skills" className='flex items-center justify-center gap-10 p-5 min-h-[80vh] flex-col bg-card'>
            <div className='flex items-center md:items-start w-[82vw] justify-around flex-col'>
                <p className='text-accent text-md border border-accent p-1 px-2 font-semibold rounded-lg'>TECH STACK</p>
            </div>
            <div className='flex items-center md:items-start w-[82vw] justify-around gap-4 flex-col md:flex-row'>
                <div className="bg-background p-2 flex flex-col items-center md:items-center justify-around text-start text-md border border-border rounded-lg h-64 sm:h-48 w-[80vw] md:w-[41vw]">
                    <div className='flex items-start'>
                        <ul className='list-disc text-accent flex items-start'>
                            <li> <span className='text-muted text-lg'>LANGUAGES</span></li>
                        </ul>
                    </div>
                    <ul className='text-xs flex items-start md:items-center justify-around flex-col sm:flex-row gap-3'>
                        <li className='py-1 px-3 text-primary border-muted text-center border'>C++</li>
                        <li className='py-1 px-3 text-primary border-muted text-center border'>GOLANG</li>
                        <li className='py-1 px-3 text-primary border-muted text-center border'>TYPESCRIPT</li>
                        <li className='py-1 px-3 text-primary border-muted text-center border'>JAVASCRIPT</li>
                    </ul>
                </div>
                <div className="bg-background p-2 flex items-center justify-around flex-col text-start text-md border border-border rounded-lg h-64 sm:h-48 w-[80vw] md:w-[41vw]">
                    <div className='flex items-start'>
                        <ul className='list-disc text-accent flex items-start'>
                            <li> <span className='text-muted text-lg'>INFRASTRUCTURE</span></li>
                        </ul>
                    </div>
                    <ul className='text-xs flex items-center justify-around flex-col sm:flex-row gap-3'>
                        <li className='py-1 px-3 text-primary border-muted text-center border'>FIBER_V2</li>
                        <li className='py-1 px-3 text-primary border-muted text-center border'>RENDER</li>
                        <li className='py-1 px-3 text-primary border-muted text-center border'>GORM POSTGRESQL</li>
                        <li className='py-1 px-3 text-primary border-muted text-center border'>NEXTJS</li>
                        <li className='py-1 px-3 text-primary border-muted text-center border'>VERCEL</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills