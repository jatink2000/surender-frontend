import React, { useState } from 'react';
import SmallNav from '../components/SmallNav';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddProduct = () => {
  const navigate = useNavigate();

  const [AddProductData, setAddProductData] = useState({
    name: '',
    category: '',
    weight: '',
    unit: '',
    image: '',
    description: '',
    code: '',
    sku: '',
    inStock: true,
    status: 'active',
    regularPrice: '',
    salePrice: '',
    metaTitle: '',
    metaDescription: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAddProductData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    console.log("Submitting...");
    try {
      const res = await axios.post('http://localhost:8080/addproducts', AddProductData);
      console.log("Response from backend:", res.data);

      alert('Product created successfully!');
      navigate('/dashboard/products');
    } catch (error) {
      alert('Failed to create product');
      console.error(error);
    }
  };

  return (
    <div>
      <SmallNav button="Back to Products" onclickk={() => navigate('/dashboard/products')} />

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left Section */}
        <div className="md:col-span-2 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-4">Product Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              type="text"
              placeholder="Product Name"
              className="w-full border border-gray-200 rounded p-2"
              value={AddProductData.name}
              onChange={handleInputChange}
            />
            <select
              name="category"
              className="w-full border border-gray-200 rounded p-2"
              value={AddProductData.category}
              onChange={handleInputChange}
            >
              <option value="">Product Category</option>
              <option value="Dairy, Bread & Eggs">Dairy, Bread & Eggs</option>
              <option value="Snacks & Munchies">Snacks & Munchies</option>
              <option value="Fruits & Vegetables">Fruits & Vegetables</option>
              <option value="Bakery & Biscuits">Bakery & Biscuits</option>
              <option value="Instant Food">Instant Food</option>
            </select>
            <input
              name="weight"
              type="text"
              placeholder="Weight"
              className="w-full border border-gray-200 rounded p-2"
              value={AddProductData.weight}
              onChange={handleInputChange}
            />
            <select
              name="unit"
              className="w-full border border-gray-200 rounded p-2"
              value={AddProductData.unit}
              onChange={handleInputChange}
            >
              <option value="">Select Units</option>
              <option value="kg">Kilogram (kg)</option>
              <option value="g">Gram (g)</option>
              <option value="pcs">Pieces (pcs)</option>
            </select>
          </div>

          {/* Image URL */}
          <div className="mt-6">
            <h3 className="mb-2 font-semibold">Product Image URL</h3>
            <input
              name="image"
              type="text"
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded p-2"
              value={AddProductData.image}
              onChange={handleInputChange}
            />
            {AddProductData.image && (
              <div className="mt-4">
                <img src={AddProductData.image} alt="Preview" className="max-h-40 mx-auto" />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mt-6">
            <h3 className="mb-2 font-semibold">Product Description</h3>
            <textarea
              name="description"
              className="w-full h-32 border border-gray-300 rounded p-2"
              placeholder="Enter product description..."
              value={AddProductData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-4">
          {/* Stock & Status */}
          <div className="bg-white p-4 rounded shadow">
            <label className="flex items-center gap-2 mb-2">
              <input
                type="checkbox"
                name="inStock"
                checked={AddProductData.inStock}
                onChange={handleInputChange}
              />
              In Stock
            </label>
            <input
              name="code"
              type="text"
              placeholder="Enter Product Code"
              className="w-full border border-gray-200 rounded p-2"
              value={AddProductData.code}
              onChange={handleInputChange}
            />
            <input
              name="sku"
              type="text"
              placeholder="Enter Product SKU"
              className="w-full mt-2 border border-gray-200 rounded p-2"
              value={AddProductData.sku}
              onChange={handleInputChange}
            />
            <div className="mt-4">
              <label className="block font-medium mb-1">Status</label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="status"
                  value="active"
                  checked={AddProductData.status === 'active'}
                  onChange={handleInputChange}
                /> Active
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="disabled"
                  checked={AddProductData.status === 'disabled'}
                  onChange={handleInputChange}
                /> Disabled
              </label>
            </div>
          </div>

          {/* Price */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Product Price</h3>
            <input
              name="regularPrice"
              type="number"
              placeholder="Regular Price"
              className="w-full border border-gray-200 rounded p-2"
              value={AddProductData.regularPrice}
              onChange={handleInputChange}
            />
            <input
              name="salePrice"
              type="number"
              placeholder="Sale Price"
              className="w-full mt-2 border border-gray-200 rounded p-2"
              value={AddProductData.salePrice}
              onChange={handleInputChange}
            />
          </div>

          {/* Meta Data */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-2">Meta Data</h3>
            <input
              name="metaTitle"
              type="text"
              placeholder="Meta Title"
              className="w-full border border-gray-200 rounded p-2"
              value={AddProductData.metaTitle}
              onChange={handleInputChange}
            />
            <textarea
              name="metaDescription"
              placeholder="Meta Description"
              className="w-full h-20 mt-2 border border-gray-300 rounded p-2"
              value={AddProductData.metaDescription}
              onChange={handleInputChange}
            />
          </div>

          {/* Submit Button */}
          <button
            className="bg-green-500 text-white py-2 rounded shadow hover:bg-green-600"
            onClick={handleSubmit}
            type='submit'
          >
            Create Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
