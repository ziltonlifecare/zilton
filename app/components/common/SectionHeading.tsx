type SectionHeadingProps = {
  /** Refined eyebrow label positioned above the title */
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Reusable Minimal Luxury section heading block.
 * Provides a consistent, accessible typographic hierarchy across corporate pages.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={["flex flex-col gap-3", alignClass, className].join(" ")}>
      {eyebrow && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#DFF1E9] border border-[#E4EBE6] text-[11px] font-bold uppercase tracking-widest text-[#07845E]">
          {eyebrow}
        </div>
      )}
      <h2
        className="font-heading text-3xl font-bold text-[#123D32] sm:text-4xl lg:text-[42px] leading-tight tracking-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-1 max-w-2xl text-base text-[#53635C] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

