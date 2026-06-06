import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer id="footer" className='w-full border-t border-border/40 bg-background py-8'>
            <div className='max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-[10px] text-muted'>
                <div className='flex flex-col gap-1'>
                    <span className='text-accent font-bold'>SHIVRAJ</span>
                    <span>© 2026 // DESIGNED FOR PERFORMANCE. BUILT FOR SCALE.</span>
                </div>

                <div className='flex items-center gap-6 text-[11px]'>
                    <a
                        href="https://github.com/Shivraj1712/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                    >
                        GITHUB
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shivrajsinh-maharaul-677379321/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                    >
                        LINKEDIN
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer