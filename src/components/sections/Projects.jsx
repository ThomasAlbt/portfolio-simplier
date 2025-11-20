import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projectsData } from '../../data/projects';
import ProjectCard from '../projects/ProjectCard';
import ProjectModal from '../projects/ProjectModal';

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
          {projectsData.map((project, index) => (
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
