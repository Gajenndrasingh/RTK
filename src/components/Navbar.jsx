import React from 'react';
import { useSelector } from 'react-redux';

export default function Navbar({ onCartClick }) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg py-3 sm:py-4 px-4 sm:px-8 flex justify-between items-center sticky top-0 z-40">
      
      <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide cursor-pointer truncate">
        🛍️ <span className="hidden sm:inline">Evermark Shop</span>
        <span className="sm:hidden">Evermark</span>
      </h1>
      
      <button 
        onClick={onCartClick}
        className="bg-white text-indigo-600 px-3 sm:px-5 py-2 rounded-full font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 text-sm sm:text-base"
      >
        <span>🛒 <span className="hidden sm:inline">Cart</span></span>
        {cartItems.length > 0 && (
          <span className="bg-red-500 text-white rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center text-xs sm:text-sm">
            {cartItems.length}
          </span>
        )}
      </button>
      
    </nav>
  );
}