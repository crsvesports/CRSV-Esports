import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Roster from "@/components/home/Roster";
import { motion } from "framer-motion";

export default function RosterPage() {
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
        </motion.div>
        <Roster />
      </div>
      <Footer />
    </div>
  );
}
