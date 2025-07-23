"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AppCardProps {
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  className?: string
  variant?: "default" | "glass" | "gradient"
  hover?: boolean
}

export function AppCard({
  title,
  description,
  children,
  footer,
  className,
  variant = "default",
  hover = false,
}: AppCardProps) {
  const variantClasses = {
    default: "bg-card border-border",
    glass: "glass-effect border-white/20",
    gradient: "cinematic-gradient text-white border-0",
  }

  return (
    <Card
      className={cn(
        "transition-all duration-300",
        variantClasses[variant],
        hover && "hover:scale-105 hover:shadow-lg cursor-pointer",
        className,
      )}
    >
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle className="text-glow">{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  )
}
