import clsx from "clsx";

export const buttonBaseStyles =
  "inline-flex min-h-10 items-center justify-center gap-2 whitespace-nowrap font-semibold leading-none rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none hover:-translate-y-0.5 active:translate-y-0 [&>svg]:shrink-0";

export const buttonVariants = {
  primary: "bg-primary !text-white hover:bg-primary-hover shadow-lg shadow-primary/20 border border-primary",
  secondary: "bg-surface text-foreground border border-border hover:bg-surface-hover hover:border-muted/30 premium-border",
  ghost: "text-muted hover:text-foreground hover:bg-surface",
  outline: "border border-border text-foreground hover:bg-surface hover:border-muted/30",
};

export const buttonSizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-base",
  icon: "h-9 w-9 p-0", // Square sizing for icon-only buttons
};

export function getButtonStyles({ variant = "primary", size = "md", fullWidth = false, loading = false } = {}) {
  return clsx(
    buttonBaseStyles,
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth && "w-full",
    loading && "relative !text-transparent pointer-events-none"
  );
}
