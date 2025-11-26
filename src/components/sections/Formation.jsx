import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GraduationCap, ChevronDown, ChevronUp, Award, ExternalLink } from 'lucide-react';
import { educationData, certificationsData } from '../../data/formation';

const EducationItem = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const truncatedText = item.description.substring(0, 150) + "...";
  const hasMore = item.description.length > 150;

  return (
    <motion.article
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-forest-green/30 border border-emerald-accent/10 rounded-2xl p-8 relative overflow-hidden mb-6 last:mb-0"
    >
      <header className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-emerald-accent/10 rounded-xl text-emerald-accent">
          <GraduationCap className="w-8 h-8" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{item.title}</h3>
          <p className="text-emerald-accent text-sm font-medium">{item.date} • {item.institution}</p>
        </div>
      </header>

      <div className="text-gray-300 leading-relaxed relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={isExpanded ? "full" : "truncated"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="whitespace-pre-line">
              {isExpanded || !hasMore ? item.description : truncatedText}
            </p>
          </motion.div>
        </AnimatePresence>
        
        {hasMore && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-2 text-emerald-accent font-bold hover:text-emerald-400 transition-colors text-sm uppercase tracking-wider"
          >
            {isExpanded ? (
              <>
                Voir moins <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Lire la suite <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        )}
      </div>
    </motion.article>
  );
};

const Formation = () => {
  return (
    <section id="formation" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <span className="w-12 h-1 bg-emerald-accent"></span>
            FORMATION
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Education Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-emerald-accent" />
              Parcours Académique
            </h3>
            {educationData.map((item) => (
              <EducationItem key={item.id} item={item} />
            ))}
          </div>

          {/* Certifications Column */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-emerald-accent" />
              Certifications & Autodidaxie
            </h3>
            {certificationsData.map((cert) => (
              <article key={cert.id} className="bg-black/40 border border-gray-800 p-6 rounded-xl hover:border-emerald-accent/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold text-white">
                    {cert.link ? (
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-emerald-accent transition-colors flex items-center gap-2"
                      >
                        {cert.title}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      cert.title
                    )}
                  </h4>
                  <span className="text-xs font-mono text-emerald-accent bg-emerald-accent/10 px-2 py-1 rounded">{cert.date}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">
                  {cert.description}
                </p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
