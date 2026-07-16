import { useRef } from "react";
import clsx from "clsx";
import { m } from "framer-motion";
import { liftOnHover } from "@/lib/motion";

export default function Card({
  children,
  className,
  hover = true,
  as = "div",
  ...props
}) {
  const Component = hover ? m.div : as;
  const motionProps = hover
    ? { initial: "rest", whileHover: "hover", variants: liftOnHover }
    : {};
  const rectRef = useRef(null);

  const handleMouseEnter = (e) => {
    if (!hover) return;
    rectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    if (!hover) return;
    if (!rectRef.current) {
      rectRef.current = e.currentTarget.getBoundingClientRect();
    }
    const { clientX, clientY } = e;
    const { left, top } = rectRef.current;
    const x = clientX - left;
    const y = clientY - top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  const handleMouseLeave = () => {
    rectRef.current = null;
  };

  return (
    <Component
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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

