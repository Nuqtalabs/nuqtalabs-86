import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium font-effra ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary CTA - Pink with white text, orange hover (brand guidelines)
        default: "bg-primary text-primary-foreground hover:bg-brand-orange hover:scale-105 shadow-lg",
        
        // Secondary - Blue for large areas (70% dominance color)
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105",
        
        // Accent - Green for balanced sections (80% dominance color) 
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105",
        
        // Destructive - Orange for warnings
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 hover:scale-105",
        
        // Outline - Subtle with brand accent
        outline: "border-2 border-brand-pink bg-transparent text-brand-pink hover:bg-brand-pink hover:text-white hover:scale-105",
        
        // Ghost - Minimal interaction
        ghost: "hover:bg-muted/20 hover:text-foreground hover:scale-105",
        
        // Link - Simple underline
        link: "text-brand-pink underline-offset-4 hover:underline hover:text-brand-orange",
      },
      size: {
        default: "h-12 px-8 py-3 text-base", // Larger for better mobile touch
        sm: "h-10 px-6 py-2 text-sm",
        lg: "h-14 px-12 py-4 text-lg font-semibold", // Hero CTAs
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
