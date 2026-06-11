import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useT } from "@/lib/i18n";
import portrait from "@/assets/damian-portrait.webp.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Damian Vanco" },
      { name: "description", content: "About Damian Vanco — designer and developer based in Bratislava." },
      { property: "og:title", content: "About — Damian Vanco" },
      { property: "og:description", content: "About Damian Vanco — designer and developer based in Bratislava." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();

  const jobs = [
    { role: t("about.role.cofounder"), title: t("about.job.ethereum"), body: t("about.job.ethereum.body") },
    { role: t("about.role.visualDesigner"), title: t("about.job.stable"), body: t("about.job.stable.body") },
    { role: t("about.role.graphicVibe"), title: t("about.job.birne"), body: t("about.job.birne.body") },
    { role: t("about.role.uxui"), title: t("about.job.kiuub"), body: t("about.job.kiuub.body") },
  ];

  return (
    <div className="min-h-screen bg-white text-foreground smooth-fade-in">
      <SiteHeader />

      <section className="px-5 pt-16 pb-12 md:px-6 md:pt-24 md:pb-20">
        <h1
          className="font-medium leading-[0.95] tracking-[-0.04em] max-w-[14ch]"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          {t("about.hero")}
        </h1>

        <div className="mt-10 md:mt-14 overflow-hidden rounded-lg">
          <img
            src={portrait.url}
            alt="Damian Vanco"
            className="w-full h-auto object-cover"
            loading="eager"
          />
        </div>
      </section>

      <section className="px-5 md:px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <h2
            className="md:col-span-5 font-medium leading-[1] tracking-[-0.03em]"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
          >
            {t("about.storyTitle")}
          </h2>
          <p className="md:col-span-7 text-[16px] md:text-[18px] leading-relaxed text-foreground/75">
            {t("about.storyBody")}
          </p>
        </div>
      </section>

      <section className="px-5 md:px-6 pb-24 md:pb-32">
        <h2
          className="font-medium leading-[1] tracking-[-0.03em]"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.75rem)" }}
        >
          {t("about.backgroundTitle")}
        </h2>

        <div className="mt-10 md:mt-14">
          <div className="text-xs uppercase tracking-[0.18em] text-foreground/50 mb-6">
            {t("about.workExperience")}
          </div>

          <ul className="divide-y divide-foreground/10 border-t border-foreground/10">
            {jobs.map((job) => (
              <li key={job.title} className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-12">
                <div className="md:col-span-5">
                  <div className="text-[18px] md:text-[20px] font-medium leading-tight">
                    {job.role}
                  </div>
                  <div className="mt-1 text-[14px] md:text-[15px] text-foreground/60">
                    {job.title}
                  </div>
                </div>
                <p className="md:col-span-7 text-[15px] md:text-[16px] leading-relaxed text-foreground/75">
                  {job.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
