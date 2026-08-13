import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Arrow } from "@/components/arrow";
import { PageHeader } from "@/components/page-parts";
import { tours, ksh, getTour } from "@/data/tours";
import { contact } from "@/data/site";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Experience — ComTouch Kenya" },
      {
        name: "description",
        content:
          "Send an enquiry for any of the thirteen ComTouch Kenya experiences. A guide confirms boat transport, dances and the full cost breakdown. No payment is taken online.",
      },
      { property: "og:title", content: "Book an experience with ComTouch Kenya" },
      {
        property: "og:description",
        content: "Tell us the experience, the date and your group size, and a guide will confirm everything.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Please tell us your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().min(6, "Enter a phone or WhatsApp number").max(40),
  groupSize: z.coerce.number().int().min(1, "At least one guest").max(60),
  experience: z.string().trim().min(1, "Choose an experience"),
  date: z.string().trim().min(1, "Choose a preferred date"),
  notes: z.string().trim().max(1000).optional(),
});

const example = getTour("fishing-crab-prawn-farming")!;

function BookPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setSent(true);
  }

  const field = "mt-8 w-full rounded-[3.2px] border border-mist bg-paper px-12 py-12 text-body";

  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Book a Tour"
        title="Book an experience"
        intro="Tell us which experience, when, and how many in your group; a ComTouch guide will confirm boat transport, guide and dance availability and send the full cost breakdown."
      />

      <section className="page-shell grid gap-48 pb-80 md:grid-cols-2">
        <div>
          <p className="rounded-[8px] bg-mist p-16 text-body text-pewter">
            Booking Ngoma ya Mulungu (late March)? Reserve between January and February, spaces
            are limited.
          </p>

          {sent ? (
            <div className="mt-32 rounded-[8px] bg-pine p-24 text-paper">
              <h2 className="section-heading-sm">Enquiry noted</h2>
              <p className="mt-16 text-body text-mist">
                A guide will confirm boat transport, guide and dance availability and send the
                full cost breakdown. You can also reach the office by phone or WhatsApp on{" "}
                {contact.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-32 flex flex-col gap-16">
              {[
                { name: "name", label: "Full name", type: "text" },
                { name: "email", label: "Email", type: "email" },
                { name: "phone", label: "Phone / WhatsApp", type: "tel" },
                { name: "groupSize", label: "Group size", type: "number" },
              ].map((f) => (
                <label key={f.name} className="block">
                  <span className="label-overline text-smoke">{f.label}</span>
                  <input name={f.name} type={f.type} className={field} maxLength={255} />
                  {errors[f.name] && (
                    <span className="mt-6 block text-[12px] text-coral">{errors[f.name]}</span>
                  )}
                </label>
              ))}

              <label className="block">
                <span className="label-overline text-smoke">Experience</span>
                <select name="experience" className={field} defaultValue="">
                  <option value="">Select an experience</option>
                  {tours.map((t) => (
                    <option key={t.slug} value={t.title}>
                      {t.title}
                    </option>
                  ))}
                  <option value="Ngoma ya Mulungu, Kaya Chonyi">
                    Ngoma ya Mulungu, Kaya Chonyi (annual event)
                  </option>
                </select>
                {errors.experience && (
                  <span className="mt-6 block text-[12px] text-coral">{errors.experience}</span>
                )}
              </label>

              <label className="block">
                <span className="label-overline text-smoke">Preferred date</span>
                <input name="date" type="date" className={field} />
                {errors.date && (
                  <span className="mt-6 block text-[12px] text-coral">{errors.date}</span>
                )}
              </label>

              <label className="block">
                <span className="label-overline text-smoke">
                  Anything else (dietary needs, mobility, arrival time)
                </span>
                <textarea name="notes" rows={4} maxLength={1000} className={field} />
              </label>

              <p className="text-[12px] text-smoke">
                Your details are only used to arrange the trip. No payment is taken online.
              </p>

              <button type="submit" className="btn-filled w-fit">
                Send enquiry <Arrow />
              </button>
            </form>
          )}
        </div>

        <aside>
          <h2 className="section-heading-sm">Example cost breakdown</h2>
          <p className="mt-6 text-[12px] text-smoke">
            {example.title} — {example.basis}
          </p>
          <table className="mt-24 w-full text-body">
            <tbody>
              {example.cost.map((c) => (
                <tr key={c.label} className="hairline-top">
                  <td className="py-12 pr-16 text-iron">{c.label}</td>
                  <td className="py-12 text-right whitespace-nowrap text-pewter">
                    {ksh(c.amount)}
                  </td>
                </tr>
              ))}
              <tr className="hairline-top">
                <td className="py-16 pr-16 text-subheading">Total</td>
                <td className="py-16 text-right text-subheading">{ksh(example.total)}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-32 rounded-[8px] bg-mist p-24">
            <p className="label-overline text-pewter">Reach us directly</p>
            <ul className="mt-12 flex flex-col gap-8 text-body">
              <li>
                <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="text-ember">
                  {contact.email}
                </a>
              </li>
              <li className="text-pewter">{contact.departures}</li>
            </ul>
          </div>
        </aside>
      </section>
    </main>
  );
}
