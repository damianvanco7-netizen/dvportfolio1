import symbol from "@/assets/symbol.svg";

export function SiteFooter() {
  return (
    <footer className="relative z-10 overflow-hidden bg-[#ececec]">
      {/* large centered symbol */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <img
          src={symbol}
          alt=""
          aria-hidden="true"
          className="h-auto w-[140%] max-w-none opacity-10"
        />
      </div>

      <div className="relative flex flex-col items-center px-5 pb-8 pt-20 md:px-6 md:pb-10 md:pt-24">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/damian-van%C4%8Do-6208551b3/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] text-foreground transition-colors hover:bg-black/10"
        >
          <span
            className="inline-block h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: "var(--accent-blue)" }}
          />
          LinkedIn
        </a>

        {/* copyright */}
        <span className="mt-10 text-[13px] text-muted-foreground">
          © {new Date().getFullYear()} Damian Vanco
        </span>
      </div>
    </footer>
  );
}
