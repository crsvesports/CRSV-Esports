import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Trophy, Users, Globe, Zap } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { icon: Trophy, label: "Major Titles", value: "12" },
    { icon: Users, label: "Active Pro Players", value: "24" },
    { icon: Globe, label: "Global Ranking", value: "#4" },
    { icon: Zap, label: "Community Members", value: "500k+" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-20">
        <section className="container mx-auto px-4 py-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-7xl font-orbitron font-black mb-8 italic">OUR <span className="text-primary">STORY</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-rajdhani text-xl leading-relaxed">
              <p className="text-muted-foreground">
                Founded in 2024, CRSV Esports was born from a desire to merge high-performance competition with a distinct, aggressive digital culture. We don't just play to win; we play to redefine the arena.
              </p>
              <p className="text-muted-foreground border-l-4 border-primary pl-8">
                Based on the principle of relentless evolution, our organization spans across Valorant, League of Legends, and CS2, fostering the next generation of digital athletes.
              </p>
            </div>
          </motion.div>
        </section>

        <section className="bg-secondary/30 py-20 my-12">
          <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                <div className="text-4xl font-orbitron font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-rajdhani uppercase tracking-widest text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-3xl font-orbitron font-bold mb-4">THE MISSION</h2>
              <div className="h-1 w-20 bg-primary mb-6" />
            </div>
            <div className="md:col-span-2 text-2xl font-rajdhani text-muted-foreground">
              To provide a platform where raw talent meets professional excellence. We empower our players with the best infrastructure, mental support, and technical training to dominate at the highest levels of play.
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
