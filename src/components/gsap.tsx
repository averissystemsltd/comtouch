import { useEffect, useRef, useState, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * GSAP-driven flourishes for the cinematic sections: scrub parallax on hero /
 * feature imagery, and count-up stats. Everything is guarded for SSR (effects
 * only run in the browser) and for reduced-motion preferences, and every value
 * is rendered in its final state on the server so content is never hidden.
 */

let registered = false;
function ensureRegistered() {
  if (!registered && typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
}

function prefersReduced() {
  return (
    typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

/** Subtle vertical parallax as the element scrolls through the viewport. */
export function Parallax({
  children,
  amount = 60,
  className,
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || prefersReduced()) return;
    ensureRegistered();
    const el = ref.current;
    const anim = gsap.fromTo(
      el,
      { yPercent: -amount / 10 },
      {
        yPercent: amount / 10,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement ?? el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [amount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

function formatCount(value: number, decimals: number) {
  return value.toLocaleString("en-KE", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

/** Counts up to `value` the first time it scrolls into view. */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(() => formatCount(value, decimals));

  useEffect(() => {
    if (!ref.current || prefersReduced()) return;
    ensureRegistered();
    const el = ref.current;
    const obj = { n: 0 };
    // Note: display stays at the final value until the trigger fires, so if the
    // animation never runs (reduced motion, hidden tab, no JS) the real number
    // still shows. It only counts up once, when scrolled into view.
    const anim = gsap.to(obj, {
      n: value,
      duration: 1.6,
      ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
      onStart: () => setDisplay(formatCount(0, decimals)),
      onUpdate: () => setDisplay(formatCount(obj.n, decimals)),
    });
    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [value, decimals]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
