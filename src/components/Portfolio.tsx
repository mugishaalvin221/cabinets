import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, ArrowRight } from "lucide-react";

const categories = ["All", "Kitchen", "Bedroom", "Office"];

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=800",
    description: "Sleek white cabinetry with integrated appliances.",
  },
  {
    id: 2,
    title: "Classic Oak Wardrobe",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    description: "Traditional oak finish with custom interior organizers.",
  },
  {
    id: 3,
    title: "Executive Home Office",
    category: "Office",
    image: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800",
    description: "Dark walnut desk and shelving unit for productivity.",
  },
  {
    id: 4,
    title: "Luxury Island Kitchen",
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800",
    description: "Spacious island with marble countertops and gold accents.",
  },
  {
    id: 5,
    title: "Built-in Library",
    category: "Office",
    image: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800",
    description: "Floor-to-ceiling bookshelves with integrated lighting.",
  },
  {
    id: 6,
    title: "Walk-in Closet",
    category: "Bedroom",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800",
    description: "Bespoke storage solution for a luxury master suite.",
  },
];

export function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Exquisite <span className="text-primary italic">Craftsmanship</span> in Action
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our recent projects and see how we've transformed ordinary spaces into 
              extraordinary living environments.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 ${filter === cat ? "bg-primary text-white" : "hover:bg-primary/10"}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <Badge className="w-fit mb-3 bg-accent text-accent-foreground">
                    {project.category}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <Button variant="outline" className="w-fit text-white border-white/30 hover:bg-white/20 rounded-xl">
                    View Project <Search className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-10 py-7 rounded-2xl text-lg">
            Start Your Project Today <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
