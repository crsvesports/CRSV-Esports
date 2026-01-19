import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function HighlightsPage() {
  const highlights = [
    { id: "1", title: "CRSV vs Team Liquid - Grand Finals Highlights", thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop", duration: "10:24", views: "1.2M" },
    { id: "2", title: "NIGHTMARE's Insane 1v5 Ace | Valorant Masters", thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop", duration: "05:15", views: "850K" },
    { id: "3", title: "CRSV LoL - Best Teamfights of the Season", thumbnail: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?q=80&w=2070&auto=format&fit=crop", duration: "15:40", views: "420K" },
    { id: "4", title: "REAPER - The Best AWPer in the World?", thumbnail: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2070&auto=format&fit=crop", duration: "08:12", views: "1.1M" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 py-12"
        >
          <h1 className="text-6xl font-orbitron font-black mb-4">MATCH <span className="text-primary">HIGHLIGHTS</span></h1>
          <p className="text-muted-foreground font-rajdhani text-xl max-w-2xl mb-12 border-l-2 border-primary pl-6">
            Relive the most intense moments and legendary plays from our competitive history.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg border border-border group-hover:border-primary transition-colors">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 text-xs font-rajdhani rounded">{video.duration}</div>
                </div>
                <h3 className="mt-4 font-orbitron font-bold group-hover:text-primary transition-colors line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground font-rajdhani mt-1">{video.views} views • 2 weeks ago</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
