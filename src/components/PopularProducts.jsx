// ✅ PopularProduct.jsx - Updated to match Navbar width & responsiveness

import React, { useContext } from 'react';
import { FaRegEye, FaRegHeart } from 'react-icons/fa';
import { toast } from 'react-toastify';


import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';



const PopularProduct = () => {

  const [popularproduct, setpopularproduct]=useState([])

  const navigate = useNavigate()

  const handlenavigatedetails = (product) => {
    navigate('/ProductDetails', { state: {product} })
  }
useEffect(()=>{
  popularproductapi()
},[])


const wishlistapi=(item)=>{
  axios.post('https://surender-backend.vercel.app/wishlist', item)
}


  const popularproductapi=()=>{
axios.get('https://surender-backend.vercel.app/allproducts').then((res)=>{
  if(res.data.status){
    setpopularproduct(res.data.ouruser)
  }
}).catch((err)=>{
  console.log(err)
})
  } 

  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 mt-10 mb-16">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Popular Products</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-6">
        {popularproduct.map((product) => (
          <div
            key={product.id}
           
            className="group relative border border-gray-200 select-none rounded-xl p-4 bg-white hover:shadow-lg transition duration-200 flex flex-col items-center "
          >
            {/* Hover Icons */}
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-[-10px] group-hover:translate-y-0 z-10">
              <button className="p-2 cursor-pointer bg-white rounded-full border shadow hover:bg-gray-100">
                <FaRegEye size={16} />
              </button>
              <button
                className="p-2 cursor-pointer bg-white rounded-full border shadow hover:bg-gray-100"
                onClick={() => {
                  wishlistapi(product);                
                  toast.success('✅ Saved to Wishlist!');
                }}
              >
                <FaRegHeart size={16} />
              </button>
            </div>

            {/* Product Image */}
            <img src={product.image} alt={product.name} className="w-24 h-24 object-contain mb-3 cursor-pointer"  onClick={() => handlenavigatedetails(product)}/>

            {/* Product Info */}

            <p className="text-sm font-medium text-center text-gray-300">{product.category}</p>
            <h3 className="text-sm font-medium text-center text-gray-800">{product.name}</h3>

            <div className='flex flex-row gap-10 justify-between mt-2'>
            <p className="text-green-600 font-semibold text-sm mt-1">${product.salePrice}</p>
            <button className='bg-green-500 rounded px-2'>+ Add</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
