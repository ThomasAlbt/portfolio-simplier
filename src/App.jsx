import Navbar from './components/layout/Navbar';
import InteractiveBackground from './components/layout/InteractiveBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Formation from './components/sections/Formation';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import { useEffect } from 'react';
import Lenis from 'lenis';

const App = () => {
  useEffect(() => {
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
    <div className="min-h-screen text-white font-sans selection:bg-emerald-accent selection:text-deep-green overflow-x-hidden">
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
