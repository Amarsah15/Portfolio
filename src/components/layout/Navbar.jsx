import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/ui/Container";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { sections, sectionIds } from "@/data/nav";
import { siteConfig } from "@/data/siteConfig";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useFocusTrap } from "@/hooks/useFocusTrap";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isHome = pathname === "/";
  const activeId = useScrollSpy(isHome ? sectionIds : []);
  const menuRef = useRef(null);

  useFocusTrap(menuRef, mobileOpen, () => setMobileOpen(false));

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
    setNavHidden(false);
  }, [pathname]);

  // Keep navigation over the hero, hide it while moving down, and reveal it
  // immediately when the user scrolls back up.
  useEffect(() => {
    let previousY = window.scrollY;
    let ticking = false;

    const updateNav = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 24);

      if (!mobileOpen) {
        if (currentY > previousY && currentY > 110) setNavHidden(true);
        if (currentY < previousY || currentY < 80) setNavHidden(false);
      }

      previousY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNav);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    } else {
      navigate(`/#${id}`);
    }
  };

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
        navHidden ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100",
        isScrolled
          ? "border-b border-border/70 bg-background/88 shadow-lg shadow-black/5 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-18 items-center justify-between" aria-label="Main navigation">
          <Link
            to="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-2xl font-black tracking-tight text-foreground hover:text-primary transition-colors duration-200 font-display"
            aria-label="Home"
          >
            {siteConfig.name.split(" ")[0]}
            <span className="text-primary">.</span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {sections.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleSectionClick(e, item.id)}
                  aria-current={isHome && activeId === item.id ? "true" : undefined}
                  className={clsx(
                    "px-4 py-2 rounded-xl font-display text-base font-bold tracking-tight transition-colors duration-200",
                    isHome && activeId === item.id
                      ? "border border-primary/25 bg-primary/12 text-primary shadow-sm shadow-primary/10"
                      : "border border-transparent text-muted hover:bg-primary/7 hover:text-foreground"
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-display text-base font-bold tracking-tight text-muted hover:text-foreground hover:bg-surface transition-colors duration-200"
            >
              <FileText className="h-4 w-4" />
              Resume
            </Link>
            <ThemeToggle />
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              className="p-2 text-muted hover:text-foreground transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav-menu"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            id="mobile-nav-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <Container>
              <ul className="py-4 space-y-1">
                {sections.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => handleSectionClick(e, item.id)}
                      aria-current={isHome && activeId === item.id ? "true" : undefined}
                      className={clsx(
                        "block px-4 py-3 rounded-lg font-display text-base font-bold tracking-tight transition-colors duration-200",
                        isHome && activeId === item.id
                          ? "border border-primary/25 bg-primary/12 text-primary"
                          : "border border-transparent text-muted hover:bg-primary/7 hover:text-foreground"
                      )}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link
                    to="/resume"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 rounded-lg font-display text-base font-bold tracking-tight text-muted hover:text-foreground hover:bg-surface/50 transition-colors duration-200"
                  >
                    <FileText className="h-4 w-4" />
                    View Resume
                  </Link>
                </li>
              </ul>
            </Container>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  );
}
