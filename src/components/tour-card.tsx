import { Link } from "@tanstack/react-router";
import { Arrow } from "./arrow";
import { ksh, type Tour } from "@/data/tours";
import { tourImage } from "@/data/tour-images";

/** The experience card used on the homepage and the all-experiences grid. */
export function TourCard({ tour: t }: { tour: Tour }) {
  return (
    <Link
      to="/eco-tours/$slug"
      params={{ slug: t.slug }}
      className="group flex h-full flex-col overflow-hidden rounded-[8px] bg-paper shadow-[0_1px_0_0_rgba(0,0,0,0.06)] ring-1 ring-mist transition-shadow duration-500 hover:shadow-[0_24px_60px_-28px_rgba(11,58,46,0.5)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={tourImage(t.slug)}
          alt={t.title}
          loading="lazy"
          width={1440}
          height={1080}
          className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent opacity-70" />
        <span className="absolute left-12 top-12 rounded-[1584px] bg-paper/90 px-12 py-4 text-[11px] font-medium tracking-[0.12px] text-pine backdrop-blur">
          {t.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-20">
        <p className="text-[12px] text-smoke">{t.duration}</p>
        <h3 className="mt-6 text-subheading leading-tight text-ink">{t.title}</h3>
        <p className="mt-8 line-clamp-2 text-[13px] leading-relaxed text-pewter">{t.summary}</p>

        <div className="mt-16 flex items-center justify-between border-t border-mist pt-16">
          <span className="flex flex-col">
            <span className="text-[11px] uppercase tracking-[0.14em] text-smoke">Group price</span>
            <span className="text-heading-sm font-light text-pine">{ksh(t.total)}</span>
            <span className="text-[11px] text-smoke">{t.basis}</span>
          </span>
          <span className="inline-flex items-center gap-8 text-[13px] font-medium text-pine">
            Explore
            <span className="flex h-32 w-32 flex-none items-center justify-center rounded-full ring-1 ring-pine/25 transition-all duration-500 group-hover:bg-leaf group-hover:text-paper group-hover:ring-leaf">
              <span className="transition-transform duration-500 group-hover:translate-x-0.5">
                <Arrow size={14} />
              </span>
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
