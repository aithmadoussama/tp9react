"use client";

import { Helmet } from "react-helmet-async";
import { education } from "@/data/education";
import { profile } from "@/data/profile"; // Pour utiliser le nom global si nécessaire

function fmt(s?: string) {
  if (!s) return "Présent";
  const [y, m] = s.split("-");
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  return `${months[parseInt(m) - 1]} ${y}`;
}

export default function EducationPage() {
  return (
    <section className="max-w-4xl mx-auto py-10 animate-in fade-in duration-700">
      <Helmet>
        <title>Formations — {profile.name}</title>
        <meta name="description" content={`Parcours académique et diplômes de ${profile.name}.`} />
      </Helmet>

      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight">Parcours Académique</h2>
        <p className="text-muted-foreground mt-2">
          Mon cursus universitaire et les spécialisations qui ont forgé mes bases techniques.
        </p>
      </div>

      <div className="relative border-l-2 border-muted pl-8 ml-4 space-y-12">
        {education.map((e) => (
          <div key={e.school + e.start} className="relative">
            {/* Le point de la timeline avec effet de halo */}
            <div className="absolute -left-[41px] top-1.5 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-background border-2 border-violet-500 z-10" />
              <div className="absolute w-8 h-8 rounded-full bg-violet-500/10 animate-pulse" />
            </div>

            <div className="flex flex-col gap-1">
              {/* Badge de date */}
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-secondary text-secondary-foreground border border-border/50">
                  {fmt(e.start)} — {fmt(e.end)}
                </span>
                {e.location && (
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <span className="w-1 h-1 rounded-full bg-border" />
                    {e.location}
                  </span>
                )}
              </div>

              {/* Titre et École */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold leading-snug tracking-tight">
                  {e.degree}
                  {e.field && <span className="text-muted-foreground/60 font-medium"> · {e.field}</span>}
                </h3>
                <p className="text-base font-semibold text-violet-600 dark:text-violet-400">
                  {e.school}
                </p>
              </div>

              {/* GPA & Détails */}
              {e.gpa && (
                <div className="mt-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/50 w-fit">
                  Mention / GPA : {e.gpa}
                </div>
              )}

              {/* Highlights avec puces personnalisées */}
              {e.highlights && e.highlights.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {e.highlights.map((h) => (
                    <li key={h} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500/40 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags de cours */}
              {e.courses && e.courses.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {e.courses.slice(0, 6).map((course) => (
                    <span 
                      key={course}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-muted/50 border border-border/40 text-muted-foreground"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
