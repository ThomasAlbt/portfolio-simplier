import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-20">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-emerald-accent/30 bg-emerald-accent/5 backdrop-blur-sm">
            <span className="text-emerald-accent text-sm font-medium tracking-wide uppercase flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse"></span>
              Disponible pour une alternance
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-tight">
            THOMAS ALBERT
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-400">
              FULLSTACK DEV
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Je conçois des expériences numériques performantes et sécurisées.
            <br />
            Expertise en <span className="text-white font-medium">React</span> & <span className="text-white font-medium">PHP</span>.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-emerald-accent text-deep-green font-bold py-3 px-8 rounded-lg hover:bg-emerald-400 transition-colors flex items-center gap-2"
            >
              Voir mes projets
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <div className="flex gap-4">
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, color: '#10b981' }}
                className="p-3 bg-white/5 rounded-lg text-gray-400 hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                whileHover={{ scale: 1.1, color: '#10b981' }}
                className="p-3 bg-white/5 rounded-lg text-gray-400 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
