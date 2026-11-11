import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextProps {
  children: string;
  className?: string;
  as?: "h2" | "h3" | "p";
}

export const ScrollText: React.FC<ScrollTextProps> = ({
  children,
  className = "",
  as: Component = "h2",
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const words = children.split(" ");

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const spans = containerRef.current.querySelectorAll(".scroll-word");

    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 75%",
      end: "bottom 35%",
      scrub: true,
      onUpdate: (self) => {
        const total = spans.length;
        const currentActive = Math.floor(self.progress * total);
        spans.forEach((span, idx) => {
          if (idx <= currentActive) {
            span.classList.add("text-[#0A192F]");
            span.classList.remove("text-slate-400");
          } else {
            span.classList.remove("text-[#0A192F]");
            span.classList.add("text-slate-400");
          }
        });
      },
    });

    return () => {
      st.kill();
    };
  }, [children]);

  return (
    <Component
      ref={containerRef as any}
      className={`font-editorial text-fluid-h2 leading-relaxed tracking-tight ${className}`}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="scroll-word inline-block mr-2.5 transition-colors duration-150 text-slate-400"
        >
          {word}
        </span>
      ))}
    </Component>
  );
};

