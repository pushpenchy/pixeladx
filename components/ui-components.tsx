"use client"

import { ReactNode } from "react"
import { motion, HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
  glowColor?: "primary" | "accent" | "purple"
  hover?: boolean
}

export function GlassCard({
  children,
  className,
  glowColor = "primary",
  hover = true,
  ...props
}: GlassCardProps) {
  const glowClasses = {
    primary: "hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]",
    accent: "hover:shadow-[0_0_40px_rgba(0,229,255,0.15)]",
    purple: "hover:shadow-[0_0_40px_rgba(139,92,246,0.15)]",
  }

  return (
    <motion.div
      className={cn(
        "glass rounded-xl p-6",
        hover && "glass-hover",
        hover && glowClasses[glowColor],
        className
      )}
      whileHover={hover ? { y: -5, scale: 1.02 } : undefined}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedButtonProps {
  children: ReactNode
  className?: string
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
}

export function AnimatedButton({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
}: AnimatedButtonProps) {
  const baseClasses = "relative font-medium rounded-lg transition-all duration-300 overflow-hidden"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-primary to-accent text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-primary/50 text-foreground hover:bg-primary/10",
  }

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  return (
    <motion.button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}

interface StatsCounterProps {
  value: number
  suffix?: string
  label: string
}

export function StatsCounter({ value, suffix = "", label }: StatsCounterProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold text-gradient font-[family-name:var(--font-space-grotesk)]"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {value}{suffix}
      </motion.div>
      <p className="text-muted-foreground mt-2">{label}</p>
    </motion.div>
  )
}

interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ badge, title, description, centered = true }: SectionHeaderProps) {
  return (
    <motion.div
      className={cn("max-w-3xl", centered && "mx-auto text-center")}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {badge && (
        <motion.span
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {badge}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          {description}
        </p>
      )}
    </motion.div>
  )
}
