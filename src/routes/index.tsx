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

const news = [
  {
    img: news1,
    title: "Sustainability Meets Aesthetics in Packaging Design",
    excerpt:
      "The intersection of sustainability and aesthetics in packaging design is reshaping the industry. Consumers today are more environmentally conscious, demanding eco-friendly solutions.",
  },
  {
    img: news2,
    title: "Studio 34 got 2 awards",
    excerpt:
      "We are thrilled to share that Studio 34 has recently received two prestigious awards for their outstanding work — recognition for creativity, innovation, and dedication.",
  },
  {
    img: news3,
    title: "When does design end?",
    excerpt:
      "The concept of \"when design ends\" is a thought-provoking question. In reality, design is an ever-evolving process that often has no definitive endpoint.",
  },
  {
    img: news4,
    title: "Driving Success with Market Research",
    excerpt:
      "Market research is a crucial component in driving business success and informed decision-making. We leverage advanced methodologies to gather insights.",
  },
] as const;

function PillLink({ children, dot = true }: { children: React.ReactNode; dot?: boolean }) {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1.5 text-[13px] text-foreground transition-colors hover:bg-background"
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
        className={`${aspect} w-full overflow-hidden rounded-md`}
        style={{ backgroundColor: "var(--surface-cream)" }}
      >
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        />
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

      <section className="relative">
        <div className="px-5 pt-24 md:px-6 md:pt-32">
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
        <div className="h-screen" />
      </section>

      {/* INTRO */}
      <section className="relative z-10 bg-background px-5 py-28 md:px-6 md:py-40">
        <div className="flex flex-col gap-4 md:max-w-3xl md:flex-row md:items-start md:gap-6">
          <div className="shrink-0 pt-1">
            <PillLink>About us</PillLink>
          </div>
          <p className="text-[22px] leading-[1.35] tracking-tight text-foreground md:text-[28px]">
            Transforming your ideas into impactful digital experiences by
            delivering top-tier web development and visual content, ensuring
            every project lives up to your brand with creativity and precision.
          </p>
        </div>
      </section>

      {/* LATEST WORK */}
      <section className="relative z-10 bg-background border-t border-border/60">
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

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-16">
            {projectsTop.map((p) => (
              <ProjectCard key={p.title} {...p} aspect="aspect-[16/11]" />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 md:mt-16 md:grid-cols-3">
            {projectsBottom.map((p) => (
              <ProjectCard key={p.title} {...p} aspect="aspect-[4/3]" />
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="relative z-10 bg-background border-t border-border/60">
        <div className="px-5 py-12 md:px-6 md:py-16">
          <div className="mb-10 flex items-end justify-between md:mb-14">
            <h2
              className="font-medium leading-[0.95] tracking-[-0.03em]"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              News
            </h2>
            <PillLink>Read all articles</PillLink>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {news.map((n) => (
              <Link to="/" key={n.title} className="group block">
                <div
                  className="aspect-[4/3] w-full overflow-hidden rounded-md"
                  style={{ backgroundColor: "var(--surface-cream)" }}
                >
                  <img
                    src={n.img}
                    alt={n.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <h3 className="mt-5 text-[18px] leading-snug tracking-tight text-foreground">
                  {n.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
                  {n.excerpt}
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
