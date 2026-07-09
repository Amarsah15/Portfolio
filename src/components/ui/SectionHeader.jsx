import React from "react";
import clsx from "clsx";
import Heading from "./Heading";
import Badge from "./Badge";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center justify-center mx-auto",
  };

  return (
    <div
      className={clsx(
        "flex flex-col mb-14 md:mb-20 max-w-4xl",
        alignClasses[align],
        className
      )}
    >
      {eyebrow && (
        <Badge variant="primary" className="mb-4">
          {eyebrow}
        </Badge>
      )}

      {title && (
        <Heading as="h2" className="mb-4">
          {title}
        </Heading>
      )}

      {description && (
        <p className="text-sm sm:text-base md:text-lg text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
