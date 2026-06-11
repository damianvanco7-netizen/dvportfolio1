import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { primeProjectOpen } from "@/lib/nav-transition";
import { SiteHeader } from "@/components/SiteHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { useT } from "@/lib/i18n";
import { localizeTags } from "@/lib/project-i18n";
import heroVideo from "@/assets/hero.mp4";
import aureanJourneys from "@/assets/projects/aurean-journeys.mp4";
import velox from "@/assets/projects/velox.jpg";
import eightBitesCover from "@/assets/projects/8bites-cover.jpeg";
import villaPotonVideo from "@/assets/projects/villa-poton-2.mp4";
import ethereumBratislava from "@/assets/projects/ethereum-bratislava.jpg";
import logoBirne from "@/assets/logos/birne.png";
import logoGreenstone from "@/assets/logos/greenstone.png";
import logoLeadsummit from "@/assets/logos/leadsummit.png";
import logoZetshop from "@/assets/logos/zetshop.png";
import logoTncoc from "@/assets/logos/tncoc.png";
import logoUnuo from "@/assets/logos/unuo.png";
import logoCvti from "@/assets/logos/cvti.png";
import logoNorriv from "@/assets/logos/norriv.png";
import refBirne from "@/assets/references/birne.png.asset.json";
import refGreenstone from "@/assets/references/greenstone.png.asset.json";
import refZetshop from "@/assets/references/zetshop.png.asset.json";
import refLeadsummit from "@/assets/references/leadsummit.png.asset.json";
import refNorriv from "@/assets/references/norriv.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Damian Vanco — Shaping Brands With Clarity and Character" },
      {
        name: "description",
        content:
          "My work sits between brand, design, and development: creating visual identities, websites, and communication systems that help brands feel clear, confident, and recognizable.",
      },
      { property: "og:title", content: "Damian Vanco — Shaping Brands With Clarity and Character" },
      {
        property: "og:description",
        content:
          "My work sits between brand, design, and development: creating visual identities, websites, and communication systems that help brands feel clear, confident, and recognizable.",
      },
    ],
  }),
  component: HomePage,
});

const projectsTop = [
  { slug: "aurean-journeys", img: aureanJourneys, tags: ["Web design and development"], title: "Aurean Journeys" },
  { slug: "velox", img: velox, tags: ["Web design and development"], title: "Velox" },
] as const;

const projectsBottom = [
  { slug: "8bites", img: eightBitesCover, tags: ["Visual Identity", "Web design"], title: "8bites" },
  { slug: "villa-poton", img: villaPotonVideo, tags: ["Web design and development"], title: "Villa Potôn" },
  { slug: "ethereum-bratislava", img: ethereumBratislava, tags: ["Visual Identity", "Web design and development"], title: "Ethereum Bratislava" },
] as const;

const services = [
  {
    titleKey: "service.web",
    excerptKey: "service.web.excerpt",
    projects: [
      { slug: "aurean-journeys", title: "Aurean Journeys" },
      { slug: "velox", title: "Velox" },
      { slug: "surikado", title: "Surikado AI" },
      { slug: "villa-poton", title: "Villa Potôn" },
      { slug: "ethereum-bratislava", title: "Ethereum Bratislava" },
    ],
  },
  {
    titleKey: "service.identity",
    excerptKey: "service.identity.excerpt",
    projects: [
      { slug: "8bites", title: "8bites" },
      { slug: "stable-labs", title: "Stable Labs" },
      { slug: "ethereum-bratislava", title: "Ethereum Bratislava" },
      { slug: "lava-stone", title: "Lava Stone" },
      { slug: "lead-summit", title: "Lead Summit" },
    ],
  },
  {
    titleKey: "service.social",
    excerptKey: "service.social.excerpt",
    projects: [
      { slug: "8bites", title: "8bites" },
      { slug: "lead-summit", title: "Lead Summit" },
      { slug: "ethereum-bratislava", title: "Ethereum Bratislava" },
    ],
  },
  {
    titleKey: "service.creative",
    excerptKey: "service.creative.excerpt",
    projects: [
      { slug: "8bites", title: "8bites" },
      { slug: "lava-stone", title: "Lava Stone" },
      { slug: "lead-summit", title: "Lead Summit" },
      { slug: "ethereum-bratislava", title: "Ethereum Bratislava" },
    ],
  },
] as const;

function PillLink({
  children,
  dot = true,
  to = "/",
}: {
  children: React.ReactNode;
  dot?: boolean;
  to?: string;
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] font-normal text-foreground transition-colors duration-500 hover:bg-black/10"
    >
      {dot && (
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "var(--accent-blue)" }}
        />
      )}
      {children}
    </Link>
  );
}

function ProjectPill({ slug, title }: { slug: string; title: string }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug }}
      className="group inline-flex items-center gap-1.5 rounded-full bg-black/5 px-4 py-2 text-[13px] font-normal text-foreground transition-colors duration-500 hover:bg-black/10"
    >
      {title}
      <svg
        aria-hidden="true"
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="max-w-0 -translate-x-1 opacity-0 transition-all duration-700 group-hover:max-w-[12px] group-hover:translate-x-0 group-hover:opacity-100"
      >
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
      </svg>
    </Link>
  );
}

type Reference = {
  name: string;
  position: string;
  company: string;
  quote: string;
  photo: string;
};

function ReferencesCarousel({ items }: { items: Reference[] }) {
  // Seamless CSS marquee: duplicate list so translateX(-50%) loops cleanly.
  const loop = [...items, ...items];
  // ~14s per item for a calm pace
  const duration = `${items.length * 14}s`;

  return (
    <div className="marquee">
      <div
        className="marquee-track"
        style={{ animationDuration: duration }}
      >
        {loop.map((r, i) => (
          <div
            key={`${r.name}-${i}`}
            className="shrink-0 px-4 md:px-5"
            style={{ width: "min(420px, 85vw)" }}
          >
            <figure className="flex h-full flex-col gap-8 border-t border-border/60 pt-8">
              <blockquote className="text-[18px] leading-[1.5] tracking-tight text-foreground/80">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <img
                  src={r.photo}
                  alt={r.name}
                  className="h-10 w-10 shrink-0 rounded-full object-cover"
                  loading="lazy"
                />
                <span className="flex flex-col">
                  <span className="text-[14px] text-foreground">{r.name}</span>
                  <span className="text-[13px] text-muted-foreground">
                    {r.position}, {r.company}
                  </span>
                </span>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoCarousel({ logos }: { logos: { name: string; src: string }[] }) {
  const loop = [...logos, ...logos];
  const duration = `${logos.length * 4}s`;

  return (
    <div className="marquee mt-16 md:mt-24">
      <div
        className="marquee-track"
        style={{ animationDuration: duration }}
      >
        {loop.map(({ name, src }, i) => (
          <div
            key={`${name}-${i}`}
            className="shrink-0 px-1"
            style={{ width: "min(220px, 40vw)" }}
          >
            <div className="flex aspect-[5/3] items-center justify-center rounded-sm bg-black/5">
              <img
                src={src}
                alt={name}
                loading="lazy"
                className="h-[85%] w-[85%] object-contain opacity-40 transition-opacity duration-700 hover:opacity-100"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


function ProjectCard({
  slug,
  img,
  tags,
  title,
  aspect = "aspect-[16/11]",
}: {
  slug: string;
  img: string;
  tags: readonly string[];
  title: string;
  aspect?: string;
}) {
  const t = useT();
  const localizedTags = localizeTags(t, tags);
  return (
    <Link
      to="/projects/$slug"
      params={{ slug }}
      onClick={primeProjectOpen}
      className="group block"
    >
      <motion.div
        layoutId={`project-cover-${slug}`}
        className={`${aspect} relative w-full overflow-hidden rounded-sm`}
        style={{
          backgroundColor: "var(--surface-cream)",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
        transition={{ layout: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }}
      >
        {/\.(mp4|webm|mov)$/i.test(img) ? (
          <video
            src={img}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-white text-foreground opacity-0 shadow-sm transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </span>
      </motion.div>
      <div className="mt-4 flex items-baseline gap-1.5 text-[13px] text-muted-foreground">
        {localizedTags.map((tag, i) => (
          <span key={`${tag}-${i}`} className="flex items-baseline gap-1.5">
            {i > 0 && <span className="opacity-50">/</span>}
            <span>{tag}</span>
          </span>
        ))}
      </div>
      <h3 className="mt-1 text-[20px] tracking-tight text-foreground">{title}</h3>
    </Link>
  );
}

function HomePage() {
  const t = useT();
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      {/* HERO — fixed background image, content scrolls over it */}
      <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
        <motion.video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <section className="relative z-10">
        <div className="flex min-h-[55vh] flex-col justify-end bg-white px-5 pb-2 pt-24 md:px-6 md:pt-32">
          <div className="flex items-end justify-between gap-8 pb-10">
            <motion.h1
              className="font-medium leading-[0.95] tracking-[-0.04em] text-foreground"
              style={{ fontSize: "clamp(1.6rem, 5vw, 4.75rem)" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {t("home.heroTitle.line1")}
              <br />
              {t("home.heroTitle.line2")}
            </motion.h1>
            <motion.span
              className="hidden whitespace-nowrap pb-2 text-[13px] text-muted-foreground md:inline"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {t("home.since")}
            </motion.span>
          </div>
        </div>

        {/* spacer so the fixed image is visible before content scrolls over it */}
        <div style={{ height: "100vh" }} />
      </section>

      {/* INTRO */}
      <section className="relative z-10 bg-white px-5 py-28 md:px-6 md:py-40">
        <Reveal>
          <div className="max-w-5xl">
            <h2 className="text-[24px] font-medium leading-[1.2] tracking-tight text-foreground md:text-[32px]">
              <span className="mr-3 inline-flex align-middle">
                <PillLink>{t("home.aboutPill")}</PillLink>
              </span>
              {t("home.aboutText")}
            </h2>
          </div>
        </Reveal>

        {/* CLIENT LOGOS */}
        <Reveal delay={0.15}>
          <LogoCarousel
            logos={[
              { name: "Birne", src: logoBirne },
              { name: "Greenstone", src: logoGreenstone },
              { name: "Lead Summit", src: logoLeadsummit },
              { name: "Zetshop", src: logoZetshop },
              { name: "The Netherlands Chamber of Commerce", src: logoTncoc },
              { name: "Unuo", src: logoUnuo },
              { name: "CVTI SR", src: logoCvti },
              { name: "Norriv", src: logoNorriv },
            ]}
          />
        </Reveal>
      </section>

      {/* LATEST WORK */}
      <section className="relative z-10 bg-white border-t border-border/60">
        <div className="px-5 py-12 md:px-6 md:py-16">
          <Reveal>
            <div className="mb-10 flex items-end justify-between md:mb-14">
              <h2
                className="font-medium leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {t("home.latestWork")}
              </h2>
              <PillLink to="/projects">{t("home.viewAllProjects")}</PillLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-2 gap-y-20 md:grid-cols-2 md:gap-y-24">
            {projectsTop.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <ProjectCard {...p} aspect="aspect-[16/11]" />
              </Reveal>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-2 gap-y-20 md:mt-24 md:grid-cols-3 md:gap-y-24">
            {projectsBottom.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <ProjectCard {...p} aspect="aspect-[4/3]" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 bg-white border-t border-border/60">
        <div className="px-5 py-12 md:px-6 md:py-16">
          <Reveal>
            <div className="mb-10 flex items-end justify-between md:mb-14">
              <h2
                className="font-medium leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {t("home.services")}
              </h2>
              <PillLink to="/about">{t("home.learnMore")}</PillLink>
            </div>
          </Reveal>

          <Accordion type="single" collapsible className="w-full">
            {services.map((s, i) => (
              <Reveal key={s.titleKey} delay={i * 0.08} y={20}>
                <AccordionItem
                  value={s.titleKey}
                  className="border-b border-border/60"
                >
                  <AccordionTrigger className="group flex w-full items-center gap-6 py-6 hover:no-underline [&>svg]:hidden">
                    <span className="w-12 shrink-0 text-[18px] tabular-nums text-foreground/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-left text-[clamp(1.25rem,2.5vw,2rem)] font-normal tracking-tight text-foreground">
                      {t(s.titleKey)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative ml-auto h-5 w-5 shrink-0 text-foreground/60 transition-transform duration-700 group-data-[state=open]:rotate-45"
                    >
                      <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                      <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-10 pt-2">
                    <div className="flex flex-col items-start gap-6 pl-0 md:flex-row md:gap-12 md:pl-[72px]">
                      <p className="max-w-md text-[14px] leading-relaxed text-foreground/50 md:flex-1">
                        {t(s.excerptKey)}
                      </p>
                      <div className="md:flex-1">
                        <p className="mb-3 text-[13px] text-foreground/50">{t("home.exampleProjects")}</p>
                        <div className="flex flex-wrap gap-2">
                          {s.projects.map((p) => (
                            <ProjectPill key={p.slug} slug={p.slug} title={p.title} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Reveal>
            ))}
          </Accordion>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="relative z-10 bg-white border-t border-border/60">
        <div className="px-5 py-12 md:px-6 md:py-16">
          <Reveal>
            <div className="mb-10 flex items-end justify-between md:mb-14">
              <h2
                className="font-medium leading-[0.95] tracking-[-0.03em]"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {t("home.references")}
              </h2>
              <span className="hidden items-center gap-1.5 whitespace-nowrap rounded-full bg-black/5 px-4 py-2 pb-2 text-[13px] text-foreground md:inline-flex">
                <svg
                  aria-hidden="true"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ color: "var(--accent-blue)" }}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                4.8
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>

          <ReferencesCarousel
            items={[
              {
                name: "Jakub Hrušovský",
                position: t("ref.position.cofounder"),
                company: "Birne",
                photo: refBirne.url,
                quote: t("ref.birne"),
              },
              {
                name: "Teodor Derzsi",
                position: t("ref.position.ceofounder"),
                company: "Greenstone",
                photo: refGreenstone.url,
                quote: t("ref.greenstone"),
              },
              {
                name: "Patrik Zubíček",
                position: t("ref.position.pm"),
                company: "Zetshop",
                photo: refZetshop.url,
                quote: t("ref.zetshop"),
              },
              {
                name: "René Marek",
                position: t("ref.position.ceofounder"),
                company: "Lead Summit",
                photo: refLeadsummit.url,
                quote: t("ref.leadsummit"),
              },
              {
                name: "Milan Vizner",
                position: t("ref.position.ceo"),
                company: "Norriv",
                photo: refNorriv.url,
                quote: t("ref.norriv"),
              },
            ]}
          />
          </Reveal>
        </div>
      </section>



      <SiteFooter />
    </div>
  );
}
