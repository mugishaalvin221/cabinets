import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    comment: "The quality of the kitchen cabinets exceeded my expectations. The attention to detail is remarkable, and the installation was flawless.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Michael Chen",
    role: "Interior Designer",
    comment: "As a designer, I'm very picky about craftsmanship. Artisan Cabinets is my go-to for all custom projects. Their work is truly premium.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
  },
  {
    name: "Emily Davis",
    role: "Real Estate Agent",
    comment: "The custom wardrobe they built for my client's master suite added significant value to the home. Fast delivery and professional service.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Our <span className="text-primary italic">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it. Here's why homeowners and designers 
              trust us with their most important spaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-none shadow-xl rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-500">
                <CardContent className="p-8 relative">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-foreground mb-8 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent/20"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-20 flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold">Houzz</div>
          <div className="text-2xl font-bold">Angi</div>
          <div className="text-2xl font-bold">Yelp</div>
          <div className="text-2xl font-bold">Google Reviews</div>
        </div>
      </div>
    </section>
  );
}
