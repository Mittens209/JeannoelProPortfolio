import * as React from "react"
import { cn } from "@/lib/utils"

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "subtle"
}

const GlassPanel = React.forwardRef<HTMLDivElement, GlassPanelProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl backdrop-blur-md border transition-all duration-300",
          {
            "bg-card/70 border-border/10 shadow-glass": variant === "default",
            "bg-surface-elevated border-border/20 shadow-medium": variant === "elevated",
            "bg-surface-glass border-border/5 shadow-soft": variant === "subtle",
          },
          className
        )}
        {...props}
      />
    )
  }
)
GlassPanel.displayName = "GlassPanel"

export { GlassPanel }
