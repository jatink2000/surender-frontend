import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SmallNav from '../components/SmallNav';

const Customers = () => {
  const [getuser, setgetuser] = useState([]);
  const [openDropdownId, setOpenDropdownId] = useState(null);

  useEffect(() => {
    allusers();
  }, []);

  const allusers = () => {
    axios
      .get('https://surender-backend.vercel.app/allusers')
      .then((res) => {
        if (res.data.status) {
          setgetuser(res.data.ouruser);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <SmallNav button='Add New Customer' />
      <div className='p-5'>
        <input
          type='text'
          placeholder='Search Customers'
          className='mb-4 border border-gray-300 rounded px-4 py-2 w-1/3'
        />

        <table className='min-w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
            <tr className='text-left text-gray-600'>
              <th className='px-6 py-3 text-sm font-semibold'>
                <input type='checkbox' />
              </th>
              <th className='px-6 py-3 text-sm font-semibold'>Image</th>
              <th className='px-6 py-3 text-sm font-semibold'>Full Name</th>
              <th className='px-6 py-3 text-sm font-semibold'>Category</th>
              <th className='px-6 py-3 text-sm font-semibold'>Status</th>
              <th className='px-6 py-3 text-sm font-semibold'>Email</th>
              <th className='px-6 py-3 text-sm font-semibold'>Created At</th>
              <th className='px-6 py-3 text-sm font-semibold'></th>
            </tr>
          </thead>
          <tbody className='bg-white divide-y divide-gray-100'>
            {getuser.map((item, index) => (
              <tr key={item._id || index} className='hover:bg-gray-50'>
                <td className='px-6 py-4'>
                  <input type='checkbox' />
                </td>
                <td className='px-6 py-4'>
                  <img
                    src={`https://ui-avatars.com/api/?name=${item.firstname}+${item.lastname}`}
                    alt={item.firstname}
                    className='h-10 w-10 object-cover rounded-full'
                  />
                </td>
                <td className='px-6 py-4 text-sm font-medium text-gray-900'>
                  {item.firstname} {item.lastname}
                </td>
                <td className='px-6 py-4 text-sm text-gray-700'>Customer</td>
                <td className='px-6 py-4'>
                  <span className='text-xs font-medium px-3 py-1 rounded-full bg-green-100 text-green-800'>
                    Active
                  </span>
                </td>
                <td className='px-6 py-4 text-sm text-gray-900'>{item.email}</td>
                <td className='px-6 py-4 text-sm text-gray-700'>—</td>
                <td className='px-6 py-4 text-right relative'>
                  <button
                    className='text-gray-500 hover:text-gray-700 focus:outline-none'
                    onClick={() => setOpenDropdownId(openDropdownId === item._id ? null : item._id)}
                  >
                    ⋮
                  </button>

                  {openDropdownId === item._id && (
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

export default Customers;
