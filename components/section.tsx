"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  padding?: "sm" | "md" | "lg"
}

export function Section({ children, className, padding = "md" }: SectionProps) {
  const paddingClasses = {
    sm: "py-4",
    md: "py-8",
    lg: "py-12",
  }

  return <section className={cn(paddingClasses[padding], className)}>{children}</section>
}
