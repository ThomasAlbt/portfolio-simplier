import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { CodeXml, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-deep-green/80 backdrop-blur-md py-4 shadow-lg border-b border-emerald-accent/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-emerald-accent/10 rounded-lg group-hover:bg-emerald-accent/20 transition-colors">
            <CodeXml className="text-emerald-accent w-8 h-8" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-accent transition-colors">
            THOMAS<span className="text-emerald-accent">.DEV</span>
          </span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                className="text-gray-300 hover:text-emerald-accent font-medium transition-colors relative group text-sm uppercase tracking-wider"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-accent transition-all group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white hover:text-emerald-accent transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-deep-green border-b border-emerald-accent/10"
        >
          <ul className="flex flex-col p-6 space-y-4">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block text-gray-300 hover:text-emerald-accent font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
