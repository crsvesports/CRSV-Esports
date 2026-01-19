import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Matches from "@/components/home/Matches";
import { motion } from "framer-motion";

export default function MatchesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-12"
        >
          <h1 className="text-6xl font-orbitron font-black mb-4">BATTLE <span className="text-primary">LOGS</span></h1>
          <p className="text-muted-foreground font-rajdhani text-xl max-w-2xl mb-12 border-l-2 border-primary pl-6">
            Every clash, every victory, and every lesson. Tracking the competitive journey of CRSV across all titles.
          </p>
        </motion.div>
        <Matches />
      </div>
      <Footer />
    </div>
  );
}
