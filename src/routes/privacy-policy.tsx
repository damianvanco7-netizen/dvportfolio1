import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Damian Vanco" },
      { name: "description", content: "Privacy policy and terms of use for Damian Vanco's portfolio website." },
      { property: "og:title", content: "Privacy Policy — Damian Vanco" },
      { property: "og:description", content: "Privacy policy and terms of use for Damian Vanco's portfolio website." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function Section({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex gap-4">
        <span className="text-[15px] text-foreground">{number}.</span>
        <h2 className="text-[15px] font-medium text-foreground">{title}</h2>
      </div>
      <div className="mt-4 text-[14px] leading-relaxed text-foreground/70">{children}</div>
    </div>
  );
}

function PrivacyPolicyPage() {
  const t = useT();
  return (
    <div className="min-h-screen bg-white text-foreground">
      <SiteHeader />

      <section className="px-5 pt-20 pb-24 md:px-6 md:pt-24">
        <h1
          className="font-medium leading-[1] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
        >
          {t("privacy.title")}
        </h1>
        <div className="mt-10 border-t border-dashed border-foreground/25" />

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
          <div>
            <h2 className="text-[18px] font-medium text-foreground">{t("privacy.responsibleTitle")}</h2>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-foreground/70">
              {t("privacy.responsibleBody")}
            </p>

            <p className="mt-10 text-[14px] text-foreground">{t("privacy.contactLabel")}</p>
            <p className="mt-4 text-[14px] leading-relaxed text-foreground/70">
              {t("privacy.location")}
            </p>
            <p className="mt-6 text-[14px] text-foreground/70">
              <a href="mailto:damian.vanco7@gmail.com" className="hover:text-foreground">
                damian.vanco7@gmail.com
              </a>
            </p>
          </div>

          <div className="space-y-10">
            <p className="text-[14px] text-foreground/60">{t("privacy.lastUpdated")}</p>

            <p className="text-[14px] leading-relaxed text-foreground/70">{t("privacy.intro")}</p>

            <Section number={1} title={t("privacy.s1.title")}>{t("privacy.s1.body")}</Section>
            <Section number={2} title={t("privacy.s2.title")}>{t("privacy.s2.body")}</Section>
            <Section number={3} title={t("privacy.s3.title")}>{t("privacy.s3.body")}</Section>
            <Section number={4} title={t("privacy.s4.title")}>{t("privacy.s4.body")}</Section>
            <Section number={5} title={t("privacy.s5.title")}>{t("privacy.s5.body")}</Section>
            <Section number={6} title={t("privacy.s6.title")}>{t("privacy.s6.body")}</Section>
            <Section number={7} title={t("privacy.s7.title")}>{t("privacy.s7.body")}</Section>
            <Section number={8} title={t("privacy.s8.title")}>{t("privacy.s8.body")}</Section>

            <p className="text-[14px] leading-relaxed text-foreground/70">{t("privacy.outro")}</p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
