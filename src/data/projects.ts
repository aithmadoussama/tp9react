export type Project = {
  title: string;
  period?: string;
  tags: string[];
  summary: string;
  link?: string;
  repo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Application de Gestion des Absences d’une Entreprise",
    period: "2026",
    tags: ["Java", "Java Swing", "MySQL", "JDBC", "NetBeans", "phpMyAdmin"],
    summary:
      "Application desktop de gestion des absences d’une entreprise permettant la gestion des employés et des demandes d’absence. Elle permet d’ajouter, modifier et suivre les absences selon leur statut (en attente, validée ou refusée). Le projet inclut une interface graphique intuitive développée avec Java Swing et une base de données MySQL gérée via JDBC pour assurer la persistance des données.",
    repo: "https://github.com/aithmadoussama/Projet_gestion_Absence.git",
  },
];