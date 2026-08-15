import { createFileRoute } from "@tanstack/react-router";
import { Arrow } from "@/components/arrow";
import { CtaBand, PageHeader, PointGrid } from "@/components/page-parts";
import { contact } from "@/data/site";

export const Route = createFileRoute("/get-involved/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer on the Kenyan Coast | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Plant mangroves, tend community nurseries and support coastal research with the Tsunza-Mwache community. Days, weeks, groups and students welcome.",
      },
      { property: "og:title", content: "Give your time to a living coast" },
      {
        property: "og:description",
        content: "Hands-in-the-mud volunteering with a community-based environmental organisation in Kwale County.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VolunteerPage,
});

const ways = [
  {
    title: "Plant mangroves",
    body: "Join community planting days along the creek, at the right tide, guided by the people who know the water.",
  },
  {
    title: "Support the nurseries",
    body: "Help collect propagules, fill and tend nursery beds, and care for seedlings before they are planted.",
  },
  {
    title: "Assist research",
    body: "Support monitoring and data collection with our team and visiting researchers.",
  },
  {
    title: "Share your skills",
    body: "Photography, storytelling, teaching, fundraising; if you have a skill the coast can use, we would love to hear from you.",
  },
];

const goodToKnow = [
  "Most work is outdoors and tide-dependent, on and around the creek.",
  "We will confirm the meeting point, what to bring and safety guidance before you arrive.",
  "Groups, students and individuals are all welcome; tell us your dates and interests.",
  "We recommend appropriate travel and medical insurance for your visit.",
];

function VolunteerPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Get Involved"
        title="Give your time to a living coast"
        intro="Volunteers work shoulder to shoulder with the community, planting mangroves, tending nurseries and supporting research. It is hands-in-the-mud work, and it matters."
      />

      <section className="page-shell pb-48">
        <p className="max-w-[700px] text-body text-pewter">
          Volunteering with ComTouch Kenya means joining the community, not watching from the
          outside. Whether you have a single day or several weeks, there is real work to do, and
          a lot to learn about mangroves, tides and coastal life.
        </p>
      </section>

      <section className="page-shell pb-80">
        <h2 className="section-heading-sm">Ways to help</h2>
        <div className="mt-32">
          <PointGrid points={ways} />
        </div>

        <h2 className="section-heading-sm mt-48">Good to know</h2>
        <ul className="mt-24 max-w-[900px]">
          {goodToKnow.map((g) => (
            <li key={g} className="hairline-top py-16 text-body text-iron">
              {g}
            </li>
          ))}
        </ul>

        <div className="mt-48 max-w-[700px]">
          <h2 className="section-heading-sm">Ready to join?</h2>
          <p className="mt-16 text-body text-pewter">
            Tell us a little about yourself, when you would like to come and how long you can
            stay. We will take it from there.
          </p>
          <a
            href={`mailto:${contact.email}?subject=Volunteering with ComTouch Kenya`}
            className="btn-text mt-16 text-leaf"
          >
            Apply to volunteer <Arrow />
          </a>
        </div>
      </section>

      <CtaBand
        heading="More ways to make a difference"
        body="Can't make it in person? You can still fund a mangrove, partner with us, or book a tour that supports the community."
      />
    </main>
  );
}
