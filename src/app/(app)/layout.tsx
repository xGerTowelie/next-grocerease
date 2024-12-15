import { redirect } from 'next/navigation'
import { Toaster } from '@/components/ui/toaster'
import { Sidebar } from '@/components/ui/Sidebar'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { getCurrentUser } from '@/actions/auth'

export default async function ProtectedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { data, error } = await getCurrentUser()

    if (!data || error) {
        redirect('/login')
    }

    return (
        <div className="flex h-screen">
            <Sidebar user={data} />
            <div className="flex flex-col flex-1 overflow-hidden">
                <header className="bg-background border-b p-4">
                    <Breadcrumb />
                </header>
                <main className="flex-1 overflow-y-auto p-8">
                    {children}
                </main>
            </div>
            <Toaster />
        </div>
    )
}


