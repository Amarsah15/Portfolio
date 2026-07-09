import clsx from "clsx";
import TechIcon from "./TechIcon";

export default function Tag({ children, className }) {
  const showIcon = typeof children === "string";

  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 rounded-md bg-surface px-2.5 py-1 text-xs font-medium text-muted border border-border/80 transition-colors duration-200 hover:border-muted/30 select-none",
        className
      )}
    >
      {showIcon && <TechIcon name={children} className="h-3.5 w-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
