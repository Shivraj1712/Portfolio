import React from 'react'
import { Separator } from './ui/separator'

const Hero: React.FC = () => {
    return (
        <section className='lg:min-h-screen flex flex-col-reverse md:flex-row items-center justify-around p-4 gap-8 md:gap-12'>
            <div className='flex items-start justify-evenly flex-col p-2 sm:p-5 w-full md:w-1/2 lg:w-[50vw] gap-4'>
                <p className='p-1 text-accent sm:text-sm text-center bg-card border border-accent rounded-lg w-56 sm:w-48'>BACKEND DEVELOPER</p>
                <div className='flex items-start flex-col gap-0'>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-foreground font-heading font-black tracking-tighter leading-[0.9]'>BUILDING</h1>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-accent font-heading font-black tracking-tighter leading-[0.9]'>HIGH</h1>
                    <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-muted font-heading font-black tracking-tighter leading-[0.9]'>PRECISION</h1>
                </div>
                <p className='text-sm sm:text-base text-muted '>Hi, I am Shivrajsinh Maharaul. I design and engineer high-performance backend systems, distributed architectures, and scalable web servers using Go. Focused on code efficiency, database optimization, and architectural clarity.</p>
            </div>
            <div className='flex items-center justify-center w-full md:w-auto p-2 sm:p-5 md:flex-shrink-0'>
                <img src='/profile.jpeg' className='border border-border rounded-full h-28 w-28 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-72 lg:w-72 object-cover shadow-lg' />
            </div>
        </section>
    )
}

export default Hero