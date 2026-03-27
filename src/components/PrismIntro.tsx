import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PrismIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling during intro
    document.body.style.overflow = 'hidden';
    
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = '';
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          {/* Prism Background Effect */}
          <div className="absolute inset-0 prism-intro-bg"></div>

          {/* Subtle particle lines */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              transition={{ delay: 0.7, duration: 1.5 }}
              className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent"
            />
          </div>

          {/* Logo Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo Icon with glow */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 45 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-[0_0_60px_rgba(168,85,247,0.5)]"></div>
            </motion.div>

            {/* Logo Text */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-5xl tracking-[0.15em] gradient-text mb-3"
            >
              JewelLens
            </motion.h1>

            {/* Tagline with typing effect */}
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-gray-500 tracking-widest"
            >
              투명함을 켜다
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
