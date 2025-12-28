import { motion } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  const Icon = project.icon;

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
              <Icon className="w-6 h-6" />
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
            {/* <a 
              href={project.link} 
              className="flex items-center gap-2 px-6 py-3 bg-emerald-accent hover:bg-emerald-400 text-deep-green rounded-lg transition-colors font-bold"
            >
              <ExternalLink className="w-5 h-5" />
              Voir le projet
            </a> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
