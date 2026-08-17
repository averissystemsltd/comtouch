import { Link } from "@tanstack/react-router";
import { Arrow } from "./arrow";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="page-shell pb-48 pt-[128px]">
      <p className="label-overline text-smoke">{eyebrow}</p>
      <h1 className="section-heading mt-6 max-w-[900px]">{title}</h1>
      {intro && (
        <p className="mt-24 max-w-[700px] font-lora text-subheading tracking-[0.011em]">{intro}</p>
      )}
    </header>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[700px] space-y-24 text-body text-iron">{children}</div>;
}

function SproutIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M12 12c0-3.2 2.1-5.3 6.2-5.3C18.2 9.9 16.1 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 14C12 10.8 9.9 8.7 5.8 8.7 5.8 11.9 7.9 14 12 14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PointGrid({
  points,
  columns = 2,
  align = "left",
}: {
  points: { title: string; body: string }[];
  columns?: 2 | 3;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={`grid gap-16 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {points.map((p) => (
        <article
          key={p.title}
          className={`rounded-[10px] bg-leaf/[0.07] p-24 ${
            center ? "flex flex-col items-center text-center" : ""
          }`}
        >
          <span className="flex h-44 w-44 items-center justify-center rounded-[10px] bg-leaf/15 text-leaf">
            <SproutIcon />
          </span>
          <h3 className="mt-16 text-heading-sm font-light">{p.title}</h3>
          <p className="mt-12 text-body text-pewter">{p.body}</p>
        </article>
      ))}
    </div>
  );
}

export function CtaBand({ heading, body }: { heading: string; body: string }) {
  return (
    <section className="page-shell py-80">
      <div className="rounded-[8px] bg-tide p-24 text-paper md:p-48">
        <h2 className="section-heading-sm max-w-[700px]">{heading}</h2>
        <p className="mt-16 max-w-[600px] text-body text-mist">{body}</p>
        <div className="mt-32 flex flex-wrap items-center gap-16">
          <Link to="/get-involved/donate" className="btn-filled bg-paper text-ink">
            Donate <Arrow />
          </Link>
          <Link to="/get-involved/volunteer" className="btn-outline">
            Volunteer <Arrow />
          </Link>
          <Link to="/about/partners" className="btn-text">
            Partner with us <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
