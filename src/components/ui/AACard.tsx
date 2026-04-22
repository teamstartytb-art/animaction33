"use client";
import { HTMLAttributes, forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface AACardProps extends Omit<HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"> {
  color?: string;
  tilt?: number;
  hoverable?: boolean;
}

export const AACard = forwardRef<HTMLDivElement, AACardProps>(
  function AACard(
    { className, color = "#FFFDF6", tilt = 0, hoverable = false, style, children, ...props },
    ref
  ) {
    const motionProps = hoverable
      ? {
          whileHover: { y: -6, rotate: tilt * 0.5 },
          transition: { type: "spring" as const, stiffness: 300, damping: 20 },
        }
      : {};

    return (
      <motion.div
        ref={ref}
        {...(motionProps as HTMLMotionProps<"div">)}
        className={cn(
          "border-3 border-aa-ink rounded-2xl p-7 shadow-pop-md",
          hoverable && "cursor-pointer",
          className
        )}
        style={{ backgroundColor: color, transform: `rotate(${tilt}deg)`, ...style }}
        {...(props as HTMLMotionProps<"div">)}
      >
        {children}
      </motion.div>
    );
  }
);
