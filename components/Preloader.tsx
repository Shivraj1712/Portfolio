'use client'

import React, { useEffect, useState, useRef } from 'react'
import { gsap } from '@/lib/gsap'

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const progressBarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual'
        }
        window.scrollTo(0, 0)
        
        const duration = 1500
        const intervalTime = 30
        const step = 100 / (duration / intervalTime)
        
        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + step
                if (next >= 100) {
                    clearInterval(timer)
                    return 100
                }
                return next
            })
        }, intervalTime)

        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        if (progress === 100) {
            gsap.to(containerRef.current, {
                opacity: 0,
                duration: 0.6,
                ease: "power2.out",
                onComplete: onComplete
            })
        }
    }, [progress, onComplete])

    return (
        <div 
            ref={containerRef}
            className="fixed inset-0 z-[9999] bg-[#08080A] flex flex-col items-center justify-center font-mono gap-8 p-6 select-none"
        >
            <div className="flex flex-col items-center gap-4 text-center">
                <span className="text-2xl sm:text-4xl font-black font-heading tracking-widest text-foreground uppercase animate-pulse">
                    SHIVRAJ // SYSTEMS
                </span>
                <span className="text-xs sm:text-sm text-muted font-bold tracking-widest uppercase">
                    BOOTING_SYSTEM_PIPELINE
                </span>
            </div>

            <div className="w-56 sm:w-80 h-1.5 bg-border/40 rounded-full overflow-hidden relative shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <div 
                    ref={progressBarRef}
                    className="h-full bg-accent transition-all duration-75 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
                    style={{ width: `${progress}%` }}
                />
            </div>

            <div className="text-xs sm:text-sm text-accent/90 font-bold uppercase tracking-wider">
                {Math.round(progress)}% LOADED
            </div>
        </div>
    )
}

export default Preloader
