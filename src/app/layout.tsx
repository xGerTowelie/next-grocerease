import "./globals.css";

import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar";
import { Breadcrumb } from "@/components/Breadcrumb";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <SidebarProvider>
                    <AppSidebar />
                    <main className="flex-1 overflow-y-auto">
                        <header className="bg-background border-b-2 border-black p-4">
                            <Breadcrumb />
                        </header>
                        <section className="px-10 py-5">
                            {children}
                        </section>
                    </main>
                </SidebarProvider>
            </body>
        </html>
    )
}

