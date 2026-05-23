"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";

export function About() {
  return (
    <Section id="about" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            About Saraswat Graphics
          </h2>
          <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
            <p>
              Located in the heart of Vrindavan, Saraswat Graphics has been the trusted printing partner for local businesses, event organizers, and brands for years.
            </p>
            <p>
              We believe that quality printing shouldn't be complicated. Our mission is to provide premium, hassle-free printing solutions with a focus on exceptional customer service and quick turnaround times.
            </p>
            <p>
              From the smallest business card to the largest hoarding, we bring the same level of dedication and attention to detail to every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-foreground/10">
            <div>
              <h4 className="font-heading font-bold text-2xl text-primary mb-1">Quality First</h4>
              <p className="text-sm text-foreground/70">Premium paper & materials</p>
            </div>
            <div>
              <h4 className="font-heading font-bold text-2xl text-primary mb-1">On Time</h4>
              <p className="text-sm text-foreground/70">Reliable delivery schedules</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-background-secondary border border-foreground/5"
        >
          {/* Abstract aesthetic placeholder for an image of the press/team */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5 flex items-center justify-center p-12 text-center">
             <div className="w-24 h-24 rounded-2xl bg-white shadow-xl flex items-center justify-center font-heading font-bold text-4xl text-primary transform rotate-12">
               S
             </div>
             <div className="absolute bottom-8 right-8 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
             <div className="absolute top-8 left-8 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
