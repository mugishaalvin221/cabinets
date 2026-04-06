import { motion } from "motion/react";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-display font-bold">
                Artisan<span className="text-accent">Cabinets</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium custom cabinetry for homeowners who value quality, craftsmanship, and timeless design. 
              Transforming spaces since 2011.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {["Kitchen Cabinets", "Wardrobes", "Office Cabinets", "Custom Designs", "Remodeling"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-400">123 Artisan Way, Design District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-400">+1 (234) 567-890</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-gray-400">info@artisancabinets.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Artisan Cabinets Premium. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 opacity-50">
            <span className="text-xs font-bold tracking-widest uppercase">Certified Craftsman</span>
            <span className="text-xs font-bold tracking-widest uppercase">Eco-Friendly Materials</span>
            <span className="text-xs font-bold tracking-widest uppercase">Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
