import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

type Ctx = {
  isOpeningProject: boolean;
};

const NavTransitionContext = createContext<Ctx>({ isOpeningProject: false });

const PROJECT_DETAIL_RE = /^\/projects\/[^/]+\/?$/;
const FROM_PATHS = new Set(["/", "/projects"]);

export function NavTransitionProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const prev = useRef<string | null>(null);
  const [isOpeningProject, setIsOpening] = useState(false);

  useEffect(() => {
    const prevPath = prev.current;
    const opening =
      prevPath !== null &&
      FROM_PATHS.has(prevPath.replace(/\/$/, "") || "/") &&
      PROJECT_DETAIL_RE.test(pathname);
    setIsOpening(opening);
    prev.current = pathname;
  }, [pathname]);

  return (
    <NavTransitionContext.Provider value={{ isOpeningProject }}>
      {children}
    </NavTransitionContext.Provider>
  );
}

export function useIsOpeningProject() {
  return useContext(NavTransitionContext).isOpeningProject;
}

/**
 * Capture the click on a project card. Scrolls to top synchronously so the
 * source and destination cover rects share the same baseline, eliminating
 * scroll-jump jitter during the shared-layout animation.
 */
export function primeProjectOpen() {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}
