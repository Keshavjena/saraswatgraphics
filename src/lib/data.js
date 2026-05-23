export const catalog = {
  categories: [
    {
      id: "visiting-cards",
      name: "Visiting Cards",
      description: "Make a lasting impression with premium business cards.",
      image: "/images/categories/category_1.png",
      products: [
        { id: "standard-visiting-cards", name: "Standard Visiting Cards", price: 200, baseQuantity: 100, image: "/images/categories/category_13.png" },
        { id: "classic-visiting-cards", name: "Classic Visiting Cards", price: 250, baseQuantity: 100, image: "/images/categories/category_1.png" },
        { id: "rounded-corner-visiting-cards", name: "Rounded Corner Visiting Cards", price: 250, baseQuantity: 100, image: "/images/categories/category_14.png" },
        { id: "square-visiting-cards", name: "Square Visiting Cards", price: 300, baseQuantity: 100, image: "/images/categories/category_1.png" },
        { id: "leaf-visiting-cards", name: "Leaf Visiting Cards", price: 300, baseQuantity: 100, image: "/images/categories/category_1.png" },
        { id: "spot-uv-visiting-cards", name: "Spot UV Visiting Cards", price: 500, baseQuantity: 100, image: "/images/categories/category_1.png" },
        { id: "raised-foil-visiting-cards", name: "Raised Foil Visiting Cards", price: 600, baseQuantity: 100, image: "/images/categories/category_1.png" },
      ]
    },
    {
      id: "signs-posters",
      name: "Signs & Posters",
      description: "Get noticed with large format printing for events and storefronts.",
      image: "/images/categories/category_6.png",
      products: [
        { id: "standees", name: "Standees", price: 1200, baseQuantity: 1, image: "/images/categories/category_6.png" },
        { id: "posters", name: "Posters", price: 150, baseQuantity: 10, image: "/images/categories/category_6.png" },
        { id: "banners", name: "Banners", price: 500, baseQuantity: 1, image: "/images/categories/category_6.png" },
        { id: "foam-boards", name: "Foam Boards", price: 800, baseQuantity: 1, image: "/images/categories/category_6.png" },
        { id: "tabletop-signs", name: "Tabletop Signs", price: 300, baseQuantity: 5, image: "/images/categories/category_6.png" },
      ]
    },
    {
      id: "labels-stickers",
      name: "Labels & Stickers",
      description: "Custom branding for your packaging and products.",
      image: "/images/categories/category_9.png",
      products: [
        { id: "product-labels", name: "Product Labels", price: 300, baseQuantity: 100, image: "/images/categories/category_9.png" },
        { id: "address-labels", name: "Address Labels", price: 200, baseQuantity: 100, image: "/images/categories/category_9.png" },
        { id: "window-stickers", name: "Window Stickers", price: 500, baseQuantity: 10, image: "/images/categories/category_9.png" },
        { id: "sheet-stickers", name: "Sheet Stickers", price: 400, baseQuantity: 50, image: "/images/categories/category_9.png" },
      ]
    },
    {
      id: "clothing-bags",
      name: "Clothing & Bags",
      description: "Branded apparel for your team and promotions.",
      image: "/images/categories/category_4.png",
      products: [
        { id: "mens-tshirts", name: "Men's T-Shirts", price: 350, baseQuantity: 1, image: "/images/categories/category_4.png" },
        { id: "womens-tshirts", name: "Women's T-Shirts", price: 350, baseQuantity: 1, image: "/images/categories/category_4.png" },
        { id: "polo-shirts", name: "Polo Shirts", price: 450, baseQuantity: 1, image: "/images/categories/category_2.png" },
        { id: "custom-dress-shirts", name: "Custom Dress Shirts", price: 800, baseQuantity: 1, image: "/images/categories/category_3.png" },
        { id: "caps", name: "Caps", price: 200, baseQuantity: 1, image: "/images/categories/category_5.png" },
        { id: "bags", name: "Bags", price: 250, baseQuantity: 1, image: "/images/categories/category_11.png" },
      ]
    },
    {
      id: "photo-gifts",
      name: "Photo Gifts",
      description: "Personalized gifts and mementos.",
      image: "/images/categories/category_8.png",
      products: [
        { id: "photo-albums", name: "Photo Albums", price: 1500, baseQuantity: 1, image: "/images/categories/category_8.png" },
        { id: "canvas-prints", name: "Canvas Prints", price: 800, baseQuantity: 1, image: "/images/categories/category_8.png" },
        { id: "photo-mugs", name: "Photo Mugs", price: 250, baseQuantity: 1, image: "/images/categories/category_16.png" },
        { id: "calendars", name: "Calendars", price: 300, baseQuantity: 1, image: "/images/categories/category_8.png" },
        { id: "mouse-pads", name: "Mouse Pads", price: 200, baseQuantity: 1, image: "/images/categories/category_8.png" },
      ]
    },
    {
      id: "stationery",
      name: "Custom Stationery",
      description: "Office essentials printed with your logo.",
      image: "/images/categories/category_10.png",
      products: [
        { id: "letterheads", name: "Letterheads", price: 230, baseQuantity: 10, image: "/images/categories/category_15.png" },
        { id: "envelopes", name: "Envelopes", price: 300, baseQuantity: 50, image: "/images/categories/category_10.png" },
        { id: "notebooks", name: "Notebooks", price: 150, baseQuantity: 1, image: "/images/categories/category_10.png" },
        { id: "pens", name: "Pens", price: 50, baseQuantity: 10, image: "/images/categories/category_10.png" },
        { id: "id-cards", name: "ID Cards", price: 100, baseQuantity: 1, image: "/images/categories/category_10.png" },
      ]
    }
  ]
};

export function getCategoryById(id) {
  return catalog.categories.find(c => c.id === id);
}

export function getProductById(productId) {
  for (const cat of catalog.categories) {
    const product = cat.products.find(p => p.id === productId);
    if (product) {
      return { ...product, categoryId: cat.id, categoryName: cat.name };
    }
  }
  return null;
}
