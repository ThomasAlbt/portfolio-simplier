import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <span className="w-12 h-1 bg-emerald-accent"></span>
            COMPÉTENCES
          </h2>
          <p className="text-gray-400">
            Ma stack technique et mes outils de prédilection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-forest-green/30 border border-emerald-accent/10 p-8 rounded-2xl hover:border-emerald-accent/30 transition-all duration-300 group"
              >
                <div className="mb-6 inline-block p-4 bg-emerald-accent/10 rounded-xl text-emerald-accent group-hover:bg-emerald-accent group-hover:text-deep-green transition-colors">
                  <Icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                      <span className="w-1.5 h-1.5 bg-emerald-accent rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
