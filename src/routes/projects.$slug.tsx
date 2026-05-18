import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProject, projects } from "@/data/projects";

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
  notFoundComponent: () => (
    <div className="min-h-screen bg-white px-5 py-32 text-foreground md:px-6">
      <h1 className="text-3xl font-medium">Project not found</h1>
      <Link to="/" className="mt-4 inline-block underline">
        Back to home
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen bg-white px-5 py-32 text-foreground md:px-6">
      <h1 className="text-2xl font-medium">Something went wrong</h1>
      <p className="mt-2 text-foreground/60">{error.message}</p>
    </div>
  ),
  component: ProjectPage,
});

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-2 gap-4 border-t border-border/60 py-5 text-[14px]">
      <span className="text-foreground/50">{label}</span>
      <div className="text-foreground">{value}</div>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="px-5 pt-28 pb-16 md:px-6 md:pt-32">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[2.6fr_1fr] md:gap-20">
          {/* LEFT — scrolling gallery */}
          <div className="flex flex-col gap-3">
            {project.gallery.map((src: string, i: number) => (
              <div
                key={i}
                className="aspect-[3/2] w-full overflow-hidden rounded-sm"
                style={{ backgroundColor: "var(--surface-cream)" }}
              >
                <img
                  src={src}
                  alt={`${project.title} — image ${i + 1}`}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* RIGHT — sticky info column */}
          <div className="md:sticky md:top-28 md:self-start">
            <h1
              className="font-medium leading-[1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
            >
              {project.title}
            </h1>

            <a
              href={project.liveUrl ?? "#"}
              target={project.liveUrl ? "_blank" : undefined}
              rel={project.liveUrl ? "noreferrer" : undefined}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] transition-colors hover:bg-black/10"
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent-orange)" }}
              />
              View live site
            </a>


            <div className="mt-10">
              <p className="mb-3 text-[13px] text-foreground/50">Info</p>
              <p className="max-w-prose text-[15px] leading-relaxed text-foreground/80">
                {project.info}
              </p>
            </div>

            <div className="mt-12">
              <InfoRow
                label="Services"
                value={project.services.map((s: string) => (
                  <div key={s}>{s}</div>
                ))}
              />
              <InfoRow label="Client" value={project.client} />
              <InfoRow label="Year" value={project.year} />
              {project.design && (
                <InfoRow
                  label="Design"
                  value={project.design.map((n: string) => <div key={n}>{n}</div>)}
                />
              )}
              {project.motion && (
                <InfoRow
                  label="Motion"
                  value={project.motion.map((n: string) => <div key={n}>{n}</div>)}
                />
              )}
              {project.development && (
                <InfoRow
                  label="Development"
                  value={project.development.map((n: string) => <div key={n}>{n}</div>)}
                />
              )}
              <div className="border-t border-border/60" />
            </div>
          </div>
        </div>

        {/* Next project */}
        <div className="mt-32 flex items-center justify-between border-t border-border/60 pt-8">
          <Link to="/" className="text-[14px] text-foreground/60 hover:text-foreground">
            ← All projects
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
                Next: {next.title} →
              </Link>
            );
          })()}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
