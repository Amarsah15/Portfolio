import React from "react";
import clsx from "clsx";
import { containerSizes, containerPadding } from "@/lib/layoutTokens";

export default function Container({
  children,
  size = "wide",
  className,
  ...props
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full",
        containerSizes[size],
        containerPadding,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
