import { Layout, Shield, Database } from 'lucide-react';

export const projectsData = [
  {
    title: "F1 Data Viz",
    category: "React / OpenF1 API",
    description: "Dashboard temps réel pour visualiser les données de télémétrie F1. Analyse des stratégies de course et comparaison des pilotes.",
    fullDescription: "Ce projet exploite l'API OpenF1 pour fournir des visualisations de données en temps réel. Il permet aux utilisateurs d'analyser les temps au tour, la dégradation des pneus et les stratégies de course. L'interface est construite avec React et Chart.js pour des graphiques performants et réactifs.",
    tech: ["React", "Chart.js", "REST API"],
    icon: Layout,
    link: "#",
    github: "#"
  },
  {
    title: "Secure Backend",
    category: "PHP / Security",
    description: "API RESTful sécurisée avec authentification JWT, protection CSRF et validation stricte des données. Architecture MVC.",
    fullDescription: "Une API backend robuste conçue avec une approche 'Security First'. Elle implémente une authentification JWT sans état, une protection contre les failles CSRF et XSS, ainsi qu'une validation stricte des entrées. L'architecture MVC assure une séparation claire des responsabilités et une maintenabilité accrue. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tech: ["PHP 8", "MySQL", "JWT"],
    icon: Shield,
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio V1",
    category: "Frontend Design",
    description: "Portfolio personnel axé sur l'apprentissage des animations et du design system. Intégration continue avec GitHub Actions.",
    fullDescription: "La première itération de mon portfolio, créée pour maîtriser Framer Motion et TailwindCSS. Elle met l'accent sur des micro-interactions fluides et un design system cohérent. Le déploiement est automatisé via GitHub Actions.",
    tech: ["Vite", "Tailwind", "Framer"],
    icon: Database,
    link: "#",
    github: "#"
  }
];
