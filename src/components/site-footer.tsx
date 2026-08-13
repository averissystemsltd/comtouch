import { Link } from "@tanstack/react-router";
import { contact, orgBlurb, legalPages } from "@/data/site";

const explore = [
  { to: "/about/story", label: "Our Story" },
  { to: "/work/mangrove-restoration", label: "Mangrove Restoration" },
  { to: "/work/mariculture", label: "Mariculture" },
  { to: "/eco-tours", label: "Eco-Tours" },
  { to: "/work/research", label: "Research & Collaboration" },
  { to: "/media", label: "Media" },
] as const;

const involved = [
  { to: "/get-involved/volunteer", label: "Volunteer" },
  { to: "/get-involved/donate", label: "Donate" },
  { to: "/about/partners", label: "Partners" },
  { to: "/about/team", label: "Our Team" },
  { to: "/book", label: "Book a Tour" },
] as const;

export function SiteFooter() {
  return (
    <footer className="bg-char text-mist">
      <div className="page-shell grid gap-32 py-80 md:grid-cols-4">
        <div className="md:col-span-1">
          <p className="text-heading-sm font-light text-paper">ComTouch Kenya</p>
          <p className="mt-16 text-body text-smoke">{orgBlurb}</p>
        </div>
        <div>
          <p className="label-overline text-smoke">Explore</p>
          <ul className="mt-16 flex flex-col gap-8">
            {explore.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-body">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-overline text-smoke">Get Involved</p>
          <ul className="mt-16 flex flex-col gap-8">
            {involved.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-body">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label-overline text-smoke">Contact</p>
          <ul className="mt-16 flex flex-col gap-8 text-body">
            <li>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
            </li>
            <li>WhatsApp {contact.whatsapp}</li>
            <li className="text-smoke">{contact.departures}</li>
          </ul>
          <ul className="mt-16 flex gap-16 text-body">
            {contact.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="page-shell flex flex-col gap-16 border-t border-iron py-24 text-[12px] text-smoke md:flex-row md:items-center md:justify-between">
        <span>© ComTouch Kenya. All rights reserved.</span>
        <ul className="flex flex-wrap gap-16">
          {legalPages.map((p) => (
            <li key={p.slug}>
              <Link to="/legal/$slug" params={{ slug: p.slug }}>
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
