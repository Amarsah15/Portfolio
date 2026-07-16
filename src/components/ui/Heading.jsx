import React from "react";
import clsx from "clsx";
import { m } from "framer-motion";
import { slideUp } from "@/lib/motion";

export default function Heading({
  children,
  as: Tag = "h2",
  className,
  ...props
}) {
  return (
    <m.div
      className={className}
      variants={slideUp}
      {...props}
    >
      <Tag
        className={clsx(
          "text-foreground font-semibold tracking-tight text-gradient",
          Tag === "h1" && "text-4xl sm:text-5xl md:text-6xl leading-[1.08]",
          Tag === "h2" && "text-4xl md:text-6xl leading-[1.02] font-black tracking-[-.045em]",
          Tag === "h3" && "text-2xl md:text-3xl",
          Tag === "h4" && "text-xl md:text-2xl"
        )}
      >
        {children}
      </Tag>
    </m.div>
  );
}
