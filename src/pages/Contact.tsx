"use client";

import { Helmet } from "react-helmet-async";
import { profile } from "@/data/profile";
import { useState } from "react";
import clsx from "clsx";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formspree.io/f/XXXX", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      setSent(true);
    } catch (error) {
      console.error("Erreur envoi:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="max-w-5xl mx-auto py-12 animate-in fade-in duration-700 px-4">
      <Helmet>
        <title>Contact — {profile.name}</title>
      </Helmet>

      <div className="grid gap-12 md:grid-cols-2 items-start">
        {/* Colonne Gauche : Infos */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">On travaille ensemble ?</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed max-w-sm">
              Que ce soit pour un projet complet ou une simple question technique,
              ma boîte mail est toujours ouverte.
            </p>
          </div>

          <div className="space-y-6">
            {/* Item Email */}
            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary border border-border/50 group-hover:border-violet-500/50 transition-colors">
                <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                <a href={`mailto:${profile.email}`} className="text-sm font-semibold hover:text-violet-500 transition-colors">{profile.email}</a>
              </div>
            </div>

            {/* Item Localisation */}
            <div className="flex items-center gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-2xl bg-secondary border border-border/50 group-hover:border-emerald-500/50 transition-colors">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Localisation</p>
                <p className="text-sm font-semibold">{profile.location}</p>
              </div>
            </div>
          </div>

          {/* Socials en version Texte + Bordure */}
          <div className="flex flex-wrap gap-3 pt-4">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold uppercase tracking-tighter border border-border/60 px-5 py-2.5 rounded-xl hover:bg-foreground hover:text-background transition-all duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Colonne Droite : Formulaire */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/20 to-emerald-600/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <div className="relative bg-card border border-border/40 p-8 rounded-[2rem] shadow-2xl shadow-black/5">
            {sent ? (
              <div className="text-center py-12 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">C'est envoyé !</h3>
                <p className="text-muted-foreground mt-2">Je reviens vers vous très rapidement.</p>
                <button onClick={() => setSent(false)} className="mt-8 text-sm font-bold uppercase tracking-widest text-violet-500 hover:text-violet-600">Envoyer un autre</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Nom complet</label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full bg-secondary/30 border-b border-border focus:border-violet-500 py-3 px-1 text-sm outline-none transition-colors"
                      placeholder="Ex: Ait Hmad Oussama"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Votre Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full bg-secondary/30 border-b border-border focus:border-violet-500 py-3 px-1 text-sm outline-none transition-colors"
                      placeholder="nom@exemple.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-widest ml-1 text-muted-foreground">Message</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full bg-secondary/30 border border-border rounded-xl p-4 text-sm focus:border-violet-500 outline-none transition-colors resize-none"
                    placeholder="Dites-moi tout..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-foreground text-background font-bold uppercase tracking-widest text-[11px] py-4 rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {loading ? "Chargement..." : "Envoyer la demande"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}