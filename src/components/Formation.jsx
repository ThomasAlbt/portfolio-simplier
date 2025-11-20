import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GraduationCap, ChevronDown, ChevronUp } from 'lucide-react';

const Formation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
  
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?`;

  const truncatedText = fullText.substring(0, 150) + "...";

  return (
    <section id="formation" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 flex items-center gap-3">
            <span className="w-12 h-1 bg-emerald-accent"></span>
            FORMATION
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-forest-green/30 border border-emerald-accent/10 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-emerald-accent/10 rounded-xl text-emerald-accent">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Parcours Académique</h3>
                <p className="text-emerald-accent text-sm font-medium">2020 - Présent</p>
              </div>
            </div>

            <div className="text-gray-300 leading-relaxed relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isExpanded ? "full" : "truncated"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p>
                    {isExpanded ? fullText : truncatedText}
                  </p>
                </motion.div>
              </AnimatePresence>
              
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
            </div>
          </motion.div>

          {/* Placeholder for certifications or other details */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="space-y-6"
          >
            <div className="bg-black/40 border border-gray-800 p-6 rounded-xl hover:border-emerald-accent/30 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Autodidacte Passionné</h4>
              <p className="text-gray-400 text-sm">
                Apprentissage continu via documentation officielle, projets personnels et veille technologique active.
              </p>
            </div>
            
            <div className="bg-black/40 border border-gray-800 p-6 rounded-xl hover:border-emerald-accent/30 transition-colors">
              <h4 className="text-lg font-bold text-white mb-2">Certifications</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-accent rounded-full"></span>
                  En cours d'acquisition...
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Formation;
