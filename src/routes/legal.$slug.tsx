import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { legalPages, lastUpdated } from "@/data/site";

export const Route = createFileRoute("/legal/$slug")({
  loader: ({ params }) => {
    const page = legalPages.find((p) => p.slug === params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Page not found | ComTouch Kenya" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const p = loaderData.page;
    return {
      meta: [
        { title: `${p.title} | ComTouch Kenya` },
        { name: "description", content: p.intro },
        { property: "og:title", content: `${p.title} | ComTouch Kenya` },
        { property: "og:description", content: p.intro },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary" },
      ],
    };
  },
  component: LegalPage,
});

function LegalPage() {
  const { page } = Route.useLoaderData();

  return (
    <main className="bg-paper text-ink">
      <header className="page-shell pb-32 pt-[128px]">
        <p className="label-overline text-smoke">Legal</p>
        <h1 className="section-heading-sm mt-6 max-w-[700px]">{page.title}</h1>
        <p className="mt-16 max-w-[700px] text-body text-pewter">{page.intro}</p>
        <p className="mt-12 text-[12px] text-smoke">{lastUpdated}</p>
      </header>

      <section className="page-shell pb-80">
        <div className="max-w-[700px]">
          {page.sections.map((s) => (
            <article key={s.heading} className="hairline-top py-24">
              <h2 className="text-subheading">{s.heading}</h2>
              <p className="mt-8 text-body text-pewter">{s.body}</p>
            </article>
          ))}
        </div>

        <ul className="mt-48 flex flex-wrap gap-8">
          {legalPages
            .filter((p) => p.slug !== page.slug)
            .map((p) => (
              <li key={p.slug}>
                <Link
                  to="/legal/$slug"
                  params={{ slug: p.slug }}
                  className="badge bg-mist text-pewter"
                >
                  {p.title}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
}
