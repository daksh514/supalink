import { Keyboard, LayoutDashboard, Settings, SquareUser } from "lucide-react";

export const sidebarLinks = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboard/>
    },
    {
        title: "Profile",
        href: "/dashboard/profile",
        icon: <SquareUser/>
    },
    {
        title: "Settings",
        href: "/dashboard/settings",
        icon: <Settings/>
    },
    {
        title: "Chooseslug",
        href: "/dashboard/chooseslug",
        icon: <Keyboard/>
    }
]