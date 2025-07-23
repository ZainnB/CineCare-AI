"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive"
  size?: "sm" | "md" | "lg"
  isLoading?: boolean
  children: React.ReactNode
}

export function AppButton({
  variant = "primary",
  size = "md",
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: AppButtonProps) {
  const variantClasses = {
    primary: "bg-cinematic-primary hover:bg-cinematic-primary/90 text-white glow-effect",
    secondary: "bg-cinematic-secondary hover:bg-cinematic-secondary/90 text-white",
    outline: "border-cinematic-primary text-cinematic-primary hover:bg-cinematic-primary hover:text-white",
    ghost: "hover:bg-cinematic-primary/10 text-cinematic-primary",
    destructive: "bg-destructive hover:bg-destructive/90 text-destructive-foreground",
  }

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-6 text-lg",
  }

  return (
    <Button
      className={cn(
        "transition-all duration-300 font-medium",
        variantClasses[variant],
        sizeClasses[size],
        isLoading && "opacity-70 cursor-not-allowed",
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}
