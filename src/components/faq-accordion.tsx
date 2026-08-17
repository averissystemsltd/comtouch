import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Faq = { q: string; a: string };

export function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="mx-auto mt-40 max-w-[760px]">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} className="hairline-top">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-16 py-24 text-left"
            >
              <span className="text-subheading text-ink">{f.q}</span>
              <span
                className={`relative flex h-32 w-32 flex-none items-center justify-center rounded-full border border-mist text-pine transition-colors ${
                  isOpen ? "bg-pine text-paper" : ""
                }`}
                aria-hidden="true"
              >
                <span className="absolute h-px w-12 bg-current" />
                <span
                  className={`absolute h-px w-12 bg-current transition-transform duration-500 ${
                    isOpen ? "rotate-0" : "rotate-90"
                  }`}
                />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[680px] pb-24 text-body text-pewter">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
