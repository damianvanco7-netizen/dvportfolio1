import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useIsOpeningProject } from "@/lib/nav-transition";
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

function InfoRow({
  label,
  value,
  delay = 0,
}: {
  label: string;
  value: React.ReactNode;
  delay?: number;
}) {
  return (
    <div className="relative grid grid-cols-2 gap-4 py-4 text-[13px]">
      <motion.span
        aria-hidden
        className="absolute left-0 right-0 top-0 block h-px origin-left bg-border/60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="text-foreground/50"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.span>
      <motion.div
        className="text-foreground"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: delay + 0.15, ease: [0.22, 1, 0.36, 1] }}
      >
        {value}
      </motion.div>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const [showRest, setShowRest] = useState(false);
  const isOpening = useIsOpeningProject();

  useEffect(() => {
    const t = setTimeout(() => setShowRest(true), 950);
    return () => clearTimeout(t);
  }, [project.slug]);

  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="px-5 pt-28 pb-16 md:px-6 md:pt-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[3.6fr_1fr] lg:gap-10">
          {/* LEFT — scrolling gallery */}
          <div className="order-2 flex flex-col gap-3 lg:order-1">
            <Link
              to="/projects"
              className="mb-2 inline-flex w-fit items-center gap-2 text-[14px] text-foreground/60 transition-colors duration-500 hover:text-foreground"
            >
              ← Back to projects
            </Link>



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

              if (i === 0) {
                return (
                  <motion.div
                    key={i}
                    {...(isOpening ? { layoutId: `project-cover-${project.slug}` } : {})}
                    className="w-full overflow-hidden rounded-sm"
                    style={{
                      aspectRatio: "1625 / 1137",
                      backgroundColor: "var(--surface-cream)",
                      willChange: "transform",
                      backfaceVisibility: "hidden",
                    }}
                    transition={{ layout: { duration: 1.05, ease: [0.22, 1, 0.36, 1] } }}
                  >
                    {inner}
                  </motion.div>
                );
              }

              if (!showRest) {
                return (
                  <div
                    key={i}
                    aria-hidden
                    className="w-full overflow-hidden rounded-sm"
                    style={{ aspectRatio: "1625 / 1137", backgroundColor: "var(--surface-cream)" }}
                  />
                );
              }

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (i - 1) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full overflow-hidden rounded-sm"
                  style={{ aspectRatio: "1625 / 1137", backgroundColor: "var(--surface-cream)" }}
                >
                  {inner}
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT — sticky info column */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start">

            <motion.h1
              className="font-medium leading-[1] tracking-[-0.03em]"
              style={{ fontSize: "clamp(1.75rem, 2.4vw, 2.5rem)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.title}
            </motion.h1>

            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] transition-colors duration-500 hover:bg-black/10"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent-blue)" }}
                />
                View live site
              </motion.a>
            )}


            {project.info && (
              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="mb-3 text-[13px] text-foreground/50">Info</p>
                <p className="max-w-prose text-[14px] leading-relaxed text-foreground/80">
                  {project.info}
                </p>
              </motion.div>
            )}

            <div className="relative mt-12">
              <InfoRow
                label="Services"
                value={project.services.map((s: string) => (
                  <div key={s}>{s}</div>
                ))}
                delay={1.38}
              />
              <InfoRow label="Client" value={project.client} delay={1.46} />
              <InfoRow label="Year" value={project.year} delay={1.54} />
              <motion.div
                aria-hidden
                className="block h-px origin-left bg-border/60"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>

        {/* Next project */}
        <div className="mt-32 flex items-center justify-between border-t border-border/60 pt-8">
          <Link to="/projects" className="text-[14px] text-foreground/60 hover:text-foreground">
            ← Back to projects
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
