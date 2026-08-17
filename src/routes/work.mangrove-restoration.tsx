import { createFileRoute } from "@tanstack/react-router";
import mangrove from "@/assets/ct-mangrove.jpg";
import { CtaBand, PageHeader, PointGrid } from "@/components/page-parts";

export const Route = createFileRoute("/work/mangrove-restoration")({
  head: () => ({
    meta: [
      { title: "Mangrove Restoration on the Tsunza-Mwache Creek | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Community nurseries, replanting and long-term protection along the Tsunza-Mwache creek. Ksh 100 plants and tends one mangrove seedling.",
      },
      { property: "og:title", content: "Bringing the mangroves back to the creek" },
      {
        property: "og:description",
        content: "Grow, plant, protect: community-led mangrove restoration in Kwale County, Kenya.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MangrovePage,
});

const steps = [
  {
    n: "01",
    title: "Grow",
    body: "Community nurseries raise mangrove seedlings from locally collected propagules, matched to the right species for each zone of the creek.",
  },
  {
    n: "02",
    title: "Plant",
    body: "Fisher folk, women's groups and youth plant along degraded creek at the right tide, guided by the community's own knowledge of the water.",
  },
  {
    n: "03",
    title: "Protect",
    body: "We monitor survival, guard against cutting, and keep replanting, because restoration is measured in years, not a single planting day.",
  },
];

const why = [
  {
    title: "Coastal protection",
    body: "Mangrove roots break waves and hold the shoreline, shielding villages, farms and jetties from erosion and storm surge.",
  },
  {
    title: "Blue carbon",
    body: "Mangroves store carbon in their soils far faster than most forests, making healthy creek a powerful climate asset.",
  },
  {
    title: "Fish nurseries",
    body: "The tangled roots shelter juvenile fish, crab and prawn, sustaining the catches families and mariculture depend on.",
  },
  {
    title: "Living livelihoods",
    body: "Restoration creates work in nurseries, planting and monitoring, and keeps the resources the community lives from intact.",
  },
];

function MangrovePage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Our Work"
        title="Bringing the mangroves back to the creek"
        intro="Mangrove restoration is the heart of what we do. We grow, plant and protect mangroves along the Tsunza-Mwache creek with the community that depends on them."
      />

      <section className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={mangrove}
          alt="Hands planting a mangrove seedling in tidal mud"
          width={1440}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>

      <section className="page-shell py-80">
        <div className="max-w-[700px]">
          <h2 className="section-heading-sm">A forest that works for everyone</h2>
          <p className="mt-24 text-body text-pewter">
            The Tsunza-Mwache creek was once thick with mangroves. Cutting for fuel and building,
            together with changing water, has thinned them, weakening the shore and the fishery.
            Working hand in hand with the community, we are reversing that, one nursery and one tide
            at a time.
          </p>
          <p className="mt-16 text-body text-pewter">
            Because the people who plant are the people who fish, restoration here is not a project
            that arrives and leaves. It is part of daily life on the peninsula.
          </p>
        </div>

        <h2 className="section-heading-sm mt-48">Grow, plant, protect</h2>
        <ul className="mt-24 max-w-[900px]">
          {steps.map((s) => (
            <li key={s.n} className="hairline-top flex flex-col gap-8 py-24 md:flex-row md:gap-24">
              <span className="w-32 flex-none text-[12px] text-smoke">{s.n}</span>
              <span className="w-[160px] flex-none text-subheading">{s.title}</span>
              <span className="text-body text-pewter">{s.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="page-shell pb-80">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="label-overline text-leaf">Why it matters</p>
          <h2 className="section-heading-sm mt-12">Why mangroves matter</h2>
        </div>
        <div className="mt-40">
          <PointGrid points={why} align="center" />
        </div>

        <ul className="mt-40 flex flex-wrap justify-center gap-8">
          {[
            "Ksh 100 plants and tends one mangrove seedling",
            "Nurseries run by local women's and youth groups",
            "Every tour adds seedlings and funds the nursery",
          ].map((f) => (
            <li key={f} className="badge bg-leaf/[0.09] text-pine">
              {f}
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        heading="Fund a mangrove, protect a coast"
        body="Your support grows nurseries, plants seedlings and keeps the creek protected for the community and the climate."
      />
    </main>
  );
}
