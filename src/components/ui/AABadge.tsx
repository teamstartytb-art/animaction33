import { cn } from "@/lib/utils";

interface AABadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "px-3 py-0.5 text-xs",
  md: "px-4 py-1 text-sm",
  lg: "px-5 py-1.5 text-base",
};

export function AABadge({ children, color = "#FFC91F", className, size = "md" }: AABadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 font-display uppercase tracking-widest",
        "border-2 border-aa-ink rounded-full shadow-pop-sm",
        sizes[size],
        className
      )}
      style={{ backgroundColor: color, color: "#0F1B3D" }}
    >
      {children}
    </span>
  );
}
