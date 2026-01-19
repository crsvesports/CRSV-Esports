import { MATCHES } from "@/lib/data";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Matches() {
  return (
    <section className="py-24 bg-secondary/20 relative" id="matches">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <Badge variant="outline" className="mb-4 font-rajdhani tracking-widest border-primary/50 text-primary uppercase py-1 px-4">Battle History</Badge>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4">RECENT <span className="text-primary">WARS</span></h2>
          <p className="text-muted-foreground max-w-2xl font-rajdhani">
            Track our journey through the competitive landscape. Every match writes history.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-5xl mx-auto">
          {MATCHES.slice(0, 4).map((match, index) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center bg-card border border-border hover:border-primary/50 p-6 rounded-sm transition-all hover:translate-x-2 group relative overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />
              
              <div className="flex-1 flex items-center justify-between w-full md:w-auto gap-8 mb-6 md:mb-0">
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="block font-orbitron font-bold text-xl">CRSV</span>
                    <span className="text-xs text-muted-foreground font-rajdhani uppercase">Home</span>
                  </div>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                     <span className="font-orbitron font-bold text-primary">C</span>
                  </div>
                </div>

                <div className="flex flex-col items-center px-4">
                   <div className="text-2xl font-black font-orbitron text-foreground/20 group-hover:text-primary/50 transition-colors">VS</div>
                   <span className="text-xs font-rajdhani text-muted-foreground uppercase mt-1">{match.game}</span>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center overflow-hidden border border-border">
                     <img src={match.logo} alt={match.opponent} className="w-8 h-8 object-contain opacity-70" />
                  </div>
                  <div className="text-left">
                    <span className="block font-orbitron font-bold text-xl">{match.opponent}</span>
                    <span className="text-xs text-muted-foreground font-rajdhani uppercase">Away</span>
                  </div>
                </div>
              </div>

              <div className="h-px w-full md:w-px md:h-12 bg-border mx-6 my-4 md:my-0" />

              <div className="flex items-center gap-8 min-w-[300px] justify-between md:justify-end w-full md:w-auto">
                <div className="flex flex-col">
                  <span className="flex items-center gap-2 text-sm text-muted-foreground font-rajdhani">
                    <Calendar className="w-4 h-4" /> {format(new Date(match.date), "MMM d, HH:mm")}
                  </span>
                  <span className="text-xs text-muted-foreground/50 font-rajdhani uppercase tracking-wider">Tournament Stage 2</span>
                </div>

                <Badge 
                  className={`
                    font-orbitron text-sm py-1 px-4 rounded-sm
                    ${match.status.includes("WON") ? "bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20" : ""}
                    ${match.status.includes("LOST") ? "bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20" : ""}
                    ${match.status === "LIVE" ? "bg-primary text-white animate-pulse" : ""}
                    ${match.status === "UPCOMING" ? "bg-secondary text-foreground" : ""}
                  `}
                  variant="outline"
                >
                  {match.status}
                </Badge>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <Link href="/matches">
             <Button variant="outline" className="font-orbitron tracking-widest hover:text-primary hover:border-primary">VIEW FULL SCHEDULE</Button>
           </Link>
        </div>
      </div>
    </section>
  );
}
