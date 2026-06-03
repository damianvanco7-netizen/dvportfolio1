import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteFooter } from "@/components/SiteFooter";
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
    title: "Web Design and Development",
    excerpt:
      "Custom websites built around strong visual direction, clear structure, responsive layouts, and refined front-end execution. The goal is to create websites that not only look distinctive, but also feel intuitive, trustworthy, and easy to use across every device.",
    projects: [
      { slug: "aurean-journeys", title: "Aurean Journeys" },
      { slug: "velox", title: "Velox" },
      { slug: "surikado", title: "Surikado AI" },
      { slug: "villa-poton", title: "Villa Potôn" },
      { slug: "ethereum-bratislava", title: "Ethereum Bratislava" },
    ],
  },
  {
    title: "Visual Identity",
    excerpt:
      "Visual identities shaped to give brands a clear and recognizable voice across digital and physical touchpoints. From logos, typography, color palettes, and layout systems to supporting brand assets, every element is built to feel consistent, flexible, and true to the character of the brand.",
    projects: [
      { slug: "8bites", title: "8bites" },
      { slug: "stable-labs", title: "Stable Labs" },
      { slug: "ethereum-bratislava", title: "Ethereum Bratislava" },
      { slug: "lava-stone", title: "Lava Stone" },
      { slug: "lead-summit", title: "Lead Summit" },
    ],
  },
  {
    title: "Social Media Communication",
    excerpt:
      "Social media communication designed to keep brands consistent, recognizable, and active across the channels where people meet them most often. From visual templates and campaign direction to content ideas and post designs, every output should feel aligned with the brand and easy to use in everyday communication.",
    projects: [
      { slug: "8bites", title: "8bites" },
      { slug: "lead-summit", title: "Lead Summit" },
      { slug: "ethereum-bratislava", title: "Ethereum Bratislava" },
    ],
  },
  {
    title: "Creative Direction",
    excerpt:
      "Creative direction that connects the brand, website, campaign, or launch into one clear visual approach. This includes shaping the overall mood, message, visual language, and brand presence, making sure the final outcome feels focused, memorable, and aligned with the brand's goals.",
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
      className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] font-normal text-foreground transition-colors hover:bg-black/10"
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
      className="group inline-flex items-center gap-1.5 rounded-full bg-black/5 px-4 py-2 text-[13px] font-normal text-foreground transition-colors hover:bg-black/10"
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
        className="max-w-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:max-w-[12px] group-hover:translate-x-0 group-hover:opacity-100"
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
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 768) setVisible(3);
      else if (window.innerWidth >= 640) setVisible(2);
      else setVisible(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index === items.length) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }, 700);
      return () => clearTimeout(t);
    }
  }, [index, items.length]);

  const list = [...items, ...items.slice(0, visible)];
  const step = 100 / list.length;

  return (
    <div className="overflow-hidden">
      <div
        className="flex"
        style={{
          width: `${(list.length * 100) / visible}%`,
          transform: `translateX(-${index * step}%)`,
          transition: animate ? "transform 700ms ease" : "none",
        }}
      >
        {list.map((r, i) => (
          <div
            key={`${r.name}-${i}`}
            className="shrink-0 px-4 first:pl-0 md:px-5"
            style={{ width: `${100 / list.length}%` }}
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

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(6);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 768) setVisible(6);
      else if (window.innerWidth >= 640) setVisible(3);
      else setVisible(2);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setAnimate(true);
      setIndex((i) => i + 1);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index === logos.length) {
      const t = setTimeout(() => {
        setAnimate(false);
        setIndex(0);
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      }, 700);
      return () => clearTimeout(t);
    }
  }, [index, logos.length]);

  const items = [...logos, ...logos.slice(0, visible)];
  const step = 100 / items.length;

  return (
    <div className="mt-16 overflow-hidden md:mt-24">
      <div
        className="flex"
        style={{
          width: `${(items.length * 100) / visible}%`,
          transform: `translateX(-${index * step}%)`,
          transition: animate ? "transform 700ms ease" : "none",
        }}
      >
        {items.map(({ name, src }, i) => (
          <div
            key={`${name}-${i}`}
            className="shrink-0 px-1"
            style={{ width: `${100 / items.length}%` }}
          >
            <div className="flex aspect-[5/3] items-center justify-center rounded-sm bg-black/5">
              <img
                src={src}
                alt={name}
                loading="lazy"
                className="h-[85%] w-[85%] object-contain opacity-40 transition-opacity duration-300 hover:opacity-100"
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
  return (
    <Link to="/projects/$slug" params={{ slug }} className="group block">
      <div
        className={`${aspect} relative w-full overflow-hidden rounded-sm`}
        style={{ backgroundColor: "var(--surface-cream)" }}
      >
        {/\.(mp4|webm|mov)$/i.test(img) ? (
          <video
            src={img}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        ) : (
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        )}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full bg-white text-foreground opacity-0 shadow-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </span>
      </div>
      <div className="mt-4 flex items-baseline gap-1.5 text-[13px] text-muted-foreground">
        {tags.map((t, i) => (
          <span key={t} className="flex items-baseline gap-1.5">
            {i > 0 && <span className="opacity-50">/</span>}
            <span>{t}</span>
          </span>
        ))}
      </div>
      <h3 className="mt-1 text-[20px] tracking-tight text-foreground">{title}</h3>
    </Link>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen text-foreground">
      <SiteHeader />

      {/* HERO — fixed background image, content scrolls over it */}
      <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      <section className="relative z-10">
        <div className="flex min-h-[55vh] flex-col justify-end bg-white px-5 pb-2 pt-24 md:px-6 md:pt-32">
          <div className="flex items-end justify-between gap-8 pb-10">
            <h1
              className="font-medium leading-[0.95] tracking-[-0.04em] text-foreground"
              style={{ fontSize: "clamp(1.6rem, 5vw, 4.75rem)" }}
            >
              Shaping Brands With
              <br />
              Clarity and Character
            </h1>
            <span className="hidden whitespace-nowrap pb-2 text-[13px] text-muted-foreground md:inline">
              (Since 2020)
            </span>
          </div>
        </div>

        {/* spacer so the fixed image is visible before content scrolls over it */}
        <div style={{ height: "100vh" }} />
      </section>

      {/* INTRO */}
      <section className="relative z-10 bg-white px-5 py-28 md:px-6 md:py-40">
        <div className="max-w-5xl">
          <h2 className="text-[24px] font-medium leading-[1.2] tracking-tight text-foreground md:text-[32px]">
            <span className="mr-3 inline-flex align-middle">
              <PillLink>About</PillLink>
            </span>
            My work sits between brand, design, and development: creating
            visual identities, websites, and communication systems that help
            brands feel clear, confident, and recognizable.
          </h2>
        </div>

        {/* CLIENT LOGOS */}
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
      </section>

      {/* LATEST WORK */}
      <section className="relative z-10 bg-white border-t border-border/60">
        <div className="px-5 py-12 md:px-6 md:py-16">
          <div className="mb-10 flex items-end justify-between md:mb-14">
            <h2
              className="font-medium leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Latest work
            </h2>
            <PillLink to="/projects">View all projects</PillLink>
          </div>

          <div className="grid grid-cols-1 gap-x-2 gap-y-20 md:grid-cols-2 md:gap-y-24">
            {projectsTop.map((p) => (
              <ProjectCard key={p.title} {...p} aspect="aspect-[16/11]" />
            ))}
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-2 gap-y-20 md:mt-24 md:grid-cols-3 md:gap-y-24">
            {projectsBottom.map((p) => (
              <ProjectCard key={p.title} {...p} aspect="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative z-10 bg-white border-t border-border/60">
        <div className="px-5 py-12 md:px-6 md:py-16">
          <div className="mb-10 flex items-end justify-between md:mb-14">
            <h2
              className="font-medium leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              Services
            </h2>
            <PillLink to="/about">Learn more about me</PillLink>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {services.map((s, i) => (
              <AccordionItem
                key={s.title}
                value={s.title}
                className="border-b border-border/60"
              >
                <AccordionTrigger className="group flex w-full items-center gap-6 py-6 hover:no-underline [&>svg]:hidden">
                  <span className="w-12 shrink-0 text-[18px] tabular-nums text-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-left text-[clamp(1.25rem,2.5vw,2rem)] font-normal tracking-tight text-foreground">
                    {s.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className="relative ml-auto h-5 w-5 shrink-0 text-foreground/60 transition-transform duration-300 group-data-[state=open]:rotate-45"
                  >
                    <span className="absolute left-1/2 top-1/2 h-px w-5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-1/2 h-5 w-px -translate-x-1/2 -translate-y-1/2 bg-current" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-10 pt-2">
                  <div className="flex flex-col items-start gap-6 pl-0 md:flex-row md:gap-12 md:pl-[72px]">
                    <p className="max-w-md text-[14px] leading-relaxed text-foreground/50 md:flex-1">
                      {s.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 md:flex-1 md:justify-end">
                      {s.projects.map((p) => (
                        <ProjectPill key={p.slug} slug={p.slug} title={p.title} />
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* REFERENCES */}
      <section className="relative z-10 bg-white border-t border-border/60">
        <div className="px-5 py-12 md:px-6 md:py-16">
          <div className="mb-10 flex items-end justify-between md:mb-14">
            <h2
              className="font-medium leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              References
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

          <ReferencesCarousel
            items={[
              {
                name: "Jakub Hrušovský",
                position: "Co-founder",
                company: "Birne",
                photo: refBirne.url,
                quote:
                  "Over the past years, Damian worked with us across many projects, always delivering reliable, high-quality results.",
              },
              {
                name: "Teodor Derzsi",
                position: "CEO & Founder",
                company: "Greenstone",
                photo: refGreenstone.url,
                quote:
                  "Damian helped us bring the project to life with a polished result, clear process, and strong execution.",
              },
              {
                name: "Patrik Zubíček",
                position: "Project Manager",
                company: "Zetshop",
                photo: refZetshop.url,
                quote:
                  "While working on the visual identity, he exceeded our expectations and, thanks to his creative approach, elevated the Zetshop brand several levels higher.",
              },
              {
                name: "René Marek",
                position: "CEO & Founder",
                company: "Lead Summit",
                photo: refLeadsummit.url,
                quote:
                  "Damian translated the energy of our event into a bold identity and confident online presence.",
              },
              {
                name: "Milan Vizner",
                position: "CEO",
                company: "Norriv",
                photo: refNorriv.url,
                quote:
                  "Damian captured our hologram and 3D visualization work in a website that feels premium, clear, and future-facing.",
              },
            ]}
          />
        </div>
      </section>



      <SiteFooter />
    </div>
  );
}
