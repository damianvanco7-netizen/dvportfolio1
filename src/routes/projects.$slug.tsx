import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/data/projects";
import { useT } from "@/lib/i18n";
import { localizeInfo, localizeTags, localizeYear } from "@/lib/project-i18n";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    const title = p ? `${p.title} — Damian Vanco` : "Project — Damian Vanco";
    const description = p?.info.slice(0, 155) ?? "";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(p ? [{ property: "og:image", content: p.cover }] : []),
      ],
    };
  },
  notFoundComponent: NotFound,
  errorComponent: ({ error }) => <ErrorView message={error.message} />,
  component: ProjectPage,
});

function NotFound() {
  const t = useT();
  return (
    <div className="min-h-screen bg-white px-5 py-32 text-foreground md:px-6">
      <h1 className="text-3xl font-medium">{t("project.notFound")}</h1>
      <Link to="/" className="mt-4 inline-block underline">
        {t("project.backHome")}
      </Link>
    </div>
  );
}

function ErrorView({ message }: { message: string }) {
  const t = useT();
  return (
    <div className="min-h-screen bg-white px-5 py-32 text-foreground md:px-6">
      <h1 className="text-2xl font-medium">{t("project.error")}</h1>
      <p className="mt-2 text-foreground/60">{message}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="relative grid grid-cols-2 gap-4 border-t border-border/60 py-4 text-[13px]">
      <span className="text-foreground/50">{label}</span>
      <div className="text-foreground">{value}</div>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const t = useT();

  return (
    <>
      {/* Sticky back link — fixed on screen, inverts over imagery via mix-blend-difference.
          Rendered OUTSIDE the .smooth-fade-in wrapper because its `transform` would
          otherwise create a containing block and break position: fixed. */}
      <Link
        to="/projects"
        className="pointer-events-auto fixed left-5 top-20 z-40 inline-flex items-center gap-2 text-[14px] font-medium text-white transition-opacity duration-300 hover:opacity-80 md:left-6 lg:top-28"
        style={{ mixBlendMode: "difference" }}
      >
        {t("project.back")}
      </Link>

      <div className="min-h-screen bg-white text-foreground smooth-fade-in">
        <SiteHeader />


      <section className="px-5 pt-28 pb-16 md:px-6 md:pt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3.6fr_1fr] lg:gap-10">
          {/* LEFT — scrolling gallery */}
          <div className="order-2 flex flex-col gap-3 lg:order-1">

            {project.gallery.map((src: string, i: number) => {
              const isVideo = /\.(mp4|webm|mov)$/i.test(src);
              const inner = isVideo ? (
                <video
                  src={src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
              );

              return (
                <div
                  key={i}
                  className="w-full overflow-hidden rounded-sm"
                  style={{
                    aspectRatio: "1625 / 1137",
                    backgroundColor: "var(--surface-cream)",
                  }}
                >
                  {inner}
                </div>
              );
            })}
          </div>

          {/* RIGHT — sticky info column */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start">
            <h1
              className="font-medium leading-[1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
            >
              {project.title}
            </h1>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] transition-colors duration-300 hover:bg-black/10"
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent-blue)" }}
                />
                {t("project.viewLive")}
              </a>
            )}

            {project.info && (
              <div className="mt-10">
                <p className="mb-3 text-[13px] text-foreground/50">{t("project.info")}</p>
                <p className="max-w-prose text-[14px] leading-relaxed text-foreground/80">
                  {localizeInfo(t, project)}
                </p>
              </div>
            )}

            <div className="mt-12 border-b border-border/60">
              <InfoRow
                label={t("project.services")}
                value={localizeTags(t, project.services).map((s: string) => (
                  <div key={s}>{s}</div>
                ))}
              />
              <InfoRow label={t("project.client")} value={project.client} />
              <InfoRow label={t("project.year")} value={localizeYear(t, project.year)} />
            </div>
          </div>
        </div>

        {/* Next project */}
        <div className="mt-32 flex items-center justify-between border-t border-border/60 pt-8">
          <Link to="/projects" className="text-[14px] text-foreground/60 hover:text-foreground">
            {t("project.back")}
          </Link>
          {(() => {
            const idx = projects.findIndex((p) => p.slug === project.slug);
            const next = projects[(idx + 1) % projects.length];
            return (
              <Link
                to="/projects/$slug"
                params={{ slug: next.slug }}
                className="text-[14px] text-foreground hover:underline"
              >
                {t("project.next", { title: next.title })}
              </Link>
            );
          })()}
        </div>
      </section>

        <SiteFooter />
      </div>
    </>
  );

}
