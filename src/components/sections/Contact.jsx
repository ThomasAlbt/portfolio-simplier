import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, MapPin, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Fake loading delay of 200ms for UX
      await new Promise(resolve => setTimeout(resolve, 200));

      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey || 
          serviceId.includes('YOUR_') || templateId.includes('YOUR_') || publicKey.includes('YOUR_')) {
        throw new Error("Configuration EmailJS manquante. Veuillez vérifier le fichier .env");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Thomas Albert",
        },
        publicKey
      );

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              LET'S <span className="text-emerald-accent">TALK</span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              À la recherche d'une alternance ou d'une collaboration ? 
              Je suis toujours partant pour discuter de projets innovants.
            </p>

            <address className="space-y-6 not-italic">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-emerald-accent/10 flex items-center justify-center text-emerald-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Email</p>
                  <a href="mailto:thomas.albert.jv@gmail.com" className="text-white hover:text-emerald-accent transition-colors">
                    thomas.albert.jv@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-12 h-12 rounded-full bg-emerald-accent/10 flex items-center justify-center text-emerald-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase">Localisation</p>
                  <p className="text-white">Barr 67140, France</p>
                </div>
              </div>
            </address>
          </motion.div>

          <motion.form 
            ref={formRef}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-forest-green/30 p-8 rounded-3xl border border-emerald-accent/10 relative"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold mb-2 text-emerald-accent uppercase tracking-wider">Nom</label>
                <input 
                  type="text" 
                  name="name"
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-deep-green/50 border border-gray-700 rounded-lg p-4 text-white focus:border-emerald-accent focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold mb-2 text-emerald-accent uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  name="email"
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-deep-green/50 border border-gray-700 rounded-lg p-4 text-white focus:border-emerald-accent focus:outline-none transition-colors"
                  placeholder="thomas.albert.jv@gmail.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-bold mb-2 text-emerald-accent uppercase tracking-wider">Message</label>
              <textarea 
                name="message"
                id="message" 
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-deep-green/50 border border-gray-700 rounded-lg p-4 text-white focus:border-emerald-accent focus:outline-none transition-colors"
                placeholder="Parlez-moi de votre projet..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-emerald-accent text-deep-green font-bold py-4 rounded-lg hover:bg-emerald-400 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Envoyer le message
                </>
              )}
            </button>

            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-0 bg-deep-green/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-center p-6 border border-emerald-accent/20"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-accent/20 flex items-center justify-center mb-4 text-emerald-accent">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-300">Je vous répondrai dans les plus brefs délais.</p>
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute inset-x-0 bottom-0 m-4 bg-red-500/10 backdrop-blur-sm rounded-xl p-4 border border-red-500/20 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <p className="text-red-200 text-sm">{error}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>

        <footer className="border-t border-white/5 mt-20 pt-8 text-center">
          <p className="text-gray-500 text-sm mb-2">
            &copy; {new Date().getFullYear()} Thomas Albert. Built with React & Tailwind.
          </p>
          <p className="text-[24px] text-white/10 font-mono select-none hover:text-emerald-accent/50 transition-colors duration-300">
            ↑ ↑ ↓ ↓ ← → ← → B A
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
