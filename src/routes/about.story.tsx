import { createFileRoute } from "@tanstack/react-router";
import heroSunset from "@/assets/ct-creek-sunset.jpg";
import sdg1 from "@/assets/sdg/sdg-01.png";
import sdg4 from "@/assets/sdg/sdg-04.png";
import sdg8 from "@/assets/sdg/sdg-08.png";
import sdg13 from "@/assets/sdg/sdg-13.png";
import sdg14 from "@/assets/sdg/sdg-14.png";
import sdg15 from "@/assets/sdg/sdg-15.png";
import { CtaBand, PageHeader, PointGrid } from "@/components/page-parts";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/about/story")({
  head: () => ({
    meta: [
      { title: "Our Story: A Community Protecting Its Own Coast | ComTouch Kenya" },
      {
        name: "description",
        content:
          "ComTouch Kenya is a community-based environmental organisation on the Tsunza-Mwache peninsula, restoring mangroves, building sustainable livelihoods and running eco-tours that fund the work.",
      },
      { property: "og:title", content: "A community protecting its own coast" },
      {
        property: "og:description",
        content:
          "Where fishing, farming, culture and the forest meet on the Tsunza-Mwache peninsula, Kwale County.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoryPage,
});

const sdgs = [
  {
    img: sdg13,
    alt: "UN Sustainable Development Goal 13: Climate Action",
    note: "Mangroves as blue carbon",
  },
  {
    img: sdg14,
    alt: "UN Sustainable Development Goal 14: Life Below Water",
    note: "A living creek and fishery",
  },
  {
    img: sdg15,
    alt: "UN Sustainable Development Goal 15: Life on Land",
    note: "Forests and sacred kayas",
  },
  {
    img: sdg8,
    alt: "UN Sustainable Development Goal 8: Decent Work and Economic Growth",
    note: "Eco-tourism livelihoods",
  },
  {
    img: sdg1,
    alt: "UN Sustainable Development Goal 1: No Poverty",
    note: "Income that stays local",
  },
  {
    img: sdg4,
    alt: "UN Sustainable Development Goal 4: Quality Education",
    note: "Eco-learning for all",
  },
];

const values = [
  {
    title: "Community first",
    body: "The people of Tsunza-Mwache lead the work and share directly in its benefits. Nothing is done to the community, everything is done with it.",
  },
  {
    title: "Restore and protect",
    body: "We grow, plant and guard mangroves for the long term, because a coast recovers over years, not in a single planting day.",
  },
  {
    title: "Livelihoods that last",
    body: "Mariculture, crafts and eco-tourism give families reasons and resources to keep the environment healthy.",
  },
  {
    title: "Knowledge, shared",
    body: "We host research and pass on what we learn, from tides and species to restoration that actually works.",
  },
];

function StoryPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="About"
        title="A community protecting its own coast"
        intro="Community Touch Kenya is a community-based environmental organisation on the Tsunza-Mwache peninsula in Kwale County, restoring mangroves, building sustainable livelihoods and running eco-tours that fund it all."
      />

      {/* Hero image */}
      <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden">
        <img
          src={heroSunset}
          alt="Dusk over the Mwache creek and its mangroves, seen from the bridge to the peninsula"
          width={2750}
          height={1547}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0">
          <div className="page-shell pb-32">
            <p className="text-[13px] tracking-[0.02em] text-mist">
              Dusk over the Mwache creek, Tsunza-Mwache peninsula
            </p>
          </div>
        </div>
      </section>

      {/* The story */}
      <section className="page-shell py-[96px] md:py-[128px]">
        <div className="max-w-[760px]">
          <Reveal>
            <p className="font-lora text-heading-sm font-normal leading-snug tracking-[0.005em] text-ink">
              For the people of Tsunza-Mwache, the coast is not a view. It is home, larder and
              inheritance, and it moves to the rhythm of the tide.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-32 text-body text-pewter">
              This is a fishing community shaped by the water. For generations the mangroves along
              the creek have broken the waves, sheltered the fish and held the shoreline together.
              But years of cutting for fuel and timber, and a changing climate, thinned the forest,
              and with it the catch and the protection it once gave.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-16 text-body text-pewter">
              Community Touch Kenya grew out of a decision to turn that around, not with a project
              that arrives and leaves, but with the people who live here. The guide who reads the
              tide is the same person who fishes by it and plants along the creek. Restoration,
              here, is daily life.
            </p>
          </Reveal>
        </div>

        <div className="mt-48 max-w-[760px]">
          <Reveal>
            <h2 className="font-lora text-heading-sm font-normal text-pine">
              Protecting a coast by giving people a stake in it
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-24 text-body text-pewter">
              A forest recovers over years, not in a single planting day. So alongside the nurseries
              and the replanting, we build livelihoods that make a healthy coast worth keeping:
              sustainable mariculture in the creek, crafts made from what the land gives, and
              eco-tours that invite visitors to take part rather than look on. Every tour plants
              mangroves and pays the community directly, turning a day out into restoration that
              lasts.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-16 text-body text-pewter">
              Culture holds it together. The crafts, gatherings and the annual Ngoma ya Mulungu
              rain-dance at Kaya Chonyi centre on the TSUMBUCOFA hall, where livelihoods, heritage
              and conservation meet.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sustainability & the Global Goals */}
      <section className="bg-mist">
        <div className="page-shell py-[96px] md:py-[112px]">
          <div className="mx-auto max-w-[740px] text-center">
            <Reveal>
              <p className="label-overline text-leaf">Sustainability</p>
              <h2 className="section-heading-sm mt-12">Our work and the Global Goals</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="mt-16 text-body text-pewter">
                Restoring mangroves, farming the creek in balance, guiding visitors and hosting
                research all pull towards the same end: a coast that stays healthy and a community
                that thrives on it. That work maps directly onto the United Nations Sustainable
                Development Goals.
              </p>
            </Reveal>
          </div>

          <Stagger className="mx-auto mt-48 grid max-w-[1000px] grid-cols-2 gap-16 sm:grid-cols-3 lg:grid-cols-6">
            {sdgs.map((s) => (
              <StaggerItem key={s.alt}>
                <figure className="text-center">
                  <img
                    src={s.img}
                    alt={s.alt}
                    width={500}
                    height={500}
                    loading="lazy"
                    className="w-full rounded-[8px]"
                  />
                  <figcaption className="mt-10 text-[12px] leading-snug text-pewter">
                    {s.note}
                  </figcaption>
                </figure>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Values */}
      <section className="page-shell py-[96px] md:py-[128px]">
        <div className="mx-auto max-w-[640px] text-center">
          <Reveal>
            <p className="label-overline text-leaf">What guides us</p>
            <h2 className="section-heading-sm mt-12">The values behind the work</h2>
          </Reveal>
        </div>
        <div className="mt-40">
          <PointGrid points={values} align="center" />
        </div>
      </section>

      <CtaBand
        heading="Help us bring the coast back"
        body="Donate, volunteer or partner with us. Every route supports the Tsunza-Mwache community and the mangroves it protects."
      />
    </main>
  );
}
