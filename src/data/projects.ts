import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/news-1.jpg";

export type Project = {
  slug: string;
  title: string;
  cover: string;
  tags: readonly string[];
  info: string;
  services: readonly string[];
  client: string;
  year: string;
  design?: readonly string[];
  motion?: readonly string[];
  development?: readonly string[];
  liveUrl?: string;
  gallery: readonly string[];
};

export const projects: readonly Project[] = [
  {
    slug: "in-house",
    title: "In-House",
    cover: project1,
    tags: ["Art Direction", "Web Design"],
    info: "Meet In-House. A clean and meaningful template crafted with intent, perfect for agencies and creative minds alike. With its understated yet refined design, In-House provides a versatile platform to showcase your work authentically. Seamlessly blending refined animations and intuitive interactions, this template offers a versatile CMS setup, making it an ideal choice for content rich portfolios.",
    services: ["Art Direction", "Web Design"],
    client: "TM Management",
    year: "2025",
    design: ["Suzanne Smith", "Johan Weil", "Frank Meir"],
    motion: ["Noah Jenkins", "Isabella Brooks"],
    development: ["Emma Sullivan", "Alexander Turner", "Harper Mitchell"],
    gallery: [project1, project2, project3, project4],
  },
  {
    slug: "ora-studio",
    title: "Ora Studio",
    cover: project2,
    tags: ["Web Design", "Web Development"],
    info: "Ora Studio is a refined digital identity built for a contemporary creative practice — balancing editorial typography with quiet, considered motion.",
    services: ["Web Design", "Web Development"],
    client: "Ora Studio",
    year: "2024",
    design: ["Suzanne Smith"],
    development: ["Emma Sullivan", "Alexander Turner"],
    gallery: [project2, project3, project1],
  },
  {
    slug: "jacob-turner",
    title: "Jacob Turner",
    cover: project3,
    tags: ["Web Development"],
    info: "A personal portfolio for photographer Jacob Turner, focused on fast image delivery and a quiet, gallery-first reading experience.",
    services: ["Web Development"],
    client: "Jacob Turner",
    year: "2024",
    development: ["Alexander Turner"],
    gallery: [project3, project4, project5],
  },
  {
    slug: "studio-b",
    title: "Studio B",
    cover: project4,
    tags: ["Art Direction", "Web Development"],
    info: "Studio B needed a confident online presence that matched their bold creative direction — strong type, generous whitespace, and tactile interactions.",
    services: ["Art Direction", "Web Development"],
    client: "Studio B",
    year: "2025",
    design: ["Frank Meir"],
    development: ["Harper Mitchell"],
    gallery: [project4, project5, project2],
  },
  {
    slug: "apex-films",
    title: "Apex Films",
    cover: project5,
    tags: ["Web Design", "Web Development"],
    info: "Apex Films is a production company portfolio designed around cinematic reels and a calm, dark editorial layout.",
    services: ["Web Design", "Web Development"],
    client: "Apex Films",
    year: "2025",
    design: ["Johan Weil"],
    motion: ["Isabella Brooks"],
    development: ["Emma Sullivan"],
    gallery: [project5, project1, project3, project2],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
