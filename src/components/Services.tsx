import { motion } from "motion/react";
import { ChefHat, DoorOpen, Briefcase, PencilRuler, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Kitchen Cabinets",
    description: "Custom-built kitchen solutions that maximize space and enhance your culinary experience.",
    icon: ChefHat,
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Wardrobes",
    description: "Elegant and organized bedroom storage designed to fit your unique style and needs.",
    icon: DoorOpen,
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Office Cabinets",
    description: "Professional workspace solutions that combine productivity with sophisticated aesthetics.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Custom Designs",
    description: "Unique, one-of-a-kind pieces tailored specifically to your vision and home architecture.",
    icon: PencilRuler,
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=600",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Exceptional Solutions for <br /> <span className="text-primary">Every Room</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From contemporary minimalism to classic elegance, we provide a wide range of 
              cabinetry services designed to elevate your living spaces.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/0 transition-colors duration-500" />
                  <div className="absolute top-4 left-4 p-3 bg-white rounded-xl shadow-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0 h-auto text-primary font-bold group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
