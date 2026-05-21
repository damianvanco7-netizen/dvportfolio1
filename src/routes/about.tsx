import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Damian Vanco" },
      { name: "description", content: "About Damian Vanco — designer and developer." },
      { property: "og:title", content: "About — Damian Vanco" },
      { property: "og:description", content: "About Damian Vanco — designer and developer." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <section className="px-5 pt-20 pb-24 md:px-6 md:pt-24">
        <h1
          className="font-medium leading-[1] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          About
        </h1>
        <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-foreground/70">
          A digital-first creative studio transforming ideas into impactful
          digital experiences through web design, web development and visual
          content.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
