"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AAStickerProps {
  text: string;
  color?: string;
  rotate?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "px-3 py-2 text-lg",
  md: "px-4 py-2.5 text-2xl",
  lg: "px-5 py-3 text-3xl",
};

export function AASticker({
  text,
  color = "#FFC91F",
  rotate = -8,
  size = "md",
  className,
}: AAStickerProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: rotate * -0.5 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={cn(
        "inline-block font-hand border-3 border-aa-ink rounded-xl shadow-pop-sm",
        sizes[size],
        className
      )}
      style={{ backgroundColor: color, color: "#0F1B3D", rotate: `${rotate}deg` }}
    >
      {text}
    </motion.div>
  );
}
