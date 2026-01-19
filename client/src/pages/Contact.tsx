import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We've received your message and will get back to you soon!",
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-6xl font-orbitron font-black mb-6">CONTACT <span className="text-primary">US</span></h1>
              <p className="text-muted-foreground font-rajdhani text-xl mb-12 border-l-2 border-primary pl-6">
                Have a question? Interested in partnership? Or just want to say hi? We're always looking for new legends to connect with.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold uppercase text-sm text-primary">Email Us</h4>
                    <p className="font-rajdhani text-lg">contact@crsv.gg</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center border border-primary/20">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-orbitron font-bold uppercase text-sm text-primary">Headquarters</h4>
                    <p className="font-rajdhani text-lg">Berlin, Germany</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card border border-border p-8 rounded-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-orbitron text-xs uppercase text-muted-foreground">Name</label>
                    <Input placeholder="Your Name" className="font-rajdhani bg-secondary/20" required />
                  </div>
                  <div className="space-y-2">
                    <label className="font-orbitron text-xs uppercase text-muted-foreground">Email</label>
                    <Input type="email" placeholder="email@example.com" className="font-rajdhani bg-secondary/20" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-orbitron text-xs uppercase text-muted-foreground">Subject</label>
                  <Input placeholder="How can we help?" className="font-rajdhani bg-secondary/20" required />
                </div>
                <div className="space-y-2">
                  <label className="font-orbitron text-xs uppercase text-muted-foreground">Message</label>
                  <Textarea placeholder="Type your message here..." className="font-rajdhani bg-secondary/20 min-h-[150px]" required />
                </div>
                <Button type="submit" className="w-full font-orbitron tracking-widest bg-primary hover:bg-primary/90 text-white py-6">
                  <Send className="w-4 h-4 mr-2" /> SEND MESSAGE
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
