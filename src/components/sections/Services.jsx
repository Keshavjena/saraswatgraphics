"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Briefcase, Calendar, Box, Maximize, Target, PenTool } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Business Printing",
    description: "Professional visiting cards, letterheads, and corporate stationery that make a lasting impression.",
    icon: Briefcase,
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    id: 2,
    title: "Event Printing",
    description: "Premium wedding cards, invitations, and event collateral tailored to your special day.",
    icon: Calendar,
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 3,
    title: "Packaging Printing",
    description: "Custom boxes, labels, and packaging solutions that elevate your product presentation.",
    icon: Box,
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 4,
    title: "Large Format Printing",
    description: "High-visibility banners, posters, and hoardings for maximum brand exposure.",
    icon: Maximize,
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: 5,
    title: "Branding Materials",
    description: "Brochures, flyers, and catalogs designed to communicate your brand story effectively.",
    icon: Target,
    color: "from-purple-500/20 to-indigo-500/20",
  },
  {
    id: 6,
    title: "Custom Printing",
    description: "Unique print requirements? We provide bespoke solutions tailored to your specific needs.",
    icon: PenTool,
    color: "from-gray-500/20 to-slate-500/20",
  },
];

export function Services() {
  return (
    <Section id="services" className="bg-background-secondary">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Our Printing Services
        </h2>
        <p className="text-lg text-foreground/70">
          Comprehensive printing solutions tailored for every business need. From corporate identity to custom packaging, we've got you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-foreground/5 overflow-hidden z-10 cursor-pointer"
            >
              {/* Subtle hover gradient reveal */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} 
              />
              
              <div className="w-14 h-14 rounded-xl bg-background flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-foreground/5">
                <Icon size={28} />
              </div>
              
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                {service.title}
              </h3>
              
              <p className="text-foreground/70 leading-relaxed group-hover:text-foreground/90 transition-colors">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
