import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Clock, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectDetails: z.string().min(10, { message: "Please provide more details about your project." }),
});

export function LeadGenForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectDetails: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Thank you! We'll get back to you within 24 hours.");
    form.reset();
  }

  return (
    <section id="quote" className="section-padding bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-black/10 -skew-x-12 translate-x-1/4" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Free Consultation
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Get Your <span className="text-accent italic">Free Quote</span> Today
            </h2>
            <p className="text-xl text-gray-200 mb-10 leading-relaxed">
              Ready to transform your home? Fill out the form and our design experts 
              will contact you to discuss your project.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">Fast Response</h4>
                  <p className="text-gray-300 text-sm">We'll get back to you within 24 hours.</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="p-3 bg-white/10 rounded-xl">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">No Obligation</h4>
                  <p className="text-gray-300 text-sm">Your consultation and quote are completely free.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-white p-8 pb-4">
                <CardTitle className="text-2xl font-bold">Request a Quote</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll handle the rest.
                </CardDescription>
              </CardHeader>
              <CardContent className="bg-white p-8 pt-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="rounded-xl" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="(123) 456-7890" {...field} className="rounded-xl" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} className="rounded-xl" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="projectDetails"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Details</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Describe your project (e.g., Kitchen remodel, custom wardrobe...)" 
                              className="min-h-[120px] rounded-xl" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-7 rounded-xl text-lg font-bold">
                      Send Request <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
