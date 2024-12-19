'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User } from '@/lib/supabase/complex_types'
import { signOut } from '@/lib/auth-helpers/client'
import { routes, sidebarCollapseBuffer } from '@/constants'
import { LogOut } from 'lucide-react'
import clsx from 'clsx'


export function Sidebar({ user }: { user: User }) {
    const pathname = usePathname()
    const [isCollapsed, setIsCollapsed] = useState(true)
    const sidebarRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (sidebarRef.current) {
                const sidebarRect = sidebarRef.current.getBoundingClientRect()
                const isNearSidebar = event.clientX <= sidebarRect.right + sidebarCollapseBuffer
                setIsCollapsed(!isNearSidebar)
            }
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <motion.div
            ref={sidebarRef}
            className="transition-all duration-75 flex h-full flex-col overflow-y-auto overflow-x-hidden border-r bg-background"
            animate={{
                width: isCollapsed ? "100px" : "300px",
                transition: { duration: 0.3, ease: "easeInOut" }
            }}
        >
            <div className="flex flex-col h-full px-3">
                <div className={clsx("flex w-full items-center mx-auto p-2 my-6", {
                    "shadow shadow-gray-400 rounded": !isCollapsed
                })}>
                    <Avatar className="ml-2">
                        <AvatarImage src={user.avatar_url || ''} alt={user.full_name || ''} />
                        <AvatarFallback>{user.full_name ? user.full_name.charAt(0).toUpperCase() : 'U'}</AvatarFallback>
                    </Avatar>
                    <AnimatePresence>
                        {!isCollapsed && (
                            <motion.div
                                className="ml-4 space-y-1"
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <p className="text-md font-normal leading-none truncate">{user.full_name || 'User'}</p>
                                <p className="text-xs leading-none text-muted-foreground">{"@" + user.company}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <nav className="flex-1">
                    <ul role="list" className="flex flex-col gap-y-1 px-2 py-2">
                        {routes.map((route) => (
                            <li key={route.href}>
                                <Link
                                    href={route.href}
                                    className={cn(
                                        'flex items-center rounded-md p-2 text-sm leading-6 font-semibold h-10',
                                        pathname === route.href
                                            ? 'bg-primary text-primary-foreground'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                                    )}
                                >
                                    <div className="pl-2 w-6 h-6 flex items-center justify-center">
                                        <route.icon className="h-5 w-5 shrink-0" />
                                    </div>
                                    <AnimatePresence>
                                        {!isCollapsed && (
                                            <motion.span
                                                className="ml-3 overflow-hidden whitespace-nowrap"
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: "auto" }}
                                                exit={{ opacity: 0, width: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                {route.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="p-4">
                    <Button variant="ghost" className="w-full flex items-center justify-start h-10" asChild>
                        <span className="cursor-pointer" onClick={async () => await signOut()}>
                            <div className="w-6 h-6 flex items-center justify-center">
                                <LogOut className="h-5 w-5" />
                            </div>
                            <AnimatePresence>
                                {!isCollapsed && (
                                    <motion.span
                                        className="ml-3 overflow-hidden whitespace-nowrap"
                                        initial={{ opacity: 0, width: 0 }}
                                        animate={{ opacity: 1, width: "auto" }}
                                        exit={{ opacity: 0, width: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        Log out
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </span>
                    </Button>
                </div>
            </div>
        </motion.div>
    )
}

