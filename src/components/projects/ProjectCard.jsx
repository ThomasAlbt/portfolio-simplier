import { motion } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, index, onOpenModal }) => {
  const Icon = project.icon;
  
  return (
    <motion.article
      layoutId={`project-${index}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-forest-green/30 border border-emerald-accent/10 rounded-2xl p-6 hover:border-emerald-accent/30 hover:bg-forest-green/50 transition-all duration-300 flex flex-col h-full"
    >
      <header className="flex justify-between items-start mb-6">
        <div className="p-3 bg-emerald-accent/10 rounded-xl text-emerald-accent group-hover:bg-emerald-accent group-hover:text-deep-green transition-colors">
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex gap-2">
          <a href={project.github} className="p-2 text-gray-400 hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={project.link} className="p-2 text-gray-400 hover:text-white transition-colors">
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </header>

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
    </motion.article>
  );
};

export default ProjectCard;
