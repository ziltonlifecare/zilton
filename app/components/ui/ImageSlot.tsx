import React from "react";
import { getImageSrc } from "~/data/images";

export interface ImageSlotProps {
  src?: string | null;
  alt?: string;
  ratio?: "4/5" | "16/9" | "1/1" | "4/3" | "3/2" | string;
  caption?: string;
  priority?: boolean;
  className?: string;
  slotKey?: string;
  objectFit?: "cover" | "contain";
}

export const ImageSlot: React.FC<ImageSlotProps> = ({
  src,
  alt = "Zilton Life Care Visual Asset",
  ratio = "4/5",
  caption,
  priority = false,
  className = "",
  slotKey,
  objectFit = "cover",
}) => {
  const [hasError, setHasError] = React.useState(false);

  // Resolve image: explicit non-empty src wins, else look up registry by slotKey
  const resolvedSrc: string | null =
    src && src.trim() !== "" ? src : slotKey ? getImageSrc(slotKey) : null;

  React.useEffect(() => {
    setHasError(false);
  }, [resolvedSrc]);

  // Convert standard ratio strings to aspect-ratio CSS values
  const aspectStyle = {
    aspectRatio: ratio.includes("/") ? ratio.replace("/", " / ") : ratio,
  };

  const labelText = slotKey
    ? `IMG / ${slotKey.toUpperCase().replace(/\./g, " · ")} [${ratio}]`
    : `IMG / ARCHITECTURAL SLOT [${ratio}]`;

  return (
    <figure className={`group relative w-full overflow-hidden ${className}`}>
      <div
        style={aspectStyle}
        className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 border border-slate-200/90 transition-all duration-500"
      >
        {resolvedSrc && !hasError ? (
          <img
            src={resolvedSrc}
            alt={alt}
            onError={() => setHasError(true)}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            className={`w-full h-full ${
              objectFit === "contain" ? "object-contain p-6" : "object-cover"
            } transition-transform duration-700 ease-out group-hover:scale-105`}
          />
        ) : (
          /* Studio Wireframe Placeholder */
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-6 select-none bg-gradient-to-br from-[#EAF1EC] via-[#E4EDE7] to-[#DFE9E2]">
            {/* Fine Technical Grid & Shimmer */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(#1B634E 0.75px, transparent 0.75px)`,
                backgroundSize: "16px 16px",
              }}
            />

            {/* Subtle Studio Shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_4s_infinite_linear] pointer-events-none" />

            {/* Top Wireframe Corner Marks */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest text-[#1B634E]/50 font-medium">
                {labelText}
              </span>
              <div className="w-2 h-2 border-t border-r border-[#1B634E]/40" />
            </div>

            {/* Center Geometric Emblem */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto py-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/40 border border-[#1B634E]/15 flex items-center justify-center text-[#1B634E]/60 mb-2 backdrop-blur-xs">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  className="opacity-75"
                >
                  <circle cx="12" cy="12" r="10" strokeDasharray="3 3" />
                  <path d="M12 2v20M2 12h20" strokeWidth="0.75" />
                  <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.2" />
                </svg>
              </div>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-widest text-[#1B634E]/50 uppercase">
                STUDIO ASSET SLOT
              </span>
            </div>

            {/* Bottom Technical Scale Indicator */}
            <div className="relative z-10 flex items-center justify-between border-t border-[#1B634E]/10 pt-2.5">
              <span className="font-mono text-[8px] text-[#1B634E]/40">
                CALIBRATED 100%
              </span>
              <div className="flex gap-1">
                <span className="w-1 h-1 rounded-full bg-[#1B634E]/30" />
                <span className="w-1 h-1 rounded-full bg-[#1B634E]/30" />
                <span className="w-1 h-1 rounded-full bg-[#1B634E]/30" />
              </div>
            </div>
          </div>
        )}
      </div>

      {caption && (
        <figcaption className="mt-2 font-mono text-[11px] text-[#53635C] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#07845E]" />
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
