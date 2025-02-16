import { AppSidebar } from "@/components/app-sidebar"
import Navbar from "@/components/navbar"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { cookies } from "next/headers"

export default async function Layout({ children }: { children: React.ReactNode }) {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <SidebarProvider defaultOpen={defaultOpen}>
            <AppSidebar />
            <main className="w-full">
                <Navbar />
                <SidebarTrigger />
                <div className="p-2">
                    {children}
                </div>
            </main>
        </SidebarProvider>
    )
}
