import { ROSTER } from "@/lib/data";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Roster() {
  return (
    <section className="py-24 bg-background relative overflow-hidden" id="roster">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-primary font-rajdhani tracking-[0.2em] font-bold mb-2">ACTIVE SQUAD</h2>
            <h3 className="text-4xl md:text-6xl font-orbitron font-black text-foreground">MEET THE <span className="text-outline-primary text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">ELITE</span></h3>
          </div>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/50 to-transparent mx-8 hidden md:block"></div>
          <p className="text-muted-foreground font-rajdhani max-w-sm text-right">
            Our active roster competing in top-tier tournaments globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROSTER.map((player, index) => (
            <motion.div
              key={player.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[400px] overflow-hidden rounded-sm border border-border bg-card/50 hover:border-primary/50 transition-colors"
            >
              <div className="absolute inset-0 z-0">
                <img 
                  src={player.image} 
                  alt={player.alias}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <Badge variant="destructive" className="font-rajdhani rounded-none px-2 uppercase text-xs">{player.game}</Badge>
                  <Badge variant="outline" className="font-rajdhani rounded-none px-2 uppercase text-xs bg-background/50 backdrop-blur-sm">{player.role}</Badge>
                </div>
                
                <h4 className="text-4xl font-orbitron font-black text-white italic group-hover:text-primary transition-colors">
                  {player.alias}
                </h4>
                <p className="text-lg font-rajdhani font-semibold text-gray-300 mb-4">{player.name}</p>
                
                <div className="h-[2px] w-0 group-hover:w-full bg-primary transition-all duration-500 ease-out" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
