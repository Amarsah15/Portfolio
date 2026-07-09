import TechIcon from "@/components/ui/TechIcon";

const stack = [
  { name: "React", icon: "react" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Express", icon: "express" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Tailwind CSS", icon: "tailwindcss" },
  { name: "REST APIs", icon: "restapi" },
  { name: "Git", icon: "git" },
  { name: "Render", icon: "render" },
];

function MarqueeGroup({ hidden = false }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {stack.map((item) => {
        const itemContent = (
          <>
            <TechIcon name={item.icon} className="h-6 w-6" />
            <span>{item.name}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-primary/40 ml-8" />
          </>
        );

        if (!item.url) {
          return (
            <div
              key={item.name}
              className="marquee-item cursor-default"
              title={item.name}
            >
              {itemContent}
            </div>
          );
        }

        return (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="marquee-item hover:text-foreground transition-colors"
            title={item.name}
          >
            {itemContent}
          </a>
        );
      })}
    </div>
  );
}

export default function TechMarquee() {
  return (
    <div className="marquee-shell" aria-label="Core technologies">
      <div className="marquee-fade marquee-fade-left" />
      <div className="marquee-fade marquee-fade-right" />
      <div className="marquee-track">
        <MarqueeGroup />
        <MarqueeGroup hidden />
      </div>
    </div>
  );
}
