import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow } from "@/components/arrow";
import { PageHeader } from "@/components/page-parts";
import { contact } from "@/data/site";

export const Route = createFileRoute("/get-involved/donate")({
  head: () => ({
    meta: [
      { title: "Donate: Fund a Mangrove, Fund a Future | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Every gift grows, plants and protects mangroves on the Tsunza-Mwache peninsula. Ksh 100 plants a seedling; Ksh 25,000 funds a community planting day.",
      },
      { property: "og:title", content: "Fund a mangrove, fund a future" },
      {
        property: "og:description",
        content:
          "Support community nurseries, planting days and sustainable coastal livelihoods in Kwale County, Kenya.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonatePage,
});

const gifts = [
  {
    amount: "Ksh 100",
    title: "Plant a mangrove",
    body: "Grows and tends a single mangrove seedling along the creek, the same gift every visitor makes on a tour.",
    bg: "bg-pine",
  },
  {
    amount: "Ksh 5,000",
    title: "Fill a nursery bed",
    body: "Raises a batch of seedlings in a community nursery, ready for the next planting tide.",
    bg: "bg-tide",
  },
  {
    amount: "Ksh 25,000",
    title: "Fund a planting day",
    body: "Supports a full community planting day, from propagules to the people who put them in the ground.",
    bg: "bg-midnight",
  },
];

const howToGive = [
  "Contact us by email or phone to give.",
  "Local mobile-money and bank transfer details are confirmed on request, always directly from us in writing.",
  "Funders and institutions are welcome to request more detail on our programmes and reporting.",
  "Please never send money to any account that has not been confirmed with us directly.",
];

function DonatePage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Get Involved"
        title="Fund a mangrove, fund a future"
        intro="Every gift goes into growing, planting and protecting mangroves on the Tsunza-Mwache peninsula, and into the community that makes it happen."
      />

      <section className="page-shell pb-48">
        <p className="max-w-[700px] text-body text-pewter">
          ComTouch Kenya is a community-based environmental organisation. Your donation directly
          supports mangrove restoration, community nurseries and the sustainable livelihoods that
          keep the coast healthy. Because the work is local, your gift stays close to the ground,
          and to the people doing the planting.
        </p>
      </section>

      <section className="page-shell pb-80">
        <h2 className="section-heading-sm">What a gift can do</h2>
        <div className="mt-32 grid gap-16 md:grid-cols-3">
          {gifts.map((g) => (
            <article
              key={g.amount}
              className={`flex min-h-[260px] flex-col justify-between rounded-[8px] ${g.bg} p-24 text-paper`}
            >
              <span className="badge bg-paper/10 text-paper">{g.amount}</span>
              <span>
                <span className="block text-heading-sm font-light">{g.title}</span>
                <span className="mt-12 block text-body text-mist">{g.body}</span>
              </span>
            </article>
          ))}
        </div>

        <div className="mt-48 max-w-[700px]">
          <h2 className="section-heading-sm">How to give</h2>
          <p className="mt-16 text-body text-pewter">
            We are happy to receive one-off or regular gifts, and to discuss larger grants and
            partnerships. Get in touch and we will share current payment details and confirm exactly
            how your support will be used.
          </p>
          <ul className="mt-24">
            {howToGive.map((h) => (
              <li key={h} className="hairline-top py-16 text-body text-iron">
                {h}
              </li>
            ))}
          </ul>
          <div className="mt-32 flex flex-wrap items-center gap-16">
            <a
              href={`mailto:${contact.email}?subject=Giving to ComTouch Kenya`}
              className="btn-filled"
            >
              Talk to us about giving <Arrow />
            </a>
            <Link to="/about/partners" className="btn-outline">
              Explore partnerships <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
