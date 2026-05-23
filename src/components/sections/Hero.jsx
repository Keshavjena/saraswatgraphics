"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="bg-background-secondary pt-4 pb-8 md:pt-8 md:pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Top Promo Banner */}
        <div className="w-full bg-accent text-white text-center py-2 px-4 rounded-t-xl font-bold text-sm md:text-base shadow-sm">
          Buy More, Save More! Flat 5% OFF on Orders ₹10,000+ | Code: SAVE5 
        </div>

        {/* Main Hero Slider Area (Static for now) */}
        <div className="bg-primary rounded-b-xl overflow-hidden shadow-lg relative flex flex-col md:flex-row items-center min-h-[400px]">
          
          {/* Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 z-10 flex flex-col justify-center items-start text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4"
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 leading-tight"
            >
              Visiting Cards
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl md:text-2xl font-medium mb-8 text-blue-100"
            >
              100 Visiting Cards at <span className="text-accent font-bold">Rs 200</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button as={Link} href="/category/visiting-cards" variant="secondary" className="px-8 py-3 text-lg font-bold">
                Shop Now
              </Button>
            </motion.div>
          </div>

          {/* Image/Graphic */}
          <div className="w-full md:w-1/2 h-64 md:h-full relative overflow-hidden flex items-center justify-center p-8 bg-gradient-to-l from-white/10 to-transparent">
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="relative z-20 w-64 h-40 bg-white rounded-lg shadow-2xl flex flex-col items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform duration-500"
              >
                <div className="text-primary font-heading font-bold text-2xl">Saraswat</div>
                <div className="text-gray-500 text-sm mt-1">Visiting Cards</div>
             </motion.div>
             <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="absolute z-10 w-64 h-40 bg-gray-100 rounded-lg shadow-xl flex flex-col items-center justify-center transform rotate-6 ml-20 mt-20"
              >
             </motion.div>
          </div>

        </div>

        {/* Secondary Promo Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
           <Link href="/category/clothing-bags" className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="flex items-center p-6 gap-6">
                 <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Look professional with custom rainwear</h3>
                    <p className="text-gray-600 mt-2">Starting at Rs. 655</p>
                    <span className="inline-block mt-4 text-accent font-semibold text-sm">Shop Umbrellas & Raincoats &rarr;</span>
                 </div>
                 <div className="w-24 h-24 relative rounded-full overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Image src="/images/categories/category_12.png" alt="Umbrellas" fill className="object-cover" />
                 </div>
              </div>
           </Link>
           <Link href="/category/clothing-bags" className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
              <div className="flex items-center p-6 gap-6">
                 <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">Custom T-Shirts for your team</h3>
                    <p className="text-gray-600 mt-2">100% Cotton, Premium Print</p>
                    <span className="inline-block mt-4 text-accent font-semibold text-sm">Explore T-Shirts &rarr;</span>
                 </div>
                 <div className="w-24 h-24 relative rounded-full overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform">
                    <Image src="/images/categories/category_4.png" alt="T-Shirts" fill className="object-cover" />
                 </div>
              </div>
           </Link>
        </div>

      </div>
    </section>
  );
}
