"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { HintTooltip } from "./hint-tooltip"

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  hint?: string
  error?: string
  required?: boolean
}

export function InputField({ label, hint, error, required, className, id, ...props }: InputFieldProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex items-center gap-2">
          <Label htmlFor={inputId} className="text-sm font-medium">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
          {hint && <HintTooltip content={hint} />}
        </div>
      )}
      <Input
        id={inputId}
        className={cn(
          "transition-all duration-200 focus:ring-2 focus:ring-cinematic-primary/50",
          error && "border-destructive focus:ring-destructive/50",
          className,
        )}
        {...props}
      />
      {error && <p className="text-sm text-destructive animate-fade-in">{error}</p>}
    </div>
  )
}
