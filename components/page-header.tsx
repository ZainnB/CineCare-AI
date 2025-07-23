"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  action?: React.ReactNode
  className?: string
}

export function PageHeader({ title, subtitle, action, className }: PageHeaderProps) {
  return (
    <div className={cn("flex items-center justify-between mb-8", className)}>
      <div>
        <h1 className="text-3xl font-bold text-glow animate-fade-in">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-2 animate-fade-in">{subtitle}</p>}
      </div>
      {action && <div className="animate-fade-in">{action}</div>}
    </div>
  )
}
