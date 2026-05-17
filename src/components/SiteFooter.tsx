export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-10 text-[13px] text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <path d="M9 1 17 9l-8 8L1 9z" stroke="currentColor" strokeWidth="1.4" fill="none" />
          </svg>
          <span>Studio Terrace — Since 2010</span>
        </div>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
