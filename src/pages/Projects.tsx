"use client";

import { Helmet } from "react-helmet-async";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto py-10 animate-in fade-in duration-700">
      <Helmet>
        <title>Projets — NOUHAYLA SABIQ</title>
        <meta name="description" content="Découvrez les réalisations techniques et projets open-source de NOUHAYLA SABIQ." />
      </Helmet>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold tracking-tight">Projets & Réalisations</h2>
          <p className="text-muted-foreground">
            Une sélection de mes travaux récents en développement web et mobile.
          </p>
        </div>
        <div className="text-sm font-medium text-muted-foreground bg-secondary/50 px-4 py-1.5 rounded-full border border-border/40">
          {projects.length} projets au total
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative flex flex-col h-full bg-card border border-border/60 rounded-2xl p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-1.5 hover:border-violet-500/30"
          >
            {/* Décoration subtile en arrière-plan au survol */}
            <div className="absolute top-0 right-0 -mt-2 -mr-2 w-24 h-24 bg-violet-500/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="flex justify-between items-start mb-3">
              <h3 className="font-bold text-lg leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                {p.title}
              </h3>
              <div className="flex gap-2">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all"
                    title="Voir le code"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </a>
                )}
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg bg-violet-500/10 hover:bg-violet-500 text-violet-600 dark:text-violet-400 transition-all"
                    title="Voir la démo"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {p.period && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/70 mb-3">
                {p.period}
              </p>
            )}

            <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
              {p.summary}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-secondary/30 text-secondary-foreground border border-border/40 group-hover:border-violet-500/20 transition-colors"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Lien principal de la carte (Invisible mais cliquable si besoin) */}
            {(p.link || p.repo) && (
              <div className="mt-4 pt-4 border-t border-border/40 flex items-center text-xs font-bold uppercase tracking-tighter text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity">
                En savoir plus
                <svg className="w-3 h-3 ml-1 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}