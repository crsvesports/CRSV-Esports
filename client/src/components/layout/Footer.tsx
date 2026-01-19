import { Facebook, Twitter, Instagram, Youtube, Twitch, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-orbitron text-3xl font-bold text-white mb-6">CRSV</h2>
            <p className="text-gray-400 font-rajdhani mb-6">
              Dominating the arena since 2024. We are the future of competitive gaming.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Youtube, Twitch].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-lg font-bold text-white mb-6">EXPLORE</h3>
            <ul className="space-y-4 font-rajdhani text-gray-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/roster" className="hover:text-primary transition-colors">Team Roster</Link></li>
              <li><Link href="/matches" className="hover:text-primary transition-colors">Match Schedule</Link></li>
              <li><Link href="/shop" className="hover:text-primary transition-colors">Official Shop</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">News & Stories</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-lg font-bold text-white mb-6">PARTNERS</h3>
            <ul className="space-y-4 font-rajdhani text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Logitech G</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Red Bull</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Intel</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Secretlab</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-lg font-bold text-white mb-6">STAY UPDATED</h3>
            <p className="text-gray-400 font-rajdhani mb-4">Subscribe to our newsletter for the latest updates.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-white/5 border border-white/10 rounded-sm px-4 py-2 font-rajdhani text-white w-full focus:outline-none focus:border-primary"
              />
              <Button size="icon" className="bg-primary rounded-sm">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-rajdhani">
          <p>&copy; 2024 CRSV Esports. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
