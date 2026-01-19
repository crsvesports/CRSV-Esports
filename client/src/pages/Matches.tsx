import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Matches from "@/components/home/Matches";
import { motion } from "framer-motion";
import { MATCHES } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { format } from "date-fns";

export default function MatchesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-12"
        >
          <h1 className="text-6xl font-orbitron font-black mb-4">BATTLE <span className="text-primary">LOGS</span></h1>
          <p className="text-muted-foreground font-rajdhani text-xl max-w-2xl mb-12 border-l-2 border-primary pl-6">
            Every clash, every victory, and every lesson. Tracking the competitive journey of CRSV across all titles.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-orbitron font-bold mb-6 text-primary">FULL REGISTRY</h2>
            {MATCHES.map((match, index) => (
              <motion.div
                key={match.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex flex-col md:flex-row items-center bg-card border border-border p-6 rounded-sm group"
              >
                <div className="flex-1 flex items-center justify-between w-full md:w-auto gap-8">
                  <div className="flex items-center gap-4">
                    <span className="font-orbitron font-bold">CRSV</span>
                    <span className="text-primary font-black">VS</span>
                    <span className="font-orbitron font-bold">{match.opponent}</span>
                  </div>
                  <Badge variant="outline" className="font-rajdhani">{match.game}</Badge>
                </div>
                <div className="flex items-center gap-8 mt-4 md:mt-0 md:ml-8">
                  <span className="text-sm text-muted-foreground font-rajdhani flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> {format(new Date(match.date), "MMM d, yyyy")}
                  </span>
                  <Badge className="font-orbitron uppercase">{match.status}</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
