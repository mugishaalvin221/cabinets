import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Contact Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Let's Start Your <span className="text-primary italic">Transformation</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Have questions or ready to schedule a visit to our showroom? 
              Our team is here to help you every step of the way.
            </p>

            <div className="space-y-8">
              <a href="tel:+1234567890" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Call Us</h4>
                  <p className="text-xl font-bold text-foreground">+1 (234) 567-890</p>
                </div>
              </a>
              
              <a href="mailto:info@artisancabinets.com" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Email Us</h4>
                  <p className="text-xl font-bold text-foreground">info@artisancabinets.com</p>
                </div>
              </a>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Visit Us</h4>
                  <p className="text-xl font-bold text-foreground">123 Artisan Way, Design District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-muted rounded-2xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-1">Business Hours</h4>
                  <p className="text-xl font-bold text-foreground">Mon - Fri: 9am - 6pm | Sat: 10am - 4pm</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl"
          >
            {/* Placeholder for Map */}
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-black/20 backdrop-blur-[2px]">
                <MapPin className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Our Showroom</h3>
                <p className="text-white/80 max-w-xs">Come visit us and see our craftsmanship in person.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
