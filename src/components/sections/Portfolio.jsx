"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { X, ZoomIn } from "lucide-react";

const portfolioItems = [
  { id: 1, title: "Premium Wedding Cards", category: "Wedding", color: "bg-rose-100 text-rose-800", height: "h-80" },
  { id: 2, Cafe: "Cafe Branding Kit", category: "Branding", color: "bg-amber-100 text-amber-800", height: "h-64" },
  { id: 3, title: "Cosmetics Packaging", category: "Packaging", color: "bg-purple-100 text-purple-800", height: "h-96" },
  { id: 4, title: "Corporate Brochure", category: "Marketing", color: "bg-blue-100 text-blue-800", height: "h-72" },
  { id: 5, title: "Luxury Business Cards", category: "Business", color: "bg-slate-800 text-white", height: "h-64" },
  { id: 6, title: "Event Banners", category: "Marketing", color: "bg-emerald-100 text-emerald-800", height: "h-80" },
];

export function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Section id="portfolio" className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
          Our Recent Work
        </h2>
        <p className="text-lg text-foreground/70">
          A glimpse into the quality and variety of printing projects we've delivered.
        </p>
      </div>

      {/* CSS columns for masonry layout */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-2xl overflow-hidden cursor-pointer group break-inside-avoid ${item.color} ${item.height}`}
            onClick={() => setSelectedImage(item)}
          >
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <span className="font-medium opacity-50 mb-2 uppercase tracking-wider text-xs">
                {item.category}
              </span>
              <span className="font-heading font-bold text-2xl">
                {item.title || item.Cafe}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ZoomIn className="text-white w-10 h-10" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-primary/90 backdrop-blur-sm cursor-pointer"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative z-10 w-full max-w-4xl bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 text-foreground/50 hover:text-foreground bg-white/80 p-2 rounded-full transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
              
              {/* Image side */}
              <div className={`w-full md:w-2/3 h-64 md:h-[500px] ${selectedImage.color} flex items-center justify-center`}>
                 <span className="font-heading font-bold text-4xl text-center px-4">
                   {selectedImage.title || selectedImage.Cafe}
                 </span>
              </div>
              
              {/* Details side */}
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
                <span className="text-accent font-medium mb-2 uppercase tracking-wide text-sm">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-heading font-bold text-primary mb-4">
                  {selectedImage.title || selectedImage.Cafe}
                </h3>
                <p className="text-foreground/70 mb-8">
                  This project demonstrates our high-quality printing capabilities tailored specifically for the {selectedImage.category.toLowerCase()} sector. We used premium materials and specialized finishing to achieve this result.
                </p>
                <button 
                  className="w-full py-3 px-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-medium cursor-pointer"
                  onClick={() => {
                    setSelectedImage(null);
                    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Similar Work
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
}
