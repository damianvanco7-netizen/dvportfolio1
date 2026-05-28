
import aureanJourneys3 from "@/assets/projects/aurean-journeys-3.png";
import aureanJourneys4 from "@/assets/projects/aurean-journeys-4.png";
import aureanJourneysVideo from "@/assets/projects/aurean-journeys.mp4";
import aureanJourneysVideo2 from "@/assets/projects/aurean-journeys-4.mp4";
import velox from "@/assets/projects/velox.jpg";
import surikado from "@/assets/projects/surikado.jpg";
import surikadoVideo from "@/assets/projects/surikado-1.mp4";
import surikado2 from "@/assets/projects/surikado-2.png";
import surikado3 from "@/assets/projects/surikado-3.png";
import villaPoton from "@/assets/projects/villa-poton.jpg";
import villaPotonVideo from "@/assets/projects/villa-poton.mp4";
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
import stableLabs13 from "@/assets/projects/stable-labs-13.mp4";
import stableLabs14 from "@/assets/projects/stable-labs-14.webp";
import stableLabs15 from "@/assets/projects/stable-labs-15.mp4";
import stableLabs16 from "@/assets/projects/stable-labs-16.webp";
import stableLabs17 from "@/assets/projects/stable-labs-17.mp4";
import stableLabs18 from "@/assets/projects/stable-labs-18.webp";
import stableLabs19 from "@/assets/projects/stable-labs-19.mp4";
import stableLabs20 from "@/assets/projects/stable-labs-20.webp";
import ethereumBratislava from "@/assets/projects/ethereum-bratislava.jpg";
import ethereumBratislava1 from "@/assets/projects/ethereum-bratislava-1.mp4";
import ethereumBratislava2 from "@/assets/projects/ethereum-bratislava-2.mp4";
import ethereumBratislava3 from "@/assets/projects/ethereum-bratislava-3.mp4";
import ethereumBratislava4 from "@/assets/projects/ethereum-bratislava-4.mp4";
import ethereumBratislava5 from "@/assets/projects/ethereum-bratislava-5.mp4";
import ethereumBratislava6 from "@/assets/projects/ethereum-bratislava-6.mp4";
import eightBites1 from "@/assets/projects/8bites-1.webp";
import eightBites2 from "@/assets/projects/8bites-2.mp4";
import eightBites3 from "@/assets/projects/8bites-3.webp";
import eightBites5 from "@/assets/projects/8bites-5.webp";
import eightBites6 from "@/assets/projects/8bites-6.webp";
import eightBites7 from "@/assets/projects/8bites-7.webp";
import eightBites8 from "@/assets/projects/8bites-8.mp4";
import eightBites9 from "@/assets/projects/8bites-9.webp";
import eightBites10 from "@/assets/projects/8bites-10.webp";
import eightBites11 from "@/assets/projects/8bites-11.webp";
import eightBites12 from "@/assets/projects/8bites-12.mp4";
import eightBites13 from "@/assets/projects/8bites-13.webp";
import eightBites14 from "@/assets/projects/8bites-14.webp";
import eightBites15 from "@/assets/projects/8bites-15.webp";
import eightBites16 from "@/assets/projects/8bites-16.webp";
import eightBites17 from "@/assets/projects/8bites-17.webp";
import lavaStone1 from "@/assets/projects/lava-stone-1.webp";
import lavaStone2 from "@/assets/projects/lava-stone-2.webp";
import lavaStone3 from "@/assets/projects/lava-stone-3.webp";
import lavaStone4 from "@/assets/projects/lava-stone-4.webp";
import lavaStone5 from "@/assets/projects/lava-stone-5.webp";
import lavaStone6 from "@/assets/projects/lava-stone-6.webp";
import lavaStone7 from "@/assets/projects/lava-stone-7.webp";
import lavaStone8 from "@/assets/projects/lava-stone-8.webp";
import lavaStone9 from "@/assets/projects/lava-stone-9.webp";
import lavaStone10 from "@/assets/projects/lava-stone-10.webp";
import lavaStone11 from "@/assets/projects/lava-stone-11.webp";
import lavaStone12 from "@/assets/projects/lava-stone-12.webp";
import lavaStone13 from "@/assets/projects/lava-stone-13.webp";
import lavaStone14 from "@/assets/projects/lava-stone-14.webp";
import lavaStone15 from "@/assets/projects/lava-stone-15.webp";
import leadSummit1 from "@/assets/projects/lead-summit-1.webp";
import leadSummit2 from "@/assets/projects/lead-summit-2.webp";
import leadSummit3 from "@/assets/projects/lead-summit-3.webp";
import leadSummit4 from "@/assets/projects/lead-summit-4.mp4";
import leadSummit5 from "@/assets/projects/lead-summit-5.mp4";
import leadSummit6 from "@/assets/projects/lead-summit-6.mp4";
import leadSummit7 from "@/assets/projects/lead-summit-7.webp";
import leadSummit8 from "@/assets/projects/lead-summit-8.webp";
import leadSummit9 from "@/assets/projects/lead-summit-9.webp";
import leadSummit10 from "@/assets/projects/lead-summit-10.webp";

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
    cover: aureanJourneysVideo,
    tags: ["Web design and development"],
    info: "This project was about translating the feeling of exclusivity and refined travel into a digital experience. I designed and developed the front-end of the website for a newly established luxury travel brand, shaping its online presence from the ground up. The focus was on creating an atmosphere of elegance and trust while ensuring the journey through the website feels as seamless and intentional as the voyages themselves. If you want to see more, visit Aurean Journeys website directly.",
    services: ["Web design and development"],
    client: "Aurean Journeys",
    year: "2025, 3 months",
    liveUrl: "https://aureanjourneys.com/",
    gallery: [aureanJourneysVideo, aureanJourneys3, aureanJourneysVideo2, aureanJourneys4],
  },
  {
    slug: "velox",
    title: "Velox",
    cover: velox,
    tags: ["Web design and development"],
    info: "This project was a website redesign for a long-established accounting company that wanted to modernize its online presence and communicate greater reliability and trust. The main goal was to improve the overall UX and navigation, making the site clearer and more intuitive. If you want to see more, visit Velox website directly.",
    services: ["Web design and development"],
    client: "Velox",
    year: "2026, 1 month",
    liveUrl: "https://veloxsro.sk/en/",
    gallery: [velox],
  },
  {
    slug: "surikado",
    title: "Surikado AI",
    cover: surikado,
    tags: ["Web design and development"],
    info: "I developed both the front-end and back-end of this project, delivering a fully functional and user friendly website. It features advanced interactive effects and refined UI details that elevate the overall user experience. If you want to see more, visit Surikado website directly.",
    services: ["Web design and development"],
    client: "Surikado",
    year: "2026, 2 months",
    liveUrl: "https://surikado.sk/en",
    gallery: [surikado],
  },
  {
    slug: "villa-poton",
    title: "Villa Potôn",
    cover: villaPotonVideo,
    tags: ["Web design and development"],
    info: "A quiet, editorial site for a contemporary stone villa — letting architecture and natural light carry the story through generous whitespace and serif typography.",
    services: ["Web design and development"],
    client: "Villa Potôn",
    year: "2024, 2 months",
    liveUrl: "https://villapoton.com/",
    gallery: [villaPotonVideo, villaPoton],
  },
  {
    slug: "8bites",
    title: "8bites",
    cover: eightBites8,
    tags: ["Visual Identity", "Web design"],
    info: "8bites is a web development studio with a bold, pixel-inspired identity. The project covers the full brand system — from logo and iconography to web design and responsive layouts — built around a vibrant green and black palette that captures the studio's playful yet technical character.",
    services: ["Visual Identity", "Web design"],
    client: "8bites",
    year: "2024, 3 months",
    gallery: [eightBites1, eightBites2, eightBites3, eightBites5, eightBites6, eightBites7, eightBites8, eightBites9, eightBites10, eightBites11, eightBites12, eightBites13, eightBites14, eightBites15, eightBites16, eightBites17],
  },
  {
    slug: "stable-labs",
    title: "StableLabs",
    cover: stableLabs,
    tags: ["Visual Identity", "Web design"],
    info: "Stable Labs is a fintech project focused on bringing the Czech koruna and traditional assets onto the blockchain through a CZK stablecoin and a tokenization platform.",
    services: ["Visual Identity", "Web design"],
    client: "StableLabs",
    year: "2024, 6 months",
    gallery: [stableLabs1, stableLabs2, stableLabs3, stableLabs4, stableLabs5, stableLabs6, stableLabs7, stableLabs8, stableLabs9, stableLabs10, stableLabs11, stableLabs12, stableLabs13, stableLabs14, stableLabs15, stableLabs16, stableLabs17, stableLabs18, stableLabs19, stableLabs20],
  },
  {
    slug: "ethereum-bratislava",
    title: "Ethereum Bratislava",
    cover: ethereumBratislava,
    tags: ["Visual Identity", "Web design and development"],
    info: "This project is a fully custom-designed and developed website built from scratch using a vibe coding approach. From concept and UI design to responsive development and interactive details, I handled the entire process end-to-end, combining creative direction with AI-powered execution. If you want to see more, visit Ethereum Bratislava website directly.",
    services: ["Visual Identity", "Web design and development"],
    client: "Ethereum Bratislava",
    year: "2025, 1 month",
    liveUrl: "https://ethbratislava.com/",
    gallery: [ethereumBratislava1, ethereumBratislava2, ethereumBratislava3, ethereumBratislava4, ethereumBratislava5, ethereumBratislava6],
  },
  {
    slug: "lava-stone",
    title: "Lava Stone",
    cover: lavaStone13,
    tags: ["Visual Identity", "Web design", "Social media communication"],
    info: "Lavastone carries lava stone products from two talented Sicilian makers - Pietracolata and Sansone. In addition to selling their works, they also provide design, consulting or complete realization.",
    services: ["Visual Identity", "Web design", "Social media communication"],
    client: "Lava Stone",
    year: "2023, 2 months",
    gallery: [lavaStone1, lavaStone2, lavaStone3, lavaStone4, lavaStone5, lavaStone6, lavaStone7, lavaStone8, lavaStone9, lavaStone10, lavaStone11, lavaStone12, lavaStone13, lavaStone14, lavaStone15],
  },
  {
    slug: "lead-summit",
    title: "Lead Summit",
    cover: leadSummit1,
    tags: ["Visual identity", "Web design", "Social Media Communication"],
    info: "Lead Summit is a marketing conference with a dynamic and flexible visual identity, designed to capture the fast-paced nature of lead generation. The branding is built around bold, heavy typography and anchored by a strong, vibrant orange as the key element, giving the event a striking and memorable presence.",
    services: ["Visual identity", "Web design", "Social Media Communication"],
    client: "ByWednesday",
    year: "2025, 2 months",
    gallery: [leadSummit1, leadSummit2, leadSummit3, leadSummit4, leadSummit5, leadSummit6, leadSummit7, leadSummit8, leadSummit9, leadSummit10],
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
