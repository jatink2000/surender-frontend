import React, { useState } from 'react'
import SmallNav from '../components/SmallNav'
import product1 from '../assets/popularproducts/product-img-1.jpg';
import product2 from '../assets/popularproducts/product-img-2.jpg';
import product3 from '../assets/popularproducts/product-img-3.jpg';
import product4 from '../assets/popularproducts/product-img-4.jpg';
import product5 from '../assets/popularproducts/product-img-5.jpg';
import product6 from '../assets/popularproducts/product-img-6.jpg';
import product7 from '../assets/popularproducts/product-img-7.jpg';
import product8 from '../assets/popularproducts/product-img-8.jpg';
import product9 from '../assets/popularproducts/product-img-9.jpg';
import product10 from '../assets/popularproducts/product-img-10.jpg';
import { useNavigate } from 'react-router-dom';

const Category = () => {


  const navigate = useNavigate();

  const handlenavigate = () => {
    navigate('/dashboard/categories/addcategory')
  }



  const productss = [
    { id: 1, name: 'Noodles Bowl', price: '89', image: product1, category: 'Instant Food', status: 'Active', createdAt: '24 Nov 2022' },
    { id: 2, name: 'NutriBakes', price: '110', image: product2, category: 'Bakery & Biscuits', status: 'Draft', createdAt: '20 Nov 2022' },
    { id: 3, name: 'Coffee Bar', price: '75', image: product3, category: 'Snack & Munchies', status: 'Active', createdAt: '14 Nov 2022' },
    { id: 4, name: 'Lassi Chugga', price: '60', image: product4, category: 'Dairy, Bread & Eggs', status: 'Deactive', createdAt: '08 Nov 2022' },
    { id: 5, name: 'Raspberry', price: '120', image: product5, category: 'Fruit & Veggies', status: 'Active', createdAt: '01 Nov 2022' },
    { id: 6, name: 'Blueberry Yogurt', price: '130', image: product6, category: 'Dairy, Bread & Eggs', status: 'Active', createdAt: '02 Nov 2022' },
    { id: 7, name: 'Oats Jar', price: '70', image: product7, category: 'Grocery', status: 'Draft', createdAt: '10 Nov 2022' },
    { id: 8, name: 'Choco Cake', price: '95', image: product8, category: 'Bakery & Biscuits', status: 'Active', createdAt: '15 Nov 2022' },
    { id: 9, name: 'Burgermix', price: '150', image: product9, category: 'Instant Food', status: 'Deactive', createdAt: '18 Nov 2022' },
    { id: 10, name: 'Apple Puree', price: '99', image: product10, category: 'Grocery', status: 'Active', createdAt: '19 Nov 2022' },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Draft':
        return 'bg-yellow-100 text-yellow-700';
      case 'Deactive':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };


  const [openDropdownId, setOpenDropdownId] = useState(null);


  return (
    <div>
      <SmallNav button='Add New Category' onclickk={handlenavigate} />
      <div className='mt-10 mx-5 shadow border border-gray-200 rounded-lg bg-white'>
        <div className='flex justify-between p-5'>
          <input
            type='text'
            placeholder='Search Products'
            className='border border-gray-300 rounded px-4 py-2 w-1/3'
          />
          <select className='border border-gray-300 rounded px-4 py-2'>
            <option>Status</option>
            <option>Active</option>
            <option>Draft</option>
            <option>Deactive</option>
          </select>
        </div>

        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr className='text-left text-gray-600'>
              <th className='px-6 py-3 text-sm font-semibold'><input type="checkbox" name="" id="" /></th>
              <th className='px-6 py-3 text-sm font-semibold'>Icon</th>
              <th className='px-6 py-3 text-sm font-semibold'>Name</th>
              <th className='px-6 py-3 text-sm font-semibold'>Product</th>
              <th className='px-6 py-3 text-sm font-semibold'>Status</th>
              <th className='px-6 py-3 text-sm font-semibold'></th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-100'>
            {productss.map((item) => (
              <tr key={item.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4'><input type="checkbox" name="" id="" /></td>
                <td className='px-6 py-4'>
                  <img src={item.image} alt={item.name} className='h-10 w-10 object-cover rounded' />
                </td>
                <td className='px-6 py-4 text-sm font-medium text-gray-900'>{item.name}</td>
                <td className='px-6 py-4 text-sm text-gray-700'>{item.category}</td>
                <td className='px-6 py-4'>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>
                {/* <td className='px-6 py-4 text-right text-gray-400'>⋮</td> */}
                <td className='px-6 py-4 text-right relative'>
                  <button
                    className='text-gray-500 hover:text-gray-700 focus:outline-none'
                    onClick={() => setOpenDropdownId(openDropdownId === item.id ? null : item.id)}
                  >
                    ⋮
                  </button>

                  {openDropdownId === item.id && (
                    <div className='absolute right-0 z-10 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                      <div className='py-1'>
                        <button className='block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left'>
                          ✏️ Edit
                        </button>
                        <button className='block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left'>
                          🗑️ Delete
                        </button>
                      </div>
                    </div>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Category
