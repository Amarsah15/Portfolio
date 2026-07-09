import React, { forwardRef, cloneElement, isValidElement } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { getButtonStyles } from "@/lib/buttonVariants";

const Button = forwardRef(function Button(
  {
    children,
    as,
    variant = "primary",
    size = "md",
    href,
    to,
    external,
    loading = false,
    leftIcon,
    rightIcon,
    fullWidth = false,
    type,
    className,
    disabled,
    ...props
  },
  ref
) {
  // Development accessibility check for icon-only buttons
  if (import.meta.env.DEV) {
    if (size === "icon" && !props["aria-label"] && !props["aria-labelledby"]) {
      console.warn(
        "[Button Warning]: Icon-only buttons require an 'aria-label' or 'aria-labelledby' attribute for screen reader accessibility."
      );
    }
  }

  // Polymorphic rendering target resolution
  const Component = as || (to ? Link : href ? "a" : "button");

  // Determine icon size classes based on button size
  const iconSizeClass = size === "lg" ? "h-5 w-5" : "h-4 w-4";

  // Dynamic icon clone implementation supporting automatic sizing
  const cloneIcon = (icon) => {
    if (!icon) return null;
    if (isValidElement(icon)) {
      return cloneElement(icon, {
        className: clsx(iconSizeClass, icon.props.className, "shrink-0"),
      });
    }
    return icon;
  };

  // Compile classes using extracted variants config
  const classes = clsx(
    getButtonStyles({ variant, size, fullWidth, loading }),
    className
  );

  // Prevent invalid attributes based on polymorph target
  const typeAttribute = Component === "button" ? { type: type || "button" } : {};
  const externalAttributes =
    Component === "a" && external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Component
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading ? "true" : undefined}
      {...typeAttribute}
      {...externalAttributes}
      {...(to && { to })}
      {...(href && { href })}
      {...props}
    >
      {/* Loading Spinner Claim */}
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg
            className="animate-spin h-5 w-5 text-current"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}

      {/* Button Content Blocks */}
      {!loading && cloneIcon(leftIcon)}
      {children}
      {!loading && cloneIcon(rightIcon)}
    </Component>
  );
});

export default Button;
