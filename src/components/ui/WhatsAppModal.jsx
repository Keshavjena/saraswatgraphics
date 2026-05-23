"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "./Button";

export function WhatsAppModal({ isOpen, onClose, product = "Custom Printing" }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    
    // User requested number: +91 7409475219
    const targetNumber = "917409475219";
    const text = `Hi, my name is ${name}, my number is ${phone}. I would like to order: ${product}`;
    const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(url, "_blank");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/20 backdrop-blur-sm cursor-pointer"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md relative z-10 overflow-hidden"
          >
            <div className="p-6">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
              
              <h3 className="text-2xl font-heading font-bold text-primary mb-2">
                Order via WhatsApp
              </h3>
              <p className="text-foreground/70 mb-6 text-sm">
                Fill in your details and we'll connect with you immediately to discuss your {product} requirements.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full mt-2">
                  Send Message on WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
