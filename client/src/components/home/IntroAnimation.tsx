import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import crsvLogo from "@assets/generated_images/crsv_esports_team_logo.png";
import fpsLogo from "@assets/generated_images/fps_game_icon.png";
import mobaLogo from "@assets/generated_images/moba_game_icon.png";
import brLogo from "@assets/generated_images/battle_royale_game_icon.png";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { time: 0, step: 0 },    // Team Logo
      { time: 1000, step: 1 }, // FPS (was 2000)
      { time: 1800, step: 2 }, // MOBA (was 3500)
      { time: 2600, step: 3 }, // BR (was 5000)
      { time: 3400, step: 4 }  // Finish (was 6500)
    ];

    sequence.forEach(({ time, step }) => {
      setTimeout(() => setStep(step), time);
    });

    setTimeout(onComplete, 4000); // was 7500
  }, [onComplete]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.3, type: "spring" as const } // was 0.5
    },
    exit: { 
      opacity: 0, 
      scale: 1.2, // was 1.5
      filter: "blur(10px)", // was 20px
      transition: { duration: 0.2 } // was 0.3
    }
  };

  const glitchVariants = {
    visible: {
      x: [0, -2, 2, -1, 1, 0],
      y: [0, 1, -1, 2, -2, 0],
      transition: { 
        repeat: Infinity, 
        repeatType: "mirror" as const, 
        duration: 0.2, 
        repeatDelay: 1 // was 3
      }
    }
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.6, ease: "circIn" } }} // was 0.8
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div key="team" variants={variants} initial="hidden" animate="visible" exit="exit" className="relative">
            <motion.img 
              src={crsvLogo} 
              alt="CRSV" 
              className="w-48 h-48 md:w-64 md:h-64 object-contain"
              variants={glitchVariants}
              animate="visible"
            />
            <motion.div 
              className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }} 
              transition={{ duration: 1, repeat: Infinity }} // was 2
            />
          </motion.div>
        )}

        {step === 1 && (
          <motion.div key="fps" variants={variants} initial="hidden" animate="visible" exit="exit">
             <img src={fpsLogo} alt="FPS" className="w-32 h-32 md:w-48 md:h-48 object-contain opacity-80" />
             <h2 className="text-center font-orbitron text-2xl mt-4 text-primary tracking-widest">TACTICAL</h2>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="moba" variants={variants} initial="hidden" animate="visible" exit="exit">
             <img src={mobaLogo} alt="MOBA" className="w-32 h-32 md:w-48 md:h-48 object-contain opacity-80" />
             <h2 className="text-center font-orbitron text-2xl mt-4 text-primary tracking-widest">STRATEGY</h2>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="br" variants={variants} initial="hidden" animate="visible" exit="exit">
             <img src={brLogo} alt="BR" className="w-32 h-32 md:w-48 md:h-48 object-contain opacity-80" />
             <h2 className="text-center font-orbitron text-2xl mt-4 text-primary tracking-widest">SURVIVAL</h2>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scanlines */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none animate-pulse"></div>
    </motion.div>
  );
}
