import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SiteFooter } from "@/components/SiteFooter";
import heroSun from "@/assets/hero-sun.jpg";
import aureanJourneys from "@/assets/projects/aurean-journeys.jpg";
import velox from "@/assets/projects/velox.jpg";
import surikado from "@/assets/projects/surikado.jpg";
import villaPoton from "@/assets/projects/villa-poton.jpg";
import stableLabs from "@/assets/projects/stable-labs.jpg";
import ethereumBratislava from "@/assets/projects/ethereum-bratislava.jpg";
import serviceDesign from "@/assets/services/design-and-development.png";
import serviceBranding from "@/assets/services/branding-and-identity.png";
import serviceCreative from "@/assets/services/creative-direction.png";
import logoBirne from "@/assets/logos/birne.png";
import logoGreenstone from "@/assets/logos/greenstone.png";
import logoLeadsummit from "@/assets/logos/leadsummit.png";
import logoZetshop from "@/assets/logos/zetshop.png";
import logoTncoc from "@/assets/logos/tncoc.png";
import logoUnuo from "@/assets/logos/unuo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Studio Terrace — A Digital First Creative Studio" },
      {
        name: "description",
        content:
          "Transforming ideas into impactful digital experiences through web development and visual content since 2010.",
      },
      { property: "og:title", content: "Studio Terrace — A Digital First Creative Studio" },
      {
        property: "og:description",
        content:
          "Transforming ideas into impactful digital experiences through web development and visual content since 2010.",
      },
    ],
  }),
  component: HomePage,
});

const projectsTop = [
  { slug: "aurean-journeys", img: aureanJourneys, tags: ["Art Direction", "Web Design"], title: "Aurean Journeys" },
  { slug: "velox", img: velox, tags: ["Web Design", "Web Development"], title: "Velox" },
] as const;

const projectsBottom = [
  { slug: "surikado", img: surikado, tags: ["Brand", "Web Design"], title: "Surikado" },
  { slug: "ethereum-bratislava", img: ethereumBratislava, tags: ["Web Design", "3D & Animation"], title: "Ethereum Bratislava" },
  { slug: "stable-labs", img: stableLabs, tags: ["Web Design", "Web Development"], title: "Stable Labs" },
] as const;

const services = [
  {
    img: serviceDesign,
    title: "Web Design and Development",
    excerpt:
      "Modern, performant websites crafted from the first wireframe to the final line of code, tailored to your brand.",
  },
  {
    img: serviceBranding,
    title: "Branding and Identity",
    excerpt:
      "Logos, visual systems and guidelines that give your brand a distinct voice and a consistent presence everywhere.",
  },
  {
    img: serviceCreative,
    title: "Creative Direction",
    excerpt:
      "Strategic art direction and creative oversight that ties campaigns, products and content into one cohesive story.",
  },
] as const;

function PillLink({ children, dot = true }: { children: React.ReactNode; dot?: boolean }) {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] font-normal text-foreground transition-colors hover:bg-black/10"
    >
      {dot && (
        <span
          className="inline-block h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: "var(--accent-orange)" }}
        />
      )}
      {children}
    </Link>
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
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
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
      <div
        aria-hidden="true"
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${heroSun})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <section className="relative z-10">
        <div className="flex min-h-[55vh] flex-col justify-end bg-white px-5 pb-2 pt-24 md:px-6 md:pt-32">
          <div className="flex items-end justify-between gap-8 pb-10">
            <h1
              className="font-medium leading-[0.95] tracking-[-0.04em] text-foreground"
              style={{ fontSize: "clamp(1.6rem, 5vw, 4.75rem)" }}
            >
              A Digital First
              <br />
              Creative Studio
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
              <PillLink>About us</PillLink>
            </span>
            Transforming your ideas into impactful digital experiences by
            delivering top-tier web development and visual content, ensuring
            every project lives up to your brand with creativity and precision.
          </h2>
        </div>

        {/* CLIENT LOGOS */}
        <div className="mt-16 grid grid-cols-2 gap-2 sm:grid-cols-3 md:mt-24 md:grid-cols-6">
          {[
            { name: "Birne", src: logoBirne },
            { name: "Greenstone", src: logoGreenstone },
            { name: "Lead Summit", src: logoLeadsummit },
            { name: "Zetshop", src: logoZetshop },
            { name: "The Netherlands Chamber of Commerce", src: logoTncoc },
            { name: "Unuo", src: logoUnuo },
          ].map(({ name, src }) => (
            <div
              key={name}
              className="flex aspect-[5/3] items-center justify-center rounded-sm bg-black/5"
            >
              <img
                src={src}
                alt={name}
                loading="lazy"
                className="h-[85%] w-[85%] object-contain opacity-40 transition-opacity duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </div>
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
            <PillLink>View all projects</PillLink>
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
            <PillLink>View all services</PillLink>
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
                  <div className="flex flex-col gap-6 pl-0 md:flex-row md:items-start md:gap-10 md:pl-[72px]">
                    <div
                      className="aspect-[16/9] w-full overflow-hidden rounded-sm md:w-[60%] md:max-w-[calc(48rem*0.9)]"
                      style={{ backgroundColor: "var(--surface-cream)" }}
                    >
                      <img
                        src={s.img}
                        alt={s.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="max-w-2xl text-[14px] leading-relaxed text-foreground/50 md:flex-1 md:pt-2">
                      {s.excerpt}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
