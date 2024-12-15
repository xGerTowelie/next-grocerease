import { LayoutDashboard, FileText, Users, Settings } from 'lucide-react'

export const sidebarCollapseBuffer = 60

export const routes = [
    {
        label: 'Dashboard',
        icon: LayoutDashboard,
        href: '/dashboard',
    },
    {
        label: 'Reports',
        icon: FileText,
        href: '/reports',
    },
    {
        label: 'Team',
        icon: Users,
        href: '/team',
    },
    {
        label: 'Settings',
        icon: Settings,
        href: '/settings',
    },
]

export const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
