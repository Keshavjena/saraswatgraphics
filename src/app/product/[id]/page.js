"use client";

import { useState, use } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { getProductById } from "@/lib/data";

export default function ProductPage({ params }) {
  const unwrappedParams = use(params);
  const productData = getProductById(unwrappedParams.id);

  if (!productData) {
    notFound();
  }

  // Extend basic product data with standard options for now
  const fullProductData = {
    ...productData,
    description: `High-quality custom ${productData.name} designed specifically for your brand needs.`,
    images: [
      productData.image,
      "/images/categories/category_1.png",
      "/images/categories/category_2.png"
    ],
    options: [
      {
        name: "Paper / Material Type",
        choices: ["Standard Matte", "Premium Glossy", "Textured / Velvet"]
      },
      {
        name: "Add-ons",
        choices: ["None", "Special UV/Foil (Extra Cost)"]
      }
    ]
  };

  const [quantity, setQuantity] = useState(fullProductData.baseQuantity);
  const [selections, setSelections] = useState({
    "Paper / Material Type": "Standard Matte",
    "Add-ons": "None"
  });
  const [activeImage, setActiveImage] = useState(fullProductData.image);

  const handleOptionChange = (optionName, value) => {
    setSelections(prev => ({ ...prev, [optionName]: value }));
  };

  const calculatePrice = () => {
    const multiplier = quantity / fullProductData.baseQuantity;
    let extra = 0;
    if (selections["Paper / Material Type"]?.includes("Premium")) extra += (0.2 * fullProductData.price) * multiplier;
    if (selections["Paper / Material Type"]?.includes("Velvet")) extra += (0.4 * fullProductData.price) * multiplier;
    if (selections["Add-ons"] !== "None") extra += (0.3 * fullProductData.price) * multiplier;
    
    return Math.round((fullProductData.price * multiplier) + extra);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "917409475219"; 
    const finalPrice = calculatePrice();
    const message = `Hello Saraswat Graphics! I would like to order:
    
*Product*: ${fullProductData.name}
*Quantity*: ${quantity}
*Total Est. Price*: Rs ${finalPrice}

*Details*:
${Object.entries(selections).map(([key, val]) => `- ${key}: ${val}`).join('\n')}

Please let me know the next steps for artwork and payment!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          
          {/* Breadcrumbs */}
          <div className="text-sm text-gray-500 mb-8 font-medium">
            <Link href="/" className="hover:text-primary">Home</Link> &gt; 
            <Link href={`/category/${fullProductData.categoryId}`} className="hover:text-primary ml-1">{fullProductData.categoryName}</Link> &gt; 
            <span className="text-gray-900 ml-1">{fullProductData.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Left: Images */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
              <div className="w-full aspect-square md:aspect-[4/3] bg-gray-50 rounded-2xl relative overflow-hidden border border-gray-100">
                <Image 
                  src={activeImage}
                  alt={fullProductData.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {fullProductData.images.map((img, i) => (
                  <button 
                    key={i} 
                    onClick={() => setActiveImage(img)}
                    className={`w-24 h-24 flex-shrink-0 relative rounded-lg overflow-hidden border-2 transition-colors ${activeImage === img ? 'border-primary' : 'border-transparent hover:border-gray-300'}`}
                  >
                    <Image src={img} alt="Thumbnail" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Product Details & Configurator */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h1 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-2">
                {fullProductData.name}
              </h1>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {fullProductData.description}
              </p>
              
              <div className="text-3xl font-bold text-primary mb-8 pb-8 border-b border-gray-100">
                ₹{calculatePrice()} <span className="text-base font-normal text-gray-500">inclusive of all taxes</span>
              </div>

              {/* Options Form */}
              <div className="flex flex-col gap-6 mb-10">
                
                {/* Quantity */}
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-900 text-sm uppercase tracking-wide">Quantity</label>
                  <select 
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full border-2 border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:border-primary text-gray-900 font-medium bg-white"
                  >
                    <option value={fullProductData.baseQuantity}>{fullProductData.baseQuantity}</option>
                    <option value={fullProductData.baseQuantity * 2}>{fullProductData.baseQuantity * 2}</option>
                    <option value={fullProductData.baseQuantity * 5}>{fullProductData.baseQuantity * 5}</option>
                    <option value={fullProductData.baseQuantity * 10}>{fullProductData.baseQuantity * 10}</option>
                  </select>
                </div>

                {/* Dynamic Options */}
                {fullProductData.options.map((opt) => (
                  <div key={opt.name} className="flex flex-col gap-2">
                    <label className="font-semibold text-gray-900 text-sm uppercase tracking-wide">{opt.name}</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {opt.choices.map((choice) => (
                        <button
                          key={choice}
                          onClick={() => handleOptionChange(opt.name, choice)}
                          className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all text-left
                            ${selections[opt.name] === choice 
                              ? 'border-primary bg-blue-50 text-primary' 
                              : 'border-gray-200 text-gray-700 hover:border-gray-300'}`}
                        >
                          {choice}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Sticky Bottom Actions on Mobile, Inline on Desktop */}
              <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] md:static md:bg-transparent md:border-none md:shadow-none md:p-0 z-40">
                <Button 
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1DA851] text-white py-4 md:py-6 text-lg font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-1"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.387 0 12.036c0 2.651.69 5.234 2.006 7.514L0 24l4.582-1.202c2.196 1.196 4.675 1.83 7.247 1.83 6.645 0 12.029-5.387 12.029-12.034C23.858 5.385 18.675 0 12.031 0zm0 22.422c-2.227 0-4.412-.596-6.326-1.725l-.454-.27-3.411.895.912-3.325-.296-.47C1.267 15.655.632 13.376.632 11.05 1.632 4.757 6.755.02 12.032.02c5.275 0 10.398 4.737 10.398 11.03 0 6.295-5.122 11.03-10.399 11.03zM18.28 15.66c-.34-.17-2.012-.994-2.325-1.109-.312-.113-.538-.17-.765.17-.226.34-.878 1.109-1.076 1.336-.198.226-.397.255-.736.085-.34-.17-1.436-.53-2.736-1.692-1.011-.906-1.692-2.026-1.89-2.366-.198-.34-.021-.524.148-.693.153-.153.34-.396.51-.594.17-.198.226-.34.34-.566.113-.226.057-.425-.028-.594-.085-.17-.765-1.841-1.048-2.521-.277-.66-.56-.57-.765-.58-.198-.01-.425-.01-.652-.01-.226 0-.594.085-.906.425-.312.34-1.19 1.161-1.19 2.83 0 1.67 1.218 3.284 1.388 3.51.17.226 2.395 3.653 5.801 5.123 2.515 1.085 3.393.906 4.045.85 1.05-.086 2.012-.822 2.295-1.614.283-.792.283-1.472.198-1.614-.085-.142-.312-.227-.652-.397z"/></svg>
                  Order via WhatsApp
                </Button>
                <p className="text-center text-xs text-gray-500 mt-4 md:mt-2">
                  Clicking will open WhatsApp with your pre-filled order details.
                </p>
              </div>

            </div>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
