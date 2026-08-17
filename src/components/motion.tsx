import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion";
import { Arrow } from "./arrow";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Shared framer-motion building blocks for the site's scroll-triggered
 * storytelling. Everything animates once, on entering the viewport, and quietly
 * disables itself when the visitor prefers reduced motion.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
  ...rest
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
} & HTMLMotionProps<"div">) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  const anim = reduce
    ? { initial: false as const }
    : {
        initial: { opacity: 0, y },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "0px 0px -12% 0px" },
        transition: { duration: 0.7, ease: EASE, delay },
      };
  return (
    <Comp className={className} {...anim} {...rest}>
      {children}
    </Comp>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol" | "section";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  if (reduce) {
    const Plain = as as "div";
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Comp
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as] as typeof motion.div;
  if (reduce) {
    const Plain = as as "div";
    return <Plain className={className}>{children}</Plain>;
  }
  return (
    <Comp className={className} variants={itemVariants}>
      {children}
    </Comp>
  );
}

/**
 * Ghost text link with an arrow that eases forward on hover. Works as an
 * internal router Link (`to`) or a plain anchor (`href`).
 */
export function AnimatedLink({
  children,
  to,
  href,
  params,
  className = "",
}: {
  children: ReactNode;
  to?: string;
  href?: string;
  params?: Record<string, string>;
  className?: string;
}) {
  const inner = (
    <span className="group/al relative inline-flex items-center gap-8 font-medium">
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/al:scale-x-100" />
      </span>
      <span className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/al:translate-x-1.5">
        <Arrow size={16} />
      </span>
    </span>
  );

  if (to) {
    return (
      <Link to={to} params={params as never} className={`inline-flex ${className}`}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={`inline-flex ${className}`}>
      {inner}
    </a>
  );
}
