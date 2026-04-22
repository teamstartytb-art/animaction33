"use client";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "accent" | "ghost" | "outline";
type Size = "sm" | "md" | "lg" | "xl";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type AAButtonProps = ButtonProps | AnchorProps;

const variants: Record<Variant, string> = {
  primary: "bg-aa-red text-aa-paper border-aa-ink hover:bg-red-700",
  secondary: "bg-aa-blue text-aa-paper border-aa-ink hover:bg-blue-700",
  accent: "bg-aa-yellow text-aa-ink border-aa-ink hover:bg-yellow-400",
  ghost: "bg-aa-paper text-aa-ink border-aa-ink hover:bg-aa-cream",
  outline: "bg-transparent text-aa-ink border-aa-ink hover:bg-aa-ink hover:text-aa-paper",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-7 py-3.5 text-base gap-2",
  lg: "px-9 py-4 text-lg gap-2.5",
  xl: "px-12 py-5 text-xl gap-3",
};

const sharedClasses =
  "inline-flex items-center justify-center font-display uppercase tracking-wide border-3 rounded-xl cursor-pointer select-none shadow-pop-md transition-colors duration-150 disabled:opacity-50 disabled:cursor-not-allowed";

const hoverAnim = {
  whileHover: { x: -3, y: -3, boxShadow: "9px 9px 0 0 #0F1B3D" },
  whileTap: { x: 0, y: 0, boxShadow: "3px 3px 0 0 #0F1B3D" },
  transition: { type: "spring" as const, stiffness: 400, damping: 25 },
};

export const AAButton = forwardRef<HTMLButtonElement | HTMLAnchorElement, AAButtonProps>(
  function AAButton(
    { className, variant = "primary", size = "md", loading, icon, children, ...props },
    ref
  ) {
    const classes = cn(sharedClasses, variants[variant], sizes[size], className);

    const inner = (
      <>
        {loading ? (
          <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : icon ? (
          <span className="shrink-0">{icon}</span>
        ) : null}
        {children}
      </>
    );

    if ("href" in props && props.href !== undefined) {
      const anchorProps = props as AnchorProps;
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(hoverAnim as unknown as HTMLMotionProps<"a">)}
          className={classes}
          {...(anchorProps as unknown as HTMLMotionProps<"a">)}
        >
          {inner}
        </motion.a>
      );
    }

    const buttonProps = props as ButtonProps;
    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={buttonProps.disabled || loading}
        {...(hoverAnim as unknown as HTMLMotionProps<"button">)}
        className={classes}
        {...(buttonProps as unknown as HTMLMotionProps<"button">)}
      >
        {inner}
      </motion.button>
    );
  }
);
