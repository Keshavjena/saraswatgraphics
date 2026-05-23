"use client";

import { useState } from "react";
import { Menu, X, Search, ShoppingCart, User, Heart, HelpCircle, ChevronDown, Package } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { catalog } from "@/lib/data";

const categories = [
  { 
    name: "Visiting Cards", 
    href: "/category/visiting-cards",
    subCategories: ["Standard", "Classic", "Rounded Corner", "Square", "Leaf", "Spot UV", "Raised Foil"]
  },
  { 
    name: "Signs & Posters", 
    href: "/category/signs-posters",
    subCategories: ["Standees", "Posters", "Banners", "Foam Boards", "Tabletop Signs"]
  },
  { 
    name: "Labels & Stickers", 
    href: "/category/labels-stickers",
    subCategories: ["Product Labels", "Address Labels", "Window Stickers", "Sheet Stickers"]
  },
  { 
    name: "Clothing & Bags", 
    href: "/category/clothing-bags",
    subCategories: ["Men's T-Shirts", "Women's T-Shirts", "Polo Shirts", "Custom Dress Shirts", "Caps", "Bags"]
  },
  { 
    name: "Photo Gifts", 
    href: "/category/photo-gifts",
    subCategories: ["Photo Albums", "Canvas Prints", "Mugs", "Calendars", "Mouse Pads"]
  },
  { 
    name: "Custom Stationery", 
    href: "/category/stationery",
    subCategories: ["Letterheads", "Envelopes", "Notebooks", "Pens", "ID Cards"]
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const allProducts = catalog.categories.flatMap(c => c.products);
  const liveResults = searchQuery.trim().length > 0 
    ? allProducts.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 5)
    : [];

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Utility Bar */}
      <div className="bg-gray-100 py-1.5 px-4 text-xs font-medium text-gray-600 border-b border-gray-200 hidden md:block">
        <div className="container mx-auto flex justify-end gap-6 max-w-7xl">
          <a href="#help" className="flex items-center gap-1 hover:text-primary transition-colors">
            <HelpCircle size={14} /> Help is here
          </a>
          <a href="#favorites" className="flex items-center gap-1 hover:text-primary transition-colors">
            <Heart size={14} /> My Favorites
          </a>
          <a href="#account" className="flex items-center gap-1 hover:text-primary transition-colors">
            <User size={14} /> My Account
          </a>
        </div>
      </div>

      {/* Main Header Area */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4 flex items-center justify-between gap-4 md:gap-8">
        
        {/* Mobile Menu Toggle & Logo */}
        <div className="flex items-center gap-4">
          <button
            className="lg:hidden text-foreground cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 rounded bg-primary text-white flex items-center justify-center font-bold text-2xl">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-2xl leading-none text-primary tracking-tight">
                Saraswat
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase leading-none mt-1">
                Graphics
              </span>
            </div>
          </Link>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-grow max-w-2xl">
          <div className="relative w-full">
            <form action="/search" method="GET" className="relative w-full">
              <input
                type="text"
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for today?"
                className="w-full border-2 border-gray-300 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-primary transition-colors"
                autoComplete="off"
                required
              />
              <button type="submit" className="absolute right-1 top-1 bottom-1 bg-primary text-white rounded-full w-10 flex items-center justify-center hover:bg-primary/90 transition-colors">
                <Search size={18} />
              </button>
            </form>

            {/* Live Search Results Dropdown */}
            {searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden">
                {liveResults.length > 0 ? (
                  <div className="flex flex-col">
                    {liveResults.map(product => (
                      <Link 
                        key={product.id} 
                        href={`/product/${product.id}`}
                        onClick={() => setSearchQuery("")}
                        className="px-4 py-3 flex items-center gap-3 hover:bg-blue-50 border-b border-gray-100 last:border-0 transition-colors"
                      >
                        <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center flex-shrink-0">
                          <Package size={20} className="text-gray-400" />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{product.name}</span>
                          <span className="text-xs text-gray-500">Starts at Rs {product.price}</span>
                        </div>
                      </Link>
                    ))}
                    <Link href={`/search?q=${searchQuery}`} onClick={() => setSearchQuery("")} className="px-4 py-3 text-sm text-center text-primary font-bold hover:bg-gray-50 bg-gray-50 border-t border-gray-200">
                      View all results for "{searchQuery}"
                    </Link>
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-gray-500">
                    No products found matching "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Cart & Mobile Utilities */}
        <div className="flex items-center gap-4 lg:gap-6">
          <a href="#account" className="hidden lg:flex flex-col items-center hover:text-primary transition-colors cursor-pointer text-gray-700">
             <User size={22} />
             <span className="text-[10px] font-medium mt-1">Sign In</span>
          </a>
          <a href="#cart" className="flex flex-col items-center hover:text-primary transition-colors cursor-pointer text-gray-700 relative">
             <ShoppingCart size={22} />
             <span className="text-[10px] font-medium mt-1">Cart</span>
             <span className="absolute -top-1 -right-2 bg-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </a>
        </div>
      </div>

      {/* Categories Navigation Bar (Desktop) */}
      <div className="hidden lg:block border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <nav className="flex items-center gap-6 py-3 flex-wrap">
            {categories.map((cat) => (
              <div key={cat.name} className="relative group">
                <Link
                  href={cat.href}
                  className="text-sm font-semibold text-gray-700 hover:text-accent whitespace-nowrap transition-colors flex items-center gap-1 py-3"
                >
                  {cat.name}
                  <ChevronDown size={14} className="text-gray-400 group-hover:text-accent transition-colors" />
                </Link>
                
                {/* Mega Menu Dropdown */}
                <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50 rounded-b-lg">
                  <div className="py-2 flex flex-col">
                    {cat.subCategories?.map((sub) => (
                      <Link 
                        key={sub} 
                        href={`/product/${sub.toLowerCase().replace(/ /g, "-")}`}
                        className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary transition-colors"
                      >
                        {sub}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            <a href="#all" className="text-sm font-bold text-primary hover:text-accent whitespace-nowrap ml-auto">
              Explore All Categories
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[calc(100%-1px)] left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-50 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="p-4 border-b border-gray-100 relative">
            <form action="/search" method="GET" className="relative w-full">
              <input
                type="text"
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full border-2 border-gray-300 rounded-full py-2.5 pl-4 pr-10 text-sm focus:outline-none focus:border-primary"
                autoComplete="off"
                required
              />
              <button type="submit" className="absolute right-4 top-3 text-gray-400 hover:text-primary">
                <Search size={18} />
              </button>
            </form>
            
            {/* Live Search Results Dropdown (Mobile) */}
            {searchQuery.trim().length > 0 && (
              <div className="absolute top-full left-4 right-4 mt-1 bg-white rounded-xl shadow-xl border border-gray-200 z-[60] overflow-hidden">
                {liveResults.length > 0 ? (
                  <div className="flex flex-col">
                    {liveResults.map(product => (
                      <Link 
                        key={product.id} 
                        href={`/product/${product.id}`}
                        onClick={() => { setSearchQuery(""); setMobileMenuOpen(false); }}
                        className="px-4 py-3 flex items-center gap-3 hover:bg-blue-50 border-b border-gray-100 last:border-0 transition-colors"
                      >
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-900">{product.name}</span>
                        </div>
                      </Link>
                    ))}
                    <Link href={`/search?q=${searchQuery}`} onClick={() => { setSearchQuery(""); setMobileMenuOpen(false); }} className="px-4 py-3 text-sm text-center text-primary font-bold bg-gray-50 border-t border-gray-200">
                      View all results
                    </Link>
                  </div>
                ) : (
                  <div className="px-4 py-4 text-center text-sm text-gray-500">
                    No results found
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col py-2">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href={cat.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-6 py-4 text-base font-semibold text-gray-800 border-b border-gray-100 flex justify-between items-center"
              >
                {cat.name}
                <ChevronDown size={18} className="text-gray-400 -rotate-90" />
              </a>
            ))}
            <div className="px-6 py-6 bg-gray-50 flex flex-col gap-4 mt-4">
              <a href="#help" className="flex items-center gap-3 text-gray-700 font-medium">
                <HelpCircle size={20} /> Help Center
              </a>
              <a href="#account" className="flex items-center gap-3 text-gray-700 font-medium">
                <User size={20} /> My Account
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
