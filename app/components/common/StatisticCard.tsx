import React from "react";

export interface StatisticCardProps {
  value: string;
  label: string;
  subtext?: string;
  sublabel?: string;
  badge?: string;
  highlightValue?: boolean;
  className?: string;
}

/**
 * Reusable Minimal Luxury Statistic & Trust Metric Card.
 * Displays numerical accomplishments, cGMP badges, or regulatory metrics with smooth elevation.
 */
export const StatisticCard: React.FC<StatisticCardProps> = ({
  value,
  label,
  subtext,
  sublabel,
  badge,
  highlightValue = false,
  className = "",
}) => {
  const displaySubtext = subtext || sublabel;

  return (
    <div
      className={[
        "relative p-6 sm:p-7 rounded-2xl bg-white border border-[#E4EBE6] shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between",
        className,
      ].join(" ")}
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <p
            className={`font-heading text-3xl sm:text-4xl font-extrabold tracking-tight ${
              highlightValue ? "text-[#07845E]" : "text-[#123D32]"
            }`}
          >
            {value}
          </p>
          {badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-[#DFF1E9] text-[#07845E] text-[10px] font-bold uppercase tracking-wider border border-[#E4EBE6]">
              {badge}
            </span>
          )}
        </div>

        <h3 className="text-sm sm:text-base font-bold text-[#123D32] leading-snug">
          {label}
        </h3>
      </div>

      {displaySubtext && (
        <p className="mt-2 text-xs text-[#53635C] leading-relaxed pt-3 border-t border-[#E4EBE6]">
          {displaySubtext}
        </p>
      )}
    </div>
  );
};
