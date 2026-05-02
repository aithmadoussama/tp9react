import type { Certification } from "@/data/certifications";
import clsx from "clsx";
import { useState } from "react";
import { Award, Calendar, Search, ShieldAlert } from "lucide-react";

function formatDate(s: string) {
  const [y, m] = s.split("-");
  const months = ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"];
  return `${months[parseInt(m) - 1]} ${y}`;
}

export default function CertificationCard({ c }: { c: Certification }) {
  const [zoom, setZoom] = useState(false);

  const isExpired =
    c.status === "expired" ||
    (c.expiryDate && c.expiryDate < new Date().toISOString().slice(0, 7));

  return (
    <>
      {/* Modal d'agrandissement amélioré */}
      {zoom && c.image && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md animate-in fade-in duration-200 cursor-zoom-out"
          onClick={() => setZoom(false)}
        >
          <div className="relative max-w-5xl w-[95vw] p-2">
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              className="w-full h-auto rounded-lg shadow-2xl ring-1 ring-border"
            />
            <button className="absolute -top-12 right-0 text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
              <span>Fermer</span>
              <kbd className="bg-muted px-2 py-1 rounded text-xs">ESC</kbd>
            </button>
          </div>
        </div>
      )}

      <article
        className={clsx(
          "group relative flex flex-col h-full bg-card border rounded-xl overflow-hidden transition-all duration-300",
          "hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-1",
          isExpired ? "grayscale-[0.5] opacity-80" : "border-border hover:border-violet-500/50"
        )}
      >
        {/* En-tête de l'image avec Badge Expiration */}
        {c.image && (
          <div 
            className="relative aspect-video overflow-hidden cursor-zoom-in"
            onClick={() => setZoom(true)}
          >
            <img
              src={c.image}
              alt={c.imageAlt ?? c.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Overlay au survol */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
               <span className="flex items-center gap-2 text-white text-xs font-medium bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full ring-1 ring-white/30">
                 <Search size={14} /> Voir le certificat
               </span>
            </div>

            {isExpired && (
              <div className="absolute top-2 right-2">
                <span className="flex items-center gap-1.5 bg-destructive/10 backdrop-blur-md text-destructive text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border border-destructive/20">
                  <ShieldAlert size={12} /> Expiré
                </span>
              </div>
            )}
          </div>
        )}

        <div className="flex flex-col flex-grow p-5">
          {/* Catégorie & Badge */}
          <div className="flex items-center gap-2 mb-3">
             {c.category && (
                <span className="text-[10px] font-bold uppercase tracking-widest text-violet-600 dark:text-violet-400">
                  {c.category}
                </span>
             )}
             <span className="h-px flex-grow bg-border/60" />
          </div>

          <h3 className="text-base font-bold leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            {c.title}
          </h3>

          <div className="mt-2 space-y-1.5">
            <p className="text-sm font-medium text-foreground/80 flex items-center gap-1.5">
              <Award size={14} className="text-muted-foreground" />
              {c.issuer}{c.instructor && <span className="text-muted-foreground/60 font-normal"> · {c.instructor}</span>}
            </p>
            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Calendar size={14} />
              {formatDate(c.issueDate)}
              {c.expiryDate && ` — ${formatDate(c.expiryDate)}`}
            </p>
          </div>

          {/* Scores et Stats */}
          {(c.score !== undefined || c.progression !== undefined) && (
            <div className="flex items-center gap-3 mt-4">
              {c.score !== undefined && (
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground uppercase font-semibold">Score</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{c.score}%</span>
                </div>
              )}
              {c.progression !== undefined && (
                <div className="flex flex-col border-l pl-3 border-border">
                  <span className="text-[10px] text-muted-foreground uppercase font-semibold">Labs</span>
                  <span className="text-sm font-bold text-violet-600 dark:text-violet-400">{c.progression}%</span>
                </div>
              )}
            </div>
          )}

          {/* Skills avec style minimaliste */}
          {c.skills && c.skills.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-auto pt-5">
              {c.skills.map((skill) => (
                <span 
                  key={skill} 
                  className="text-[11px] font-medium bg-secondary/50 text-secondary-foreground px-2 py-0.5 rounded border border-border/50 hover:border-violet-500/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </>
  );
}
