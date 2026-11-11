import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplitLinesProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  delay?: number;
  italicWord?: string;
}

export const SplitLines: React.FC<SplitLinesProps> = ({
  children,
  className = "",
  as: Component = "h1",
  delay = 0.1,
  italicWord,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  // Split lines on explicit newline or words
  const lines = children.split("\n");

  useEffect(() => {
    if (!containerRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const items = containerRef.current.querySelectorAll(".line-mask-child");
    gsap.fromTo(
      items,
      { y: "115%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        delay,
      }
    );
  }, [delay]);

  return (
    <Component ref={containerRef as any} className={`leading-none ${className}`}>
      {lines.map((line, lineIdx) => {
        // If italic word specified, highlight it
        const hasItalic = italicWord && line.includes(italicWord);
        return (
          <span key={lineIdx} className="line-mask-wrap">
            <span className="line-mask-child">
              {hasItalic ? (
                <>
                  {line.split(italicWord).map((part, i, arr) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < arr.length - 1 && (
                        <em className="font-editorial italic font-normal tracking-normal text-[#0D9E71]">
                          {italicWord}
                        </em>
                      )}
                    </React.Fragment>
                  ))}
                </>
              ) : (
                line
              )}
            </span>
          </span>
        );
      })}
    </Component>
  );
};

