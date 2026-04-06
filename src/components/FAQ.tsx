import { motion } from "motion/react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity. Generally, a full kitchen remodel takes 6-10 weeks from design approval to final installation. We provide a detailed schedule during the consultation phase.",
  },
  {
    question: "What materials do you use for your cabinets?",
    answer: "We use only premium, sustainably sourced hardwoods and high-grade plywood. We avoid particle board and MDF for structural components to ensure maximum durability and longevity.",
  },
  {
    question: "Do you offer a warranty on your work?",
    answer: "Yes, we offer a limited lifetime warranty on all our custom cabinetry. This covers structural integrity and craftsmanship. Hardware like hinges and drawer slides often carry their own manufacturer warranties.",
  },
  {
    question: "Can you work with my existing kitchen layout?",
    answer: "Absolutely. While we can help you completely redesign your space, we are also experts at optimizing existing layouts with custom-fitted cabinetry that improves functionality.",
  },
  {
    question: "What is the typical price range for custom cabinets?",
    answer: "Pricing depends on materials, finishes, and the size of the project. We offer solutions for various budgets and provide transparent, detailed quotes after our initial consultation.",
  },
];

export function FAQ() {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Common <span className="text-primary italic">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our custom cabinetry process and services.
            </p>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 border-none shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="text-left font-bold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
