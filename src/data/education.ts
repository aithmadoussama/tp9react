export type Education = {
  school: string;
  degree: string;
  field?: string;
  location?: string;
  start: string;
  end?: string;
  gpa?: string;
  courses?: string[];
  highlights?: string[];
};

export const education: Education[] = [
  {
    school: "École Normale Supérieure de Marrakech",
    degree: "Licence",
    field: "Clé Informatique",
    location: "Marrakech",
    start: "20223-09",
    end: "2026-06",
    highlights: ["Dernière année de Licence", "Formation pédagogique et scientifique"],
  },
  {
    school: "Lycée Touama",
    degree: "Baccalauréat Scientifique",
    field: "Sciences Physiques",
    location: "Al haouz Touama",
    start: "2021-09",
    end: "2022-06",
    highlights: ["Mention Bien"],
  },
];