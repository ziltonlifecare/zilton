import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export const CustomCursor: React.FC = () => {
  const [isTouch, setIsTouch] = useState(true);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on fine pointer devices (desktop mouse)
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setIsTouch(false);

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const card = target.closest("[data-cursor='view']");
      const interactive = target.closest("a, button, [role='button'], input, select, textarea");

      if (card) {
        setCursorText("VIEW");
        setIsHovered(true);
      } else if (interactive) {
        setCursorText("");
        setIsHovered(true);
      } else {
        setCursorText("");
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-200 flex items-center justify-center font-mono text-[9px] font-bold tracking-wider ${
        cursorText
          ? "w-14 h-14 bg-[#1B634E] text-[#F6F4EE] shadow-xl"
          : isHovered
          ? "w-8 h-8 bg-[#0D9E71]/30 backdrop-blur-xs border border-[#0D9E71]"
          : "w-3 h-3 bg-[#1B634E]/80"
      }`}
    >
      {cursorText}
    </div>
  );
};

