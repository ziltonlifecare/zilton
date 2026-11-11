import React from "react";
import { getWhatsAppLink } from "~/utils/whatsapp";

const GENERAL_MESSAGE = `Hello Zilton Life Care Team,

I am interested in your pharmaceutical products and would like to know more about your product range and business opportunities.

Please share further details.

Thank you.`;

/**
 * Floating WhatsApp button — fixed bottom-right, sitting above the
 * existing FloatingContactWidget button which occupies the same corner.
 * Bottom offset raised by ~72px so the two buttons don't overlap.
 */
export const FloatingWhatsAppButton: React.FC = () => {
  const href = getWhatsAppLink(GENERAL_MESSAGE);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className={[
        "fixed z-50 flex items-center justify-center",
        // Elegant bottom-right positioning
        "bottom-6 right-6",
        // WhatsApp green circle
        "w-14 h-14 rounded-full",
        "bg-[#25D366] hover:bg-[#128C7E] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50",
        "shadow-lg hover:shadow-xl",
        "transition-all duration-200 ease-out",
        "group",
      ].join(" ")}
    >
      {/* Official WhatsApp SVG logo */}
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-7 h-7 text-white"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2C8.268 2 2 8.268 2 16c0 2.44.655 4.726 1.797 6.69L2 30l7.52-1.773A13.934 13.934 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 01-5.834-1.597l-.418-.248-4.463 1.052 1.08-4.342-.273-.445A11.5 11.5 0 014.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.3-8.591c-.345-.173-2.045-1.009-2.362-1.124-.317-.115-.547-.173-.778.173-.23.345-.893 1.124-1.095 1.354-.202.23-.403.258-.748.086-.345-.173-1.456-.537-2.773-1.71-1.025-.914-1.717-2.044-1.918-2.389-.202-.345-.022-.531.151-.703.155-.155.345-.404.518-.605.172-.202.23-.345.345-.576.115-.23.057-.432-.029-.605-.086-.173-.778-1.874-1.066-2.566-.28-.673-.565-.582-.778-.593l-.663-.012c-.23 0-.605.086-.922.432s-1.209 1.181-1.209 2.882c0 1.7 1.238 3.344 1.411 3.574.173.23 2.437 3.72 5.902 5.216.825.356 1.468.569 1.97.728.828.263 1.582.226 2.178.137.664-.1 2.045-.836 2.333-1.643.288-.807.288-1.499.202-1.643-.086-.144-.317-.23-.662-.403z"
          fill="currentColor"
        />
      </svg>

      {/* Tooltip label */}
      <span className="sr-only">Chat with us on WhatsApp</span>
      <span
        aria-hidden="true"
        className={[
          "absolute right-16 whitespace-nowrap",
          "bg-[#0A192F] text-white text-xs font-semibold",
          "px-3.5 py-1.5 rounded-full shadow-lg border border-slate-700/80",
          "opacity-0 translate-x-2 pointer-events-none",
          "group-hover:opacity-100 group-hover:translate-x-0",
          "transition-all duration-200",
        ].join(" ")}
      >
        WhatsApp Enquiries
      </span>
    </a>
  );
};
