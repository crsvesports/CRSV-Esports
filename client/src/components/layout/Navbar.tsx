import { Link, useLocation } from "wouter";
import { Moon, Sun, Menu, ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";
import crsvLogo from "@assets/generated_images/crsv_esports_team_logo.png";
import { useCart } from "@/hooks/use-cart";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { items, total, removeItem, updateQuantity } = useCart();

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
    { href: "/shop", label: "SHOP" },
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
          
          {/* Shopping Cart Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="relative hover:text-primary">
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-[10px] text-white rounded-full flex items-center justify-center font-bold">
                    {items.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background/95 backdrop-blur-xl border-l border-white/10 flex flex-col h-full">
              <SheetHeader className="pb-6">
                <SheetTitle className="font-orbitron text-2xl tracking-tight">YOUR <span className="text-primary">CART</span></SheetTitle>
              </SheetHeader>
              
              <ScrollArea className="flex-1 -mx-6 px-6">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-muted-foreground py-20">
                    <ShoppingCart className="h-12 w-12 mb-4 opacity-20" />
                    <p className="font-rajdhani text-lg">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={item.id} className="flex gap-4">
                        <div className="h-20 w-20 bg-secondary/50 rounded flex-shrink-0">
                          <img src={item.image} alt={item.name} className="h-full w-full object-contain p-2" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-orbitron text-sm font-bold line-clamp-1">{item.name}</h4>
                          <p className="font-rajdhani text-primary font-bold mb-2">${item.price}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-white/10 rounded overflow-hidden">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="px-2 py-1 hover:bg-primary/20 transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-3 py-1 text-sm font-bold">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="px-2 py-1 hover:bg-primary/20 transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ScrollArea>

              {items.length > 0 && (
                <div className="pt-6 border-t border-white/10 space-y-4">
                  <div className="flex justify-between items-end font-orbitron">
                    <span className="text-muted-foreground text-sm uppercase">Subtotal</span>
                    <span className="text-2xl font-black">${total.toFixed(2)}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-red-700 text-white font-orbitron h-14 skew-x-[-10deg]">
                    <span className="skew-x-[10deg]">CHECKOUT</span>
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>

          <Button 
            className="bg-primary hover:bg-red-700 text-white font-orbitron skew-x-[-10deg]"
            onClick={() => window.open("https://discord.gg/TX7WYMqu7c", "_blank")}
          >
            <span className="skew-x-[10deg]">JOIN US</span>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Simplified Mobile Cart for brevity */}
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {items.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
               {/* Content matches desktop for consistency */}
            </SheetContent>
          </Sheet>

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
