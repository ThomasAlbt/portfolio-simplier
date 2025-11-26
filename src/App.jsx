import Navbar from './components/layout/Navbar';
import InteractiveBackground from './components/layout/InteractiveBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Formation from './components/sections/Formation';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import LoadingScreen from './components/layout/LoadingScreen';
import ScrollProgress from './components/layout/ScrollProgress';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import useKonamiCode from './hooks/useKonamiCode';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isKonamiActive = useKonamiCode();

  useEffect(() => {
    // Check if mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window;

    if (isMobile) return; // Skip Lenis on mobile

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen text-white font-sans selection:bg-emerald-accent selection:text-deep-green overflow-x-hidden transition-all duration-500">
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {/* Konami Code Inversion Overlay */}
      <div className={`fixed inset-0 z-[100] pointer-events-none transition-all duration-500 ${isKonamiActive ? 'backdrop-invert' : ''}`} />
      
      {!isLoading && <ScrollProgress />}
      <InteractiveBackground />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Formation />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;
