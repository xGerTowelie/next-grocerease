'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function Breadcrumb() {
    const pathname = usePathname()
    const paths = pathname.split('/').filter(Boolean)

    return (
        <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
                <li>
                    <Link href="/" className="text-muted-foreground hover:text-foreground">
                        Home
                    </Link>
                </li>
                {paths.map((path, index) => {
                    const href = `/${paths.slice(0, index + 1).join('/')}`
                    const isLast = index === paths.length - 1
                    return (
                        <li key={path} className="flex items-center">
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                            {isLast ? (
                                <span className="ml-2 font-medium">{path}</span>
                            ) : (
                                <Link href={href} className="ml-2 text-muted-foreground hover:text-foreground">
                                    {path}
                                </Link>
                            )}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}


