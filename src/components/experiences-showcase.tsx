import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { tours, tourCategories, type TourCategory } from "@/data/tours";
import { TourCard } from "./tour-card";

type Filter = "All" | TourCategory;

const filters: Filter[] = ["All", ...tourCategories];

// A tight, diverse set for the "All" view so the homepage stays teaser-length;
// picking a category opens up everything in it.
const featured = new Set([
  "cultural-local-dance",
  "dhow-sailing",
  "fishing-crab-prawn-farming",
  "mangrove-conservation",
  "wine-tapping-tasting",
  "eco-learning-kaya-chonyi",
]);

const EASE = [0.22, 1, 0.36, 1] as const;

export function ExperiencesShowcase() {
  const [active, setActive] = useState<Filter>("All");
  const reduce = useReducedMotion();

  const list =
    active === "All"
      ? tours.filter((t) => featured.has(t.slug))
      : tours.filter((t) => t.category === active);

  return (
    <div>
      {/* Filter rail */}
      <div className="no-scrollbar -mx-24 mt-32 flex gap-8 overflow-x-auto px-24 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
        {filters.map((f) => {
          const on = active === f;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`relative flex-none whitespace-nowrap rounded-[1584px] px-14 py-8 text-[13px] font-medium tracking-[0.12px] transition-colors ${
                on ? "text-paper" : "text-pewter hover:text-ink"
              }`}
            >
              {on && (
                <motion.span
                  layoutId="exp-filter"
                  className="absolute inset-0 rounded-[1584px] bg-pine"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          );
        })}
      </div>

      {/* Cards. React unmounts filtered-out cards immediately (no exit animation),
          so the grid always matches the active filter; entrance + layout still animate. */}
      <motion.ul layout className="mt-32 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((t) => (
          <motion.li
            key={t.slug}
            layout
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <TourCard tour={t} />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
