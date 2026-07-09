import clsx from "clsx";
import { motion } from "framer-motion";
import { liftOnHover } from "@/lib/motion";

export default function Card({
  children,
  className,
  hover = true,
  as = "div",
  ...props
}) {
  const Component = hover ? motion.div : as;
  const motionProps = hover
    ? { initial: "rest", whileHover: "hover", variants: liftOnHover }
    : {};

  const handleMouseMove = (e) => {
    if (!hover) return;
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    currentTarget.style.setProperty("--x", `${x}px`);
    currentTarget.style.setProperty("--y", `${y}px`);
  };

  return (
    <Component
      onMouseMove={handleMouseMove}
      className={clsx(
        "rounded-xl border border-border bg-surface/40 p-6 transition-all duration-300 glow-card premium-border",
        hover && "hover:border-muted/30 hover:bg-surface/70",
        className
      )}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}

