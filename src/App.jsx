import Navbar from './components/layout/Navbar';
import InteractiveBackground from './components/layout/InteractiveBackground';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Formation from './components/sections/Formation';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';

const App = () => {
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
