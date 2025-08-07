import React, { useEffect, useState } from 'react';
import SmallNav from '../components/SmallNav';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Products = () => {

const [productstate, setproductstate]=useState([])




    useEffect(() => {
      productapi()
    }, [])

  const productapi=async()=>{
   await axios.get('http://localhost:8080/allproducts').then((res)=>{
    console.log(res.data)
      if(res.data.status){
        setproductstate(res.data.ouruser)
      }
    }).catch((err)=>{
      console.log('erroe had', err)
    })
  }




  const navigate = useNavigate()

  const handlenavigate = () => {
    navigate('/dashboard/products/addproducts')
  }




  const [openDropdownId, setOpenDropdownId] = useState(null);


  return (
    <div>
      <SmallNav button='Add Product' onclickk={handlenavigate}/>
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
              <th className='px-6 py-3 text-sm font-semibold'>Image</th>
              <th className='px-6 py-3 text-sm font-semibold'>Product Name</th>
              <th className='px-6 py-3 text-sm font-semibold'>Category</th>
              <th className='px-6 py-3 text-sm font-semibold'>Status</th>
              <th className='px-6 py-3 text-sm font-semibold'>Price</th>
              <th className='px-6 py-3 text-sm font-semibold'>Created At</th>
              <th className='px-6 py-3 text-sm font-semibold'></th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-100'>
            {productstate.map((item) => (
              <tr key={item.id} className='hover:bg-gray-50'>
                <td className='px-6 py-4'><input type="checkbox" name="" id="" /></td>
                <td className='px-6 py-4'>
                {console.log('Image URL:', item.image)}
                  <img src={item.image} alt={item.name} className='h-10 w-10 object-cover rounded' />
                </td>
                {console.log(item.name)}
                <td className='px-6 py-4 text-sm font-medium text-gray-900'>{item.name}</td>
                <td className='px-6 py-4 text-sm text-gray-700'>{item.category}</td>
                <td className='px-6 py-4'>
                  <span className='text-xs font-medium px-3 py-1 rounded-full' >
                    {item.status}
                  </span>
                </td>
                {console.log(item.price)}
                <td className='px-6 py-4 text-sm text-gray-900'>₹{item.salePrice}</td>
                <td className='px-6 py-4 text-sm text-gray-700'>{item.createdAt}</td>
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
  );
};

export default Products;
