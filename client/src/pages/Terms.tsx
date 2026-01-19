import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-rajdhani">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-orbitron font-black mb-8">TERMS OF <span className="text-primary">SERVICE</span></h1>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-orbitron font-bold text-foreground mb-4">1. Acceptance</h2>
                <p>By accessing this website, you agree to be bound by these terms and all applicable laws and regulations.</p>
              </section>
              <section>
                <h2 className="text-2xl font-orbitron font-bold text-foreground mb-4">2. Usage License</h2>
                <p>Content on this site is owned by CRSV Esports. Unauthorized reproduction is strictly prohibited.</p>
              </section>
              <section>
                <h2 className="text-2xl font-orbitron font-bold text-foreground mb-4">3. Shop Policy</h2>
                <p>All purchases made through the CRSV shop are subject to our shipping and return policies as stated during checkout.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
