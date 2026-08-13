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
    <header className="page-shell pt-80 pb-48">
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

export function PointGrid({
  points,
  columns = 2,
}: {
  points: { title: string; body: string }[];
  columns?: 2 | 3;
}) {
  return (
    <div className={`grid gap-16 ${columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {points.map((p) => (
        <article key={p.title} className="rounded-[8px] bg-mist p-24">
          <h3 className="text-heading-sm font-light">{p.title}</h3>
          <p className="mt-12 text-body text-pewter">{p.body}</p>
        </article>
      ))}
    </div>
  );
}

export function CtaBand({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
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
