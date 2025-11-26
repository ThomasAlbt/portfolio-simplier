import { motion } from 'framer-motion';
import { CodeXml } from 'lucide-react';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("INITIALIZING SYSTEM");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Increment faster to reach 100% quickly (approx 400ms total)
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      setText("RENDER COMPLETE");
      setTimeout(onComplete, 200);
    } else if (progress > 70) {
      setText("HYDRATING DOM");
    } else if (progress > 40) {
      setText("FETCHING ASSETS");
    } else {
      setText("RESOLVING DNS");
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-deep-green flex flex-col items-center justify-center"
      exit={{ 
        opacity: 0,
        y: -50,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-[0.02]" 
           style={{ 
             backgroundImage: 'linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Icon Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 relative"
        >
          <div className="absolute inset-0 bg-emerald-accent/20 blur-2xl rounded-full animate-pulse"></div>
          <CodeXml className="w-20 h-20 text-emerald-accent" />
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 h-2 bg-forest-green border border-emerald-accent/20 rounded-full overflow-hidden mb-4 relative">
          <motion.div
            className="h-full bg-emerald-accent shadow-[0_0_15px_#10b981]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Text & Percentage */}
        <div className="flex justify-between w-64 text-xs font-mono tracking-widest">
          <motion.span 
            key={text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-emerald-accent"
          >
            {text}
          </motion.span>
          <span className="text-lime-accent">{Math.min(progress, 100)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
