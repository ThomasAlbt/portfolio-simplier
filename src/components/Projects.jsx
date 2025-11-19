import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Layout, Shield } from 'lucide-react';

const projects = [
  {
    title: "F1 Data Viz",
    category: "React / OpenF1 API",
    description: "Dashboard temps réel pour visualiser les données de télémétrie F1. Analyse des stratégies de course et comparaison des pilotes.",
    tech: ["React", "Chart.js", "REST API"],
    icon: <Layout className="w-6 h-6" />,
    link: "#",
    github: "#"
  },
  {
    title: "Secure Backend",
    category: "PHP / Security",
    description: "API RESTful sécurisée avec authentification JWT, protection CSRF et validation stricte des données. Architecture MVC.",
    tech: ["PHP 8", "MySQL", "JWT"],
    icon: <Shield className="w-6 h-6" />,
    link: "#",
    github: "#"
  },
  {
    title: "Portfolio V1",
    category: "Frontend Design",
    description: "Portfolio personnel axé sur l'apprentissage des animations et du design system. Intégration continue avec GitHub Actions.",
    tech: ["Vite", "Tailwind", "Framer"],
    icon: <Database className="w-6 h-6" />,
    link: "#",
    github: "#"
  }
];

const Projects = () => {
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
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-forest-green/30 border border-emerald-accent/10 rounded-2xl p-6 hover:border-emerald-accent/30 hover:bg-forest-green/50 transition-all duration-300"
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
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed h-20">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 border-t border-white/5 pt-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs font-medium text-gray-300 bg-white/5 px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
