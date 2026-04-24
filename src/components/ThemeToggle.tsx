"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import clsx from "clsx";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // 1. Hydratation sécurisée pour éviter les erreurs de rendu côté serveur (SSR)
  useEffect(() => {
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDark(isDark);
    setMounted(true);
  }, []);

  // 2. Application du thème
  useEffect(() => {
    if (!mounted) return;

    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark, mounted]);

  // Évite le saut visuel d'icône au chargement
  if (!mounted) {
    return <div className="p-2 w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setDark(!dark)}
      className={clsx(
        "relative inline-flex items-center justify-center w-10 h-10 rounded-xl transition-all duration-300",
        "bg-secondary/50 hover:bg-secondary border border-border/40 hover:border-violet-500/50",
        "focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:outline-none",
        "group overflow-hidden"
      )}
      aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {/* Conteneur d'icônes avec animation de glissement/rotation */}
      <div className="relative w-5 h-5">
        <Sun
          className={clsx(
            "absolute inset-0 transition-all duration-500 transform",
            dark
              ? "rotate-[90deg] scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100 text-amber-500"
          )}
        />
        <Moon
          className={clsx(
            "absolute inset-0 transition-all duration-500 transform",
            dark
              ? "rotate-0 scale-100 opacity-100 text-violet-400"
              : "rotate-[-90deg] scale-0 opacity-0"
          )}
        />
      </div>

      {/* Effet de brillance au survol (Halo) */}
      <span className="absolute inset-0 z-[-1] bg-gradient-to-tr from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
}