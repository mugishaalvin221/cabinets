import { motion } from "motion/react";
import { MessageSquare, PencilRuler, Hammer, Truck } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "We discuss your vision, lifestyle, and requirements to create a perfect plan.",
    icon: MessageSquare,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Design",
    description: "Our designers create detailed 3D models and material selections for your approval.",
    icon: PencilRuler,
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Production",
    description: "Master craftsmen build your cabinets in our state-of-the-art workshop.",
    icon: Hammer,
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    title: "Installation",
    description: "Our professional team ensures a perfect fit and finish in your home.",
    icon: Truck,
    color: "bg-green-500/10 text-green-600",
  },
];

export function Process() {
  return (
    <section id="process" className="section-padding bg-muted relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Bring Your <span className="text-primary italic">Vision to Life</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A seamless, transparent workflow designed to ensure excellence at every stage 
              of your cabinetry journey.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0" />
          
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative z-10"
            >
              <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center group">
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                  <step.icon className="w-10 h-10" />
                </div>
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
