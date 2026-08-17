/** Organic SVG wave used as a soft transition between full-bleed and paper sections. */
export function WaveDivider({
  className = "",
  fill = "var(--color-paper)",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block h-[60px] w-full md:h-[100px] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
    >
      <path
        d="M0,64 C240,120 480,8 720,40 C960,72 1200,120 1440,72 L1440,120 L0,120 Z"
        fill={fill}
      />
    </svg>
  );
}
