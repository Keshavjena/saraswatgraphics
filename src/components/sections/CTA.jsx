"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { WhatsAppModal } from "@/components/ui/WhatsAppModal";

export function CTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Section id="cta" className="py-24" containerClassName="max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-primary rounded-[2.5rem] p-10 md:p-16 lg:p-20 text-center relative overflow-hidden z-10"
      >
        {/* Decorative background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight max-w-2xl mx-auto">
          Need custom printing for your business?
        </h2>
        
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
          Get in touch with us today. We provide high-quality prints with the fastest turnaround time in Vrindavan.
        </p>

        <Button 
          variant="accent" 
          size="lg" 
          className="w-full sm:w-auto font-semibold text-lg px-10"
          onClick={() => setModalOpen(true)}
        >
          Get Quote
        </Button>
      </motion.div>

      <WhatsAppModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        product="Custom Printing Query" 
      />
    </Section>
  );
}
