import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/data/projects";
import { useT } from "@/lib/i18n";
import { localizeTags } from "@/lib/project-i18n";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Damian Vanco" },
      { name: "description", content: "Selected projects across art direction, web design and web development." },
      { property: "og:title", content: "Projects — Damian Vanco" },
      { property: "og:description", content: "Selected projects across art direction, web design and web development." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="px-5 pt-16 pb-24 md:px-6 md:pt-20">
        <div className="mb-10 md:mb-14">
          <h1 className="text-[14px] font-medium tracking-tight text-foreground">
            {t("nav.projects")}{" "}
            <span className="text-foreground/40">({projects.length})</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-x-2 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block animate-fade-in"
            >
              <div
                className="relative w-full overflow-hidden rounded-sm"
                style={{
                  aspectRatio: "4 / 3",
                  backgroundColor: "var(--surface-cream)",
                }}
              >
                {/\.(mp4|webm|mov)$/i.test(p.cover) ? (
                  <video
                    src={p.cover}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                ) : (
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                )}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-white text-foreground opacity-0 shadow-sm transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </span>
              </div>
              <div className="mt-4">
                <p className="text-[13px] text-foreground/50">
                  {localizeTags(t, p.tags).join(" / ")}
                </p>
                <h2 className="mt-1 text-[18px] font-medium tracking-tight">
                  {p.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
