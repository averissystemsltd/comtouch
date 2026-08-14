import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Arrow } from "./arrow";
import logo from "@/assets/comtouch-logo.png.asset.json";

const groups = [
  {
    label: "Eco Tours",
    links: [
      { to: "/eco-tours", label: "All Experiences" },
      { to: "/eco-tours/$slug", params: { slug: "cultural-local-dance" }, label: "Culture & Dance" },
      { to: "/eco-tours/$slug", params: { slug: "dhow-sailing" }, label: "Dhow Sailing" },
      { to: "/eco-tours/$slug", params: { slug: "mangrove-conservation" }, label: "Mangrove Tours" },
      { to: "/eco-tours/$slug", params: { slug: "eco-learning-mwache-forest" }, label: "Eco-Learning" },
    ],
  },
  {
    label: "Our Work",
    links: [
      { to: "/work/mangrove-restoration", label: "Mangrove Restoration" },
      { to: "/work/mariculture", label: "Mariculture" },
      { to: "/work/research", label: "Research & Collaboration" },
    ],
  },
  {
    label: "About",
    links: [
      { to: "/about/story", label: "Our Story" },
      { to: "/about/team", label: "Our Team" },
      { to: "/about/partners", label: "Partners" },
    ],
  },
  {
    label: "Get Involved",
    links: [
      { to: "/get-involved/volunteer", label: "Volunteer" },
      { to: "/get-involved/donate", label: "Donate" },
      { to: "/media", label: "Media" },
    ],
  },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Link
        to="/"
        aria-label="ComTouch Kenya — home"
        className="fixed left-16 top-16 z-50 flex items-center gap-8 rounded-[1584px] bg-paper/90 p-6 backdrop-blur md:left-24 md:top-24"
      >
        <img src={logo.url} alt="Community Touch Kenya logo" width={44} height={44} className="h-44 w-44 rounded-full object-contain" />
      </Link>
    <div className="fixed right-16 top-16 z-50 flex flex-col items-end gap-12 md:right-24 md:top-24">
      <div className="flex items-center gap-8">
        <Link
          to="/book"
          className="hidden h-32 items-center gap-8 rounded-[1584px] bg-leaf px-13 text-[12px] font-medium tracking-[0.12px] text-paper sm:flex"
        >
          Book a Tour <Arrow size={13} />
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-32 items-center gap-12 rounded-[1584px] bg-char px-13 text-paper"
          aria-expanded={open}
          aria-label="Open menu"
        >
          <span className="text-[12px] font-medium tracking-[0.12px]">COMTOUCH</span>
          <span className="flex flex-col gap-4" aria-hidden="true">
            <span className="block h-px w-16 bg-paper" />
            <span className="block h-px w-16 bg-paper" />
            <span className="block h-px w-16 bg-paper" />
          </span>
        </button>
      </div>

      {open && (
        <nav className="grid w-[min(92vw,620px)] grid-cols-1 gap-8 rounded-[8px] bg-char p-16 text-paper sm:grid-cols-2">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-[15px] sm:col-span-2"
          >
            Home
          </Link>
          {groups.map((g) => (
            <div key={g.label}>
              <p className="label-overline text-smoke">{g.label}</p>
              <ul className="mt-8 flex flex-col gap-6">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.to}
                      params={("params" in l ? l.params : {}) as never}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between gap-12 text-[15px] text-mist"
                      activeProps={{ className: "text-paper" }}
                    >
                      {l.label}
                      <Arrow size={13} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="btn-text mt-8 text-leaf sm:col-span-2"
          >
            Book a Tour <Arrow />
          </Link>
        </nav>
      )}
    </div>
    </>
  );
}
