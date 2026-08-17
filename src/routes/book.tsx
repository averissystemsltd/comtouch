import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-parts";
import { BookingWizard } from "@/components/booking-wizard";
import { Reveal } from "@/components/motion";
import { contact } from "@/data/site";

const whyChooseUs = [
  {
    title: "100% community-owned",
    body: "Guides, cooks, dancers and makers are paid directly. Your visit stays on the peninsula.",
  },
  {
    title: "Real culture, not a show",
    body: "You take part in the dances, the fishing and the food, rather than watching from the outside.",
  },
  {
    title: "Every visit restores the coast",
    body: "Mangroves are planted on every tour, with Ksh 100 of each seedling funding the nursery.",
  },
  {
    title: "Guides who live the tides",
    body: "Local guides plan each day around the water, so trips are safe, authentic and unhurried.",
  },
];

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Experience | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Plan any of the thirteen ComTouch Kenya experiences in four simple steps. A guide confirms boat transport, dances and the full cost breakdown. No payment is taken online.",
      },
      { property: "og:title", content: "Book an experience with ComTouch Kenya" },
      {
        property: "og:description",
        content:
          "Tell us the experience, the date and your group size, and a guide will confirm everything.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Book a Tour"
        title="Plan your day on the peninsula"
        intro="Four quick steps: choose an experience, tell us when and how many, and leave your details. A ComTouch guide confirms boat transport, guide and dance availability and sends the full cost breakdown."
      />

      <section className="page-shell grid gap-48 pb-[112px] lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <BookingWizard />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-24">
          {/* Direct contact card */}
          <div className="relative overflow-hidden rounded-[8px] bg-tide p-24 text-paper">
            <p className="label-overline text-mist/70">Prefer to talk it through?</p>
            <h2 className="section-heading-sm mt-12">Reach a guide directly</h2>
            <ul className="mt-20 flex flex-col gap-12 text-body">
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-12 hover:text-paper"
                >
                  <IconCircle>☎</IconCircle>
                  <span>
                    <span className="block text-[12px] text-mist/70">Call</span>
                    {contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-12 hover:text-paper"
                >
                  <IconCircle>✆</IconCircle>
                  <span>
                    <span className="block text-[12px] text-mist/70">WhatsApp</span>
                    {contact.whatsapp}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-12 hover:text-paper"
                >
                  <IconCircle>✉</IconCircle>
                  <span>
                    <span className="block text-[12px] text-mist/70">Email</span>
                    {contact.email}
                  </span>
                </a>
              </li>
            </ul>
            <p className="mt-20 border-t border-paper/15 pt-16 text-[13px] text-mist/80">
              {contact.departures}. Timings follow the tide, we confirm on booking.
            </p>
          </div>

          {/* Why choose us */}
          <div className="rounded-[8px] ring-1 ring-mist">
            <div className="border-b border-mist p-20">
              <p className="label-overline text-leaf">Why choose us</p>
              <h2 className="mt-8 text-subheading text-ink">A day that gives back</h2>
            </div>
            <ul className="flex flex-col">
              {whyChooseUs.map((r) => (
                <li
                  key={r.title}
                  className="flex gap-12 border-b border-mist/70 p-20 last:border-b-0"
                >
                  <span className="mt-2 flex h-24 w-24 flex-none items-center justify-center rounded-full bg-leaf/12 text-leaf">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 13l4 4L19 7"
                        stroke="currentColor"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[14px] font-medium text-ink">{r.title}</span>
                    <span className="mt-2 block text-[13px] leading-relaxed text-pewter">
                      {r.body}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location map */}
          <div className="overflow-hidden rounded-[8px] ring-1 ring-mist">
            <div className="border-b border-mist p-20">
              <p className="label-overline text-leaf">Where we are</p>
              <h2 className="mt-8 text-subheading text-ink">The Tsunza-Mwache peninsula</h2>
              <p className="mt-4 text-[12px] text-smoke">
                Kwale County, reached by boat from Mkupe Jetty, Mombasa.
              </p>
            </div>
            <iframe
              title="Map of the Tsunza-Mwache peninsula, Kwale County, Kenya"
              className="block h-[280px] w-full border-0 grayscale-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.openstreetmap.org/export/embed.html?bbox=39.555%2C-4.09%2C39.68%2C-3.975&layer=mapnik&marker=-4.024%2C39.602"
            />
            <a
              href="https://www.openstreetmap.org/?mlat=-4.024&mlon=39.602#map=13/-4.024/39.602"
              target="_blank"
              rel="noreferrer"
              className="block border-t border-mist p-16 text-[13px] font-medium text-leaf hover:text-pine"
            >
              Open in a larger map →
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-40 w-40 flex-none items-center justify-center rounded-full bg-paper/12 text-[16px]">
      {children}
    </span>
  );
}
