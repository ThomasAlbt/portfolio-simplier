import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const InteractiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  // Removed scroll-based transforms to prevent glitching


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Base Background */}
      <div className="absolute inset-0 bg-deep-green"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', 
             backgroundSize: '50px 50px' 
           }}>
      </div>

      {/* Floating Orbs (Automatic Movement) */}
      <motion.div 
        className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] bg-emerald-accent/10 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        // style={{ y: y1 }} // Removed parallax

      />
      
      <motion.div 
        className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] bg-lime-accent/5 rounded-full blur-[120px]"
        animate={{
          x: [0, -70, 30, 0],
          y: [0, 40, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        // style={{ y: y2 }} // Removed parallax

      />

      {/* Mouse Follower (PC Only) */}
      {!isMobile && (
        <>
          {/* Small Dot */}
          <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-emerald-accent rounded-full z-50 mix-blend-screen pointer-events-none"
            animate={{
              x: mousePosition.x - 6,
              y: mousePosition.y - 6,
            }}
            transition={{ type: 'tween', ease: 'linear', duration: 0 }}
          />
          {/* Larger Glow */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-emerald-accent/30 rounded-full z-50 pointer-events-none"
            animate={{
              x: mousePosition.x - 16,
              y: mousePosition.y - 16,
            }}
            transition={{ type: 'spring', damping: 20, stiffness: 200, mass: 0.5 }}
          />
        </>
      )}
    </div>
  );
};

export default InteractiveBackground;
