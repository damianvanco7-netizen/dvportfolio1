import type { Project } from "@/data/projects";

type T = (key: string, vars?: Record<string, string | number>) => string;

export function localizeTag(t: T, raw: string): string {
  const k = raw.toLowerCase();
  if (k === "web design and development") return t("tag.web");
  if (k === "visual identity") return t("tag.identity");
  if (k === "web design") return t("tag.webDesign");
  if (k === "social media communication") return t("tag.social");
  if (k === "product design") return t("tag.product");
  if (k === "ux/ui design") return t("tag.uxui");
  if (k === "web development") return t("tag.webDev");
  return raw;
}

export function localizeTags(t: T, tags: readonly string[]): string[] {
  return tags.map((x) => localizeTag(t, x));
}

export function localizeClient(t: T, raw: string): string {
  if (raw.toLowerCase() === "personal project") return t("client.personal");
  return raw;
}

export function localizeYear(t: T, raw: string): string {
  // e.g. "2025, 3 months" or "2026, 1 month"
  return raw
    .replace(/ongoing/i, () => t("ref.year.ongoing"))
    .replace(/(\d+)\s+months?/i, (_m, n) => {
      const num = Number(n);
      if (num === 1) return t("ref.year.duration.1m");
      if (num === 2) return t("ref.year.duration.2m");
      if (num === 3) return t("ref.year.duration.3m");
      if (num === 6) return t("ref.year.duration.6m");
      return `${num} ${t("ref.year.duration.2m").split(" ").slice(1).join(" ")}`;
    });
}

export function localizeInfo(t: T, project: Project): string {
  const key = `project.${project.slug}.info`;
  const localized = t(key);
  // If translation missing (returns key), fall back to original
  return localized === key ? project.info : localized;
}
