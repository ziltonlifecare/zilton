import React from "react";

/**
 * Preloader disabled per user preference — website opens immediately without splash delay.
 */
export const Preloader: React.FC<{ onComplete?: () => void }> = ({ onComplete }) => {
  React.useEffect(() => {
    onComplete?.();
  }, [onComplete]);

  return null;
};
