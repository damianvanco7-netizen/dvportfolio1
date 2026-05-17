import { Link } from "@tanstack/react-router";

function useClock(tz: string) {
  // simple SSR-safe formatter
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: tz,
    }).format(new Date());
  } catch {
    return "--:--:--";
  }
}

export function SiteFooter() {
  const london = useClock("Europe/London");
  const amsterdam = useClock("Europe/Amsterdam");

  return (
    <footer className="relative z-10 bg-[#ececec]">
      <div className="px-5 pb-8 pt-20 md:px-6 md:pb-10 md:pt-28">
        {/* top row: logo + socials */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9 1 17 9l-8 8L1 9z" stroke="currentColor" strokeWidth="1.4" fill="none" />
            </svg>
            <span className="text-[15px] font-medium tracking-tight">Studio Terrace</span>
          </Link>
          <div className="flex items-center gap-2">
            <SocialPill label="Instagram" />
            <SocialPill label="LinkedIn" />
          </div>
        </div>

        {/* middle grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:mt-28 md:grid-cols-3">
          {/* newsletter */}
          <div>
            <p className="text-[15px] text-foreground">Our quarterly newsletter</p>
            <p className="text-[13px] text-muted-foreground">Keep in touch with us</p>
            <form className="mt-6 flex items-center gap-2 rounded-full bg-black/5 p-1.5 pl-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-transparent text-[13px] text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-foreground px-4 py-1.5 text-[13px] text-background"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* clocks */}
          <div className="space-y-8 md:justify-self-center">
            <div>
              <p className="text-[15px] text-foreground">London</p>
              <p className="text-[15px] text-foreground tabular-nums">{london}</p>
            </div>
            <div>
              <p className="text-[15px] text-foreground">Amsterdam</p>
              <p className="text-[15px] text-foreground tabular-nums">{amsterdam}</p>
            </div>
          </div>

          {/* nav */}
          <nav className="flex flex-col gap-2 md:justify-self-end">
            {["Projects", "News", "Studio", "Careers", "Contact"].map((l) => (
              <Link
                key={l}
                to="/"
                className="text-[15px] text-foreground transition-colors hover:text-muted-foreground"
              >
                {l}
              </Link>
            ))}
          </nav>
        </div>

        {/* bottom row */}
        <div className="mt-20 flex items-center justify-between text-[13px] text-muted-foreground md:mt-28">
          <span>© {new Date().getFullYear()} Studio Terrace</span>
          <span>
            Made by <span className="text-foreground">ena</span>,{" "}
            <span className="text-foreground">Arqé.ai</span>
          </span>
          <Link to="/" className="hover:text-foreground">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

function SocialPill({ label }: { label: string }) {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] text-foreground transition-colors hover:bg-black/10"
    >
      <span
        className="inline-block h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: "var(--accent-orange)" }}
      />
      {label}
    </Link>
  );
}
