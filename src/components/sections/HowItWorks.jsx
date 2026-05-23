"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { UploadCloud, CheckCircle, Truck } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload & Share",
    description: "Share your design files or let our expert team create a custom design tailored for your brand.",
    icon: UploadCloud,
  },
  {
    id: 2,
    title: "Approve Design",
    description: "Review the digital proofs. Once you're 100% satisfied, we move forward to production.",
    icon: CheckCircle,
  },
  {
    id: 3,
    title: "Print & Deliver",
    description: "We print with state-of-the-art machinery and deliver the final product straight to your door.",
    icon: Truck,
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-background-secondary overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          How It Works
        </h2>
        <p className="text-lg text-foreground/70">
          A simple, streamlined process designed to get your printing projects completed fast and flawlessly.
        </p>
      </div>

      <div className="relative">
        {/* Desktop timeline connector */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-foreground/10 -translate-y-1/2 z-0" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 md:left-1/2 md:-ml-12 md:-top-6 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-heading font-bold text-xl shadow-lg z-20">
                  {step.id}
                </div>
                
                {/* Icon container */}
                <div className="w-24 h-24 rounded-full bg-white border-4 border-background-secondary flex items-center justify-center text-primary mb-8 shadow-sm group-hover:scale-105 transition-transform">
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
