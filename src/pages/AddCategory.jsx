// import React from 'react'
// import { useNavigate } from 'react-router-dom'
// import SmallNav from '../components/SmallNav'

// const AddCategory = () => {

//     const navigate=useNavigate()

// const handlenavigate=()=>{
//     navigate('/dashboard/products')
// }

//   return (
//   
//   )
// }

// export default AddCategory



import React, { useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SmallNav from '../components/SmallNav';

const AddCategory = () => {
  const fileInputRef = useRef(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    fileInputRef.current.value = null;
  };

      const navigate=useNavigate()

const handlenavigate=()=>{
    navigate('/dashboard/products')
}

  return (

  <div>
      <SmallNav button={'Back to Category'} onclickk={handlenavigate}/>
      
   

    <div className="p-6 bg-white rounded-lg shadow max-w-4xl mx-auto">
      {/* Category Image Upload */}
      <h2 className="text-lg font-semibold mb-4">Category Image</h2>
      <div className="flex items-center mb-6">
        <div
          onClick={handleBoxClick}
          className="w-24 h-24 border border-gray-300 rounded-md relative cursor-pointer overflow-hidden bg-gray-50"
        >
          {imagePreview ? (
            <>
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
              <button
                onClick={handleRemoveImage}
                className="absolute top-1 right-1 bg-white rounded-full p-1 text-gray-600 hover:text-red-600"
              >
                <FaTimes size={14} />
              </button>
            </>
          ) : (
            <span className="text-sm text-gray-400 w-full h-full flex items-center justify-center">Upload</span>
          )}
        </div>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />
      </div>

      {/* Category Information */}
      <h2 className="text-lg font-semibold mb-4">Category Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="Category Name" className="input-style border-gray-200 border rounded" />
        <input type="text" placeholder="Slug" className="input-style border-gray-200 border rounded" />
        <select className="input-style border-gray-200 border rounded">
          <option>Category Name</option>
        </select>
        <input type="date" className="input-style border-gray-200 border rounded" />
      </div>

      {/* Description with Toolbar */}
      <div className="mt-4">
        <h3 className="font-medium mb-1">Description</h3>
        <div className="flex items-center space-x-2 mb-1 text-sm text-gray-600">
          <span>Normal</span>
          <button className="hover:text-black">B</button>
          <button className="hover:text-black italic">I</button>
          <button className="hover:text-black underline">U</button>
          <button className="hover:text-black">•</button>
          <button className="hover:text-black">1.</button>
          <button className="hover:text-black">T</button>
        </div>
        <textarea className="w-full h-24 border border-gray-300 rounded p-2" placeholder="Enter category description..." />
      </div>

      {/* Status */}
      <div className="mt-4">
        <h3 className="font-medium mb-1">Status</h3>
        <label className="mr-4">
          <input type="radio" name="status" /> Active
        </label>
        <label>
          <input type="radio" name="status" defaultChecked /> Disabled
        </label>
      </div>

      {/* Meta Data */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Meta Data</h2>
        <input type="text" placeholder="Meta Title" className="input-style border-gray-200 border rounded" />
        <textarea placeholder="Meta Description" className="w-full h-20 mt-2 border border-gray-300 rounded p-2" />
      </div>

      {/* Buttons */}
      <div className="mt-6 flex gap-2">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Create Product</button>
        <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400">Save</button>
      </div>
    </div>
     </div>
  );
};

const inputStyle = "w-full border border-gray-300 rounded p-2";

export default AddCategory;

