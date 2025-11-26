import { motion } from 'framer-motion';
import { Terminal, Cpu, Flag } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 flex items-center gap-3">
              <span className="w-12 h-1 bg-emerald-accent"></span>
              À PROPOS
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                Je suis <strong className="text-white">Thomas Albert</strong>, développeur Fullstack passionné, toujours en quête de performance et de précision. Mon approche du développement est clairement influencée par mon goût pour l’optimisation — que ce soit dans une base de code… ou sur un circuit de F1.
              </p>
              <p>
                Autodidacte déterminé, j’ai construit ma stack autour de <span className="text-emerald-accent font-medium">React</span> et <span className="text-emerald-accent font-medium">Node.js</span>, avec un vrai souci de sécurité et d’architecture propre. J’aime aller droit au but, trouver des solutions efficaces et pousser mes projets un cran plus loin à chaque itération.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <article className="bg-forest-green/50 p-4 rounded-xl border border-emerald-accent/10 hover:border-emerald-accent/30 transition-colors">
                  <Flag className="text-emerald-accent mb-2 w-6 h-6" />
                  <h4 className="font-bold text-white mb-1">Passion F1</h4>
                  <p className="text-sm text-gray-400">Ferrari Fan • Toujours à la recherche du meilleur temps</p>
                </article>
                <article className="bg-forest-green/50 p-4 rounded-xl border border-emerald-accent/10 hover:border-emerald-accent/30 transition-colors">
                  <Cpu className="text-lime-accent mb-2 w-6 h-6" />
                  <h4 className="font-bold text-white mb-1">Optimisation</h4>
                  <p className="text-sm text-gray-400">TFT, FFXIV & Architecture propre</p>
                </article>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-accent to-lime-accent rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <article className="relative bg-dark-black border border-gray-800 rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Terminal className="w-32 h-32 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">Mon Mindset</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  { title: "Clean Code", desc: "Architecture lisible et maintenable." },
                  { title: "Sécurité", desc: "Protection des données et best practices." },
                  { title: "Performance", desc: "Optimisation des ressources et du rendu." },
                  { title: "Créativité", desc: "Innovation et recherche constante." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-accent/10 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-accent"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
