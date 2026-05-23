"use client";

import { use } from "react";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { catalog } from "@/lib/data";

export default function SearchPage({ searchParams }) {
  const params = use(searchParams);
  const query = params.q?.toLowerCase() || "";

  // Search logic: flat map all products and filter by name
  const allProducts = catalog.categories.flatMap(c => c.products);
  const results = allProducts.filter(p => p.name.toLowerCase().includes(query));

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-2">
            Search Results
          </h1>
          <p className="text-gray-600 mb-8">
            Showing results for <span className="font-semibold text-gray-900">"{query}"</span>
          </p>

          {results.length === 0 ? (
            <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-2">No products found</h2>
              <p className="text-gray-600 mb-6">We couldn't find any products matching your search.</p>
              <Button as="a" href="/" variant="primary">Return Home</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {results.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col group"
                >
                  <a href={`/product/${product.id}`} className="w-full h-48 bg-gray-50 relative block overflow-hidden border-b border-gray-100">
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                  
                  <div className="p-5 flex flex-col flex-grow">
                    <span className="text-accent font-bold text-xs uppercase tracking-wide mb-2">
                      Starts at Rs {product.price}
                    </span>
                    <h3 className="text-base font-bold text-gray-900 leading-tight mb-4 group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                    
                    <div className="mt-auto pt-4">
                      <Button as="a" href={`/product/${product.id}`} variant="secondary" className="w-full text-sm font-semibold border-2 hover:bg-primary hover:text-white hover:border-primary transition-all">
                          Customize & Buy
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
        </div>
      </main>
      <Footer />
    </>
  );
}
