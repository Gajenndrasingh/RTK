import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden group border border-slate-100 flex flex-col relative">
      
      <span className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-md text-white text-[10px] font-black px-2.5 py-1 rounded-full z-10 shadow-sm uppercase tracking-wider">
        Best Seller
      </span>

      <div className="overflow-hidden h-44 xs:h-48 sm:h-52 w-full bg-slate-50 relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
      </div>
      
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs text-amber-500 font-bold">
            <span>⭐ 4.8</span>
            <span className="text-slate-400 font-medium">(124)</span>
          </div>
          <h3 className="font-bold text-base text-slate-800 tracking-tight line-clamp-1 group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-indigo-600 font-black text-lg sm:text-xl">₹{product.price}</span>
            <span className="text-slate-400 text-xs line-through font-medium">₹{product.price + 500}</span>
          </div>
        </div>
        
        <button 
          onClick={() => dispatch(addToCart(product))}
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg hover:shadow-indigo-600/10 active:scale-95"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
}