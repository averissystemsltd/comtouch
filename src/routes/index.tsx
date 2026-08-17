import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import heroCreek from "@/assets/ct-hero-creek.jpg";
import culture from "@/assets/ct-culture.jpg";
import boat from "@/assets/ct-boat.jpg";
import mariculture from "@/assets/ct-mariculture.jpg";
import mangrove from "@/assets/ct-mangrove.jpg";
import fishing from "@/assets/ct-fishing.jpg";
import kaya from "@/assets/ct-kaya.jpg";
import bridge from "@/assets/ct-bridge.jpg";
import { Arrow } from "@/components/arrow";
import { YoutubeBackground } from "@/components/youtube-background";
import { CtaBand } from "@/components/page-parts";
import { Reveal, Stagger, StaggerItem, AnimatedLink } from "@/components/motion";
import { CountUp, Parallax } from "@/components/gsap";
import { ExperiencesShowcase } from "@/components/experiences-showcase";
import { FaqAccordion } from "@/components/faq-accordion";
import { faqs } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ComTouch Kenya | Community Eco-Tours on the Tsunza-Mwache Coast" },
      {
        name: "description",
        content:
          "Community-led eco-tours across the tides, mangroves, food and dances of the Tsunza-Mwache peninsula. Every visit plants mangroves and pays the community directly.",
      },
      {
        property: "og:title",
        content: "ComTouch Kenya | Experience the living coast of Tsunza-Mwache",
      },
      {
        property: "og:description",
        content:
          "Community-led experiences in Kwale County, Kenya. Mangrove restoration, mariculture and coastal research behind every tour.",
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
    img: mangrove,
    label: "Mangrove Restoration",
    body: "Community nurseries, replanting and long-term protection along the creek. Every tour adds seedlings, and Ksh 100 of each one funds the nursery.",
  },
  {
    to: "/work/mariculture",
    bg: "bg-tide",
    img: mariculture,
    label: "Sustainable Mariculture",
    body: "The Tsunza Integrated Mariculture project grows fish, crab and prawn in balance with the creek, so families earn without emptying the wild.",
  },
  {
    to: "/work/research",
    bg: "bg-midnight",
    img: kaya,
    label: "Research & Collaboration",
    body: "We host students and scientists studying mangroves, blue carbon and coastal ecology, and turn findings into practice on the ground.",
  },
] as const;

const stats = [
  {
    value: 13,
    prefix: "",
    suffix: "",
    label: "guided experiences",
    sub: "across five ways of life",
  },
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "community-led",
    sub: "guides, cooks, dancers, makers",
  },
  {
    value: 100,
    prefix: "Ksh ",
    suffix: "",
    label: "plants one seedling",
    sub: "on every single tour",
  },
  {
    value: 4,
    prefix: "",
    suffix: "",
    label: "dance traditions",
    sub: "Rawawe, kayamba, ngoma, mdundiko",
  },
];

const moments = [
  { img: culture, caption: "Ngoma ya Mulungu: the rain dance at Kaya Chonyi" },
  { img: boat, caption: "Dhow sailing: scenic sails across the creek" },
  { img: fishing, caption: "Fishing the tide: traditional gear and the uzio trap" },
  { img: kaya, caption: "Palm wine tapping: a livelihood and a ritual" },
  { img: mangrove, caption: "Mangrove planting: restoration on every tour" },
  { img: bridge, caption: "The new bridge reaching the Tsunza-Mwache peninsula" },
];

// Editorial bento layout for the moments gallery (md and up); mobile is a plain 2-col grid.
const momentSpans = [
  "md:col-span-2 md:row-span-2",
  "",
  "md:row-span-2",
  "",
  "md:col-span-2",
  "md:col-span-2",
];

const EASE = [0.22, 1, 0.36, 1] as const;

function Home() {
  const reduce = useReducedMotion();

  return (
    <main className="bg-paper text-ink">
      {/* Hero */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <YoutubeBackground
          poster={heroCreek}
          posterAlt="Boats on Tudor Creek near the Tsunza-Mwache peninsula"
        />

        <div className="absolute inset-x-0 bottom-0 z-10">
          <div className="page-shell pb-[56px] md:pb-[72px]">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
              className="label-overline text-mist"
            >
              Tsunza-Mwache peninsula · Kwale County, Kenya
            </motion.p>
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
              className="section-heading mt-12 max-w-[900px] text-paper"
            >
              Discover Tsunza through Community Touch Kenya
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.32 }}
              className="mt-16 max-w-[560px] text-subheading text-mist"
            >
              Step into the rhythm of the coast with the people who live it. Fish the tide, plant a
              mangrove, share a meal, and sit with the drums. Every visit goes straight back to the
              community.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.44 }}
              className="mt-24 flex flex-wrap items-center gap-16"
            >
              <Link to="/book" className="btn-filled">
                Book a Tour <Arrow />
              </Link>
              <Link to="/eco-tours" className="btn-outline text-paper">
                See all experiences <Arrow />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        {!reduce && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-[20px] left-1/2 z-10 hidden -translate-x-1/2 md:block"
          >
            <span className="flex h-[46px] w-[26px] items-start justify-center rounded-full border border-paper/50 p-2">
              <motion.span
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="mt-2 block h-2 w-1 rounded-full bg-paper/80"
              />
            </span>
          </motion.div>
        )}
      </section>

      {/* Invitation — the reframed intro */}
      <section className="page-shell py-[96px] md:py-[136px]">
        <div className="grid gap-64 md:grid-cols-[1fr_0.85fr] md:items-center">
          <div className="max-w-[620px]">
            <Reveal>
              <p className="label-overline text-leaf">Karibu · welcome to the peninsula</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-heading mt-12">
                A coast you don&apos;t just visit, you take part in
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-24 font-lora text-subheading tracking-[0.011em] text-iron">
                Tsunza-Mwache is a tidal peninsula of mangrove creek, fishing villages, palm groves
                and sacred forests. Spend a day here and you fish by the tide, plant a mangrove,
                taste food pounded and grated by hand, and sit with dancers whose drums keep the
                community&apos;s time.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="mt-24 flex flex-wrap gap-8">
                {["Fish the tide", "Plant a mangrove", "Share a meal", "Sit with the drums"].map(
                  (t) => (
                    <li
                      key={t}
                      className="rounded-[1584px] bg-leaf/[0.09] px-14 py-6 text-[13px] text-pine"
                    >
                      {t}
                    </li>
                  ),
                )}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-32">
                <AnimatedLink to="/eco-tours" className="text-leaf">
                  See how a day on the peninsula unfolds
                </AnimatedLink>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mx-auto max-w-[440px]">
              {/* soft organic accent for depth */}
              <div
                className="absolute -bottom-16 -right-12 h-full w-full rounded-[24px] rounded-tr-[160px] rounded-bl-[160px] bg-leaf/10"
                aria-hidden="true"
              />
              <div className="relative overflow-hidden rounded-[24px] rounded-tr-[160px] rounded-bl-[160px] shadow-[0_40px_80px_-36px_rgba(11,58,46,0.55)]">
                <Parallax amount={70}>
                  <img
                    src={boat}
                    alt="A guide and visitor laughing as they paddle a canoe through the mangrove creek"
                    loading="lazy"
                    width={1440}
                    height={1800}
                    className="aspect-[4/5] w-full scale-110 object-cover"
                  />
                </Parallax>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Impact stats */}
      <section className="bg-tide text-paper">
        <div className="page-shell py-[88px] md:py-[112px]">
          <Reveal className="max-w-[640px]">
            <p className="label-overline text-leaf">The measure of a visit</p>
            <h2 className="section-heading-sm mt-12 text-paper">
              Every day out leaves the coast better than it found it
            </h2>
          </Reveal>
          <Stagger className="mt-56 grid gap-x-24 gap-y-40 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <StaggerItem
                key={s.label}
                className="border-t border-paper/15 pt-20 lg:border-l lg:border-t-0 lg:pl-24 lg:pt-0"
              >
                <p className="text-[56px] font-light leading-none tracking-[-0.03em] text-paper">
                  <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
                </p>
                <p className="mt-16 text-subheading text-paper">{s.label}</p>
                <p className="mt-4 text-[13px] text-mist/60">{s.sub}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Experiences */}
      <section className="page-shell py-[96px] md:py-[136px]">
        <div className="flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[620px]">
            <Reveal>
              <p className="label-overline text-leaf">Experiences</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-heading-sm mt-12">Ways into the peninsula</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-16 text-body text-pewter">
                Thirteen ways to spend a day here, from dhow sailing and traditional fishing to
                dances, palm wine and mangrove planting. Filter by what draws you, then open any
                experience for the full plan and cost.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <AnimatedLink to="/eco-tours" className="text-leaf">
              See all 13
            </AnimatedLink>
          </Reveal>
        </div>

        <ExperiencesShowcase />
      </section>

      {/* Culture feature */}
      <section className="relative h-[80vh] min-h-[560px] w-full overflow-hidden">
        <Parallax amount={90} className="absolute inset-0">
          <img
            src={culture}
            alt="Community elders sharing traditional craft and dance on the peninsula"
            loading="lazy"
            width={1440}
            height={1080}
            className="h-[120%] w-full object-cover"
          />
        </Parallax>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="page-shell max-w-[760px] pb-[56px] md:pb-[72px]">
            <Reveal>
              <span className="badge bg-paper/15 text-paper">Culture & dance</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-heading-sm mt-16 text-paper">Culture kept, not performed</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-16 text-body text-mist">
                The dances here are prayers and celebrations, not a show put on for visitors. You
                are welcomed into Rawawe, kayamba, ngoma ya mulungu and mdundiko, the same dances
                the community holds for rain, harvest and marriage.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-24">
                <AnimatedLink
                  to="/eco-tours/$slug"
                  params={{ slug: "cultural-local-dance" }}
                  className="text-paper"
                >
                  Explore culture & dance
                </AnimatedLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The work behind every visit */}
      <section className="page-shell py-[96px] md:py-[136px]">
        <div className="max-w-[720px]">
          <Reveal>
            <p className="label-overline text-leaf">The work behind every visit</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-heading mt-12">More than a tour</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-24 font-lora text-subheading tracking-[0.011em] text-iron">
              ComTouch Kenya is a community-based environmental organisation. Tourism is one arm;
              our mission is a living, protected coast.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-48 grid gap-16 md:grid-cols-3">
          {workAreas.map((w) => (
            <StaggerItem key={w.label}>
              <Link
                to={w.to}
                className={`group relative flex min-h-[360px] flex-col justify-end overflow-hidden rounded-[8px] ${w.bg} p-24 text-paper`}
              >
                <img
                  src={w.img}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-35 transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="relative">
                  <span className="badge bg-paper/15 text-paper">{w.label}</span>
                  <p className="mt-16 text-body text-mist">{w.body}</p>
                  <span className="mt-16 inline-flex items-center gap-8 text-[13px] font-medium text-paper">
                    Read more
                    <span className="transition-transform duration-500 group-hover:translate-x-1.5">
                      <Arrow size={15} />
                    </span>
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Quote */}
      <section className="bg-mist">
        <div className="page-shell py-[96px] md:py-[128px]">
          <Reveal>
            <blockquote className="mx-auto max-w-[960px] text-center">
              <p className="section-heading font-light text-pine">
                &ldquo;Come for the dhows, the drums and the tide. Leave having planted a mangrove
                and paid a coast forward.&rdquo;
              </p>
              <footer className="mt-24 text-[13px] uppercase tracking-[0.14em] text-smoke">
                A day with ComTouch Kenya
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Moments */}
      <section className="page-shell py-[96px] md:py-[136px]">
        <Reveal className="text-center">
          <h2 className="section-heading-sm">Moments from the peninsula</h2>
        </Reveal>
        <Reveal delay={0.05} className="mt-16 flex justify-center">
          <AnimatedLink to="/media" className="text-leaf">
            Watch the film
          </AnimatedLink>
        </Reveal>
        <Stagger className="mt-48 grid grid-cols-2 gap-12 md:auto-rows-[200px] md:grid-cols-4 md:[grid-auto-flow:dense]">
          {moments.map((m, i) => (
            <StaggerItem key={i} className={momentSpans[i] ?? ""}>
              <div className="group relative aspect-[4/3] h-full overflow-hidden rounded-[8px] md:aspect-auto">
                <img
                  src={m.img}
                  alt={m.caption}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* FAQ */}
      <section className="bg-mist">
        <div className="page-shell py-[96px] md:py-[128px]">
          <Reveal className="text-center">
            <p className="label-overline text-leaf">Good to know</p>
            <h2 className="section-heading-sm mt-12">Frequently asked questions</h2>
          </Reveal>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CtaBand
        heading="Support the coast beyond a visit"
        body="Book a tour, volunteer your time, fund a mangrove or partner with us. Every route sustains the community and the coast."
      />
    </main>
  );
}
