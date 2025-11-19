import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              LET'S <span className="text-emerald-accent">TALK</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              À la recherche d'une alternance ou d'une collaboration ? 
              Je suis toujours partant pour discuter de projets innovants.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-emerald-accent/10 flex items-center justify-center text-emerald-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Email</p>
                  <a href="mailto:contact@thomasalbert.dev" className="text-white hover:text-emerald-accent transition-colors">
                    contact@thomasalbert.dev
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-emerald-accent/10 flex items-center justify-center text-emerald-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Localisation</p>
                  <p className="text-white">France</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-forest-green/30 p-8 rounded-3xl border border-emerald-accent/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold mb-2 text-emerald-accent uppercase tracking-wider">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-deep-green/50 border border-gray-700 rounded-lg p-4 text-white focus:border-emerald-accent focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold mb-2 text-emerald-accent uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-deep-green/50 border border-gray-700 rounded-lg p-4 text-white focus:border-emerald-accent focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold mb-2 text-emerald-accent uppercase tracking-wider">Message</label>
              <textarea 
                id="message" 
                rows="4"
                className="w-full bg-deep-green/50 border border-gray-700 rounded-lg p-4 text-white focus:border-emerald-accent focus:outline-none transition-colors"
                placeholder="Parlez-moi de votre projet..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full bg-emerald-accent text-deep-green font-bold py-4 rounded-lg hover:bg-emerald-400 transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Envoyer le message
            </button>
          </motion.form>
        </div>

        <div className="border-t border-white/5 mt-20 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Thomas Albert. Built with React & Tailwind.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
