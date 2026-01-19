import { ROSTER } from "@/lib/data";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Roster() {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  return (
    <section className="py-24 bg-background relative overflow-hidden" id="roster">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-primary font-rajdhani tracking-[0.2em] font-bold mb-2">ACTIVE SQUAD</h2>
            <h3 className="text-4xl md:text-6xl font-orbitron font-black text-foreground">MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">ELITE</span></h3>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent mx-8 hidden md:block"></div>
          <p className="text-muted-foreground font-rajdhani max-w-sm text-right">
            Our active roster competing in top-tier tournaments globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROSTER.slice(0, 6).map((player, index) => (
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
                      <Badge variant="destructive" className="font-rajdhani rounded-none px-2 uppercase text-xs">{player.game}</Badge>
                      <Badge variant="outline" className="font-rajdhani rounded-none px-2 uppercase text-xs bg-background/50 backdrop-blur-sm">{player.role}</Badge>
                    </div>
                    <h4 className="text-4xl font-orbitron font-black text-white italic group-hover:text-primary transition-colors uppercase">
                      {player.alias}
                    </h4>
                    <p className="text-lg font-rajdhani font-semibold text-gray-300 mb-4">{player.name}</p>
                    <div className="h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500 ease-out" />
                  </div>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden rounded-sm border border-primary/50 bg-card p-8 flex flex-col justify-center items-center text-center rotate-y-180">
                  <h4 className="text-2xl font-orbitron font-bold text-primary mb-4 uppercase">{player.alias}</h4>
                  <p className="text-muted-foreground font-rajdhani text-lg leading-relaxed mb-6 italic">
                    "{player.bio}"
                  </p>
                  <div className="grid grid-cols-2 gap-4 w-full text-sm font-rajdhani">
                    <div className="p-2 border border-border bg-secondary/20">
                      <span className="block text-primary font-bold uppercase">Game</span>
                      <span>{player.game}</span>
                    </div>
                    <div className="p-2 border border-border bg-secondary/20">
                      <span className="block text-primary font-bold uppercase">Role</span>
                      <span>{player.role}</span>
                    </div>
                  </div>
                  <p className="mt-8 text-xs text-muted-foreground uppercase tracking-widest">Click to flip back</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
