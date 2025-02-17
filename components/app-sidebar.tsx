import { Calendar, ChartBar, Dumbbell, Settings } from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { SignedIn, UserButton } from "@clerk/nextjs"

// Menu items.
const items = [
    {
        title: "Overview",
        url: "#",
        icon: ChartBar,
    },
    {
        title: "Training Plans",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Exercises",
        url: "#",
        icon: Dumbbell,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
