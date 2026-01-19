import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ROSTER } from "@/lib/data";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function RosterPage() {
  const [flippedId, setFlippedId] = useState<number | null>(null);
  
  // Group players by game
  const games = ["Fortnite", "Valorant", "Rocket League", "CS2"];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-12"
        >
          <h1 className="text-6xl font-orbitron font-black mb-4">THE <span className="text-primary">ROSTER</span></h1>
          <p className="text-muted-foreground font-rajdhani text-xl max-w-2xl mb-12 border-l-2 border-primary pl-6">
            Meet the elite individuals who define the CRSV legacy. Our athletes are scouted from the top ranks of global competitive play.
          </p>

          {games.map((game) => (
            <div key={game} className="mb-20">
              <h2 className="text-3xl font-orbitron font-bold text-primary mb-8 border-b border-primary/20 pb-2 uppercase tracking-tighter">
                {game}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ROSTER.filter(p => p.game === game).map((player) => (
                  <div
                    key={player.id}
                    className="group perspective-1000 h-[400px] cursor-pointer"
                    onClick={() => setFlippedId(flippedId === player.id ? null : player.id)}
                  >
                    <motion.div
                      initial={false}
                      animate={{ rotateY: flippedId === player.id ? 180 : 0 }}
                      transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                      className="relative w-full h-full preserve-3d"
                    >
                      {/* Front */}
                      <div className="absolute inset-0 backface-hidden rounded-sm border border-border bg-card/50 overflow-hidden">
                        <div className="absolute inset-0 z-0">
                          <img 
                            src={player.image} 
                            alt={player.alias}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="destructive" className="font-rajdhani rounded-none px-2 uppercase text-xs">{player.role}</Badge>
                          </div>
                          <h4 className="text-3xl font-orbitron font-black text-white italic group-hover:text-primary transition-colors uppercase">
                            {player.alias}
                          </h4>
                          <p className="text-sm font-rajdhani font-semibold text-gray-400">{player.name}</p>
                        </div>
                      </div>

                      {/* Back */}
                      <div className="absolute inset-0 backface-hidden rounded-sm border border-primary/50 bg-card p-6 flex flex-col justify-center items-center text-center rotate-y-180">
                        <h4 className="text-xl font-orbitron font-bold text-primary mb-2 uppercase">{player.alias}</h4>
                        <p className="text-muted-foreground font-rajdhani text-sm leading-relaxed mb-4 italic">
                          "{player.bio}"
                        </p>
                        <div className="w-full text-xs font-rajdhani space-y-2">
                          <div className="p-2 border border-border bg-secondary/20 flex justify-between">
                            <span className="text-primary font-bold uppercase">Role</span>
                            <span>{player.role}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
