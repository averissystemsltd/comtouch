import { createFileRoute, Link } from "@tanstack/react-router";
import fishing from "@/assets/ct-fishing.jpg";
import { Arrow } from "@/components/arrow";
import { CtaBand, PageHeader, PointGrid } from "@/components/page-parts";

export const Route = createFileRoute("/work/mariculture")({
  head: () => ({
    meta: [
      { title: "Sustainable Mariculture on the Kenyan Coast | ComTouch Kenya" },
      {
        name: "description",
        content:
          "The Tsunza Integrated Mariculture project raises fish, crab and prawn in balance with the mangrove creek, giving families income without emptying the wild.",
      },
      { property: "og:title", content: "Growing seafood in balance with the sea" },
      {
        property: "og:description",
        content:
          "Community-run mariculture that protects the creek by giving people a stake in its health.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MariculturePage,
});

const points = [
  {
    title: "Incomes that protect",
    body: "Farmed fish, crab and prawn give families a steady income, so there is less need to overfish the creek or cut the forest.",
  },
  {
    title: "In balance with the creek",
    body: "Ponds and cages are sited and managed to work with the mangroves and tides, not against them.",
  },
  {
    title: "Skills that stay",
    body: "Community members learn hatchery, feeding and harvest skills that build lasting local expertise.",
  },
  {
    title: "A living classroom",
    body: "The project is a place to learn integrated mariculture, for visitors, students and other coastal communities.",
  },
];

function MariculturePage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Our Work"
        title="Growing seafood in balance with the sea"
        intro="Sustainable mariculture turns the creek into a livelihood without emptying it. The Tsunza Integrated Mariculture project raises fish, crab and prawn alongside the mangroves that shelter them."
      />

      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={fishing}
          alt="A fisherman setting a woven trap in shallow creek water"
          width={1440}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>

      <section className="page-shell py-80">
        <div className="max-w-[700px]">
          <h2 className="section-heading-sm">Livelihoods that ease the pressure</h2>
          <p className="mt-24 text-body text-pewter">
            When the only income is the wild catch, a hard season pushes people to fish harder or
            cut mangroves to sell. Mariculture offers another path, growing seafood in managed ponds
            and cages so families earn a living while the wild creek recovers.
          </p>
          <p className="mt-16 text-body text-pewter">
            It is a practical, community-run answer to a real tension on the coast, protecting
            nature by giving people a stake in keeping it healthy.
          </p>
        </div>

        <div className="mx-auto mt-64 max-w-[640px] text-center">
          <p className="label-overline text-leaf">The balance</p>
          <h2 className="section-heading-sm mt-12">Good for people and the creek</h2>
        </div>
        <div className="mt-40">
          <PointGrid points={points} align="center" />
        </div>
      </section>

      <section className="page-shell pb-80">
        <article className="rounded-[8px] bg-tide p-24 text-paper md:p-48">
          <h2 className="section-heading-sm max-w-[700px]">See it for yourself</h2>
          <p className="mt-16 max-w-[700px] text-body text-mist">
            Our Fishing, Crab & Prawn Farming experience takes visitors right into the mariculture
            project, alongside traditional gear and the uzio fish trap. It is the clearest way to
            understand how conservation and livelihoods fit together on the peninsula.
          </p>
          <Link
            to="/eco-tours/$slug"
            params={{ slug: "fishing-crab-prawn-farming" }}
            className="btn-text mt-24 text-paper"
          >
            Fishing, Crab & Prawn Farming <Arrow />
          </Link>
        </article>
      </section>

      <CtaBand
        heading="Back livelihoods that protect nature"
        body="Support helps expand training and sustainable mariculture, so more families can earn a living without emptying the creek."
      />
    </main>
  );
}
