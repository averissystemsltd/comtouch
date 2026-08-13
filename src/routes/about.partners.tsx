import { createFileRoute } from "@tanstack/react-router";
import { Arrow } from "@/components/arrow";
import { CtaBand, PageHeader, PointGrid } from "@/components/page-parts";
import { contact } from "@/data/site";

export const Route = createFileRoute("/about/partners")({
  head: () => ({
    meta: [
      { title: "Partners — Restore a Coast With Us | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Programme funding, research collaboration, corporate CSR, technical support and government partnership on the Tsunza-Mwache peninsula.",
      },
      { property: "og:title", content: "Partner with us to restore a coast" },
      {
        property: "og:description",
        content: "Six ways to work with a community-based environmental organisation in Kwale County, Kenya.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

const ways = [
  {
    title: "Programme funding",
    body: "Grants and multi-year support for mangrove nurseries, replanting, mariculture training and monitoring. We report transparently on where funds go and what they achieve.",
  },
  {
    title: "Research collaboration",
    body: "Co-designed studies on mangroves, blue carbon and coastal ecology, with field access, local knowledge and a community ready to put findings to work.",
  },
  {
    title: "Corporate & CSR",
    body: "Sponsorships, team planting days, employee engagement and carbon-linked support that connects your organisation to measurable coastal restoration.",
  },
  {
    title: "Technical & in-kind",
    body: "Boats, equipment, seedlings, mapping, training and expertise. Practical contributions that stretch every shilling further on the ground.",
  },
  {
    title: "Government & institutions",
    body: "Coordination with county and national bodies for forests, fisheries and the marine environment, aligning our work with public plans and policy.",
  },
  {
    title: "Community partnership",
    body: "The foundation of everything: fisher folk, women's and youth groups and craftspeople who lead the work and share directly in its benefits.",
  },
];

function PartnersPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="About"
        title="Partner with us to restore a coast"
        intro="A shoreline recovers faster when community, science, funding and government pull together. We build partnerships that turn shared commitment into mangroves in the ground and livelihoods that last."
      />

      <section className="page-shell pb-48">
        <p className="max-w-[700px] text-body text-pewter">
          ComTouch Kenya is a community-based environmental organisation on the Tsunza-Mwache
          peninsula. Our strength is that the work is local and trusted, and our need is the
          reach, resources and knowledge that good partners bring. Whether you are a funder, a
          university, a company or a public agency, there is a real role for you here, and a
          community ready to make the most of it.
        </p>
      </section>

      <section className="page-shell pb-80">
        <h2 className="section-heading-sm">Ways to partner</h2>
        <div className="mt-32">
          <PointGrid points={ways} columns={3} />
        </div>

        <div className="mt-48 rounded-[8px] bg-midnight p-24 text-paper md:p-48">
          <h2 className="section-heading-sm">Our partners</h2>
          <p className="mt-16 max-w-[700px] text-body text-mist">
            We are grateful to everyone standing behind this coast. As collaborations are
            confirmed, our partners will appear here.
          </p>
          <div className="mt-32 grid gap-16 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex h-64 items-center justify-center rounded-[3.2px] border border-iron text-[12px] text-smoke"
              >
                Partner
              </div>
            ))}
          </div>
          <a href={`mailto:${contact.email}`} className="btn-text mt-32 text-paper">
            Let's explore what we could do together <Arrow />
          </a>
        </div>
      </section>

      <CtaBand
        heading="Help us bring the coast back"
        body="Donate, volunteer or partner with us — every route supports the Tsunza-Mwache community and the mangroves it protects."
      />
    </main>
  );
}
