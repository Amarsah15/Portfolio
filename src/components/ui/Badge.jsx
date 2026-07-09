import clsx from "clsx";

const variants = {
  default: "bg-surface text-muted border border-border",
  primary: "bg-primary/10 text-primary border border-primary/20",
  outline: "border border-border text-foreground",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
};

export default function Badge({
  children,
  variant = "default",
  size = "md",
  className,
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-md font-medium",
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}
