import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { CircleFadingPlusIcon, CookingPot, HomeIcon, PackageSearchIcon, SettingsIcon, ShoppingCartIcon } from "lucide-react"

const quickAccessItems = [
    {
        title: "To be Bought",
        url: "/list",
        icon: ShoppingCartIcon,
    },
    {
        title: "Items",
        url: "/items",
        icon: PackageSearchIcon,
    },
    {
        title: "Recepies",
        url: "/recepies",
        icon: CookingPot,
    },
]

const settingsItems = [
    {
        title: "Stores",
        url: "/stores",
        icon: HomeIcon,
    },
    {
        title: "Types",
        url: "/types",
        icon: CircleFadingPlusIcon,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: SettingsIcon,
    },
]

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Quick Access</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {quickAccessItems.map((item) => (
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

                <SidebarGroup>
                    <SidebarGroupLabel>Settings & Base Data</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {settingsItems.map((item) => (
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
        </Sidebar>
    )
}

