import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import crsvLogo from "@assets/principalgradiente_1768845957591.png";

// ✅ IMPORTAR LOGOS DESDE /public
import fortniteLogo from "/fortnite.png";
import valorantLogo from "/valorant.png";
import rlLogo from "/rl.png";
import csgoLogo from "/csgo.png";

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const sequence = [
      { time: 0, step: 0 },    // Team Logo
      { time: 1000, step: 1 }, // Fortnite
      { time: 1200, step: 2 }, // Valorant
      { time: 2600, step: 3 }, // Rocket League
      { time: 3400, step: 4 }, // CS2
      { time: 4200, step: 5 }  // Finish
    ];

    sequence.forEach(({ time, step }) => {
      setTimeout(() => setStep(step), time);
    });

    setTimeout(onComplete, 4800);
  }, [onComplete]);

  const variants = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px)",
      transition: { duration: 0.3, type: "spring" as const }
    },
    exit: { 
      opacity: 0, 
      scale: 1.2, 
      filter: "blur(10px)",
      transition: { duration: 0.2 }
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
        repeatDelay: 1
      }
    }
  };

  // ✅ USAR IMPORTS, NO STRINGS
  const gameLogos = [
    { name: "FORTNITE", url: fortniteLogo },
    { name: "VALORANT", url: valorantLogo },
    { name: "ROCKET LEAGUE", url: rlLogo },
    { name: "CS2", url: csgoLogo }
  ];

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%", transition: { duration: 0.6, ease: "circIn" } }}
    >
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="team"
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative"
          >
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
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        )}

        {[1, 2, 3, 4].map(
          (i) =>
            step === i && (
              <motion.div
                key={`game-${i}`}
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-center"
              >
                <img
                  src={gameLogos[i - 1].url}
                  alt={gameLogos[i - 1].name}
                  className="w-32 h-32 md:w-48 md:h-48 object-contain brightness-0 invert opacity-80"
                />
                <h2 className="text-center font-orbitron text-2xl mt-8 text-primary tracking-[0.3em] font-black">
                  {gameLogos[i - 1].name}
                </h2>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none animate-pulse"></div>
    </motion.div>
  );
}
