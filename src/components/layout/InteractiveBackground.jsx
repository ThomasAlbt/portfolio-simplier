import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const InteractiveBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Smooth springs for the larger glow
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(mouseX, springConfig);
  const glowY = useSpring(mouseY, springConfig);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      // Center the values relative to the cursor
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, [mouseX, mouseY]);

  // Transform for the small dot (immediate follow)
  const dotX = useTransform(mouseX, (x) => x - 6);
  const dotY = useTransform(mouseY, (y) => y - 6);

  // Transform for the larger glow (spring follow)
  const largeGlowX = useTransform(glowX, (x) => x - 16);
  const largeGlowY = useTransform(glowY, (y) => y - 16);

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

      {/* Floating Orbs (Automatic Movement) - Desktop Only */}
      {!isMobile ? (
        <>
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
          />
        </>
      ) : (
        /* Mobile Static Background - Cheaper rendering */
        <>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-emerald-accent/5 to-transparent opacity-50" />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-lime-accent/5 to-transparent opacity-50" />
        </>
      )}

      {/* Mouse Follower (PC Only) */}
      {!isMobile && (
        <>
          {/* Small Dot */}
          <motion.div
            className="fixed top-0 left-0 w-3 h-3 bg-emerald-accent rounded-full z-50 mix-blend-screen pointer-events-none"
            style={{
              x: dotX,
              y: dotY,
            }}
          />
          {/* Larger Glow */}
          <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-emerald-accent/30 rounded-full z-50 pointer-events-none"
            style={{
              x: largeGlowX,
              y: largeGlowY,
            }}
          />
        </>
      )}
    </div>
  );
};

export default InteractiveBackground;
