import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function PrismIntro() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fade out after 2.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
          {/* Prism Background Effect */}
          <div className="absolute inset-0 prism-intro-bg"></div>

          {/* Logo Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeIn" }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Logo Icon */}
            <div className="intro-logo-icon mb-6"></div>

            {/* Logo Text */}
            <h1 className="text-5xl tracking-[0.125em] gradient-text mb-3">
              JewelLens
            </h1>

            {/* Tagline */}
            <p className="text-xl text-gray-400">투명함을 켜다</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
