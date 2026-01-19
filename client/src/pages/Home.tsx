import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Roster from "@/components/home/Roster";
import Matches from "@/components/home/Matches";
import Shop from "@/components/home/Shop";
import Footer from "@/components/layout/Footer";
import IntroAnimation from "@/components/home/IntroAnimation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <IntroAnimation onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <div className={`min-h-screen bg-background text-foreground overflow-x-hidden ${loading ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        
        <main>
          <Hero />
          <Roster />
          <Matches />
          <Shop />
          
          {/* About/CTA Section */}
          <section className="py-24 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8">JOIN THE LEGACY</h2>
              <p className="font-rajdhani text-xl max-w-2xl mx-auto mb-10 opacity-90">
                Are you ready to elevate your game? Join our community, participate in tournaments, and become part of the CRSV family.
              </p>
              <button className="bg-white text-primary font-orbitron font-bold text-xl py-4 px-12 skew-x-[-10deg] hover:scale-105 transition-transform">
                <span className="skew-x-[10deg] block">BECOME A MEMBER</span>
              </button>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
