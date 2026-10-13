import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, decreaseQuantity, clearCart } from '../redux/cartSlice';

export default function Cart({ isOpen, onClose, onCheckout }) {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity backdrop-blur-sm"
          onClick={onClose}
        ></div>
      )}

      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        <div className="p-5 flex justify-between items-center border-b bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-800">Your Cart 🛒</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-red-500 text-3xl font-bold p-2 leading-none">
            &times;
          </button>
        </div>

        <div className="p-5 flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl font-medium mb-4">Cart is totally empty!</p>
              <button onClick={onClose} className="text-indigo-600 font-bold underline hover:text-indigo-800">
                Let's add some items
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex flex-col bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  
                  <div className="flex justify-between items-start gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover shadow-sm" />
                    <div className="flex-1">
                      <h4 className="font-bold text-sm text-gray-800 line-clamp-1">{item.name}</h4>
                      <p className="text-indigo-600 font-extrabold text-sm mt-1">₹{item.price}</p>
                    </div>
                    <button 
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-red-400 hover:text-red-600 transition-colors text-lg"
                      title="Remove Item"
                    >
                      🗑️
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 bg-gray-50 p-2 rounded-lg border border-gray-100">
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-300 font-bold shadow-sm transition-colors"
                      >
                        -
                      </button>
                      <span className="font-bold text-gray-800 w-4 text-center">{item.quantity}</span>
                      <button 
                        onClick={() => dispatch(addToCart(item))}
                        className="w-8 h-8 flex items-center justify-center bg-white border border-gray-200 rounded-full text-gray-600 hover:bg-gray-300 font-bold shadow-sm transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-bold text-gray-800 text-sm">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center font-extrabold text-xl text-gray-800 mb-5">
              <span>Total Amount:</span>
              <span>₹{totalAmount}</span>
            </div>
            
            <button 
              onClick={() => {
                dispatch(clearCart());
                onCheckout();         
              }}
              className="w-full bg-gray-900 hover:bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-lg shadow-md transition-colors"
            >
              Secure Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}