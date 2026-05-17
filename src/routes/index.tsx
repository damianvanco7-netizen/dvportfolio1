import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroSun from "@/assets/hero-sun.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";
import news4 from "@/assets/news-4.jpg";
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
  { img: project1, tags: ["Art Direction", "Web Design"], title: "In-House" },
  { img: project2, tags: ["Web Design", "Web Development"], title: "Ora Studio" },
] as const;

const projectsBottom = [
  { img: project3, tags: ["Web Development"], title: "Jacob Turner" },
  { img: project4, tags: ["Art Direction", "Web Development"], title: "Studio B" },
  { img: project5, tags: ["Web Design", "Web Development"], title: "Apex Films" },
] as const;

const services = [
  {
    img: news1,
    title: "Web Design and Development",
    excerpt:
      "Modern, performant websites crafted from the first wireframe to the final line of code, tailored to your brand.",
  },
  {
    img: news2,
    title: "Branding and Identity",
    excerpt:
      "Logos, visual systems and guidelines that give your brand a distinct voice and a consistent presence everywhere.",
  },
  {
    img: news3,
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
  img,
  tags,
  title,
  aspect = "aspect-[16/11]",
}: {
  img: string;
  tags: readonly string[];
  title: string;
  aspect?: string;
}) {
  return (
    <Link to="/" className="group block">
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

          <div className="grid grid-cols-1 gap-x-2 gap-y-10 md:grid-cols-3">
            {services.map((s) => (
              <Link to="/" key={s.title} className="group block">
                <div
                  className="aspect-[4/3] w-full overflow-hidden rounded-sm"
                  style={{ backgroundColor: "var(--surface-cream)" }}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="mt-5 text-[20px] leading-snug tracking-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-foreground/50 line-clamp-2">
                  {s.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
