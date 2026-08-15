import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Arrow } from "@/components/arrow";
import { tours, getTour, ksh } from "@/data/tours";
import dance from "@/assets/ct-dance.jpg";
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
        meta: [{ title: "Experience not found — ComTouch Kenya" }, { name: "robots", content: "noindex" }],
      };
    }
    const t = loaderData.tour;
    return {
      meta: [
        { title: `${t.title} — ComTouch Kenya Eco Tours` },
        { name: "description", content: t.summary },
        { property: "og:title", content: `${t.title} — Tsunza-Mwache` },
        { property: "og:description", content: t.summary },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TourPage,
});

const gallery = [creek, dance, fishing, mangrove];

function TourPage() {
  const { tour } = Route.useLoaderData();
  const related = tours.filter((t) => t.slug !== tour.slug).slice(0, 3);

  return (
    <main className="bg-paper text-ink">
      <header className="page-shell pt-80 pb-32">
        <p className="label-overline text-smoke">
          {tour.category} · {tour.duration}
        </p>
        <h1 className="section-heading mt-6 max-w-[900px]">{tour.title}</h1>
        <p className="mt-24 max-w-[700px] font-lora text-subheading tracking-[0.011em]">
          {tour.intro}
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
            className="aspect-[4/3] w-full rounded-[3.2px] object-cover"
          />
        ))}
      </section>

      <section className="page-shell pb-48">
        <dl className="hairline-top grid gap-16 py-24 sm:grid-cols-3">
          <div>
            <dt className="label-overline text-smoke">Total ({tour.basis})</dt>
            <dd className="mt-6 text-heading-sm font-light">{ksh(tour.total)}</dd>
          </div>
          <div>
            <dt className="label-overline text-smoke">Arrival</dt>
            <dd className="mt-6 text-subheading">{tour.arrival}</dd>
          </div>
          <div>
            <dt className="label-overline text-smoke">Meeting point</dt>
            <dd className="mt-6 text-subheading">{tour.meetingPoint}</dd>
          </div>
        </dl>
      </section>

      <section className="page-shell grid gap-48 pb-80 md:grid-cols-2">
        <div>
          <h2 className="section-heading-sm">What's included</h2>
          <ul className="mt-24">
            {tour.included.map((i) => (
              <li key={i} className="hairline-top py-16 text-body text-iron">
                {i}
              </li>
            ))}
          </ul>
          <h2 className="section-heading-sm mt-48">How the day runs</h2>
          <p className="mt-16 text-body text-pewter">{tour.howItRuns}</p>
        </div>

        <div>
          <h2 className="section-heading-sm">Cost breakdown</h2>
          <p className="mt-6 text-[12px] text-smoke">Based on a {tour.basis}.</p>
          <table className="mt-24 w-full text-body">
            <tbody>
              {tour.cost.map((c) => (
                <tr key={c.label} className="hairline-top">
                  <td className="py-12 pr-16 text-iron">{c.label}</td>
                  <td className="py-12 text-right whitespace-nowrap text-pewter">
                    {ksh(c.amount)}
                  </td>
                </tr>
              ))}
              <tr className="hairline-top">
                <td className="py-16 pr-16 text-subheading">Total</td>
                <td className="py-16 text-right text-subheading whitespace-nowrap">
                  {ksh(tour.total)}
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mt-32 rounded-[8px] bg-mist p-24">
            <h3 className="text-heading-sm font-light">Book this experience</h3>
            <p className="mt-12 text-body text-pewter">
              Send an enquiry with your dates and group size and a guide will confirm boat
              transport, guide and dance availability, and the full cost breakdown.
            </p>
            <Link to="/book" className="btn-text mt-16 text-leaf">
              Book a Tour <Arrow />
            </Link>
          </div>

          <div className="mt-24">
            <p className="label-overline text-smoke">Good to know</p>
            <p className="mt-8 text-body text-pewter">{tour.goodToKnow}</p>
          </div>
        </div>
      </section>

      <section className="page-shell pb-80">
        <h2 className="section-heading-sm">Explore next</h2>
        <ul className="mt-24">
          {related.map((t) => (
            <li key={t.slug} className="hairline-top">
              <Link
                to="/eco-tours/$slug"
                params={{ slug: t.slug }}
                className="flex items-baseline gap-24 py-24"
              >
                <span className="w-[180px] flex-none text-[12px] text-smoke">
                  {t.category} · {t.duration}
                </span>
                <span className="flex-1 text-subheading">{t.title}</span>
                <Arrow size={14} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
