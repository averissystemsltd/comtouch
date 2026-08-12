import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroLandscape from "@/assets/hero-landscape.jpg";
import cityAerial from "@/assets/city-aerial.jpg";
import community from "@/assets/community.jpg";
import facade from "@/assets/facade.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aker — Long-term Development & Investment" },
      {
        name: "description",
        content:
          "Aker develops, invests in and operates places built to last — coastal terrain, urban waterfronts and residential communities.",
      },
      { property: "og:title", content: "Aker — Long-term Development & Investment" },
      {
        property: "og:description",
        content:
          "A developer of durable places. Investment, development and long-term stewardship across land, city and community.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navCards = [
  { title: "Investments", desc: "Capital across land and infrastructure", img: cityAerial, href: "#what-we-do" },
  { title: "Development", desc: "Site acquisition to delivered community", img: community, href: "#work" },
  { title: "Architecture", desc: "In-house design and material research", img: facade, href: "#surfaces" },
  { title: "Contact", desc: "Oslo, Lisbon and Cape Town", img: heroLandscape, href: "#contact" },
];

const listItems = [
  { n: "01", label: "Invest" },
  { n: "02", label: "Develop" },
  { n: "03", label: "Operate" },
  { n: "04", label: "Steward" },
];

function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      aria-hidden="true"
      className="flex-none"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed right-24 top-24 z-50 flex flex-col items-end gap-12">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-32 items-center gap-12 rounded-[1584px] bg-char px-13 text-paper"
        aria-expanded={open}
        aria-label="Open menu"
      >
        <span className="text-[12px] font-medium tracking-[0.12px]">AKER</span>
        <span className="flex flex-col gap-4" aria-hidden="true">
          <span className="block h-px w-16 bg-paper" />
          <span className="block h-px w-16 bg-paper" />
          <span className="block h-px w-16 bg-paper" />
        </span>
      </button>

      {open && (
        <div className="grid w-[min(92vw,560px)] grid-cols-1 gap-8 sm:grid-cols-2">
          {navCards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-12 rounded-[8px] bg-char p-12 text-paper"
            >
              <img
                src={c.img}
                alt=""
                loading="lazy"
                className="aspect-[4/3] w-64 flex-none rounded-[3.2px] object-cover opacity-80"
              />
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-normal">{c.title}</span>
                <span className="block truncate text-[12px] text-mist">{c.desc}</span>
              </span>
              <Arrow size={14} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Index() {
  return (
    <main className="bg-paper text-ink">
      <Nav />

      {/* Full-bleed hero — 100vw, full viewport height */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroLandscape}
          alt="Concrete house set into a coastal mountain slope at dusk"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <p className="absolute left-24 top-24 max-w-[400px] text-body text-paper md:left-[40px] md:top-[40px]">
          Aker is a long-term developer of land, city and community. We acquire slowly,
          build deliberately, and hold what we make — because a place is only finished
          once it has been lived in.
        </p>
        <h1 className="wordmark absolute bottom-24 left-24 text-paper md:bottom-[40px] md:left-[40px]">
          AKER
        </h1>
      </section>

      {/* White canvas — label + heading + editorial body */}
      <section id="what-we-do" className="page-shell py-80">
        <div className="max-w-[600px]">
          <p className="label-overline text-smoke">Core business areas</p>
          <h2 className="section-heading mt-6">What we do</h2>
          <p className="mt-24 font-lora text-subheading tracking-[0.011em]">
            Four disciplines, one continuous line of responsibility. We stay on a site
            long after the last handover — the same team that underwrites a project
            operates it a decade later.
          </p>
          <a href="#work" className="btn-text mt-24 text-ember">
            Read the 2026 letter <Arrow />
          </a>
        </div>

        <ul className="mt-48 max-w-[600px]">
          {listItems.map((i) => (
            <li key={i.n} className="hairline-top flex items-baseline gap-24 py-24">
              <span className="w-32 text-[12px] text-smoke">{i.n}</span>
              <span className="text-subheading">{i.label}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Full-bleed photography band */}
      <section id="work" className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={community}
          alt="Aerial view of a low-rise residential community with terracotta roofs"
          loading="lazy"
          width={1024}
          height={768}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute bottom-24 left-24 md:bottom-[40px] md:left-[40px]">
          <span className="badge bg-paper/15 text-paper">Selected work</span>
          <h2 className="section-heading mt-8 max-w-[700px] text-paper">Vestland Commons</h2>
          <a href="#contact" className="btn-text mt-16 text-paper">
            View the project <Arrow />
          </a>
        </div>
      </section>

      {/* Surface cards — Pine / Tide / Midnight */}
      <section id="surfaces" className="page-shell py-80">
        <p className="label-overline text-pewter">Portfolio</p>
        <h2 className="section-heading-sm mt-6 max-w-[600px]">
          Three registers, one standard of care.
        </h2>
        <div className="mt-32 grid gap-16 md:grid-cols-3">
          {[
            { bg: "bg-pine", label: "Land", body: "12,400 hectares held across Nordic coastline." },
            { bg: "bg-tide", label: "City", body: "Waterfront regeneration in four European ports." },
            { bg: "bg-midnight", label: "Community", body: "2,900 homes operated under long leases." },
          ].map((c) => (
            <article key={c.label} className={`flex min-h-[240px] flex-col justify-between rounded-[8px] ${c.bg} p-16 text-paper`}>
              <span className="badge bg-paper/10 text-paper">{c.label}</span>
              <p className="text-body text-mist">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Two-column feature cards */}
      <section className="page-shell grid gap-16 pb-80 md:grid-cols-2">
        <article className="flex min-h-[420px] flex-col justify-between rounded-[8px] bg-mist p-24">
          <div>
            <p className="label-overline text-pewter">Capital</p>
            <h3 className="section-heading-sm mt-6">Invest with Aker</h3>
          </div>
          <div className="flex items-end justify-between">
            <a href="#contact" className="btn-text">
              Let's chat <Arrow />
            </a>
            <span className="text-heading-sm font-light">AKER</span>
          </div>
        </article>

        <article className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[8px] p-24">
          <img
            src={cityAerial}
            alt="Aerial view of a city waterfront at dawn"
            loading="lazy"
            width={1280}
            height={960}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative">
            <p className="label-overline text-mist">Partnerships</p>
            <h3 className="section-heading-sm mt-6 text-paper">We're open to collaborate</h3>
          </div>
          <a href="#contact" className="btn-text relative w-fit text-paper">
            Our team <Arrow />
          </a>
        </article>
      </section>

      {/* Full-bleed band before contact */}
      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={facade}
          alt="Minimal concrete facade cut by a hard diagonal shadow"
          loading="lazy"
          width={1024}
          height={768}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <p className="absolute bottom-24 left-24 max-w-[600px] text-body text-paper md:bottom-[40px] md:left-[40px]">
          Material research, in-house. Every facade specification we write is one we
          expect to maintain ourselves for thirty years.
        </p>
      </section>

      <section id="contact" className="page-shell flex flex-col gap-32 py-80 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[600px]">
          <p className="label-overline text-smoke">Get in touch</p>
          <h2 className="section-heading-sm mt-6">
            Tell us about the place you want to build.
          </h2>
          <a href="mailto:hello@aker.com" className="btn-text mt-16 text-ember">
            hello@aker.com <Arrow />
          </a>
        </div>
        <div className="flex flex-wrap items-center gap-16">
          <a href="#what-we-do" className="btn-outline">
            Our team <Arrow />
          </a>
          <a href="mailto:hello@aker.com" className="btn-filled">
            Contact us <Arrow />
          </a>
        </div>
      </section>

      <footer className="page-shell hairline-top flex items-center justify-between py-32 text-[12px] text-smoke">
        <span>© 2026 Aker</span>
        <span>Oslo · Lisbon · Cape Town</span>
      </footer>
    </main>
  );
}
