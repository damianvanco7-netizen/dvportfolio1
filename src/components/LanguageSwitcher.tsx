import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { lang, setLang } = useI18n();
  const base =
    tone === "light"
      ? "bg-black/5 text-foreground/70"
      : "bg-black/5 text-foreground/70";

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 text-[12px] font-medium ${base}`}
      role="group"
      aria-label="Language switcher"
    >
      {(["sk", "en"] as Lang[]).map((l) => {
        const active = lang === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            aria-pressed={active}
            className={`cursor-pointer rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors duration-500 ${
              active ? "bg-white text-foreground shadow-sm" : "text-foreground/50 hover:text-foreground"
            }`}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
