import { Link } from "@tanstack/react-router";
import symbol from "@/assets/symbol.svg";


export function SiteFooter() {
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
            <SocialPill label="Instagram" />
            <SocialPill label="LinkedIn" />
          </div>
        </div>

        {/* nav */}
        <nav className="mt-20 flex flex-col gap-2 md:mt-28">
          <Link
            to="/projects"
            className="text-[15px] text-foreground transition-colors hover:text-muted-foreground"
          >
            Projects
          </Link>
          <Link
            to="/about"
            className="text-[15px] text-foreground transition-colors hover:text-muted-foreground"
          >
            About
          </Link>
        </nav>

        {/* bottom row */}
        <div className="mt-20 flex items-center justify-between text-[13px] text-muted-foreground md:mt-28">
          <span>© {new Date().getFullYear()} Damian Vanco</span>
          <Link to="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
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
        style={{ backgroundColor: "var(--accent-blue)" }}
      />
      {label}
    </Link>
  );
}
