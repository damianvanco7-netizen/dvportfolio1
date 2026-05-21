import aureanJourneys from "@/assets/projects/aurean-journeys.jpg";
import velox from "@/assets/projects/velox.jpg";
import surikado from "@/assets/projects/surikado.jpg";
import villaPoton from "@/assets/projects/villa-poton.jpg";
import stableLabs from "@/assets/projects/stable-labs.jpg";
import ethereumBratislava from "@/assets/projects/ethereum-bratislava.jpg";

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
    slug: "aurean-journeys",
    title: "Aurean Journeys",
    cover: aureanJourneys,
    tags: ["Art Direction", "Web Design"],
    info: "Aurean Journeys is a premium cruise brand experience — a refined editorial site built to showcase exclusive voyages with cinematic photography and quiet, considered motion.",
    services: ["Art Direction", "Web Design", "Web Development"],
    client: "Aurean Journeys",
    year: "2025",
    design: ["Suzanne Smith"],
    development: ["Emma Sullivan"],
    gallery: [aureanJourneys, villaPoton, stableLabs],
  },
  {
    slug: "velox",
    title: "Velox",
    cover: velox,
    tags: ["Web Design", "Web Development"],
    info: "Velox is a bold audit and accounting brand site — confident typography, rich crimson gradients, and a clear narrative built around trust and precision.",
    services: ["Web Design", "Web Development"],
    client: "Velox",
    year: "2025",
    design: ["Frank Meir"],
    development: ["Alexander Turner"],
    gallery: [velox, surikado, ethereumBratislava],
  },
  {
    slug: "surikado",
    title: "Surikado",
    cover: surikado,
    tags: ["Brand", "Web Design"],
    info: "Surikado is a playful AI recruitment platform combining a warm orange palette with an illustrated mascot to make hiring feel human and approachable.",
    services: ["Brand", "Web Design", "Web Development"],
    client: "Surikado",
    year: "2025",
    design: ["Johan Weil"],
    development: ["Harper Mitchell"],
    gallery: [surikado, velox, aureanJourneys],
  },
  {
    slug: "villa-poton",
    title: "Villa Potôn",
    cover: villaPoton,
    tags: ["Art Direction", "Web Design"],
    info: "Villa Potôn is a quiet, editorial site for a contemporary stone villa — letting architecture and natural light carry the story through generous whitespace and serif typography.",
    services: ["Art Direction", "Web Design"],
    client: "Villa Potôn",
    year: "2024",
    design: ["Suzanne Smith"],
    development: ["Emma Sullivan"],
    gallery: [villaPoton, aureanJourneys, stableLabs],
  },
  {
    slug: "stable-labs",
    title: "Stable Labs",
    cover: stableLabs,
    tags: ["Web Design", "Web Development"],
    info: "Stable Labs is a regulated stablecoin product site — a confident blue palette, large editorial type, and a structured grid built around compliance and trust.",
    services: ["Web Design", "Web Development"],
    client: "Stable Labs",
    year: "2025",
    design: ["Frank Meir"],
    development: ["Alexander Turner", "Emma Sullivan"],
    gallery: [stableLabs, ethereumBratislava, velox],
  },
  {
    slug: "ethereum-bratislava",
    title: "Ethereum Bratislava",
    cover: ethereumBratislava,
    tags: ["Art Direction", "Web Development"],
    info: "Ethereum Bratislava is an event site for the local Ethereum community — bold condensed type on deep neutrals, with a focused single-column layout built around the warm-up edition.",
    services: ["Art Direction", "Web Design", "Web Development"],
    client: "Ethereum Bratislava",
    year: "2026",
    design: ["Johan Weil"],
    motion: ["Isabella Brooks"],
    development: ["Harper Mitchell"],
    gallery: [ethereumBratislava, stableLabs, surikado],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
