import React from "react";
import Card from "./Card";

export default function SocialCard({ icon: Icon, label, value, href, description }) {
  return (
    <a
      href={href}
      target={label !== "Email" ? "_blank" : undefined}
      rel={label !== "Email" ? "noopener noreferrer" : undefined}
      className="group block"
    >
      <Card className="hover:border-primary/20 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
            {Icon && <Icon className="h-5 w-5" />}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-sm font-semibold text-foreground transition-colors duration-200 group-hover:text-primary">
              {label}
            </h4>
            <p className="text-sm text-muted mt-0.5 break-all">{value}</p>
            {description && <p className="text-xs text-muted/60 mt-1">{description}</p>}
          </div>
        </div>
      </Card>
    </a>
  );
}
