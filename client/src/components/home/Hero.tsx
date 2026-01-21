import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import crsvLogo from "@assets/principalgradiente_1768845957591.png";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]"
          alt="Esports Arena"
        />
      </div>

      <div className="container mx-auto px-4 z-20 relative pt-20">
        <div className="max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="h-[1px] w-12 bg-primary"></span>
            <span className="font-rajdhani text-primary tracking-[0.3em] font-bold">EST. 2020</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black font-orbitron leading-[0.9] text-foreground mb-8"
          >
            JOIN THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-900">LEGACY</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-muted-foreground text-lg md:text-xl font-rajdhani max-w-xl mb-10 leading-relaxed"
          >
            We are CRSV. A collective of elite competitors dominating the digital arena. 
            Join the movement and witness the evolution of esports.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-6"
          >
            <Link href="/roster">
              <Button size="lg" className="bg-primary hover:bg-red-700 text-white font-orbitron text-lg px-8 h-14 skew-x-[-10deg]">
                <span className="skew-x-[10deg] flex items-center gap-2">
                  EXPLORE TEAM <ArrowRight className="w-5 h-5" />
                </span>
              </Button>
            </Link>
            
            <Link href="/highlights">
              <Button size="lg" variant="outline" className="border-white/20 hover:border-primary text-foreground font-orbitron text-lg px-8 h-14 skew-x-[-10deg] backdrop-blur-sm">
                <span className="skew-x-[10deg] flex items-center gap-2">
                  <Play className="w-5 h-5 fill-current" /> WATCH HIGHLIGHTS
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-1/3 z-10 hidden lg:block"
      >
        <img src={crsvLogo} alt="Floating Logo" className="w-96 h-96 object-contain opacity-20 drop-shadow-[0_0_30px_rgba(255,0,0,0.3)]" />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] tracking-[0.2em] text-muted-foreground font-rajdhani">SCROLL DOWN</span>
        <motion.div 
          animate={{ height: [0, 40, 0], y: [0, 10, 20] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-[1px] bg-primary"
        />
      </motion.div>
    </section>
  );
}
