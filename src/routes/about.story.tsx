import { createFileRoute } from "@tanstack/react-router";
import creek from "@/assets/ct-hero-creek.jpg";
import { CtaBand, PageHeader, PointGrid } from "@/components/page-parts";

export const Route = createFileRoute("/about/story")({
  head: () => ({
    meta: [
      { title: "Our Story — A Community Protecting Its Own Coast | ComTouch Kenya" },
      {
        name: "description",
        content:
          "ComTouch Kenya is a community-based environmental organisation on the Tsunza-Mwache peninsula, restoring mangroves and building coastal livelihoods.",
      },
      { property: "og:title", content: "A community protecting its own coast" },
      {
        property: "og:description",
        content: "Where fishing, farming and the forest meet on the Tsunza-Mwache peninsula, Kwale County.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoryPage,
});

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
        intro="ComTouch Kenya is a community-based environmental organisation on the Tsunza-Mwache peninsula in Kwale County. We restore mangroves, advance sustainable mariculture, support coastal research, and run eco-tourism that sustains it all."
      />

      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={creek}
          alt="The Tsunza-Mwache creek at first light"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>

      <section className="page-shell py-80">
        <div className="max-w-[700px]">
          <h2 className="section-heading-sm">Where fishing, farming and the forest meet</h2>
          <p className="mt-24 text-body text-pewter">
            Tsunza is a fishing village and community, shaped by the tide. Its mangroves protect
            the shore, feed the fishery and store carbon, but years of cutting and change have
            thinned them. We exist to turn that around, restoring the forest while building
            livelihoods that let people and nature thrive together.
          </p>
          <p className="mt-16 text-body text-pewter">
            Every guide who explains the tides is the same person who fishes by them and plants
            along the creek. That is our whole approach in a sentence.
          </p>

          <h2 className="section-heading-sm mt-48">Rooted at TSUMBUCOFA</h2>
          <p className="mt-16 text-body text-pewter">
            Our community events, crafts and gatherings centre on the TSUMBUCOFA multipurpose
            hall, the same venue behind the annual Ngoma ya Mulungu rain-dance at Kaya Chonyi. It
            is where livelihoods, culture and conservation meet.
          </p>
        </div>

        <h2 className="section-heading-sm mt-48">The values behind the work</h2>
        <div className="mt-32">
          <PointGrid points={values} />
        </div>
      </section>

      <CtaBand
        heading="Help us bring the coast back"
        body="Donate, volunteer or partner with us — every route supports the Tsunza-Mwache community and the mangroves it protects."
      />
    </main>
  );
}
