import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Formation from './components/Formation';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import InteractiveBackground from './components/InteractiveBackground';

function App() {
  return (
    <div className="min-h-screen text-white selection:bg-emerald-accent selection:text-deep-green relative">
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
}

export default App;
