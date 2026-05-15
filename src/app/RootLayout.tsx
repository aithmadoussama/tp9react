"use client";

import { Outlet, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function RootLayout() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMenuOpen(false);
  }, [pathname]);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md",
      isActive
        ? "text-violet-600 dark:text-violet-400 bg-violet-500/5"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    );

  const mobileNavClass = ({ isActive }: { isActive: boolean }) =>
    clsx(
      "block w-full px-4 py-3 text-sm font-medium transition-all duration-200 rounded-md",
      isActive
        ? "text-violet-600 dark:text-violet-400 bg-violet-500/10"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
    );

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-violet-500/30">
      <header className="sticky top-0 z-[60] w-full border-b border-border/40 bg-background/70 backdrop-blur-xl">
        <nav className="mx-auto max-w-6xl h-16 flex items-center justify-between px-6">

          {/* Logo */}
          <NavLink to="/" className="font-bold tracking-tighter text-lg group">
            <span className="text-violet-600 group-hover:text-foreground transition-colors">A.</span>
            <span>OUSSAMA</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <NavLink to="/" end className={navClass}>Accueil</NavLink>
            <NavLink to="/projects" className={navClass}>Projets</NavLink>
            <NavLink to="/experience" className={navClass}>Parcours</NavLink>
            <NavLink to="/education" className={navClass}>Formations</NavLink>
            <NavLink to="/certifications" className={navClass}>Certs</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
            <div className="ml-2 pl-2 border-l border-border/50 h-6 flex items-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile : ThemeToggle + Hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              <span className={"block h-0.5 w-6 bg-foreground transition-all duration-300 " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
              <span className={"block h-0.5 w-6 bg-foreground transition-all duration-300 " + (menuOpen ? "opacity-0" : "")} />
              <span className={"block h-0.5 w-6 bg-foreground transition-all duration-300 " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <div
          className={
            "md:hidden overflow-hidden transition-all duration-300 border-t border-border/40 bg-background/95 backdrop-blur-xl " +
            (menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")
          }
        >
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            <NavLink to="/" end className={mobileNavClass}>Accueil</NavLink>
            <NavLink to="/projects" className={mobileNavClass}>Projets</NavLink>
            <NavLink to="/experience" className={mobileNavClass}>Parcours</NavLink>
            <NavLink to="/education" className={mobileNavClass}>Formations</NavLink>
            <NavLink to="/certifications" className={mobileNavClass}>Certifications</NavLink>
            <NavLink to="/contact" className={mobileNavClass}>Contact</NavLink>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 py-12 md:py-20 min-h-[calc(100vh-160px)]">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-secondary/20">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="font-semibold text-foreground tracking-tight">{profile.name}</p>
              <p className="text-muted-foreground italic">Développeur basé à Marrakech, Maroc</p>
            </div>
            <div className="flex items-center gap-6">
              {profile.socials.slice(0, 3).map((s) => (
                
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-violet-500 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium">
              © {new Date().getFullYear()} · Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
