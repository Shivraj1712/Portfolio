'use client'

import React, { useState, useEffect } from 'react'
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Philosophy from "@/components/Philosophy"
import Footer from "@/components/Footer"
import Preloader from "@/components/Preloader"

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
            {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}
            
            <div className={`transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <Navbar />
                <div className="w-full flex flex-col gap-24 pt-20 pb-36 max-w-8xl mx-auto px-8">
                    <Hero />
                    <Skills />
                    <Projects />
                    <Philosophy />
                </div>
                <Footer />
            </div>
        </>
    )
}
