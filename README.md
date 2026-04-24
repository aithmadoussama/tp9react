# Portfolio NOUHAYLA SABIQ

Portfolio professionnel React + Vite + TypeScript + Tailwind CSS.

## 🚀 Démarrage rapide

### Étape 1 — Cloner et installer

```bash
# Copier ce dossier ou cloner depuis GitHub
cd mon-portfolio
npm install
```

### Étape 2 — shadcn/ui (à faire une seule fois)

```bash
npx shadcn@latest init
# Choisir : Default, Slate, src/components/ui
npx shadcn@latest add button card badge input textarea separator avatar
```

### Étape 3 — Lancer en développement

```bash
npm run dev
# → http://localhost:5173
```

### Étape 4 — Personnaliser ton contenu

- `src/data/profile.ts` → Tes infos personnelles (email, GitHub, LinkedIn)
- `src/data/certifications.ts` → Tes certifications (déjà remplies !)
- `src/data/projects.ts` → Tes projets
- `src/data/education.ts` → Tes formations

### Étape 5 — Badges certifications

Placer tes badges (screenshots PDF convertis en WebP) dans `public/certs/` :
- `public/certs/kotlin-cert.webp`
- `public/certs/php-cert.webp`

Puis dans `src/data/certifications.ts`, décommenter les lignes `image:`.

### Étape 6 — Build et preview

```bash
npm run build
npm run preview
```

### Étape 7 — Déploiement Vercel

```bash
git init
git add .
git commit -m "feat: portfolio NOUHAYLA SABIQ v1"
git branch -M main
git remote add origin https://github.com/TON_USER/mon-portfolio.git
git push -u origin main
```

Puis sur [vercel.com](https://vercel.com) :
1. New Project → Importer ton repo GitHub
2. Framework: **Vite** (auto-détecté)
3. Build Command: `npm run build`
4. Output: `dist`
5. Deploy 🚀

## 📁 Structure

```
src/
├── app/
│   ├── router.tsx          ← Routes SPA
│   └── RootLayout.tsx      ← Header + Footer
├── components/
│   ├── CertificationCard.tsx
│   └── ThemeToggle.tsx
├── data/
│   ├── profile.ts          ← Tes infos
│   ├── certifications.ts   ← Tes certifs MLIAEdu
│   ├── projects.ts         ← Tes projets
│   └── education.ts        ← Tes formations
└── pages/
    ├── Home.tsx
    ├── Projects.tsx
    ├── Experience.tsx
    ├── Education.tsx
    ├── Certifications.tsx
    └── Contact.tsx
```

## 🎨 Certifications intégrées

| Certification | Score | Date |
|---|---|---|
| Fondamentaux Kotlin | 78% | 28 fév 2026 |
| PHP 7 Architecture Multicouche | 92% | 4 mars 2026 |

## 📧 Formulaire Contact

Pour activer le formulaire, créer un compte [Formspree](https://formspree.io) et remplacer `XXXX` dans `src/pages/Contact.tsx` par ton ID.
