import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import symbol from "@/assets/symbol.svg";
import { GetInTouchDialog } from "@/components/GetInTouchDialog";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useT } from "@/lib/i18n";

export function SiteHeader() {
  const t = useT();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.projects"), to: "/projects" },
    { label: t("nav.about"), to: "/about" },
  ] as const;

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex h-16 items-center justify-between px-5 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-foreground" onClick={() => setOpen(false)}>
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

        {/* Desktop / tablet right side */}
        <div className="hidden items-center gap-3 md:flex">
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

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] flex h-10 w-10 cursor-pointer items-center justify-center md:hidden"
        >
          <span className="relative block h-3 w-9">
            <span
              className={`absolute left-0 top-0 block h-px w-9 bg-foreground transition-transform duration-500 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 block h-px w-9 bg-foreground transition-transform duration-500 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile overlay menu — rendered in a portal so ancestor `transform`
          (e.g. .smooth-fade-in) doesn't break position: fixed. */}
      {typeof document !== "undefined" && createPortal(
        <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-16 z-40 flex flex-col bg-white px-5 pb-10 pt-8 md:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center gap-5">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block font-medium leading-[1] tracking-[-0.03em] text-black"
                    style={{ fontSize: "clamp(2.5rem, 12vw, 4rem)", opacity: 1 }}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start gap-3"
            >
              <div className="mb-2">
                <LanguageSwitcher />
              </div>

              <GetInTouchDialog>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: "var(--accent-blue)" }}
                >
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
                  {t("nav.getInTouch")}
                </button>
              </GetInTouchDialog>

              <a
                href="https://www.linkedin.com/in/damian-van%C4%8Do-6208551b3/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-2 text-[13px] text-foreground transition-colors duration-500 hover:bg-black/10"
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent-blue)" }}
                />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>,
        document.body,
      )}
    </header>
  );
}
