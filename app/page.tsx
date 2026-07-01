'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Philosophy from "@/components/Philosophy"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"
import BackgroundGrid from "@/components/ui/BackgroundGrid"
import TracingBeam from "@/components/ui/TracingBeam"

export default function Home() {
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <AnimatePresence>
                {!isLoaded && (
                    <Preloader key="preloader" onComplete={() => setIsLoaded(true)} />
                )}
            </AnimatePresence>
            
            <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <BackgroundGrid type="dot" className="min-h-screen">
                    <Navbar />
                    
                    <TracingBeam className="pt-28 pb-32 px-6 sm:px-12 md:pl-28">
                        <div className="w-full flex flex-col gap-32 max-w-5xl mx-auto">
                            <Hero />
                            <Skills />
                            <Projects />
                            <Philosophy />
                        </div>
                    </TracingBeam>
                    
                    <Footer />
                </BackgroundGrid>
            </div>
        </>
    )
}
