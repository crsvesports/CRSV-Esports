import { PRODUCTS } from "@/lib/data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function Shop() {
  const { addItem } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="py-24 bg-background relative" id="shop">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
          <h2 className="text-5xl font-orbitron font-black uppercase">
            Team <span className="text-stroke-primary text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/50">Store</span>
          </h2>
          <Link href="/shop">
            <Button variant="link" className="text-primary font-rajdhani text-lg hover:no-underline hover:opacity-80 p-0 w-fit">
              VIEW ALL PRODUCTS &rarr;
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-secondary/30 rounded-lg p-8 relative mb-4 overflow-hidden h-[300px] flex items-center justify-center border border-transparent group-hover:border-primary/30 transition-colors">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-500"
                />
                
                <div className="absolute top-4 right-4">
                  <span className="font-rajdhani font-bold bg-background/80 backdrop-blur text-foreground px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-0 right-0 flex justify-center translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                  <Button 
                    size="sm" 
                    className="bg-primary text-white font-orbitron gap-2 rounded-full shadow-lg shadow-primary/20"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingBag className="w-4 h-4" /> ADD TO CART
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-lg mb-1 truncate group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="font-rajdhani text-xl font-semibold text-muted-foreground">${product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
