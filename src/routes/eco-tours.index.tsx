import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Arrow } from "@/components/arrow";
import { PageHeader } from "@/components/page-parts";
import { TourCard } from "@/components/tour-card";
import { tours, tourCategories, annualEvent, ksh, type Tour } from "@/data/tours";
import { tourImage } from "@/data/tour-images";

export const Route = createFileRoute("/eco-tours/")({
  head: () => ({
    meta: [
      { title: "Eco Tours: Community Experiences | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Thirteen community-guided experiences on the Tsunza-Mwache peninsula: fishing, dhow sailing, dance, food, crafts, conservation and eco-learning. Full itinerary and price on every tour.",
      },
      { property: "og:title", content: "Ways into Tsunza-Mwache" },
      {
        property: "og:description",
        content:
          "Community-guided eco-tours in Kwale County, Kenya. Every tour plants mangrove seedlings at Ksh 100 each.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EcoTours,
});

type View = "grid" | "list";

function EcoTours() {
  const [filter, setFilter] = useState<string>("All");
  const [view, setView] = useState<View>("grid");
  const [hovered, setHovered] = useState<Tour | null>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const list = filter === "All" ? tours : tours.filter((t) => t.category === filter);

  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Eco Tours"
        title="Ways into Tsunza-Mwache"
        intro="Every tour is guided by the community it visits and plants mangrove seedlings at Ksh 100 each. Browse the thirteen experiences as a gallery or a list, then open any one for the full itinerary and price."
      />

      <section className="page-shell pb-80">
        {/* Filters + view toggle */}
        <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
          <ul className="no-scrollbar -mx-24 flex gap-8 overflow-x-auto px-24 md:mx-0 md:flex-wrap md:overflow-visible md:px-0">
            {["All", ...tourCategories].map((c) => {
              const on = filter === c;
              return (
                <li key={c} className="flex-none">
                  <button
                    onClick={() => setFilter(c)}
                    className={`whitespace-nowrap rounded-[1584px] px-14 py-8 text-[13px] font-medium tracking-[0.12px] transition-colors ${
                      on ? "bg-pine text-paper" : "text-pewter ring-1 ring-mist hover:text-ink"
                    }`}
                  >
                    {c}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="inline-flex flex-none items-center gap-2 self-start rounded-[1584px] p-2 ring-1 ring-mist">
            {(["grid", "list"] as View[]).map((v) => {
              const on = view === v;
              return (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  aria-pressed={on}
                  className={`flex items-center gap-6 rounded-[1584px] px-12 py-6 text-[12px] font-medium transition-colors ${
                    on ? "bg-pine text-paper" : "text-pewter hover:text-ink"
                  }`}
                >
                  {v === "grid" ? <GridIcon /> : <ListIcon />}
                  <span className="capitalize">{v}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid view */}
        {view === "grid" && (
          <motion.ul layout className="mt-40 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((t) => (
              <motion.li
                key={t.slug}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <TourCard tour={t} />
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* List view with a floating preview image that follows the cursor */}
        {view === "list" && (
          <ul
            className="mt-24"
            onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
            onMouseLeave={() => setHovered(null)}
          >
            {list.map((t) => (
              <li key={t.slug} className="hairline-top">
                <Link
                  to="/eco-tours/$slug"
                  params={{ slug: t.slug }}
                  onMouseEnter={() => setHovered(t)}
                  className="group flex flex-col gap-8 py-24 md:flex-row md:items-center md:gap-24"
                >
                  <span className="w-[190px] flex-none text-[12px] text-smoke">
                    {t.category} · {t.duration}
                  </span>
                  <span className="flex-1">
                    <span className="block text-heading-sm font-light transition-colors duration-300 group-hover:text-leaf">
                      {t.title}
                    </span>
                    <span className="mt-6 block max-w-[560px] text-body text-pewter">
                      {t.summary}
                    </span>
                  </span>
                  <span className="flex items-center gap-10 text-[13px] text-pine">
                    {ksh(t.total)}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      <Arrow size={15} />
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Floating preview image (desktop only) */}
      {view === "list" && hovered && (
        <motion.img
          key={hovered.slug}
          src={tourImage(hovered.slug)}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ left: pos.x + 32, top: pos.y }}
          className="pointer-events-none fixed z-50 hidden h-[220px] w-[300px] -translate-y-1/2 rounded-[10px] object-cover shadow-[0_30px_70px_-24px_rgba(0,0,0,0.55)] lg:block"
        />
      )}

      {/* Annual event */}
      <section className="page-shell pb-80">
        <article className="rounded-[10px] bg-pine p-24 text-paper md:p-48">
          <span className="badge bg-paper/10 text-paper">Annual event</span>
          <h2 className="section-heading-sm mt-16 max-w-[700px]">{annualEvent.title}</h2>
          <p className="mt-16 max-w-[700px] text-body text-mist">{annualEvent.summary}</p>
          <p className="mt-12 max-w-[700px] text-body text-mist">{annualEvent.detail}</p>
          <dl className="mt-32 grid gap-16 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <dt className="label-overline text-mist">Booking window</dt>
              <dd className="mt-6 text-body">{annualEvent.bookingWindow}</dd>
            </div>
            <div>
              <dt className="label-overline text-mist">Arrival</dt>
              <dd className="mt-6 text-body">{annualEvent.arrival}</dd>
            </div>
            <div>
              <dt className="label-overline text-mist">Prices</dt>
              <dd className="mt-6 text-body">
                {annualEvent.prices.map((p) => (
                  <span key={p.label} className="block">
                    {p.label} · {p.amount}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
          <Link to="/book" className="btn-text mt-32 text-paper">
            Enquire about the event <Arrow />
          </Link>
        </article>
      </section>
    </main>
  );
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 6h16M4 12h16M4 18h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
