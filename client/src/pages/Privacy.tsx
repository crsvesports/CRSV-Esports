import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-rajdhani">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-4xl py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl font-orbitron font-black mb-8">PRIVACY <span className="text-primary">POLICY</span></h1>
            <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-orbitron font-bold text-foreground mb-4">1. Data Collection</h2>
                <p>We collect minimal data necessary to provide our services, including account information and tournament participation data.</p>
              </section>
              <section>
                <h2 className="text-2xl font-orbitron font-bold text-foreground mb-4">2. Usage</h2>
                <p>Your data is used strictly for improving user experience and managing your participation in CRSV events and shop purchases.</p>
              </section>
              <section>
                <h2 className="text-2xl font-orbitron font-bold text-foreground mb-4">3. Protection</h2>
                <p>We implement industry-standard security measures to ensure your data remains confidential and protected from unauthorized access.</p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
