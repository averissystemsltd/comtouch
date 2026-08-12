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
  { title: "Investments", desc: "Capital deployed across land and infrastructure", img: cityAerial },
  { title: "Development", desc: "From site acquisition to delivered community", img: community },
  { title: "Architecture", desc: "In-house design and material research", img: facade },
  { title: "Contact", desc: "Offices in Oslo, Lisbon and Cape Town", img: heroLandscape },
];

const listItems = [
  { n: "01", label: "Invest" },
  { n: "02", label: "Develop" },
  { n: "03", label: "Operate" },
  { n: "04", label: "Steward" },
];

function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed right-6 top-6 z-50 flex flex-col items-end gap-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex h-8 items-center gap-3 rounded-badge bg-char px-[13px] text-paper"
        aria-expanded={open}
      >
        <span className="text-[12px] font-medium tracking-[0.12px]">AKER</span>
        <span className="flex flex-col gap-[3px]">
          <span className="block h-px w-4 bg-paper" />
          <span className="block h-px w-4 bg-paper" />
          <span className="block h-px w-4 bg-paper" />
        </span>
      </button>

      {open && (
        <div className="grid w-[min(92vw,560px)] grid-cols-1 gap-2 sm:grid-cols-2">
          {navCards.map((c) => (
            <a
              key={c.title}
              href="#work"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-card bg-char p-3 text-paper"
            >
              <img
                src={c.img}
                alt=""
                loading="lazy"
                className="h-14 w-[72px] flex-none rounded-small object-cover"
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

      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={heroLandscape}
          alt="Concrete house set into a coastal mountain slope at dusk"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <p className="absolute left-6 top-6 max-w-[400px] text-[15px] leading-[1.5] text-paper md:left-10 md:top-10">
          Aker is a long-term developer of land, city and community. We acquire slowly,
          build deliberately, and hold what we make — because a place is only finished
          once it has been lived in.
        </p>
        <h1 className="display-mark absolute bottom-6 left-6 text-paper md:bottom-10 md:left-10">
          AKER
        </h1>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-20 md:px-10">
        <div className="max-w-[600px]">
          <p className="text-[12px] tracking-[0.12px] text-smoke">Core business areas</p>
          <h2 className="mt-[6px] text-[36px] font-light leading-[1.2] tracking-[-0.72px] md:text-[62px] md:leading-[1.1] md:tracking-[-1.55px]">
            What we do
          </h2>
          <p className="mt-6 font-lora text-[18px] leading-[1.5] tracking-[0.011em]">
            Four disciplines, one continuous line of responsibility. We stay on a site
            long after the last handover — the same team that underwrites a project
            operates it a decade later.
          </p>
          <a
            href="#work"
            className="mt-6 inline-flex items-center gap-2 text-[15px] text-ember"
          >
            Read the 2026 letter <Arrow />
          </a>
        </div>

        <ul className="mt-16 max-w-[600px]">
          {listItems.map((i) => (
            <li key={i.n} className="hairline-top flex items-baseline gap-6 py-6">
              <span className="w-8 text-[12px] text-smoke">{i.n}</span>
              <span className="text-[18px]">{i.label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="work" className="relative h-[70vh] w-full overflow-hidden">
        <img
          src={community}
          alt="Aerial view of a low-rise residential community with terracotta roofs"
          loading="lazy"
          width={1024}
          height={768}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
          <p className="text-[12px] tracking-[0.12px] text-mist">Selected work</p>
          <h2 className="mt-[6px] max-w-[700px] text-[36px] font-light leading-[1.2] tracking-[-0.72px] text-paper md:text-[62px] md:leading-[1.1]">
            Vestland Commons
          </h2>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1200px] gap-4 px-6 py-20 md:grid-cols-2 md:px-10">
        <article className="flex min-h-[420px] flex-col justify-between rounded-card bg-mist p-6">
          <div>
            <p className="text-[12px] tracking-[0.12px] text-pewter">Capital</p>
            <h3 className="mt-[6px] text-[36px] font-light leading-[1.2] tracking-[-0.72px]">
              Invest with Aker
            </h3>
          </div>
          <div className="flex items-end justify-between">
            <a href="#contact" className="inline-flex items-center gap-2 text-[15px]">
              Let's chat <Arrow />
            </a>
            <span className="text-[22px] font-light tracking-[-0.44px]">AKER</span>
          </div>
        </article>

        <article className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-card p-6">
          <img
            src={cityAerial}
            alt="Aerial view of a city waterfront at dawn"
            loading="lazy"
            width={1280}
            height={960}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative">
            <p className="text-[12px] tracking-[0.12px] text-mist">Partnerships</p>
            <h3 className="mt-[6px] text-[36px] font-light leading-[1.2] tracking-[-0.72px] text-paper">
              We're open to collaborate
            </h3>
          </div>
          <a
            href="#contact"
            className="relative inline-flex w-fit items-center gap-2 text-[15px] text-paper"
          >
            Our team <Arrow />
          </a>
        </article>
      </section>

      <section
        id="contact"
        className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 pb-20 md:flex-row md:items-end md:justify-between md:px-10"
      >
        <div className="max-w-[600px]">
          <p className="text-[12px] tracking-[0.12px] text-smoke">Get in touch</p>
          <h2 className="mt-[6px] text-[36px] font-light leading-[1.2] tracking-[-0.72px]">
            Tell us about the place you want to build.
          </h2>
        </div>
        <a
          href="mailto:hello@aker.com"
          className="inline-flex w-fit items-center gap-3 rounded-button bg-char px-4 py-[19px] text-[13px] font-medium text-paper"
        >
          Contact us <Arrow />
        </a>
      </section>

      <footer className="hairline-top mx-auto flex max-w-[1200px] items-center justify-between px-6 py-8 text-[12px] text-smoke md:px-10">
        <span>© 2026 Aker</span>
        <span>Oslo · Lisbon · Cape Town</span>
      </footer>
    </main>
  );
}
