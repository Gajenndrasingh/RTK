import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCheckoutSuccess = () => {
    setIsCartOpen(false);
    setShowToast(true);
    
    setTimeout(() => {
      setShowToast(false);
    }, 4000); // 4 seconds tak dikhega
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 relative overflow-x-hidden">
      
      {/* 🌟 PRO COMPACT TOAST (RESPONSIVE & SMALL) */}
      {showToast && (
        <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 left-5 sm:left-auto z-[100] max-w-sm bg-white/95 backdrop-blur-md border border-emerald-100 shadow-2xl rounded-2xl p-4 flex items-center justify-between gap-3 animate-slide-in-up">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500/10 p-2 rounded-xl text-emerald-600 flex-shrink-0">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Order Placed!</h4>
              <p className="text-slate-500 text-xs mt-0.5">Your items will be delivered soon.</p>
            </div>
          </div>
          <button 
            onClick={() => setShowToast(false)} 
            className="text-slate-400 hover:text-slate-600 font-bold p-1 hover:bg-slate-100 rounded-lg transition-colors text-lg"
          >
            &times;
          </button>
        </div>
      )}

      <Navbar onCartClick={() => setIsCartOpen(true)} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6 sm:mt-10">
        <ProductList />
      </div>

      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        onCheckout={handleCheckoutSuccess} 
      />
    </div>
  );
}