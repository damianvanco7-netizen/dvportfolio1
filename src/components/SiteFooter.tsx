import { Link } from "@tanstack/react-router";
import symbol from "@/assets/symbol.svg";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useT } from "@/lib/i18n";

export function SiteFooter() {
  const t = useT();
  return (
    <footer className="relative z-10 bg-[#ececec]">
      <div className="px-5 pb-8 pt-20 md:px-6 md:pb-10 md:pt-28">
        {/* top row: logo + socials */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <img src={symbol} alt="" aria-hidden="true" className="h-[18px] w-auto" />
            <span className="text-[15px] font-medium tracking-tight">DAMIAN VANCO</span>
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <SocialPill
              label="LinkedIn"
              href="https://www.linkedin.com/in/damian-van%C4%8Do-6208551b3/"
            />
          </div>
        </div>

        {/* bottom row */}
        <div className="mt-20 flex items-center justify-between text-[13px] text-muted-foreground md:mt-28">
          <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
          <a
            href="mailto:damian.vanco7@gmail.com"
            className="hover:text-foreground"
          >
            damian.vanco7@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialPill({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] text-foreground transition-colors duration-500 hover:bg-black/10"
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: "var(--accent-blue)" }}
      />
      {label}
    </a>
  );
}
