import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface DrawPathProps {
  d: string;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  triggerId?: string;
}

export const DrawPath: React.FC<DrawPathProps> = ({
  d,
  className = "",
  strokeColor = "#0D9E71",
  strokeWidth = 2,
  triggerId,
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const trigger = triggerId ? `#${triggerId}` : path;

    const st = ScrollTrigger.create({
      trigger: trigger as any,
      start: "top 80%",
      end: "bottom 40%",
      scrub: 1,
      onUpdate: (self) => {
        const draw = length * (1 - self.progress);
        gsap.set(path, { strokeDashoffset: draw });
      },
    });

    return () => {
      st.kill();
    };
  }, [d, triggerId]);

  return (
    <svg className={`overflow-visible pointer-events-none ${className}`}>
      <path
        ref={pathRef}
        d={d}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
};

