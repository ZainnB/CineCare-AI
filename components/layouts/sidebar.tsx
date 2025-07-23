"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, FileText, Calendar, Pill, Bell, MessageSquare, Heart, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { AppButton } from "../app-button"

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Health Records", href: "/records", icon: FileText },
  { name: "Appointments", href: "/appointments", icon: Calendar },
  { name: "Prescriptions", href: "/prescriptions", icon: Pill },
  { name: "Reminders", href: "/reminders", icon: Bell },
  { name: "AI Assistant", href: "/assistant", icon: MessageSquare },
]

export function Sidebar() {
  const pathname = usePathname()
  const { logout } = useAuth()

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-cinematic-primary rounded-lg flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-glow">CineCare AI</h1>
            <p className="text-xs text-muted-foreground">Medical Assistant</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-cinematic-primary text-white glow-effect"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent",
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <AppButton variant="ghost" className="w-full justify-start" onClick={logout}>
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </AppButton>
      </div>
    </div>
  )
}
