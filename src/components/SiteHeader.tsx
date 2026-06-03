import { Link } from "@tanstack/react-router";
import symbol from "@/assets/symbol.svg";
import { GetInTouchDialog } from "@/components/GetInTouchDialog";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useT } from "@/lib/i18n";

export function SiteHeader() {
  const t = useT();
  const navItems = [
    { label: t("nav.projects"), to: "/projects" },
    { label: t("nav.about"), to: "/about" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex h-16 items-center justify-between px-5 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-foreground">
          <img src={symbol} alt="" aria-hidden="true" className="h-[18px] w-auto" />

          <span className="text-[15px] font-medium tracking-tight">
            DAMIAN VANCO
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-[15px] text-muted-foreground transition-colors duration-500 hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <GetInTouchDialog>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--accent-blue)" }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              {t("nav.getInTouch")}
            </button>
          </GetInTouchDialog>
        </div>
      </div>
    </header>
  );
}
