import React from 'react';
import ProductCard from './ProductCard';

export default function ProductList() {
  const products = [
    { id: 1, name: 'Premium Silk Saree', price: 2500, image: 'https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: 2, name: 'Designer Cotton Kurti', price: 1200, image: 'https://www.libas.in/cdn/shop/files/358990H_Main.jpg?v=1781260713&width=1080' },
    { id: 3, name: 'Party Wear Lehenga', price: 4500, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60' },
    { id: 4, name: 'Bridal Necklace Set', price: 3200, image: 'https://cdn.shopaccino.com/nakhrali/products/235-4453166870070_l.jpg?v=736' },
  ];

  return (
    <div className="w-full pb-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-8 text-center text-gray-800">
        ✨ Trending Collections ✨
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}