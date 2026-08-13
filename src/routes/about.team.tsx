import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHeader } from "@/components/page-parts";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Our Team — Rooted in the Community | ComTouch Kenya" },
      {
        name: "description",
        content:
          "ComTouch Kenya is run by people of the Tsunza-Mwache peninsula: nursery keepers, fisher folk, guides, craftspeople and coordinators.",
      },
      { property: "og:title", content: "A team rooted in the community it serves" },
      {
        property: "og:description",
        content: "The guide who reads the tides is the same person who plants the mangroves.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const roles = [
  {
    role: "Founder & Director",
    area: "Leadership",
    body: "Sets the direction of the organisation and holds the relationships between community, partners and funders.",
  },
  {
    role: "Mangrove Programme Lead",
    area: "Conservation",
    body: "Runs the nurseries, planting calendar and monitoring across the Tsunza-Mwache creek.",
  },
  {
    role: "Mariculture Coordinator",
    area: "Livelihoods",
    body: "Oversees the integrated mariculture project and the training that goes with it.",
  },
  {
    role: "Community & Eco-Tours Lead",
    area: "Community & Tours",
    body: "Coordinates guides, dance troupes and craftspeople, and the experiences that fund the work.",
  },
  {
    role: "Research Liaison",
    area: "Knowledge",
    body: "Hosts students and scientists and helps turn findings into practice on the ground.",
  },
  {
    role: "Finance & Administration",
    area: "Operations",
    body: "Keeps the organisation accountable, transparent and ready for partners and grants.",
  },
];

function TeamPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="About"
        title="A team rooted in the community it serves"
        intro="ComTouch Kenya is run by people of the Tsunza-Mwache peninsula, alongside coordinators and partners. The guide who reads the tides is the same person who plants the mangroves."
      />

      <section className="page-shell pb-80">
        <p className="max-w-[700px] text-body text-pewter">
          Our strength is that the work is local. Nursery keepers, fisher folk, women's and youth
          groups, guides and craftspeople all shape what we do. The roles below show how the
          organisation runs day to day. Full profiles and photographs are being added.
        </p>

        <ul className="mt-48">
          {roles.map((r) => (
            <li key={r.role} className="hairline-top flex flex-col gap-8 py-24 md:flex-row md:gap-24">
              <span className="w-[180px] flex-none text-[12px] text-smoke">{r.area}</span>
              <span className="w-[280px] flex-none text-subheading">{r.role}</span>
              <span className="text-body text-pewter">{r.body}</span>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand
        heading="Join the people doing the work"
        body="Donate, volunteer or partner with us and stand behind a community restoring its own coast."
      />
    </main>
  );
}
