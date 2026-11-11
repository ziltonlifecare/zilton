type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Site-wide luxury max-width wrapper with standardized responsive padding:
 * - Desktop: 64px (lg:px-16)
 * - Tablet:  32px (sm:px-8)
 * - Mobile:  20px (px-5)
 * - Max-width: 1240px
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-16",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

