/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { LeadGenForm } from "@/components/LeadGenForm";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-accent selection:text-accent-foreground">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Services />
            <BeforeAfterSlider />
            <Portfolio />
            <Process />
            <Testimonials />
            <LeadGenForm />
            <FAQ />
            <Contact />
          </main>
          <Footer />
          <WhatsAppButton />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
