import { createFileRoute, Link } from "@tanstack/react-router";
import heroCreek from "@/assets/ct-hero-creek.jpg";
import dance from "@/assets/ct-dance.jpg";
import mangrove from "@/assets/ct-mangrove.jpg";
import fishing from "@/assets/ct-fishing.jpg";
import { Arrow } from "@/components/arrow";
import { CtaBand } from "@/components/page-parts";
import { faqs, keywordBand } from "@/data/site";
import { tours, ksh } from "@/data/tours";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ComTouch Kenya — Community Eco-Tours on the Tsunza-Mwache Coast" },
      {
        name: "description",
        content:
          "Community-led eco-tours across the tides, mangroves, food and dances of the Tsunza-Mwache peninsula. Every visit plants mangroves and pays the community directly.",
      },
      { property: "og:title", content: "ComTouch Kenya — Experience the living coast of Tsunza-Mwache" },
      {
        property: "og:description",
        content:
          "Thirteen community-led experiences in Kwale County, Kenya. Mangrove restoration, mariculture and coastal research behind every tour.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const workAreas = [
  {
    to: "/work/mangrove-restoration",
    bg: "bg-pine",
    label: "Mangrove Restoration",
    body: "Community nurseries, replanting and long-term protection along the creek. Every tour adds seedlings, and Ksh 100 of each one funds the nursery.",
  },
  {
    to: "/work/mariculture",
    bg: "bg-tide",
    label: "Sustainable Mariculture",
    body: "The Tsunza Integrated Mariculture project grows fish, crab and prawn in balance with the creek, so families earn without emptying the wild.",
  },
  {
    to: "/work/research",
    bg: "bg-midnight",
    label: "Research & Collaboration",
    body: "We host students and scientists studying mangroves, blue carbon and coastal ecology, and turn findings into practice on the ground.",
  },
] as const;

const moments = [
  { img: dance, caption: "Ngoma ya Mulungu — the rain dance at Kaya Chonyi" },
  { img: heroCreek, caption: "Dhow sailing — scenic sails across the creek" },
  { img: fishing, caption: "Fishing the tide — traditional gear and the uzio trap" },
  { img: dance, caption: "Palm wine tapping — a livelihood and a ritual" },
  { img: mangrove, caption: "Mangrove planting — restoration on every tour" },
  { img: heroCreek, caption: "Sacred kayas — forests the community protects" },
];

function Home() {
  return (
    <main className="bg-paper text-ink">
      <section className="relative h-screen w-full overflow-hidden">
        <YoutubeBackground
          poster={heroCreek}
          posterAlt="Boats on Tudor Creek near the Tsunza-Mwache peninsula"
        />

        <div className="absolute left-16 top-24 max-w-[440px] md:left-[40px] md:top-[40px]">
          <p className="label-overline text-paper/80">Tsunza-Mwache · Kenyan coast</p>
          <p className="mt-16 text-body text-paper">
            Community-led eco-tours across the tides, mangroves, food and dances of the
            peninsula, where every visit helps restore the coast and pays the community
            directly.
          </p>
        </div>

        <div className="absolute bottom-24 left-16 right-16 md:bottom-[40px] md:left-[40px] md:right-[40px]">
          <h1 className="section-heading max-w-[900px] text-paper">
            Experience the living coast of Tsunza-Mwache
          </h1>
          <div className="mt-24 flex flex-wrap items-center gap-16">
            <Link to="/book" className="btn-filled">
              Book a Tour <Arrow />
            </Link>
            <Link to="/eco-tours" className="btn-outline text-paper">
              See all experiences <Arrow />
            </Link>
          </div>
          <ul className="mt-32 flex flex-wrap gap-24 text-paper">
            {[
              { n: "13", l: "guided experiences" },
              { n: "100%", l: "community-led" },
              { n: "Every visit", l: "plants mangroves" },
            ].map((f) => (
              <li key={f.l} className="flex items-baseline gap-8">
                <span className="text-heading-sm font-light">{f.n}</span>
                <span className="text-[12px] text-mist">{f.l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Keyword band */}
      <div className="hairline-top overflow-hidden bg-paper py-24">
        <ul className="flex flex-wrap gap-x-24 gap-y-8 px-24 text-[12px] text-smoke">
          {keywordBand.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>

      {/* Introduction */}
      <section className="page-shell py-80">
        <div className="max-w-[700px]">
          <p className="label-overline text-smoke">Introduction</p>
          <h2 className="section-heading mt-6">A coast you don't just visit, you take part in</h2>
          <p className="mt-24 font-lora text-subheading tracking-[0.011em]">
            Tsunza-Mwache is a tidal peninsula of mangrove creek, fishing villages, palm groves
            and sacred forests. Spend a day here and you fish by the tide, plant a mangrove,
            taste food pounded and grated by hand, and sit with dancers whose drums keep the
            community's time.
          </p>
          <p className="mt-16 text-body text-pewter">
            It is real life on the coast, shared by the people who live it, and every visit
            helps keep the mangroves and the culture standing.
          </p>
        </div>
      </section>

      {/* Experiences */}
      <section className="page-shell pb-80">
        <div className="flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[600px]">
            <p className="label-overline text-smoke">Experiences</p>
            <h2 className="section-heading-sm mt-6">Thirteen ways into the peninsula</h2>
            <p className="mt-16 text-body text-pewter">
              From dhow sailing and traditional fishing to dances, palm wine and mangrove
              planting. Guided by the community, every step of the way.
            </p>
          </div>
          <Link to="/eco-tours" className="btn-text text-ember">
            See all 13 <Arrow />
          </Link>
        </div>

        <ul className="mt-48">
          {tours.slice(0, 6).map((t) => (
            <li key={t.slug} className="hairline-top">
              <Link
                to="/eco-tours/$slug"
                params={{ slug: t.slug }}
                className="flex flex-col gap-8 py-24 md:flex-row md:items-baseline md:gap-24"
              >
                <span className="w-[180px] flex-none text-[12px] text-smoke">
                  {t.category} · {t.duration}
                </span>
                <span className="flex-1 text-subheading">{t.title}</span>
                <span className="flex items-center gap-8 text-[12px] text-pewter">
                  {ksh(t.total)} <Arrow size={14} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Culture feature */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={dance}
          alt="Drummers and dancers performing on the sand under palm trees"
          loading="lazy"
          width={1440}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute bottom-24 left-16 max-w-[700px] md:bottom-[40px] md:left-[40px]">
          <span className="badge bg-paper/15 text-paper">Culture & dance</span>
          <h2 className="section-heading-sm mt-8 text-paper">Culture kept, not performed</h2>
          <p className="mt-16 text-body text-mist">
            The dances here are prayers and celebrations, not a show put on for visitors. You are
            welcomed into Rawawe, kayamba, ngoma ya mlungu and mdundiko, the same dances the
            community holds for rain, harvest and marriage.
          </p>
          <p className="mt-12 text-body text-mist">
            Around them sit the crafts, the food and the sacred kayas: weaving, carving, pounding
            and winnowing, herbal knowledge, and forests that have been protected for generations.
          </p>
          <Link
            to="/eco-tours/$slug"
            params={{ slug: "cultural-local-dance" }}
            className="btn-text mt-16 text-paper"
          >
            Explore culture & dance <Arrow />
          </Link>
        </div>
      </section>

      {/* The work */}
      <section className="page-shell py-80">
        <div className="max-w-[700px]">
          <p className="label-overline text-smoke">The work behind every visit</p>
          <h2 className="section-heading mt-6">More than a tour</h2>
          <p className="mt-24 font-lora text-subheading tracking-[0.011em]">
            ComTouch Kenya is a community-based environmental organisation. Tourism is one arm;
            our mission is a living, protected coast.
          </p>
        </div>
        <div className="mt-48 grid gap-16 md:grid-cols-3">
          {workAreas.map((w) => (
            <Link
              key={w.label}
              to={w.to}
              className={`flex min-h-[280px] flex-col justify-between rounded-[8px] ${w.bg} p-24 text-paper`}
            >
              <span className="badge bg-paper/10 text-paper">{w.label}</span>
              <span>
                <span className="block text-body text-mist">{w.body}</span>
                <span className="btn-text mt-16 text-paper">
                  Read more <Arrow />
                </span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="page-shell pb-80">
        <blockquote className="hairline-top max-w-[900px] pt-48">
          <p className="section-heading-sm font-light">
            Come for the dhows, the drums and the tide. Leave having planted a mangrove and paid
            a coast forward.
          </p>
          <footer className="mt-16 text-[12px] text-smoke">A day with ComTouch Kenya</footer>
        </blockquote>
      </section>

      {/* Moments */}
      <section className="page-shell pb-80">
        <div className="flex items-end justify-between gap-16">
          <h2 className="section-heading-sm">Moments from the peninsula</h2>
          <Link to="/media" className="btn-text text-ember">
            Watch the film <Arrow />
          </Link>
        </div>
        <div className="mt-32 grid gap-16 sm:grid-cols-2 md:grid-cols-3">
          {moments.map((m, i) => (
            <figure key={i}>
              <img
                src={m.img}
                alt={m.caption}
                loading="lazy"
                width={1440}
                height={1080}
                className="aspect-[4/3] w-full rounded-[3.2px] object-cover"
              />
              <figcaption className="mt-8 text-[12px] text-smoke">{m.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="page-shell pb-80">
        <h2 className="section-heading-sm max-w-[600px]">Frequently asked questions</h2>
        <ul className="mt-32 max-w-[900px]">
          {faqs.map((f) => (
            <li key={f.q} className="hairline-top flex flex-col gap-8 py-24 md:flex-row md:gap-24">
              <span className="w-[280px] flex-none text-subheading">{f.q}</span>
              <span className="text-body text-pewter">{f.a}</span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        heading="Support the coast beyond a visit"
        body="Book a tour, volunteer your time, fund a mangrove or partner with us. Every route sustains the community and the coast."
      />
    </main>
  );
}
