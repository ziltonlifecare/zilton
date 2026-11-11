import { useState, useEffect } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number; // in milliseconds
  decimals?: number;
  suffix?: string;
  prefix?: string;
  enabled?: boolean;
}

/**
 * Lightweight, zero-dependency count-up animation hook for statistics.
 * Automatically respects prefers-reduced-motion.
 */
export function useCountUp({
  end,
  duration = 1800,
  decimals = 0,
  suffix = "",
  prefix = "",
  enabled = true,
}: UseCountUpOptions): string {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!enabled) {
      setCount(0);
      return;
    }

    // Check prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCount(end);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Ease-out expo curve for natural, luxurious deceleration
      const easeOut = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const current = easeOut * end;

      setCount(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, enabled]);

  const formattedNumber = decimals > 0 ? count.toFixed(decimals) : Math.round(count).toString();
  return `${prefix}${formattedNumber}${suffix}`;
}

