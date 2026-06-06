import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer id="footer" className='flex items-center justify-center p-5 bg-background border-t border-border w-full'>
            <div className='flex items-center sm:items-center w-[82vw] justify-between flex-col sm:flex-row gap-4 py-2 font-mono text-[11px] text-muted'>
                <div>
                    <p>© 2026 // SHIVRAJSINH MAHARAUL</p>
                </div>

                <div className='flex items-center gap-6'>
                    <a
                        href="https://www.linkedin.com/in/shivrajsinh-maharaul-677379321/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors"
                    >
                        GITHUB
                    </a>
                    <a
                        href="https://github.com/Shivraj1712/"
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