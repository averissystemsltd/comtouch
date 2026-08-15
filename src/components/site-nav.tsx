import { useEffect, useState } from "react";
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
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/95 text-ink backdrop-blur hairline-bottom" : "bg-transparent text-paper"
      }`}
      onMouseLeave={() => setOpenGroup(null)}
    >
      <div className="mx-auto flex h-72 max-w-[1200px] items-center justify-between gap-16 px-16 md:px-24">
        <Link to="/" aria-label="ComTouch Kenya — home" className="flex flex-none items-center">
          <img
            src={logo.url}
            alt="Community Touch Kenya logo"
            width={48}
            height={48}
            className="h-48 w-48 object-contain"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {groups.map((g) => (
            <div key={g.label} className="relative" onMouseEnter={() => setOpenGroup(g.label)}>
              <button
                onClick={() => setOpenGroup((v) => (v === g.label ? null : g.label))}
                aria-expanded={openGroup === g.label}
                className={`flex items-center gap-6 rounded-[1584px] px-13 py-8 text-[13px] font-medium tracking-[0.12px] transition-colors ${
                  openGroup === g.label
                    ? scrolled
                      ? "bg-mist text-ink"
                      : "bg-paper/15 text-paper"
                    : ""
                }`}
              >
                {g.label}
                <span aria-hidden="true" className="text-[9px] opacity-70">
                  ▾
                </span>
              </button>

              {openGroup === g.label && (
                <div className="absolute left-1/2 top-full w-[260px] -translate-x-1/2 pt-8">
                  <ul className="flex flex-col gap-2 rounded-[8px] bg-pine p-8 text-paper shadow-none">
                    {g.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.to}
                          params={("params" in l ? l.params : {}) as never}
                          onClick={() => setOpenGroup(null)}
                          className="flex items-center justify-between gap-12 rounded-[4px] px-12 py-8 text-[14px] text-mist transition-colors hover:bg-paper/10 hover:text-paper"
                          activeProps={{ className: "text-paper" }}
                        >
                          {l.label}
                          <Arrow size={13} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex flex-none items-center gap-8">
          <Link
            to="/book"
            className="hidden h-40 items-center gap-8 rounded-[1584px] bg-leaf px-16 text-[13px] font-medium tracking-[0.12px] text-paper transition-opacity hover:opacity-90 sm:flex"
          >
            Book a Tour <Arrow size={13} />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className={`flex h-40 items-center gap-8 rounded-[1584px] px-13 lg:hidden ${
              scrolled ? "bg-char text-paper" : "bg-paper/15 text-paper"
            }`}
            aria-expanded={open}
            aria-label="Open menu"
          >
            <span className="text-[12px] font-medium tracking-[0.12px]">MENU</span>
            <span className="flex flex-col gap-4" aria-hidden="true">
              <span className="block h-px w-16 bg-current" />
              <span className="block h-px w-16 bg-current" />
              <span className="block h-px w-16 bg-current" />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 bg-char p-16 text-paper sm:grid-cols-2">
            <Link to="/" onClick={() => setOpen(false)} className="text-[15px] sm:col-span-2">
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
          </div>
        </nav>
      )}
    </header>
  );
}
