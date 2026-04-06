import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Custom Design Consultations",
  "Premium Sustainably Sourced Wood",
  "Expert Installation Team",
  "State-of-the-Art Workshop",
];

export function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581578731522-745505146317?auto=format&fit=crop&q=80&w=1000"
                alt="Our Workshop"
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-0" />
            
            <div className="absolute bottom-10 left-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground leading-tight">
                  Years of <br /> Excellence
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Legacy of Craftsmanship & <span className="text-primary">Timeless Design</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Founded on the principles of quality and integrity, Artisan Cabinets has been 
              transforming homes for over 15 years. We believe that every cabinet tells a story 
              of craftsmanship, from the initial sketch to the final installation.
            </p>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Our team of master craftsmen uses only the finest materials, ensuring that 
              your custom cabinetry is not just beautiful, but built to last a lifetime.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                  <span className="font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
