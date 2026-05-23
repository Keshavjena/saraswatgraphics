"use client";

import { motion } from "framer-motion";
import { Package, Users, Truck, CheckCircle } from "lucide-react";

const stats = [
  { id: 1, name: "Orders Completed", value: "10,000+", icon: Package },
  { id: 2, name: "Happy Clients", value: "500+", icon: Users },
  { id: 3, name: "Fast Delivery", value: "24-48h", icon: Truck },
  { id: 4, name: "Premium Quality", value: "100%", icon: CheckCircle },
];

export function TrustIndicators() {
  return (
    <section className="py-12 bg-white border-y border-foreground/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-background-secondary flex items-center justify-center mb-4 text-accent">
                  <Icon size={24} />
                </div>
                <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base font-medium text-foreground/70">
                  {stat.name}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
