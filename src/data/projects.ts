import aureanJourneys from "@/assets/projects/aurean-journeys.jpg";
import velox from "@/assets/projects/velox.jpg";
import surikado from "@/assets/projects/surikado.jpg";
import villaPoton from "@/assets/projects/villa-poton.jpg";
import stableLabs from "@/assets/projects/stable-labs.jpg";
import stableLabs1 from "@/assets/projects/stable-labs-1.webp";
import stableLabs2 from "@/assets/projects/stable-labs-2.webp";
import stableLabs3 from "@/assets/projects/stable-labs-3.mp4";
import stableLabs4 from "@/assets/projects/stable-labs-4.webp";
import stableLabs5 from "@/assets/projects/stable-labs-5.webp";
import stableLabs6 from "@/assets/projects/stable-labs-6.webp";
import stableLabs7 from "@/assets/projects/stable-labs-7.webp";
import stableLabs8 from "@/assets/projects/stable-labs-8.webp";
import stableLabs9 from "@/assets/projects/stable-labs-9.webp";
import stableLabs10 from "@/assets/projects/stable-labs-10.webp";
import stableLabs11 from "@/assets/projects/stable-labs-11.webp";
import stableLabs12 from "@/assets/projects/stable-labs-12.mp4";
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
  liveUrl?: string;
  gallery: readonly string[];
};

export const projects: readonly Project[] = [
  {
    slug: "aurean-journeys",
    title: "Aurean Journeys",
    cover: aureanJourneys,
    tags: ["Web Design", "Front-end Development"],
    info: "This project was about translating the feeling of exclusivity and refined travel into a digital experience. I designed and developed the front-end of the website for a newly established luxury travel brand, shaping its online presence from the ground up. The focus was on creating an atmosphere of elegance and trust while ensuring the journey through the website feels as seamless and intentional as the voyages themselves. If you want to see more, visit Aurean Journeys website directly.",
    services: ["Web design and front-end development"],
    client: "Aurean Journeys",
    year: "2025, 3 months",
    gallery: [aureanJourneys, villaPoton, stableLabs],
  },
  {
    slug: "velox",
    title: "Velox",
    cover: velox,
    tags: ["Web Design", "Web Development"],
    info: "This project was a website redesign for a long-established accounting company that wanted to modernize its online presence and communicate greater reliability and trust. The main goal was to improve the overall UX and navigation, making the site clearer and more intuitive. If you want to see more, visit Velox website directly.",
    services: ["Web design and development"],
    client: "Velox",
    year: "2026, 1 month",
    gallery: [velox, surikado, ethereumBratislava],
  },
  {
    slug: "surikado",
    title: "Surikado AI",
    cover: surikado,
    tags: ["Web Design", "Front-end & Back-end"],
    info: "I developed both the front-end and back-end of this project, delivering a fully functional and user friendly website. It features advanced interactive effects and refined UI details that elevate the overall user experience. If you want to see more, visit Surikado website directly.",
    services: ["Web design and development", "Front-end and back-end"],
    client: "Surikado",
    year: "2026, 2 months",
    gallery: [surikado, velox, aureanJourneys],
  },
  {
    slug: "villa-poton",
    title: "Villa Potôn",
    cover: villaPoton,
    tags: ["Web Design", "Art Direction"],
    info: "A quiet, editorial site for a contemporary stone villa — letting architecture and natural light carry the story through generous whitespace and serif typography.",
    services: ["Art direction", "Web design"],
    client: "Villa Potôn",
    year: "2024, 2 months",
    gallery: [villaPoton, aureanJourneys, stableLabs],
  },
  {
    slug: "stable-labs",
    title: "StableLabs",
    cover: stableLabs,
    tags: ["Branding", "Web Design"],
    info: "Stable Labs is a fintech project focused on bringing the Czech koruna and traditional assets onto the blockchain through a CZK stablecoin and a tokenization platform.",
    services: ["Branding", "Web design", "Illustration", "Social media communication"],
    client: "StableLabs",
    year: "2024, 6 months",
    gallery: [stableLabs1, stableLabs2, stableLabs3, stableLabs4, stableLabs5, stableLabs6, stableLabs7, stableLabs8, stableLabs9, stableLabs10, stableLabs11, stableLabs12],
  },
  {
    slug: "ethereum-bratislava",
    title: "Ethereum Bratislava",
    cover: ethereumBratislava,
    tags: ["Web Design", "3D & Animation"],
    info: "This project is a fully custom-designed and developed website built from scratch using a vibe coding approach. From concept and UI design to responsive development and interactive details, I handled the entire process end-to-end, combining creative direction with AI-powered execution. If you want to see more, visit Ethereum Bratislava website directly.",
    services: ["Web design and development", "3D design and animation"],
    client: "Ethereum Bratislava",
    year: "2025, 1 month",
    gallery: [ethereumBratislava, stableLabs, surikado],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
