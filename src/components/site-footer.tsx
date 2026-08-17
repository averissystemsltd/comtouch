import { Link } from "@tanstack/react-router";
import { contact, orgBlurb, legalPages } from "@/data/site";
import logo from "@/assets/comtouch-logo.png";
import mangrove from "@/assets/ct-mangrove.jpg";

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

const waLink = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`;

export function SiteFooter() {
  return (
    <footer className="relative isolate overflow-hidden text-mist">
      {/* Mangrove forest background with a deep-green overlay for legibility */}
      <img
        src={mangrove}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0a2c22]/95 via-[#0a2c22]/92 to-[#05201a]"
        aria-hidden="true"
      />

      <div className="page-shell grid gap-40 py-[96px] md:grid-cols-12">
        {/* Brand */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-12">
            <img
              src={logo}
              alt="Community Touch Kenya logo"
              width={64}
              height={64}
              loading="lazy"
              className="h-56 w-56 rounded-full bg-paper object-contain p-4"
            />
            <span className="flex flex-col leading-none text-paper">
              <span className="text-[16px] font-semibold tracking-[-0.01em]">Community Touch</span>
              <span className="text-[10px] font-medium tracking-[0.28em] text-leaf">KENYA</span>
            </span>
          </div>
          <p className="mt-24 max-w-[340px] text-body text-mist/80">{orgBlurb}</p>
          <p className="mt-20 font-lora text-subheading italic text-leaf">
            Growing with the people.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="label-overline text-mist/60">Explore</p>
          <ul className="mt-16 flex flex-col gap-10">
            {explore.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-body text-mist/85 transition-colors hover:text-paper"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="label-overline text-mist/60">Get Involved</p>
          <ul className="mt-16 flex flex-col gap-10">
            {involved.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-body text-mist/85 transition-colors hover:text-paper"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="md:col-span-4">
          <p className="label-overline text-mist/60">Contact</p>
          <ul className="mt-16 flex flex-col gap-12 text-body">
            <li>
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="text-mist/85 transition-colors hover:text-paper"
              >
                {contact.phone}
              </a>
            </li>
            <li>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-8 text-mist/85 transition-colors hover:text-paper"
              >
                WhatsApp {contact.whatsapp}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="text-leaf transition-colors hover:text-paper"
              >
                {contact.email}
              </a>
            </li>
            <li className="text-mist/70">{contact.departures}</li>
          </ul>
          <ul className="mt-20 flex flex-wrap gap-10">
            {contact.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-40 items-center rounded-[1584px] border border-paper/20 px-16 text-[13px] text-mist/85 backdrop-blur-sm transition-colors hover:border-leaf hover:bg-paper/5 hover:text-paper"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="page-shell flex flex-col gap-16 border-t border-paper/12 py-24 text-[12px] text-mist/60 md:flex-row md:items-center md:justify-between">
        <span>© {`${new Date().getFullYear()} `}Community Touch Kenya. All rights reserved.</span>
        <ul className="flex flex-wrap gap-16">
          {legalPages.map((p) => (
            <li key={p.slug}>
              <Link
                to="/legal/$slug"
                params={{ slug: p.slug }}
                className="transition-colors hover:text-mist"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
