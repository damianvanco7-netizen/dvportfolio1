import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "sk";

const STORAGE_KEY = "site-lang";

type Dict = Record<string, string>;

const en: Dict = {
  // Nav / header
  "nav.projects": "Projects",
  "nav.about": "About",
  "nav.getInTouch": "Get in touch",

  // Footer
  "footer.copyright": "© {year} Damian Vanco",

  // Home — hero
  "home.heroTitle.line1": "Shaping Brands With",
  "home.heroTitle.line2": "Clarity and Character",
  "home.since": "(Since 2020)",

  // Home — intro
  "home.aboutPill": "About",
  "home.aboutText":
    "My work sits between brand, design, and development: creating visual identities, websites, and communication systems that help brands feel clear, confident, and recognizable.",

  // Home — sections
  "home.latestWork": "Latest work",
  "home.viewAllProjects": "View all projects",
  "home.services": "Services",
  "home.learnMore": "Learn more about me",
  "home.references": "References",
  "home.exampleProjects": "Example projects",

  // About page
  "about.title": "About",
  "about.body":
    "A digital-first creative studio transforming ideas into impactful digital experiences through web design, web development and visual content.",
  "about.hero": "Story behind my work",
  "about.storyTitle": "The story behind my work",
  "about.storyBody":
    "Over the last five years, I've gained experience across visual identities, UX/UI, user research and vibe coding. I studied Interaction Design in Sweden, where the focus was on understanding how people interact with both digital and physical systems — and how to design those interactions with clarity, structure and a human-centered mindset.",
  "about.backgroundTitle": "My background",
  "about.workExperience": "Work experience",
  "about.role.cofounder": "Co-Founder",
  "about.role.visualDesigner": "Visual Designer",
  "about.role.graphicVibe": "Graphic Designer / Vibe Coder",
  "about.role.uxui": "UX/UI Designer",
  "about.job.ethereum": "Ethereum Bratislava | 2024 — Current",
  "about.job.stable": "Stable Labs | 2024 — 2025",
  "about.job.birne": "Birne | 2022 — 2023 | 2025 — 2026",
  "about.job.kiuub": "Kiuub | 2020 — 2022",
  "about.job.ethereum.body":
    "At Ethereum Bratislava I am responsible for every design output, from digital to printed materials. In 2024, I became part of the team that brought the first conference and hackathon focused on the development of the Ethereum cryptocurrency ecosystem to Slovakia.",
  "about.job.stable.body":
    "At Stable Labs, a crypto company building a Czech koruna stablecoin, I was responsible for the full branding and all visual outputs, including the website, social media, pitch decks and conference materials. I left the company after ownership changes in early 2025.",
  "about.job.birne.body":
    "At Birne I worked as a graphic designer focusing on visual identities, web design and social-media or marketing campaign design. Over time, I started developing websites and my role grew beyond design into vibe code development. Here, I learned to work in an agile, fast-paced environment.",
  "about.job.kiuub.body":
    "At the innovation and service design studio I worked my way through various projects where we focused mainly on improving service and customer experience, analyzing and evaluating qualitative and quantitative research, audience segmentation and customer journey mapping.",


  // Project detail
  "project.viewLive": "View live site",
  "project.info": "Info",
  "project.services": "Services",
  "project.client": "Client",
  "project.year": "Year",
  "project.back": "← Back to projects",
  "project.next": "Next: {title} →",
  "project.notFound": "Project not found",
  "project.backHome": "Back to home",
  "project.error": "Something went wrong",

  // Get in touch dialog
  "git.title": "Get in touch",
  "git.subtitle": "Leave your name and a short message — I'll get back to you soon.",
  "git.name": "Name",
  "git.namePlaceholder": "Your name",
  "git.email": "Email (optional)",
  "git.emailPlaceholder": "you@example.com",
  "git.message": "Message",
  "git.messagePlaceholder": "Tell me about your project...",
  "git.send": "Send message",
  "git.thanks": "Thank you",
  "git.thanksBody": "Your message is on its way. I'll get back to you soon.",
  "git.goBack": "Go back",

  // Service titles (used in services accordion)
  "service.web": "Web Design and Development",
  "service.identity": "Visual Identity",
  "service.social": "Social Media Communication",
  "service.creative": "Creative Direction",
  "service.web.excerpt":
    "Custom websites built around strong visual direction, clear structure, responsive layouts, and refined front-end execution. The goal is to create websites that not only look distinctive, but also feel intuitive, trustworthy, and easy to use across every device.",
  "service.identity.excerpt":
    "Visual identities shaped to give brands a clear and recognizable voice across digital and physical touchpoints. From logos, typography, color palettes, and layout systems to supporting brand assets, every element is built to feel consistent, flexible, and true to the character of the brand.",
  "service.social.excerpt":
    "Social media communication designed to keep brands consistent, recognizable, and active across the channels where people meet them most often. From visual templates and campaign direction to content ideas and post designs, every output should feel aligned with the brand and easy to use in everyday communication.",
  "service.creative.excerpt":
    "Creative direction that connects the brand, website, campaign, or launch into one clear visual approach. This includes shaping the overall mood, message, visual language, and brand presence, making sure the final outcome feels focused, memorable, and aligned with the brand's goals.",

  // Tags / service short labels (used in project cards & info row)
  "tag.web": "Web design and development",
  "tag.webDesign": "Web design",
  "tag.identity": "Visual Identity",
  "tag.social": "Social media communication",

  // Project info (full descriptions)
  "project.aurean-journeys.info":
    "This project was about translating the feeling of exclusivity and refined travel into a digital experience. I designed and developed the front-end of the website for a newly established luxury travel brand, shaping its online presence from the ground up. The focus was on creating an atmosphere of elegance and trust while ensuring the journey through the website feels as seamless and intentional as the voyages themselves. If you want to see more, visit Aurean Journeys website directly.",
  "project.velox.info":
    "This project was a website redesign for a long-established accounting company that wanted to modernize its online presence and communicate greater reliability and trust. The main goal was to improve the overall UX and navigation, making the site clearer and more intuitive. If you want to see more, visit Velox website directly.",
  "project.villa-poton.info":
    "A quiet, editorial site for a contemporary stone villa — letting architecture and natural light carry the story through generous whitespace and serif typography.",
  "project.surikado.info":
    "I developed both the front-end and back-end of this project, delivering a fully functional and user friendly website. It features advanced interactive effects and refined UI details that elevate the overall user experience. If you want to see more, visit Surikado website directly.",
  "project.8bites.info":
    "8bites is a web development studio with a bold, pixel-inspired identity. The project covers the full brand system — from logo and iconography to web design and responsive layouts — built around a vibrant green and black palette that captures the studio's playful yet technical character.",
  "project.ethereum-bratislava.info":
    "This project is a fully custom-designed and developed website built from scratch using a vibe coding approach. From concept and UI design to responsive development and interactive details, I handled the entire process end-to-end, combining creative direction with AI-powered execution. If you want to see more, visit Ethereum Bratislava website directly.",
  "project.stable-labs.info":
    "Stable Labs is a fintech project focused on bringing the Czech koruna and traditional assets onto the blockchain through a CZK stablecoin and a tokenization platform.",
  "project.lava-stone.info":
    "Lavastone carries lava stone products from two talented Sicilian makers - Pietracolata and Sansone. In addition to selling their works, they also provide design, consulting or complete realization.",
  "project.lead-summit.info":
    "Lead Summit is a marketing conference with a dynamic and flexible visual identity, designed to capture the fast-paced nature of lead generation. The branding is built around bold, heavy typography and anchored by a strong, vibrant orange as the key element, giving the event a striking and memorable presence.",
  "project.norriv.info":
    "This project was a web design for norriv, a company creating hologram boxes, 3D visualizations, and immersive presentation solutions. The goal was to translate a highly technical and futuristic product into a clear, premium website that explains the offer, builds trust, and presents the brand as an innovative partner for events, exhibitions, and product showcases.",

  // References (quotes)
  "ref.birne":
    "Over the past years, Damian worked with us across many projects, always delivering reliable, high-quality results.",
  "ref.greenstone":
    "Damian helped us bring the project to life with a polished result, clear process, and strong execution.",
  "ref.zetshop":
    "While working on the visual identity, he exceeded our expectations and, thanks to his creative approach, elevated the Zetshop brand several levels higher.",
  "ref.leadsummit":
    "Damian translated the energy of our event into a bold identity and confident online presence.",
  "ref.norriv":
    "Damian captured our hologram and 3D visualization work in a website that feels premium, clear, and future-facing.",
  "ref.position.cofounder": "Co-founder",
  "ref.position.ceofounder": "CEO & Founder",
  "ref.position.pm": "Project Manager",
  "ref.position.ceo": "CEO",
  "ref.year.duration.1m": "1 month",
  "ref.year.duration.2m": "2 months",
  "ref.year.duration.3m": "3 months",
  "ref.year.duration.6m": "6 months",

  // Privacy
  "privacy.title": "Privacy Policy",
  "privacy.lastUpdated": "Last updated: May 2026",
  "privacy.responsibleTitle": "Responsible Entity",
  "privacy.responsibleBody":
    "The responsible entity (Controller) for the data processing regulated in this Privacy Policy is Damian Vanco (hereinafter \"I\", \"me\" or \"Damian Vanco\").",
  "privacy.contactLabel": "Our contact details are:",
  "privacy.location": "Bratislava, Slovakia",
  "privacy.intro":
    "Welcome to Damian Vanco's portfolio website (\"I\", \"me\", or \"my\"). By accessing or using this website, you agree to be bound by these terms of use. If you do not agree to these terms, you may not use this website.",
  "privacy.s1.title": "Use of this website",
  "privacy.s1.body":
    "This website showcases my work as an independent designer and developer, including visual identity, web design and web development projects. The content is provided for informational and portfolio purposes only and does not constitute a binding offer of services. For inquiries about a collaboration, please contact me directly by email.",
  "privacy.s2.title": "Intellectual property",
  "privacy.s2.body":
    "All content on this website, including text, graphics, logos, images, videos and code, is the property of Damian Vanco or the respective clients and collaborators and is protected by copyright and other intellectual property laws. Project work is published with the permission of the relevant client. You may not reproduce, modify, distribute, or display any content from this website without my prior written permission.",
  "privacy.s3.title": "No tracking, no analytics",
  "privacy.s3.body":
    "This website does not collect personal data from visitors. No analytics scripts, no tracking pixels, and no advertising or marketing cookies are used. The only personal data I process is information you voluntarily send me by email when reaching out about a project. That information is used solely to respond to your inquiry and is not shared with third parties.",
  "privacy.s4.title": "Disclaimer of warranties",
  "privacy.s4.body":
    "This website is provided on an \"as is\" and \"as available\" basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. I do not warrant that this website will be uninterrupted or error-free, that defects will be corrected, or that the website or the servers that make it available are free of viruses or other harmful components.",
  "privacy.s5.title": "Limitation of liability",
  "privacy.s5.body":
    "In no event shall I be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use of this website or the information provided on it. This includes, without limitation, damages for loss of profits, data, or other intangible losses.",
  "privacy.s6.title": "External links",
  "privacy.s6.body":
    "This website contains links to live client websites and third-party platforms. I am not responsible for the content, privacy practices, or availability of any external site linked from here.",
  "privacy.s7.title": "Governing law",
  "privacy.s7.body":
    "These terms of use shall be governed by and construed in accordance with the laws of the Slovak Republic, without giving effect to any principles of conflicts of law.",
  "privacy.s8.title": "Changes to this policy",
  "privacy.s8.body":
    "I may update this policy from time to time. Any changes will be posted on this page. I recommend reviewing it periodically to stay informed.",
  "privacy.outro": "By using this website, you agree to be bound by these terms of use.",
};

const sk: Dict = {
  "nav.projects": "Projekty",
  "nav.about": "O mne",
  "nav.getInTouch": "Kontakt",

  "footer.copyright": "© {year} Damian Vančo",

  "home.heroTitle.line1": "Pomáham značkám komunikovať",
  "home.heroTitle.line2": "konzistentne a s charakterom",
  "home.since": "(Od 2020)",

  "home.aboutPill": "O mne",
  "home.aboutText":
    "Moja práca stojí na pomedzí značky, dizajnu a vývoja: vytváram vizuálne identity, webové stránky a komunikačné systémy, ktoré pomáhajú značkám pôsobiť zrozumiteľne, sebavedome a rozpoznateľne.",

  "home.latestWork": "Najnovšie práce",
  "home.viewAllProjects": "Zobraziť všetky projekty",
  "home.services": "Služby",
  "home.learnMore": "Zistite o mne viac",
  "home.references": "Referencie",
  "home.exampleProjects": "Ukážkové projekty",

  "about.title": "O mne",
  "about.body":
    "Digitálne zameraný kreatívny štúdiový prístup, ktorý mení nápady na pôsobivé digitálne zážitky prostredníctvom webdizajnu, vývoja a vizuálneho obsahu.",
  "about.hero": "Príbeh za mojou prácou",
  "about.storyTitle": "Príbeh za mojou prácou",
  "about.storyBody":
    "Za posledných päť rokov som získal skúsenosti naprieč vizuálnymi identitami, UX/UI, používateľským výskumom a vibe codingom. Študoval som Interaction Design vo Švédsku, kde sa kládol dôraz na pochopenie toho, ako ľudia interagujú s digitálnymi aj fyzickými systémami — a ako tieto interakcie navrhovať s jasnosťou, štruktúrou a zameraním na človeka.",
  "about.backgroundTitle": "Moje pozadie",
  "about.workExperience": "Pracovné skúsenosti",
  "about.role.cofounder": "Spoluzakladateľ",
  "about.role.visualDesigner": "Vizuálny dizajnér",
  "about.role.graphicVibe": "Grafický dizajnér / Vibe Coder",
  "about.role.uxui": "UX/UI Dizajnér",
  "about.job.ethereum": "Ethereum Bratislava | 2024 — Súčasnosť",
  "about.job.stable": "Stable Labs | 2024 — 2025",
  "about.job.birne": "Birne | 2022 — 2023 | 2025 — 2026",
  "about.job.kiuub": "Kiuub | 2020 — 2022",
  "about.job.ethereum.body":
    "V Ethereum Bratislava som zodpovedný za každý dizajnový výstup, od digitálnych po tlačené materiály. V roku 2024 som sa stal súčasťou tímu, ktorý priniesol na Slovensko prvú konferenciu a hackathon zameraný na rozvoj ekosystému kryptomeny Ethereum.",
  "about.job.stable.body":
    "V Stable Labs, krypto spoločnosti budujúcej stablecoin českej koruny, som bol zodpovedný za celý branding a všetky vizuálne výstupy vrátane webu, sociálnych sietí, pitch deckov a konferenčných materiálov. Spoločnosť som opustil po zmenách vo vlastníctve začiatkom roka 2025.",
  "about.job.birne.body":
    "V Birne som pracoval ako grafický dizajnér so zameraním na vizuálne identity, webdizajn a dizajn social-media a marketingových kampaní. Postupom času som začal vyvíjať weby a moja rola sa rozšírila z dizajnu na vibe code development. Tu som sa naučil pracovať v agilnom, rýchlom prostredí.",
  "about.job.kiuub.body":
    "V tomto inovačnom a service design štúdiu som prešiel rôznymi projektmi, kde sme sa zameriavali najmä na zlepšovanie služieb a zákazníckej skúsenosti, analýzu kvalitatívneho a kvantitatívneho výskumu, segmentáciu publika a mapovanie zákazníckych ciest.",

  "project.viewLive": "Zobraziť živú stránku",
  "project.info": "Info",
  "project.services": "Služby",
  "project.client": "Klient",
  "project.year": "Rok",
  "project.back": "← Späť na projekty",
  "project.next": "Ďalší: {title} →",
  "project.notFound": "Projekt sa nenašiel",
  "project.backHome": "Späť na úvod",
  "project.error": "Niečo sa pokazilo",

  "git.title": "Kontaktujte ma",
  "git.subtitle": "Nechajte mi vaše meno a krátku správu — ozvem sa vám čoskoro.",
  "git.name": "Meno",
  "git.namePlaceholder": "Vaše meno",
  "git.email": "Email (nepovinné)",
  "git.emailPlaceholder": "vy@priklad.com",
  "git.message": "Správa",
  "git.messagePlaceholder": "Povedzte mi o vašom projekte...",
  "git.send": "Odoslať správu",
  "git.thanks": "Ďakujem",
  "git.thanksBody": "Vaša správa je na ceste. Čoskoro sa vám ozvem.",
  "git.goBack": "Späť",

  "service.web": "Webdizajn a vývoj",
  "service.identity": "Vizuálna identita",
  "service.social": "Komunikácia na sociálnych sieťach",
  "service.creative": "Kreatívne smerovanie",
  "service.web.excerpt":
    "Webové stránky na mieru postavené na silnom vizuálnom smerovaní, jasnej štruktúre, responzívnych layoutoch a precíznom front-end spracovaní. Cieľom je vytvoriť weby, ktoré nielen vyzerajú výnimočne, ale pôsobia intuitívne, dôveryhodne a sú jednoduché na používanie na každom zariadení.",
  "service.identity.excerpt":
    "Vizuálne identity, ktoré dávajú značkám jasný a rozpoznateľný hlas naprieč digitálnymi aj fyzickými miestami kontaktu. Od loga, typografie, farebných paliet a layoutových systémov až po doplnkové brandové prvky — každý detail je navrhnutý tak, aby pôsobil konzistentne, flexibilne a verne charakteru značky.",
  "service.social.excerpt":
    "Komunikácia na sociálnych sieťach navrhnutá tak, aby značky pôsobili konzistentne, rozpoznateľne a aktívne na kanáloch, kde ich ľudia stretávajú najčastejšie. Od vizuálnych šablón cez smerovanie kampaní až po nápady a dizajn príspevkov — všetko je zladené so značkou a ľahko použiteľné v každodennej komunikácii.",
  "service.creative.excerpt":
    "Kreatívne smerovanie, ktoré prepája značku, web, kampaň alebo launch do jedného jasného vizuálneho prístupu. Zahŕňa formovanie celkovej atmosféry, posolstva, vizuálneho jazyka a prezentácie značky, aby výsledok pôsobil sústredene, zapamätateľne a v súlade s cieľmi značky.",

  "tag.web": "Webdizajn a vývoj",
  "tag.webDesign": "Webdizajn",
  "tag.identity": "Vizuálna identita",
  "tag.social": "Komunikácia na sociálnych sieťach",

  "project.aurean-journeys.info":
    "Tento projekt bol o preložení pocitu exkluzivity a vycibreného cestovania do digitálneho zážitku. Navrhol a vyvinul som front-end webu pre novovzniknutú značku luxusného cestovania a formoval jej online prezentáciu od základov. Dôraz bol kladený na atmosféru elegancie a dôvery, pričom prechod webom mal pôsobiť rovnako plynulo a premyslene ako samotné cesty. Ak chcete vidieť viac, navštívte web Aurean Journeys priamo.",
  "project.velox.info":
    "Tento projekt bol redizajn webu pre etablovanú účtovnícku spoločnosť, ktorá chcela zmodernizovať svoju online prezentáciu a komunikovať väčšiu spoľahlivosť a dôveru. Hlavným cieľom bolo zlepšiť celkovú UX a navigáciu, aby bol web zrozumiteľnejší a intuitívnejší. Ak chcete vidieť viac, navštívte web Velox priamo.",
  "project.villa-poton.info":
    "Tichý, editoriálny web pre súčasnú kamennú vilu — architektúra a prirodzené svetlo nesú príbeh prostredníctvom veľkorysého priestoru a serifovej typografie.",
  "project.surikado.info":
    "Vyvinul som front-end aj back-end tohto projektu a dodal plne funkčný a používateľsky príjemný web. Obsahuje pokročilé interaktívne efekty a vycibrené UI detaily, ktoré pozdvihujú celkový používateľský zážitok. Ak chcete vidieť viac, navštívte web Surikado priamo.",
  "project.8bites.info":
    "8bites je štúdio web developmentu s odvážnou identitou inšpirovanou pixelmi. Projekt pokrýva celý brand systém — od loga a ikonografie po webdizajn a responzívne layouty — postavený na výraznej zeleno-čiernej palete, ktorá zachytáva hravý a zároveň technický charakter štúdia.",
  "project.ethereum-bratislava.info":
    "Tento projekt je úplne na mieru navrhnutý a vyvinutý web postavený od základov pomocou vibe coding prístupu. Od konceptu a UI dizajnu cez responzívny vývoj až po interaktívne detaily — celý proces som zastrešil sám a skombinoval kreatívne smerovanie s AI-powered realizáciou. Ak chcete vidieť viac, navštívte web Ethereum Bratislava priamo.",
  "project.stable-labs.info":
    "Stable Labs je fintech projekt zameraný na prenesenie českej koruny a tradičných aktív na blockchain prostredníctvom CZK stablecoinu a tokenizačnej platformy.",
  "project.lava-stone.info":
    "Lavastone ponúka produkty z lávového kameňa od dvoch talentovaných sicílskych tvorcov — Pietracolata a Sansone. Okrem predaja ich diel poskytujú aj dizajn, poradenstvo či kompletnú realizáciu.",
  "project.lead-summit.info":
    "Lead Summit je marketingová konferencia s dynamickou a flexibilnou vizuálnou identitou navrhnutou tak, aby zachytila rýchle tempo lead generation. Branding je postavený na odvážnej, ťažkej typografii a ukotvený silnou, výraznou oranžovou ako kľúčovým prvkom, vďaka čomu má podujatie nápadnú a zapamätateľnú prezentáciu.",
  "project.norriv.info":
    "Tento projekt bol webdizajn pre norriv, spoločnosť vytvárajúcu hologramové boxy, 3D vizualizácie a immerzívne prezentačné riešenia. Cieľom bolo preložiť vysoko technický a futuristický produkt do jasného, prémiového webu, ktorý vysvetľuje ponuku, buduje dôveru a prezentuje značku ako inovatívneho partnera pre eventy, výstavy a prezentácie produktov.",

  "ref.birne":
    "Za posledné roky s nami Damian spolupracoval na mnohých projektoch a vždy doručil spoľahlivé a kvalitné výsledky.",
  "ref.greenstone":
    "Damian nám pomohol priviesť projekt k životu s vycibreným výsledkom, jasným procesom a silnou exekúciou.",
  "ref.zetshop":
    "Pri práci na vizuálnej identite prekonal naše očakávania a vďaka kreatívnemu prístupu posunul značku Zetshop o niekoľko úrovní vyššie.",
  "ref.leadsummit":
    "Damian preložil energiu nášho podujatia do odvážnej identity a sebavedomej online prezentácie.",
  "ref.norriv":
    "Damian zachytil našu prácu s hologramami a 3D vizualizáciami vo webe, ktorý pôsobí prémiovo, jasne a perspektívne.",
  "ref.position.cofounder": "Spoluzakladateľ",
  "ref.position.ceofounder": "CEO a zakladateľ",
  "ref.position.pm": "Projektový manažér",
  "ref.position.ceo": "CEO",
  "ref.year.duration.1m": "1 mesiac",
  "ref.year.duration.2m": "2 mesiace",
  "ref.year.duration.3m": "3 mesiace",
  "ref.year.duration.6m": "6 mesiacov",

  "privacy.title": "Zásady ochrany súkromia",
  "privacy.lastUpdated": "Posledná aktualizácia: máj 2026",
  "privacy.responsibleTitle": "Zodpovedný subjekt",
  "privacy.responsibleBody":
    "Zodpovedným subjektom (prevádzkovateľom) pre spracúvanie údajov upravené v týchto zásadách ochrany súkromia je Damian Vančo (ďalej \"ja\" alebo \"Damian Vančo\").",
  "privacy.contactLabel": "Naše kontaktné údaje sú:",
  "privacy.location": "Bratislava, Slovensko",
  "privacy.intro":
    "Vitajte na portfóliovej stránke Damiana Vanča (\"ja\" alebo \"môj\"). Prístupom k tejto stránke alebo jej používaním súhlasíte s týmito podmienkami používania. Ak s nimi nesúhlasíte, nemôžete túto stránku používať.",
  "privacy.s1.title": "Používanie tejto stránky",
  "privacy.s1.body":
    "Táto stránka prezentuje moju prácu nezávislého dizajnéra a vývojára vrátane projektov vizuálnej identity, webdizajnu a webového vývoja. Obsah je poskytovaný výlučne na informačné a prezentačné účely a nepredstavuje záväznú ponuku služieb. Ohľadom spolupráce ma kontaktujte priamo emailom.",
  "privacy.s2.title": "Duševné vlastníctvo",
  "privacy.s2.body":
    "Všetok obsah na tejto stránke vrátane textov, grafiky, log, obrázkov, videí a kódu je majetkom Damiana Vanča alebo príslušných klientov a spolupracovníkov a je chránený autorským právom a inými právami duševného vlastníctva. Projektová práca je publikovaná so súhlasom príslušného klienta. Obsah tejto stránky nesmiete reprodukovať, upravovať, distribuovať ani zobrazovať bez môjho predchádzajúceho písomného súhlasu.",
  "privacy.s3.title": "Žiadne sledovanie, žiadna analytika",
  "privacy.s3.body":
    "Táto stránka nezbiera osobné údaje od návštevníkov. Nepoužívajú sa žiadne analytické skripty, sledovacie pixely ani reklamné či marketingové cookies. Jediné osobné údaje, ktoré spracúvam, sú informácie, ktoré mi dobrovoľne pošlete emailom pri záujme o projekt. Tieto informácie sú použité výlučne na odpoveď na vašu otázku a nie sú zdieľané s tretími stranami.",
  "privacy.s4.title": "Vylúčenie záruk",
  "privacy.s4.body":
    "Táto stránka je poskytovaná v stave \"ako je\" a \"ako je dostupná\" bez akýchkoľvek záruk, výslovných ani implikovaných, vrátane no nielen záruk obchodovateľnosti, vhodnosti na konkrétny účel alebo neporušovania práv. Nezaručujem, že stránka bude bez prerušení alebo bez chýb, že chyby budú opravené alebo že servery, ktoré ju sprístupňujú, sú bez vírusov či iných škodlivých prvkov.",
  "privacy.s5.title": "Obmedzenie zodpovednosti",
  "privacy.s5.body":
    "V žiadnom prípade nezodpovedám za žiadne priame, nepriame, náhodné, osobitné ani následné škody vyplývajúce z používania tejto stránky alebo informácií na nej poskytnutých. Patria sem aj škody zo straty zisku, dát alebo iných nehmotných hodnôt.",
  "privacy.s6.title": "Externé odkazy",
  "privacy.s6.body":
    "Táto stránka obsahuje odkazy na živé klientske weby a platformy tretích strán. Nenesiem zodpovednosť za obsah, postupy ochrany súkromia ani dostupnosť žiadnej externej stránky.",
  "privacy.s7.title": "Rozhodné právo",
  "privacy.s7.body":
    "Tieto podmienky sa riadia a vykladajú v súlade s právnymi predpismi Slovenskej republiky, bez ohľadu na kolízne normy.",
  "privacy.s8.title": "Zmeny týchto zásad",
  "privacy.s8.body":
    "Tieto zásady môžem priebežne aktualizovať. Akékoľvek zmeny budú zverejnené na tejto stránke. Odporúčam ich pravidelne kontrolovať.",
  "privacy.outro": "Používaním tejto stránky súhlasíte s týmito podmienkami.",
};

const dicts: Record<Lang, Dict> = { en, sk };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string, vars?: Record<string, string | number>) => string };

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === "en" || stored === "sk") setLangState(stored);
    } catch {}
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const dict = dicts[lang];
      let str = dict[key] ?? dicts.en[key] ?? key;
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          str = str.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
        }
      }
      return str;
    },
    [lang],
  );

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n(): Ctx {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export function useT() {
  return useI18n().t;
}
