import { Link } from "react-router";

export type ButtonProps = {
  children: React.ReactNode;
  /** Internal route — renders a <Link> */
  to?: string;
  /** External URL — renders an <a> */
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9E71] disabled:opacity-40 disabled:pointer-events-none select-none active:scale-[0.99]";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-[#0D9E71] to-[#059669] text-white hover:from-[#10B981] hover:to-[#047857] shadow-[0_4px_16px_rgba(13,158,113,0.35)] hover:shadow-[0_8px_24px_rgba(13,158,113,0.5)] hover:-translate-y-0.5",
  secondary:
    "bg-emerald-50 text-[#065F46] border border-emerald-200/80 hover:bg-emerald-100/80 hover:-translate-y-0.5 shadow-2xs",
  outline:
    "border border-slate-300 text-[#0A192F] bg-white hover:border-[#0D9E71] hover:text-[#0D9E71] hover:bg-slate-50 hover:-translate-y-0.5 shadow-2xs",
  text:
    "text-[#0D9E71] hover:text-[#059669] font-bold underline-offset-4 hover:underline",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs font-semibold rounded-lg",
  md: "px-5 py-2.5 text-sm font-semibold rounded-xl",
  lg: "px-7 py-3.5 text-base font-semibold rounded-xl",
};

export function Button({
  children,
  to,
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  onClick,
}: ButtonProps) {
  const cls = [base, variants[variant], sizes[size], className].join(" ");

  if (to) {
    return (
      <Link to={to} className={cls} aria-disabled={disabled}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={cls}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

/**
 * Convenience wrapper for the primary luxury action button
 */
export function PrimaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="primary" />;
}

/**
 * Convenience wrapper for the secondary soft sage action button
 */
export function SecondaryButton(props: Omit<ButtonProps, "variant">) {
  return <Button {...props} variant="secondary" />;
}

