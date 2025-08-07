import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = ({ isOpen, onClose }) => {

  // const navigate = useNavigate();
  const navigate=useNavigate();


  const handlenavigate=()=>{
    onclose();
    navigate('/checkout')
  }


  
  
  const [cartstate, setcartstate] = useState([]);

  useEffect(() => {
    if (isOpen) {
      Cartapi();
    }
  }, [isOpen]);

  const Cartapi = () => {
    axios
      .get('https://surender-backend.vercel.app/allcartdata')
      .then((res) => {
        if (res.data.status) {
          const updated = res.data.cartdata.map((item) => ({
            ...item,
            quantity: item.quantity || 1,
          }));
          setcartstate(updated);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteapi = (item) => {
    axios.post('https://surender-backend.vercel.app/deleteapi', item).then((res) => {
      if (res.data.status) {
        alert(res.data.msg);
        setcartstate((prev) => prev.filter((i) => i._id !== item._id));
      } else {
        alert(res.data.msg);
      }
    });
  };

  const handleQuantityChange = (id, currentQuantity, change) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity < 1) return;

    axios
      .patch(`https://surender-backend.vercel.app/cart/${id}/quantity`, { quantity: newQuantity })
      .then((res) => {
        if (res.data.status) {
          setcartstate((prev) =>
            prev.map((item) =>
              item._id === id ? { ...item, quantity: newQuantity } : item
            )
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="text-xl font-semibold">Shop Cart</h2>
        <button onClick={onClose} className="cursor-pointer">
          <IoClose size={24} />
        </button>
      </div>

      {/* FREE delivery alert */}
      <div className="bg-red-100 text-red-700 px-4 py-2 text-sm">
        You’ve got <strong>FREE delivery</strong>. Start{' '}
        <span className="underline cursor-pointer">checkout now!</span>
      </div>

      {/* Cart Items */}
      <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
        {cartstate.length === 0 ? (
          <p className="text-center text-gray-500 mt-4">Your cart is empty.</p>
        ) : (
          cartstate.map((item, index) => (
            <div key={index} className="flex items-start justify-between mb-6">
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded border"
              />

              {/* Product Info */}
              <div className="flex-1 px-3">
                <p className="font-medium text-sm">{item.name}</p>
                <div className="flex flex-row">
                  <p className="text-xs text-gray-500">{item.weight}&nbsp;</p>
                  <p className="text-xs text-gray-500">{item.unit}</p>
                </div>
                <button
                  className="text-xs text-green-600 mt-1 flex items-center hover:underline"
                  onClick={() => deleteapi(item)}
                >
                  <FaTrash className="mr-1 text-xs" />
                  Remove
                </button>
              </div>

              {/* Quantity & Price */}
              <div className="flex flex-col items-end space-y-1">
                <div className="flex items-center border rounded text-sm">
                  <button
                    className="px-2 py-1"
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity, -1)
                    }
                  >
                    -
                  </button>
                  <span className="px-2 py-1">{item.quantity}</span>
                  <button
                    className="px-2 py-1"
                    onClick={() =>
                      handleQuantityChange(item._id, item.quantity, 1)
                    }
                  >
                    +
                  </button>
                </div>
                <p className="font-semibold text-sm">${item.salePrice}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer Buttons */}
      <div className="p-4 border-t flex justify-between gap-3">
        <button className="w-1/2 bg-green-600 text-white py-2 rounded hover:bg-green-700 text-sm">
          Continue Shopping
        </button>
        <button className="w-1/2 bg-gray-900 text-white py-2 rounded hover:bg-black text-sm"
        onClick={handlenavigate}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
