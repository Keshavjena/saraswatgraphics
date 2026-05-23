"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    title: "Standard Visiting Cards",
    price: "BUY 100 @ Rs.200",
    image: "/images/categories/category_13.png",
    href: "/product/standard-visiting-cards",
  },
  {
    title: "Rounded Corner Visiting Cards",
    price: "BUY 100 @ Rs.250",
    image: "/images/categories/category_14.png",
    href: "/product/rounded-corner-visiting-cards",
  },
  {
    title: "Letterheads",
    price: "BUY 10 @ Rs.230",
    image: "/images/categories/category_15.png",
    href: "/product/letterheads",
  },
  {
    title: "Photo Mugs",
    price: "BUY 1 @ Rs.250",
    image: "/images/categories/category_16.png",
    href: "/product/photo-mugs",
  },
  {
    title: "Embroidered Polos",
    price: "BUY 1 @ Rs.450",
    image: "/images/categories/category_17.png",
    href: "/product/polo-shirts",
  },
];

export function PopularProducts() {
  return (
    <section id="products" className="bg-background-secondary py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
            Our Most Popular Products
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col group cursor-pointer"
            >
              <Link href={product.href} className="w-full h-48 bg-gray-50 flex items-center justify-center border-b border-gray-100 relative group-hover:bg-blue-50 transition-colors overflow-hidden">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-accent font-bold text-xs uppercase tracking-wide mb-2">
                  {product.price}
                </span>
                <h3 className="text-base font-bold text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                
                <div className="mt-auto pt-4">
                   <Button as={Link} href={product.href} variant="secondary" className="w-full text-sm font-semibold border-2 hover:bg-primary hover:text-white hover:border-primary transition-all">
                      Shop Now
                   </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
