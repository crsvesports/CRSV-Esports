import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import crsvLogo from "@assets/principalgradiente_1768845957591.png";
// Shopping cart disabled - keep hook available in repo if needed
// import { useCart } from "@/hooks/use-cart";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  // Shopping cart disabled — do not call useCart here to avoid showing cart UI
  // const { items, total, removeItem, updateQuantity } = useCart();

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === "dark" ? "light" : "dark");

  const links = [
    { href: "/", label: "HOME" },
    { href: "/roster", label: "ROSTER" },
    { href: "/matches", label: "WARS" },
    // SHOP link disabled per request - keep as comment to allow easy re-enable
    // { href: "/shop", label: "SHOP" },
    { href: "/about", label: "ABOUT" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img src={crsvLogo} alt="CRSV Logo" className="h-10 w-10 object-contain group-hover:scale-110 transition-transform" />
          <span className="font-orbitron font-bold text-2xl tracking-widest text-foreground group-hover:text-primary transition-colors">
            CRSV
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`font-rajdhani font-semibold tracking-wider text-sm transition-colors hover:text-primary relative py-2 ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
              {location === link.href && (
                <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="hover:text-primary">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          
          {/* Shopping cart UI disabled - preserved in history for quick restore */}

          <Button 
            className="bg-primary hover:bg-red-700 text-white font-orbitron skew-x-[-10deg]"
            onClick={() => window.open("https://discord.gg/TX7WYMqu7c", "_blank")}
          >
            <span className="skew-x-[10deg]">JOIN US</span>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Mobile shopping cart disabled - preserved in history for quick restore */}

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon"><Menu className="h-6 w-6" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background/95 backdrop-blur-xl border-l border-white/10 w-full sm:w-80">
              <div className="flex flex-col gap-8 mt-12">
                {links.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href}
                    className="font-orbitron text-2xl font-bold hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-4 mt-4">
                  <Button variant="outline" size="icon" onClick={toggleTheme}>
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                  <Button className="flex-1 bg-primary text-white font-orbitron">
                    JOIN US
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
