import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Database, Layout, Shield, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const projects = [
  {
    title: "F1 Data Viz",
    category: "React / OpenF1 API",
    description: "Dashboard temps réel pour visualiser les données de télémétrie F1. Analyse des stratégies de course et comparaison des pilotes.",
    fullDescription: "Ce projet exploite l'API OpenF1 pour fournir des visualisations de données en temps réel. Il permet aux utilisateurs d'analyser les temps au tour, la dégradation des pneus et les stratégies de course. L'interface est construite avec React et Chart.js pour des graphiques performants et réactifs.",
    tech: ["React", "Chart.js", "REST API"],
    icon: <Layout className="w-6 h-6" />,
    link: "#",
    github: "#"
  },
  {
    title: "Secure Backend",
    category: "PHP / Security",
    description: "API RESTful sécurisée avec authentification JWT, protection CSRF et validation stricte des données. Architecture MVC.",
    fullDescription: "Une API backend robuste conçue avec une approche 'Security First'. Elle implémente une authentification JWT sans état, une protection contre les failles CSRF et XSS, ainsi qu'une validation stricte des entrées. L'architecture MVC assure une séparation claire des responsabilités et une maintenabilité accrue. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    tech: ["PHP 8", "MySQL", "JWT"],
    icon: <Shield className="w-6 h-6" />,
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio V1",
    category: "Frontend Design",
    description: "Portfolio personnel axé sur l'apprentissage des animations et du design system. Intégration continue avec GitHub Actions.",
    fullDescription: "La première itération de mon portfolio, créée pour maîtriser Framer Motion et TailwindCSS. Elle met l'accent sur des micro-interactions fluides et un design system cohérent. Le déploiement est automatisé via GitHub Actions.",
    tech: ["Vite", "Tailwind", "Framer"],
    icon: <Database className="w-6 h-6" />,
    link: "#",
    github: "#"
  }
];

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative bg-deep-green border border-emerald-accent/20 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-emerald-accent/10"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-emerald-accent/10 rounded-xl text-emerald-accent">
              {project.icon}
            </div>
            <div>
              <div className="text-emerald-accent text-xs font-bold uppercase tracking-wider mb-1">
                {project.category}
              </div>
              <h3 className="text-3xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-8 text-gray-300 leading-relaxed">
            <p>{project.fullDescription || project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t, i) => (
              <span key={i} className="text-sm font-medium text-emerald-accent bg-emerald-accent/10 px-3 py-1 rounded-full border border-emerald-accent/20">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-4 pt-6 border-t border-white/10">
            <a 
              href={project.github} 
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-lg transition-colors font-medium"
            >
              <Github className="w-5 h-5" />
              Code Source
            </a>
            <a 
              href={project.link} 
              className="flex items-center gap-2 px-6 py-3 bg-emerald-accent hover:bg-emerald-400 text-deep-green rounded-lg transition-colors font-bold"
            >
              <ExternalLink className="w-5 h-5" />
              Voir le projet
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project, index, onOpenModal }) => {
  return (
    <motion.div
      layoutId={`project-${index}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-forest-green/30 border border-emerald-accent/10 rounded-2xl p-6 hover:border-emerald-accent/30 hover:bg-forest-green/50 transition-all duration-300 flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-emerald-accent/10 rounded-xl text-emerald-accent group-hover:bg-emerald-accent group-hover:text-deep-green transition-colors">
          {project.icon}
        </div>
        <div className="flex gap-2">
          <a href={project.github} className="p-2 text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={project.link} className="p-2 text-gray-400 hover:text-white transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="text-emerald-accent text-xs font-bold uppercase tracking-wider mb-2">
        {project.category}
      </div>
      
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-accent transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.slice(0, 3).map((t, i) => (
          <span key={i} className="text-xs font-medium text-gray-300 bg-white/5 px-2 py-1 rounded-md">
            {t}
          </span>
        ))}
      </div>

      <button 
        onClick={() => onOpenModal(project)}
        className="w-full mt-auto py-3 rounded-lg border border-emerald-accent/20 text-emerald-accent font-bold text-sm uppercase tracking-wider hover:bg-emerald-accent hover:text-deep-green transition-all flex items-center justify-center gap-2 group-hover:border-emerald-accent"
      >
        En savoir plus <ChevronRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <span className="w-12 h-1 bg-emerald-accent"></span>
            PROJETS
          </h2>
          <p className="text-gray-400 max-w-xl">
            Une sélection de travaux démontrant mes compétences en frontend et backend.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal 
              project={selectedProject} 
              onClose={() => setSelectedProject(null)} 
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
