import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/platform", label: "Platform" },
  { to: "/solutions", label: "Solutions" },
  { to: "/resources", label: "Resources" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const LOGO_URL = "/logo.jpg";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b border-outline-variant">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img alt="RedFox" className="w-9 h-9 object-cover rounded" src={LOGO_URL} />
          <span className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">RedFox</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={
                "font-label-md text-label-md transition-colors pb-1 border-b " +
                (isActive(l.to)
                  ? "text-on-surface border-brand-crimson"
                  : "text-outline border-transparent hover:text-on-surface")
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link
            to="/contact"
            className="bg-brand-crimson text-white px-6 py-2 font-label-md text-label-md rounded hover:opacity-90 active:scale-95 transition-all"
          >
            Request Demo
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded text-on-surface hover:bg-surface-container"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-outline-variant bg-surface-container-lowest">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={
                  "font-label-md text-label-md py-3 px-3 rounded transition-colors " +
                  (isActive(l.to)
                    ? "text-on-surface bg-surface-container border-l-2 border-brand-crimson"
                    : "text-outline hover:text-on-surface hover:bg-surface-container")
                }
              >
                {l.label}
              </Link>
            ))}
            <div className="h-px bg-outline-variant my-3" />
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="font-label-md text-label-md text-on-surface py-3 px-3"
            >
              Login
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="bg-brand-crimson text-white px-6 py-3 font-label-md text-label-md rounded text-center"
            >
              Request Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
