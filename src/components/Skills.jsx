import { motion } from 'framer-motion';
import { Code2, Database, Lock, Layout, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="w-6 h-6" />,
    skills: ["React", "JavaScript", "TailwindCSS", "Framer Motion", "HTML5/CSS3"]
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6" />,
    skills: ["PHP 8", "MySQL", "REST APIs", "Node.js Basics", "MVC Architecture"]
  },
  {
    title: "Tools & Security",
    icon: <Lock className="w-6 h-6" />,
    skills: ["Git / GitHub", "Web Security", "VS Code", "Postman", "Vite"]
  }
];

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
            Mon arsenal technique pour construire des solutions complètes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-forest-green/20 border border-emerald-accent/5 rounded-2xl p-8 hover:border-emerald-accent/20 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-emerald-accent/10 rounded-lg text-emerald-accent">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-accent/50"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
