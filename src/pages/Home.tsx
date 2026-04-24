"use client";

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { profile } from "@/data/profile";
import { certifications } from "@/data/certifications";

export default function Home() {
  const avgScore = Math.round(
    certifications.reduce((sum, c) => sum + (c.score ?? 0), 0) / certifications.length
  );

  return (
    <section className="max-w-6xl mx-auto py-12 animate-in fade-in duration-1000">
      <Helmet>
        <title>{profile.name} — Portfolio Développeur Full Stack</title>
        <meta
          name="description"
          content={`Découvrez le portfolio de ${profile.name} — Expert en ${profile.role}.`}
        />
      </Helmet>

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Disponible pour nouveaux projets
          </div>
          
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            {profile.name.split(' ').map((word, i) => (
              <span key={i} className={i === 1 ? "text-violet-600 dark:text-violet-400 block" : "block"}>
                {word}
              </span>
            ))}
          </h1>
          
          <p className="mt-6 text-xl font-medium text-foreground/80">
            {profile.role}
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed text-lg max-w-xl">
            {profile.about}
          </p>

          {/* Tags de compétences stylisés */}
          <div className="flex flex-wrap gap-2 mt-8">
            {profile.skills.slice(0, 6).map((skill) => (
              <span
                key={skill}
                className="text-[11px] font-bold uppercase tracking-tighter bg-secondary/50 text-secondary-foreground px-3 py-1 rounded-md border border-border/40 transition-colors hover:border-violet-500/30"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/projects"
              className="group flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold text-sm px-8 py-4 rounded-2xl shadow-lg shadow-violet-600/20 transition-all active:scale-[0.98]"
            >
              Voir les projets
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              to="/certifications"
              className="flex items-center justify-center border border-border/60 font-bold text-sm px-8 py-4 rounded-2xl hover:bg-secondary transition-all"
            >
              Certifications
            </Link>
          </div>
        </div>

        {/* Avatar avec décoration */}
        <div className="order-1 md:order-2 flex justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-emerald-600/20 blur-3xl rounded-full scale-110" />
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-violet-600 to-emerald-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <img
              src="/profile.jpeg"
              alt={profile.name}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-3xl object-cover border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { num: certifications.length, label: "Certifications", sub: "Expertises validées" },
          { num: "100%", label: "Taux de complétion", sub: "Projets & Labs" },
          { num: `${avgScore}%`, label: "Score moyen", sub: "Excellence académique" },
        ].map((s) => (
          <div key={s.label} className="relative group overflow-hidden bg-card border border-border/50 rounded-2xl p-6 hover:border-violet-500/30 transition-all">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
               <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>
            </div>
            <div className="text-4xl font-black text-violet-600 dark:text-violet-400 tracking-tighter">
              {s.num}
            </div>
            <div className="text-sm font-bold mt-2 uppercase tracking-wide">{s.label}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Recent Certs Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Certifications Récentes</h2>
          <Link to="/certifications" className="text-sm font-bold text-violet-500 hover:underline">Voir tout</Link>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.slice(0, 4).map((c) => (
            <div key={c.title} className="group bg-card border border-border/50 rounded-2xl p-4 flex items-center gap-4 hover:border-violet-500/20 transition-all hover:bg-secondary/30">
              <div className="w-14 h-14 rounded-xl bg-violet-500/10 border border-violet-500/20 flex flex-col items-center justify-center shrink-0">
                <span className="text-xs font-black text-violet-600 dark:text-violet-400">{c.score}%</span>
                <span className="text-[8px] uppercase font-bold text-violet-500/60 leading-none">Score</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-tight truncate group-hover:text-violet-500 transition-colors">{c.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {c.issuer} • <span className="opacity-70 font-mono text-[10px] uppercase tracking-tighter">{c.issueDate}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}