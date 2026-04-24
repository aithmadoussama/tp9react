"use client";

import { Helmet } from "react-helmet-async";
import clsx from "clsx";

export default function Experience() {
  const items = [
    {
      period: "2022 — Présent",
      title: "Licence en Informatique (CLE)",
      org: "École Normale Supérieure de Marrakech",
      desc: "Formation avancée en ingénierie logicielle et méthodes pédagogiques appliquées aux sciences informatiques.",
      tags: ["Algorithmique", "Architecture Web", "Pédagogie"],
      isCurrent: true,
    },
    {
      period: "2021 — 2022",
      title: "Baccalauréat Scientifique",
      org: "Lycée · Sciences Physiques",
      desc: "Spécialisation en sciences physiques. Diplôme obtenu avec mention Bien.",
      tags: ["Physique-Chimie", "Mathématiques", "Mention Bien"],
      isCurrent: false,
    },
  ];

  return (
    <section className="max-w-4xl mx-auto py-10 animate-in fade-in slide-in-from-bottom-3 duration-1000">
      <Helmet>
        <title>Parcours — NOUHAYLA SABIQ</title>
        <meta name="description" content="Découvrez le parcours académique et professionnel de NOUHAYLA SABIQ." />
      </Helmet>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Mon Parcours</h2>
          <p className="text-muted-foreground mt-1">L'évolution de mes compétences à travers mes formations et expériences.</p>
        </div>
        <div className="h-px flex-grow bg-border/60 mx-8 hidden md:block" />
        <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-500 bg-violet-500/5 px-4 py-2 rounded-full border border-violet-500/20">
          Timeline
        </div>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={clsx(
              "relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group",
              index === 0 && "animate-in slide-in-from-left duration-700"
            )}
          >
            {/* Le point sur la timeline */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-card shadow-sm z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <div className={clsx(
                "w-2.5 h-2.5 rounded-full transition-transform group-hover:scale-150 duration-300",
                item.isCurrent ? "bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.5)]" : "bg-muted-foreground/40"
              )} />
            </div>

            {/* Le contenu (Carte) */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] p-5 rounded-2xl bg-card border border-border/50 hover:border-violet-500/30 hover:shadow-xl hover:shadow-black/5 transition-all duration-300">
              <div className="flex flex-col gap-1">
                <time className="text-[10px] font-bold tracking-widest text-violet-500 uppercase">
                  {item.period}
                </time>
                <h3 className="text-lg font-bold tracking-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-foreground/80 mb-2">
                  {item.org}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-medium bg-secondary/80 text-secondary-foreground px-2.5 py-1 rounded-md border border-border/40"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}