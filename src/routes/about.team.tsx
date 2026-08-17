import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHeader } from "@/components/page-parts";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Our Team | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Meet the team leading Community Touch Kenya on the Tsunza-Mwache peninsula: founder Juma Mashanga, and the programmes, research and marketing leads.",
      },
      { property: "og:title", content: "The team behind Community Touch Kenya" },
      {
        property: "og:description",
        content: "A community-rooted team leading conservation, eco-tours, research and outreach.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

type Member = { name: string; role: string; tag?: string };

const team: Member[] = [
  { name: "Juma Mashanga", role: "Founder & Director" },
  { name: "Said Bidu", role: "Programs Coordinator", tag: "Community & Eco-Tours Lead" },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function TeamPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="About"
        title="Our team"
        intro="Community Touch Kenya is led by people rooted in the Tsunza-Mwache peninsula, across conservation, community experiences, research and outreach."
      />

      <section className="page-shell pb-[112px]">
        <Stagger className="grid max-w-[600px] gap-16 sm:grid-cols-2">
          {team.map((m) => (
            <StaggerItem key={m.name}>
              <figure className="group">
                {/* Placeholder portrait — real photographs to follow */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] bg-gradient-to-br from-mist to-[#e7ece6] ring-1 ring-mist">
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-[44px] font-light tracking-[0.06em] text-pine/35">
                      {initials(m.name)}
                    </span>
                  </div>
                  <span className="absolute left-12 top-12 rounded-[1584px] bg-paper/85 px-10 py-4 text-[11px] tracking-[0.02em] text-smoke backdrop-blur">
                    Photo coming soon
                  </span>
                </div>
                <figcaption className="mt-16">
                  <h2 className="text-subheading text-ink">{m.name}</h2>
                  <p className="mt-2 text-[13px] font-medium text-leaf">{m.role}</p>
                  {m.tag && <p className="mt-1 text-[12px] text-smoke">{m.tag}</p>}
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <CtaBand
        heading="Join the people doing the work"
        body="Donate, volunteer or partner with us and stand behind a community restoring its own coast."
      />
    </main>
  );
}
