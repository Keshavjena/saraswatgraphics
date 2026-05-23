"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Event Organizer",
    content: "Saraswat Graphics delivered our wedding cards exactly as we envisioned. The quality of paper and printing was outstanding. Highly recommended!",
    rating: 5,
    initials: "RS"
  },
  {
    id: 2,
    name: "Priya Singh",
    role: "Boutique Owner",
    content: "We rely on them for all our packaging needs. The boxes always arrive on time, look premium, and their pricing is very competitive for the quality they provide.",
    rating: 5,
    initials: "PS"
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Local Business Owner",
    content: "Fast, reliable, and professional. The team understands what we need and delivers it perfectly every single time. Their flex banners are very durable.",
    rating: 5,
    initials: "AP"
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-background-secondary overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Client Testimonials
        </h2>
        <p className="text-lg text-foreground/70">
          Don't just take our word for it. Here's what our satisfied customers have to say about our printing services.
        </p>
      </div>

      <div className="flex overflow-hidden relative">
        {/* Decorative blur edges for scrolling effect */}
        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-24 bg-gradient-to-r from-background-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 md:w-24 bg-gradient-to-l from-background-secondary to-transparent z-10 pointer-events-none" />
        
        {/* Auto-scroll container (using framer motion for simple infinite loop simulation or just flex grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-foreground/5 shadow-sm"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold font-heading">
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-primary">{testimonial.name}</h4>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
