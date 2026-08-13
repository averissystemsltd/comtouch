import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Arrow } from "@/components/arrow";
import { PageHeader } from "@/components/page-parts";
import { tours, tourCategories, annualEvent, ksh } from "@/data/tours";

export const Route = createFileRoute("/eco-tours/")({
  head: () => ({
    meta: [
      { title: "Eco Tours — Thirteen Community Experiences | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Thirteen guided experiences on the Tsunza-Mwache peninsula: fishing, dhow sailing, dance, food, crafts, conservation and eco-learning. Full cost breakdowns on every tour.",
      },
      { property: "og:title", content: "Thirteen ways into Tsunza-Mwache" },
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

function EcoTours() {
  const [filter, setFilter] = useState<string>("All");
  const list = filter === "All" ? tours : tours.filter((t) => t.category === filter);

  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Eco Tours"
        title="Thirteen ways into Tsunza-Mwache"
        intro="Every tour is guided by the community it visits and plants mangrove seedlings at Ksh 100 each. Boat transport, guide fees and any local dance are itemised on each tour's page as a full cost breakdown."
      />

      <section className="page-shell pb-80">
        <ul className="flex flex-wrap gap-8">
          {["All", ...tourCategories].map((c) => (
            <li key={c}>
              <button
                onClick={() => setFilter(c)}
                className={`badge ${
                  filter === c ? "bg-char text-paper" : "bg-mist text-pewter"
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-48">
          {list.map((t) => (
            <li key={t.slug} className="hairline-top">
              <Link
                to="/eco-tours/$slug"
                params={{ slug: t.slug }}
                className="flex flex-col gap-8 py-24 md:flex-row md:gap-24"
              >
                <span className="w-[180px] flex-none text-[12px] text-smoke">
                  {t.category} · {t.duration}
                </span>
                <span className="flex-1">
                  <span className="block text-subheading">{t.title}</span>
                  <span className="mt-6 block max-w-[560px] text-body text-pewter">
                    {t.summary}
                  </span>
                </span>
                <span className="flex items-baseline gap-8 text-[12px] text-pewter">
                  {ksh(t.total)} <Arrow size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-shell pb-80">
        <article className="rounded-[8px] bg-pine p-24 text-paper md:p-48">
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
                    {p.label} — {p.amount}
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
