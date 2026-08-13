import { createFileRoute } from "@tanstack/react-router";
import { Arrow } from "@/components/arrow";
import { CtaBand, PageHeader, PointGrid } from "@/components/page-parts";
import { contact } from "@/data/site";

export const Route = createFileRoute("/work/research")({
  head: () => ({
    meta: [
      { title: "Research & Collaboration on the Tsunza-Mwache Peninsula | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Field access, local knowledge and coastal logistics for students and scientists studying mangroves, blue carbon, mariculture and coastal ecology in Kwale County.",
      },
      { property: "og:title", content: "Research that meets the coast where it lives" },
      {
        property: "og:description",
        content: "A living laboratory of mangrove creek, restoration sites and a working mariculture project.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ResearchPage,
});

const offers = [
  {
    title: "Field access",
    body: "Access to mangrove creek, restoration sites, the mariculture project and the wider Tsunza-Mwache landscape.",
  },
  {
    title: "Local knowledge",
    body: "Guides and community members who read the tides and the forest, and can support fieldwork and data collection.",
  },
  {
    title: "Logistics on the coast",
    body: "Help with boats, meeting points and introductions, so time on the ground is spent on the work.",
  },
  {
    title: "A route to impact",
    body: "A community ready to put sound findings into practice, from restoration methods to livelihood design.",
  },
];

const topics = [
  "Mangrove restoration methods and survival rates",
  "Blue carbon measurement and monitoring",
  "Integrated mariculture and fisheries",
  "Coastal ecology, birds and biodiversity",
  "Community-based natural resource management",
  "Climate resilience and coastal protection",
];

function ResearchPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Our Work"
        title="Research that meets the coast where it lives"
        intro="We welcome students, scientists and institutions to study the Tsunza-Mwache peninsula, and we help turn what they learn into better practice on the ground."
      />

      <section className="page-shell pb-48">
        <p className="max-w-[700px] text-body text-pewter">
          The peninsula is a rich living laboratory — mangrove creek, restoration sites, a working
          mariculture project and a community that manages it all. We partner with researchers
          whose work can strengthen coastal conservation and livelihoods, and who share their
          findings openly with the people who live here.
        </p>
      </section>

      <section className="page-shell pb-80">
        <h2 className="section-heading-sm">What we offer researchers</h2>
        <div className="mt-32">
          <PointGrid points={offers} />
        </div>

        <h2 className="section-heading-sm mt-48">Topics we can support</h2>
        <ul className="mt-24 max-w-[900px]">
          {topics.map((t) => (
            <li key={t} className="hairline-top py-16 text-body text-iron">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-48 max-w-[700px]">
          <h2 className="section-heading-sm">How to collaborate</h2>
          <p className="mt-16 text-body text-pewter">
            Tell us about your study, your timeline and what you need on the ground. We will talk
            through access, community involvement and how findings can be shared and used.
            Institutional partnerships and student placements are both welcome.
          </p>
          <a href={`mailto:${contact.email}`} className="btn-text mt-16 text-ember">
            Start a conversation <Arrow />
          </a>
        </div>
      </section>

      <CtaBand
        heading="Partner with us on the coast"
        body="Research, funding and collaboration all help the Tsunza-Mwache community protect its mangroves and build a resilient coast."
      />
    </main>
  );
}
