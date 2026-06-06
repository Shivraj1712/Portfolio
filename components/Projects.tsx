import React from 'react'

export function ProjectCard({ item }: { item: any }) {
    const { id, title, description, liveLink } = item
    return (
        <div key={id} className="bg-card p-4 flex flex-col items-center sm:items-center justify-around text-start text-md border border-border rounded-lg h-64 sm:h-48 w-[80vw] sm:w-[41vw]">
            <div className='flex items-start'>
                <ul className='list-disc text-accent flex items-start'>
                    <li>
                        <span className='text-muted text-lg font-semibold tracking-tight'>
                            {title}
                        </span>
                    </li>
                </ul>
            </div>

            <p className="text-muted text-xs text-center px-4 max-w-sm">
                {description}
            </p>

            <ul className='text-xs flex items-center justify-center gap-3 font-mono'>
                <li>
                    {liveLink === "" ? (
                        <span className='py-1 px-3 text-muted border-muted/30 text-center border bg-card/50'>
                            WORK_IN_PROGRESS
                        </span>
                    ) : (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='py-1 px-3 text-primary border-muted text-center border hover:bg-accent hover:text-background transition-colors'
                        >
                            LIVE_DEMO // open_in_new
                        </a>
                    )}
                </li>
            </ul>
        </div>
    )
}

const Projects: React.FC = () => {
    const items = [
        {
            id: "stockpulse-engine",
            title: "STOCKPULSE ENGINE",
            description: "Market data streaming engine processing multi-exchange order books. Implements advanced noise filtering and predictive caching.",
            liveLink: ""
        },
        {
            id: "spendgrid-ledger",
            title: "SPENDGRID LEDGER",
            description: "Immutable financial ledger system with double-entry validation and distributed transaction management for high-volume payment processing.",
            liveLink: "https://spend-grid-lovat.vercel.app/"
        },
        {
            id: "noteitdown",
            title: "NOTEITDOWN SYSTEM",
            description: "High-performance data log repository architecture engineered for rapid lookups and linear storage optimization operations.",
            liveLink: "https://notetdown-with-nextjs.vercel.app/"
        }
    ];

    return (
        <section className='flex items-center justify-center gap-10 p-5 min-h-[50vh] flex-col bg-background'>
            <div className='flex items-center sm:items-start w-[82vw] justify-around flex-col'>
                <p className='text-accent text-md border border-accent p-1 px-2 font-semibold rounded-lg'>PROJECTS</p>
            </div>
            <div className='flex items-center sm:items-start w-[82vw] justify-around gap-4 flex-col sm:flex-row '>
                {
                    items.map((item) => {
                        return <ProjectCard key={item.id} item={item} />
                    })
                }
            </div>
        </section>
    )
}

export default Projects