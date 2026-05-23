"use client";

import { use } from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { getCategoryById } from "@/lib/data";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }) {
  const unwrappedParams = use(params);
  const category = getCategoryById(unwrappedParams.id);

  if (!category) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white pt-8 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-6 font-medium">
            <Link href="/" className="hover:text-primary">Home</Link> &gt; <span className="text-gray-900">{category.name}</span>
          </div>

          {/* Category Header */}
          <div className="bg-background-secondary rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <h1 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 mb-4">
                {category.name}
              </h1>
              <p className="text-lg text-gray-600">
                {category.description}
              </p>
            </div>
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-40 h-40 relative rounded-full overflow-hidden shadow-lg border-4 border-white">
                 <Image src={category.image} alt={category.name} fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Explore {category.name}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col group"
              >
                <Link href={`/product/${product.id}`} className="w-full h-48 bg-gray-50 relative block overflow-hidden border-b border-gray-100">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </Link>
                
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-accent font-bold text-xs uppercase tracking-wide mb-2">
                    Starts at Rs {product.price}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="mt-auto pt-4">
                    <Button as={Link} href={`/product/${product.id}`} variant="secondary" className="w-full text-sm font-semibold border-2 hover:bg-primary hover:text-white hover:border-primary transition-all">
                        Customize & Buy
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
