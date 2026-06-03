import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/research", label: "Research" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 ${
        scrolled ? "glass-strong rounded-full shadow-elegant" : ""
      } transition-all duration-500`} style={scrolled ? { padding: "10px 18px" } : undefined}>
        <Link to="/" className="group flex items-center gap-2.5">
          <div className="relative h-8 w-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[oklch(0.88_0.10_88)] to-[oklch(0.65_0.16_70)]" />
            <div className="absolute inset-[3px] rounded-full bg-background" />
            <div className="absolute inset-0 grid place-items-center font-display text-[15px] font-semibold text-gradient-gold">T</div>
            </div>
            <div className="leading-none">
            <div className="font-display text-lg tracking-wide">Tradexpert Service</div>
            <div className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">Brand Protection</div>
            </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              activeProps={{ className: "rounded-full px-4 py-2 text-sm text-foreground bg-white/5" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-gradient-to-r from-[oklch(0.88_0.10_88)] to-[oklch(0.72_0.15_70)] px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-gold transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Request Access
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full glass md:hidden"
        >
          <div className="space-y-1.5">
            <span className="block h-px w-5 bg-foreground" />
            <span className="block h-px w-5 bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <div className="mx-6 mt-3 rounded-2xl glass-strong p-4 md:hidden">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-gradient-to-r from-[oklch(0.88_0.10_88)] to-[oklch(0.72_0.15_70)] px-3 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            Request Access
          </Link>
        </div>
      )}
    </header>
  );
}
