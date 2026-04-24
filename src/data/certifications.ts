export type Certification = {
  title: string;
  issuer: string;
  instructor?: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  tags?: string[];
  image?: string;
  imageAlt?: string;
  status?: "active" | "expired" | "revoked";
  score?: number;
  progression?: number;
  category?: string;
};

export const certifications: Certification[] = [
  {
    title: "Programmation orientée objet : C++",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-04",
    credentialId: "#12-f95329d6-4190-44ff-9ce9-f8b4d302e71f-643316",
    skills: ["C++", "OOP", "Classes", "Héritage", "Polymorphisme"],
    tags: ["C++", "OOP"],
    image: "/certs/cpp-cert.png",
    imageAlt: "Badge Certification C++ MLIAEdu",
    status: "active",
    score: 93,
    progression: 100,
    category: "PROGRAMMATION CPP",
  },
  {
    title: "Ingénierie Logicielle Web avec PHP 7 : Architecture Multicouche et Accès aux Données Sécurisé",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-04",
    credentialId: "#44-f95329d6-4190-44ff-9ce9-f8b4d302e71f-610556",
    skills: ["PHP 7", "Architecture MVC", "PDO", "Sécurité Web", "Base de données", "Architecture Multicouche"],
    tags: ["Web", "PHP", "Architecture"],
    image: "/certs/php-cert.png",
    imageAlt: "Badge Certification PHP 7 MLIAEdu",
    status: "active",
    score: 82,
    progression: 100,
    category: "PROGRAMMATION WEB",
  },
  {
    title: "Fondamentaux et Concepts Avancés de la Programmation Java",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-04",
    credentialId: "#6-f95329d6-4190-44ff-9ce9-f8b4d302e71f-568398",
    skills: ["Java", "OOP", "Collections", "Exceptions", "Threads", "Interfaces"],
    tags: ["Java", "OOP"],
    image: "/certs/java-cert.png",
    imageAlt: "Badge Certification Java MLIAEdu",
    status: "active",
    score: 84,
    progression: 100,
    category: "PROGRAMMATION JAVA",
  },
  {
    title: "Bases de données",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-04",
    credentialId: "#15-f95329d6-4190-44ff-9ce9-f8b4d302e71f-535276",
    skills: ["SQL", "MySQL", "Modélisation", "Schéma relationnel", "Contraintes d'intégrité"],
    tags: ["Base de données", "SQL", "MySQL"],
    image: "/certs/bdd-cert.png",
    imageAlt: "Badge Certification Bases de données MLIAEdu",
    status: "active",
    score: 78,
    progression: 100,
    category: "BASES DE DONNEES",
  },
  {
    title: "Fondamentaux de la programmation en Kotlin",
    issuer: "MLIAEdu",
    instructor: "Mohamed LACHGAR",
    issueDate: "2026-02",
    credentialId: "#40-f95329d6-4190-44ff-9ce9-f8b4d302e71f-215598",
    skills: ["Kotlin", "Android", "Programmation Orientée Objet", "Coroutines"],
    tags: ["Mobile", "Kotlin", "Android"],
    image: "/certs/kotlin-cert.png",
    imageAlt: "Badge Certification Kotlin MLIAEdu",
    status: "active",
    score: 70,
    progression: 100,
    category: "PROGRAMMATION MOBILE",
  },
];