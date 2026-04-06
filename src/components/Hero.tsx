import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070"
          alt="Premium Kitchen Cabinets"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-accent uppercase bg-accent/10 border border-accent/20 rounded-full">
              Premium Custom Cabinetry
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
              Crafting Your <span className="text-accent italic">Dream Kitchen</span> with Precision
            </h1>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
              Elevate your home with bespoke cabinets designed for durability, style, and functionality. 
              Experience the perfect blend of traditional craftsmanship and modern design.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-7 rounded-xl">
                Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 py-7 rounded-xl">
                View Our Work
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                </div>
                <span className="text-sm font-medium">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-white/10 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Lifetime Warranty</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="p-2 bg-white/10 rounded-lg">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium">Fast Turnaround</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
