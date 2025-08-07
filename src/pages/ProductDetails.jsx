// import React from 'react'
// import { useLocation } from 'react-router-dom'

// const ProductDetails = () => {

//     const location= useLocation()
//     const product=location.state?.product

//   return (
//     <div>
//       <img src={product.image} alt="" />
//       <p>{product.price}</p>
//     </div>
//   )
// }

// export default ProductDetails



import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const location = useLocation();
    const product = location.state?.product;

    const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
    const [isZooming, setIsZooming] = useState(false);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.pageX - left - window.scrollX) / width) * 100;
        const y = ((e.pageY - top - window.scrollY) / height) * 100;
        setZoomPosition({ x, y });
    };

    if (!product) return <p className="text-center mt-10">No product details found.</p>;



    // add to cart ------------------------
    let addcart=(cartproduct)=>{
        axios.post('http://localhost:8080/addtocart',cartproduct).then((res)=>{
            if(res.data.status){
                alert(res.data.msg)
            }else{
                alert(res.data.msg)
            }
        })
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left - Image with Zoom */}
            <div className="relative w-full">
                <div
                    className="w-full border rounded-lg overflow-hidden"
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsZooming(true)}
                    onMouseLeave={() => setIsZooming(false)}
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-auto object-contain"
                        style={{
                            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                            transform: isZooming ? 'scale(2)' : 'scale(1)',
                            transition: 'transform 0.3s ease',
                        }}
                    />
                </div>

                {/* Optionally: Image thumbnails */}
                <div className="flex gap-2 mt-4">
                    <img src={product.image} alt="thumb" className="w-16 h-16 border rounded object-contain" />
                    <img src={product.image} alt="thumb" className="w-16 h-16 border rounded object-contain" />
                </div>
            </div>

            {/* Right - Product Info */}
            <div>
                <p className="text-green-600 font-medium text-sm mb-1">Bakery & Biscuits</p>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl text-green-700 font-bold">${product.salePrice}</span>
                    <span className="text-gray-400 line-through">${product.regularPrice}</span>
                    <span className="text-yellow-500 text-sm">(4 reviews)</span>
                </div>

                {/* Size options */}
                <div className="flex gap-2 mb-4">
                    {['250g', '500g', '1kg'].map((size) => (
                        <button
                            key={size}
                            className="px-4 py-2 border rounded-md text-sm hover:border-green-600"
                        >
                            {size}
                        </button>
                    ))}
                </div>

                {/* Quantity + Cart */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex border rounded">
                        <button className="px-3 py-1 border-r">-</button>
                        <span className="px-4 py-1">1</span>
                        <button className="px-3 py-1 border-l">+</button>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"  onClick={()=>addcart(product)} >
                        Add to cart
                    </button>
                    <button className="p-2 border rounded hover:bg-gray-100">♡</button>
                </div>

                {/* Product Meta Info */}
                <div className="space-y-2 text-sm text-gray-600">
                    <p>
                        <strong>Product Code:</strong> FBB00255
                    </p>
                    <p>
                        <strong>Availability:</strong> In Stock
                    </p>
                    <p>
                        <strong>Type:</strong> Fruits
                    </p>
                    <p>
                        <strong>Shipping:</strong>{' '}
                        <span className="text-green-700">01 day shipping (Free pickup today)</span>
                    </p>
                </div>

                <button className="mt-6 bg-gray-900 text-white px-6 py-2 rounded hover:bg-black">
                    🛒 Buy Now
                </button>
            </div>
        </div>
    );
};

export default ProductDetails;

