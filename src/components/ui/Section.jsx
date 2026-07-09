import React from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
import { sectionSpacing } from "@/lib/layoutTokens";
import Container from "./Container";

export default function Section({
  children,
  className,
  id,
  withContainer = true,
  containerSize = "wide",
  ...props
}) {
  return (
    <motion.section
      id={id}
      className={clsx(sectionSpacing, "section-shell", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      {...props}
    >
      {withContainer ? (
        <Container size={containerSize}>{children}</Container>
      ) : (
        children
      )}
    </motion.section>
  );
}
