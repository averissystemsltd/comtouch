import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-parts";
import { mediaGroups } from "@/data/site";
import { YoutubeBackground } from "@/components/youtube-background";
import dance from "@/assets/ct-dance.jpg";
import fishing from "@/assets/ct-fishing.jpg";
import mangrove from "@/assets/ct-mangrove.jpg";
import creek from "@/assets/ct-hero-creek.jpg";

export const Route = createFileRoute("/media")({
  head: () => ({
    meta: [
      { title: "Media — The Peninsula on Film | ComTouch Kenya" },
      {
        name: "description",
        content:
          "Short clips from each experience: tides, tools, dances and the mangrove nursery on the Tsunza-Mwache peninsula.",
      },
      { property: "og:title", content: "The peninsula, on film" },
      {
        property: "og:description",
        content: "Video clips of fishing, dhow sailing, dance and mangrove restoration in Kwale County, Kenya.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MediaPage,
});

const covers = [fishing, creek, dance, mangrove];

function MediaPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHeader
        eyebrow="Media"
        title="The peninsula, on film"
        intro="Short clips from each experience — tides, tools, dances and the mangrove nursery — so you know exactly what a day out with ComTouch looks like."
      />

      <section className="relative mb-80 h-[70vh] w-full overflow-hidden">
        <YoutubeBackground poster={creek} posterAlt="Tudor Creek on the Kenyan coast" />
        <div className="absolute bottom-24 left-16 z-10 max-w-[700px] md:bottom-[40px] md:left-[40px]">
          <span className="badge bg-paper/15 text-paper">Featured film</span>
          <h2 className="section-heading-sm mt-8 text-paper">Growing with the people</h2>
        </div>
      </section>

      <section className="page-shell pb-80">
        {mediaGroups.map((g, gi) => (
          <div key={g.group} className="hairline-top py-48">
            <h2 className="section-heading-sm">{g.group}</h2>
            <div className="mt-32 grid gap-16 sm:grid-cols-2 md:grid-cols-3">
              {g.clips.map((c) => (
                <figure key={c}>
                  <div className="relative overflow-hidden rounded-[3.2px]">
                    <img
                      src={covers[gi % covers.length]}
                      alt={c}
                      loading="lazy"
                      width={1440}
                      height={1080}
                      className="aspect-[16/9] w-full object-cover"
                    />
                    <span className="badge absolute bottom-8 left-8 bg-char/80 text-paper">
                      Clip
                    </span>
                  </div>
                  <figcaption className="mt-8 text-[12px] text-smoke">{c}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
