import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Arrow } from "@/components/arrow";
import { tours, getTour, ksh } from "@/data/tours";
import { getTourDetail } from "@/data/tour-details";
import { tourImage } from "@/data/tour-images";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import fishing from "@/assets/ct-fishing.jpg";
import mangrove from "@/assets/ct-mangrove.jpg";
import creek from "@/assets/ct-hero-creek.jpg";

export const Route = createFileRoute("/eco-tours/$slug")({
  loader: ({ params }) => {
    const tour = getTour(params.slug);
    if (!tour) throw notFound();
    return { tour };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Experience not found | ComTouch Kenya" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const t = loaderData.tour;
    return {
      meta: [
        { title: `${t.title} | ComTouch Kenya Eco Tours` },
        { name: "description", content: t.summary },
        { property: "og:title", content: `${t.title} · Tsunza-Mwache` },
        { property: "og:description", content: t.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TourPage,
});

function TourPage() {
  const { tour } = Route.useLoaderData();
  const detail = getTourDetail(tour.slug);
  const related = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);
  // Lead with this tour's own photo, then supporting shots of the peninsula.
  const gallery = [tourImage(tour.slug), creek, fishing, mangrove];

  const facts = [
    { label: `Group price (${tour.basis})`, value: ksh(tour.total), big: true },
    { label: "Duration", value: tour.duration },
    { label: "Arrival", value: tour.arrival },
    { label: "Meeting point", value: tour.meetingPoint },
  ];

  return (
    <main className="bg-paper text-ink">
      <header className="page-shell pb-32 pt-[128px]">
        <p className="label-overline text-leaf">
          {tour.category} · {tour.duration}
        </p>
        <h1 className="section-heading mt-6 max-w-[900px]">{tour.title}</h1>
        <p className="mt-24 max-w-[760px] font-lora text-subheading leading-relaxed tracking-[0.011em] text-iron">
          {detail?.pitch ?? tour.intro}
        </p>
      </header>

      <section className="page-shell grid gap-16 pb-48 sm:grid-cols-2 md:grid-cols-4">
        {gallery.map((g, i) => (
          <img
            key={i}
            src={g}
            alt={`${tour.title} on the Tsunza-Mwache peninsula`}
            loading={i === 0 ? undefined : "lazy"}
            width={1440}
            height={1080}
            className="aspect-[4/3] w-full rounded-[6px] object-cover"
          />
        ))}
      </section>

      {/* Key facts */}
      <section className="page-shell pb-64">
        <dl className="grid gap-16 rounded-[10px] bg-leaf/[0.07] p-24 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label}>
              <dt className="label-overline text-smoke">{f.label}</dt>
              <dd
                className={
                  f.big
                    ? "mt-6 text-heading-sm font-light text-pine"
                    : "mt-6 text-subheading text-ink"
                }
              >
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Itinerary */}
      <section className="page-shell pb-80">
        <div className="max-w-[780px]">
          <Reveal>
            <p className="label-overline text-leaf">The experience</p>
            <h2 className="section-heading-sm mt-12">Your day, step by step</h2>
          </Reveal>

          {detail ? (
            <Stagger as="ol" className="mt-40">
              {detail.itinerary.map((s, i) => (
                <StaggerItem as="li" key={i}>
                  <div className="flex gap-20">
                    <div className="flex flex-col items-center">
                      <span className="mt-1 h-[14px] w-[14px] flex-none rounded-full bg-leaf ring-4 ring-leaf/15" />
                      {i < detail.itinerary.length - 1 && (
                        <span className="mt-2 w-px flex-1 bg-mist" />
                      )}
                    </div>
                    <div className="flex-1 pb-40">
                      {s.time && <p className="label-overline text-leaf">{s.time}</p>}
                      <h3 className="mt-2 text-subheading text-ink">{s.title}</h3>
                      <p className="mt-8 text-body leading-relaxed text-pewter">{s.detail}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          ) : (
            <p className="mt-24 text-body text-pewter">{tour.howItRuns}</p>
          )}
        </div>
      </section>

      {/* Included + good to know */}
      <section className="page-shell grid gap-48 pb-80 md:grid-cols-2">
        <Reveal>
          <h2 className="section-heading-sm">What's included</h2>
          <ul className="mt-24">
            {tour.included.map((i) => (
              <li key={i} className="flex gap-12 hairline-top py-16">
                <span className="mt-2 flex h-20 w-20 flex-none items-center justify-center rounded-full bg-leaf/12 text-leaf">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-body text-iron">{i}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="section-heading-sm">Good to know</h2>
          <p className="mt-24 text-body text-pewter">{tour.goodToKnow}</p>

          <div className="mt-32 rounded-[10px] bg-tide p-24 text-paper md:p-32">
            <h3 className="section-heading-sm">Ready for {tour.title}?</h3>
            <p className="mt-12 text-body text-mist">
              Send an enquiry with your dates and group size. A guide confirms boat transport, guide
              and dance availability, and the full cost. No payment is taken online.
            </p>
            <p className="mt-20 text-heading-sm font-light text-paper">
              {ksh(tour.total)}
              <span className="ml-8 text-[13px] text-mist">· {tour.basis}</span>
            </p>
            <Link to="/book" className="btn-filled mt-20 bg-paper text-ink">
              Book this experience <Arrow />
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="page-shell pb-80">
        <h2 className="section-heading-sm">Explore next</h2>
        <ul className="mt-24">
          {related.map((t) => (
            <li key={t.slug} className="hairline-top">
              <Link
                to="/eco-tours/$slug"
                params={{ slug: t.slug }}
                className="group flex items-baseline gap-24 py-24"
              >
                <span className="w-[180px] flex-none text-[12px] text-smoke">
                  {t.category} · {t.duration}
                </span>
                <span className="flex-1 text-subheading">{t.title}</span>
                <span className="text-pine transition-transform duration-500 group-hover:translate-x-1">
                  <Arrow size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
