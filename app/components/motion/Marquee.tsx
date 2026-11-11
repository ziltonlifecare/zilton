import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface MarqueeProps {
  items: string[];
  separator?: string;
  speed?: number; // seconds for full loop
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  items,
  separator = "—",
  speed = 28,
  className = "",
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const track = trackRef.current;
    
    // Continuous loop
    tweenRef.current = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      duration: speed,
      repeat: -1,
    });

    // Accelerate with scroll velocity
    let lastScroll = window.scrollY;
    let velocityTimeout: any;

    const onScroll = () => {
      const currentScroll = window.scrollY;
      const delta = Math.abs(currentScroll - lastScroll);
      lastScroll = currentScroll;

      if (tweenRef.current) {
        // Boost timeScale proportional to scroll delta
        const boost = Math.min(4, 1 + delta * 0.05);
        gsap.to(tweenRef.current, { timeScale: boost, duration: 0.2 });

        clearTimeout(velocityTimeout);
        velocityTimeout = setTimeout(() => {
          if (tweenRef.current) {
            gsap.to(tweenRef.current, { timeScale: 1, duration: 0.6 });
          }
        }, 120);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      tweenRef.current?.kill();
      clearTimeout(velocityTimeout);
    };
  }, [speed]);

  // Duplicate items 4 times to ensure seamless infinite looping
  const combined = [...items, ...items, ...items, ...items];

  return (
    <div className={`overflow-hidden whitespace-nowrap select-none py-3.5 border-y border-slate-200/90 bg-white shadow-2xs ${className}`}>
      <div ref={trackRef} className="inline-flex items-center gap-7 text-xs sm:text-sm font-sans tracking-wider text-[#0A192F] font-bold uppercase">
        {combined.map((item, idx) => (
          <span key={idx} className="inline-flex items-center gap-7">
            <span>{item}</span>
            <span className="text-[#0D9E71] text-xs font-extrabold">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

