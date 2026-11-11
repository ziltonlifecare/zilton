import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "none";
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const yVal = direction === "up" ? 30 : direction === "down" ? -30 : 0;

    gsap.fromTo(
      elRef.current,
      { opacity: 0, y: yVal },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      }
    );
  }, [delay, duration, direction]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};

