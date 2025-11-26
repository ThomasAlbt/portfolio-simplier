import { Layout, Shield, Database, MessageSquare, ShoppingBag, Server, BookOpen } from 'lucide-react';

export const projectsData = [
  {
    title: "PHP Discord Replica",
    category: "PHP / MySQL / JS Vanilla",
    description: "Réplique simplifiée de Discord avec gestion sécurisée des utilisateurs et chat en temps réel.",
    fullDescription: "Ce projet pédagogique m’a permis de renforcer mes compétences en backend PHP et sécurité web. Il inclut un système d'inscription et de connexion sécurisé, l'affichage dynamique des messages via AJAX, et la gestion des utilisateurs connectés. L'architecture suit le modèle MVC, avec des protections contre XSS et SQLi. Des améliorations futures incluent canaux multiples, notifications temps réel et refonte du design.",
    tech: ["PHP 8", "MySQL", "JavaScript Vanilla", "AJAX", "MVC"],
    icon: MessageSquare,
    link: "https://thomasfullstack.fr/chat/index.php",
    github: "https://github.com/ThomasAlbt/PHPdiscordreplica"
  },
  {
    title: "Dummy Marketplace",
    category: "Fullstack / React",
    description: "Marketplace simplifiée pour la gestion de produits et commandes, conçue pour l’apprentissage fullstack.",
    fullDescription: "Ce projet permet de gérer un catalogue de produits, ajouter des articles au panier et simuler un processus de commande. L'objectif était de pratiquer le développement fullstack avec PHP et JavaScript tout en appliquant des bonnes pratiques de code et de structuration de projet. Une attention particulière a été portée à la clarté du code et à la séparation des responsabilités.",
    tech: ["React", "JavaScript", "MySQL", "MVC"],
    icon: ShoppingBag,
    link: "#",
    github: "https://github.com/ThomasAlbt/DummyMarketplace"
  },
  {
    title: "Clean Dummy API",
    category: "Backend / API REST / NodeJS",
    description: "API RESTful épurée avec bonnes pratiques de structuration et sécurisation minimale.",
    fullDescription: "API développée pour apprendre et pratiquer la création de REST API avec PHP. Implémente une structure claire et maintenable, avec routes organisées, contrôleurs et modèles. Idéale pour comprendre le flux des requêtes HTTP et la gestion de données côté serveur. Ce projet me permet d’approfondir les concepts d’architecture backend et de tests simples.",
    tech: ["NodeJS", "REST API", "MVC", "MySQL"],
    icon: Server,
    link: "#",
    github: "https://github.com/ThomasAlbt/CleanDummyApi"
  },
  {
    title: "Blog de l'ASAM",
    category: "Fullstack / Blog / Next.js & Supabase",
    description: "Blog prêt pour la production construit avec Next.js (App Router) et Supabase — CRUD admin, authentification, recherche et bonnes pratiques de sécurité.",
    fullDescription: "Blog de l'ASAM est une application de blog complète développée avec Next.js (App Router) et Supabase. Elle propose un espace public pour consulter les articles (archives, labels, recherche), ainsi qu'une zone d'administration protégée pour créer, éditer et supprimer des articles et modérer les commentaires. Le projet met l'accent sur la sécurité (CSP strict, RLS Supabase, validation des uploads, sanitation du contenu) et la maintenabilité (structure App Router, composants réutilisables, TypeScript). Idéal pour apprendre l'architecture fullstack moderne, la gestion d'assets et l'authentification.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase (Postgres, Auth, Storage)", "Radix UI", "Embla Carousel", "DOMPurify"],
    icon: BookOpen,
    link: "https://vercel.com/thomasalbts-projects/v0-asam-blog-mvc",
    github: "https://github.com/ThomasAlbt/ASAMblog"
  }
];
