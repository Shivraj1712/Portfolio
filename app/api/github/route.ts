import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const response = await fetch('https://github.com/users/Shivraj1712/contributions', {
            next: { revalidate: 3600 }
        } as any)
        if (!response.ok) {
            throw new Error('GitHub fetch failed')
        }
        const html = await response.text()
        const regex = /data-level="(\d)".*?data-date="(\d{4}-\d{2}-\d{2})"/g
        const data: { date: string; level: number }[] = []
        let match
        while ((match = regex.exec(html)) !== null) {
            data.push({
                date: match[2],
                level: parseInt(match[1], 10)
            })
        }
        if (data.length === 0) {
            const altRegex = /data-date="(\d{4}-\d{2}-\d{2})".*?data-level="(\d)"/g
            while ((match = altRegex.exec(html)) !== null) {
                data.push({
                    date: match[1],
                    level: parseInt(match[2], 10)
                })
            }
        }
        data.sort((a, b) => a.date.localeCompare(b.date))
        return NextResponse.json(data)
    } catch {
        return NextResponse.json([], { status: 500 })
    }
}
