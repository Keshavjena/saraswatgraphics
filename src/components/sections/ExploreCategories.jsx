"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: "Visiting Cards", image: "/images/categories/category_1.png", href: "/category/visiting-cards" },
  { name: "Signs & Posters", image: "/images/categories/category_6.png", href: "/category/signs-posters" },
  { name: "Labels & Stickers", image: "/images/categories/category_9.png", href: "/category/labels-stickers" },
  { name: "Clothing & Bags", image: "/images/categories/category_4.png", href: "/category/clothing-bags" },
  { name: "Photo Gifts", image: "/images/categories/category_8.png", href: "/category/photo-gifts" },
  { name: "Custom Stationery", image: "/images/categories/category_10.png", href: "/category/stationery" },
];

export function ExploreCategories() {
  return (
    <section id="explore" className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">Explore all categories</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <Link href={cat.href} key={cat.name}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 cursor-pointer"
              >
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center mb-4 overflow-hidden relative group-hover:shadow-md transition-shadow">
                  <Image 
                    src={cat.image} 
                    alt={cat.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 text-center leading-tight group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
