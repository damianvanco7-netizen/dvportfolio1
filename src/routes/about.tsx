import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useT } from "@/lib/i18n";

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
  const t = useT();
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader />
      <section className="px-5 pt-20 pb-24 md:px-6 md:pt-24">
        <h1
          className="font-medium leading-[1] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
        >
          {t("about.title")}
        </h1>
        <p className="mt-8 max-w-2xl text-[16px] leading-relaxed text-foreground/70">
          {t("about.body")}
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
