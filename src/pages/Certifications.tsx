"use client";

import { Helmet } from "react-helmet-async";
import { certifications } from "@/data/certifications";
import { useMemo, useState } from "react";
import CertificationCard from "@/components/CertificationCard";
import { Search, Trophy, FilterX, Hash } from "lucide-react";
import clsx from "clsx";

export default function CertificationsPage() {
  const [q, setQ] = useState("");

  const filteredList = useMemo(
    () =>
      certifications
        .filter((c) =>
          [c.title, c.issuer, ...(c.tags ?? []), ...(c.skills ?? []), c.category ?? ""]
            .join(" ")
            .toLowerCase()
            .includes(q.toLowerCase())
        )
        .sort((a, b) => b.issueDate.localeCompare(a.issueDate)),
    [q]
  );

  return (
    <section className="max-w-6xl mx-auto space-y-8 py-8 animate-in fade-in duration-700">
      <Helmet>
        <title>Certifications — NOUHAYLA SABIQ</title>
        <meta
          name="description"
          content="Découvrez les certifications et expertises techniques de NOUHAYLA SABIQ."
        />
      </Helmet>

      {/* Header de la page */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border/60">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-violet-600 dark:text-violet-400 font-medium">
            <Trophy size={20} />
            <span className="text-sm uppercase tracking-wider">Réalisations</span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Certifications</h1>
          <p className="text-muted-foreground text-sm max-w-md">
            Parcours d'apprentissage continu et validations de compétences techniques.
          </p>
        </div>

        {/* Barre de recherche stylisée */}
        <div className="relative group">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-violet-500 transition-colors"
            size={18}
          />
          <input
            type="search"
            placeholder="Rechercher une compétence..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className={clsx(
              "pl-10 pr-4 py-2.5 w-full md:w-80 text-sm rounded-xl border bg-card/50 backdrop-blur-sm transition-all",
              "border-border/60 focus:border-violet-500/50 focus:ring-4 focus:ring-violet-500/5 focus:outline-none"
            )}
            aria-label="Filtrer les certifications"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5 px-1.5 py-0.5 rounded-md bg-muted border border-border/40 text-[10px] font-mono text-muted-foreground">
            <Hash size={10} />
            {filteredList.length}
          </div>
        </div>
      </header>

      {/* État vide (Empty State) */}
      {filteredList.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 rounded-3xl border border-dashed border-border/60 bg-muted/20">
          <div className="p-4 rounded-full bg-muted">
            <FilterX size={40} className="text-muted-foreground/60" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-medium">Aucun résultat trouvé</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Nous n'avons trouvé aucune certification correspondant à
              <span className="font-semibold text-foreground"> "{q}"</span>.
            </p>
          </div>
          <button
            onClick={() => setQ("")}
            className="text-sm font-medium text-violet-600 hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      ) : (
        /* Grille Responsive : 1 col sur mobile, 2 sur desktop */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredList.map((c) => (
            <CertificationCard key={`${c.title}-${c.issueDate}`} c={c} />
          ))}
        </div>
      )}
    </section>
  );
}