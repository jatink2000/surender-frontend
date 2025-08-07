import React from 'react'

import sliderimage1 from '../assets/slider-image-1.jpg'

import { RiMoneyDollarCircleLine } from "react-icons/ri";
import icons8shoppingcart100 from '../assets/icons8-shopping-cart-100.png'
import icons8customers48 from '../assets/icons8-customers-48.png'
import icons8moneybagpounds64 from '../assets/icons8-money-bag-pounds-64.png'
import SmallNav from '../components/SmallNav';


const Dashboard = () => {
  return (
    <>
      <div className=''>
        {/* <div className='flex flex-row justify-between'>

          <input
            type="text"
            placeholder='search'
            className="bg-white border border-gray-300 text-gray-900 rounded-md px-2 py-2 mb-10 focus:outline-none focus:ring-4 focus:ring-green-200"
          />

          <div className='flex flex-row gap-4 justify-between '>
            <IoMdNotificationsOutline size={27} className='mt-1' />
            <CgProfile size={36} />

          </div>
        </div> */}

        <SmallNav/>
        <div className='w-full h-auto'>

          <div style={{
            backgroundImage: `URL(${sliderimage1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} className='w-full h-64 rounded-2xl relative'>
            <div className='absolute left-15 flex-col flex gap-3 top-15 items-start '>

              <h1 className='text-4xl font-semibold '>Welcome Back! FreshCart</h1>
              <p className='text-gray-500 font-semibold'>FreshCart is simple & clean design for developer and designer.</p>
              <button className='items-start inline-block bg-lime-500 mt-2 text-white font-semibold px-5 py-2 rounded cursor-pointer '>Create Product</button>
            </div>

          </div>
        </div>

        <div className='grid grid-cols-3 justify-center gap-10 mt-10'>
          <div className='border-gray-100 border rounded-xl shadow'>
            <div className='flex flex-col m-8'>
              <div className='flex flex-row items-center justify-between mb-10'>
                <h1 className='text-xl font-semibold'>Earnings</h1>
                <img src={icons8moneybagpounds64} className='size-13' alt="" />
              </div>
              <h1 className='text-2xl font-bold'>$93,438.78</h1>
              <p className='text-gray-500 font-semibold'>Monthly revenue</p>

            </div>
          </div>
          <div className='border-gray-100 border rounded-xl shadow'>
            <div className='flex flex-col m-8'>
              <div className='flex flex-row items-center justify-between mb-10'>
                <h1 className='text-xl font-semibold'>Orders</h1>
                <img src={icons8shoppingcart100} className='size-13' alt="" />
              </div>
              <h1 className='text-2xl font-bold'>42,339</h1>
              <p className='text-gray-500 font-semibold'>35+New Sales</p>

            </div>
          </div>
          <div className='border-gray-100 border rounded-xl shadow'>
            <div className='flex flex-col m-8'>
              <div className='flex flex-row items-center justify-between mb-10'>
                <h1 className='text-xl font-semibold'>Customer</h1>
                <img src={icons8customers48} className='size-10' alt="" />

              </div>
              <h1 className='text-2xl font-bold'>39,354</h1>
              <p className='text-gray-500 font-semibold'>30+new in 2 days</p>

            </div>
          </div>
        </div>

       <div className='shadow mt-10 bg-white p-6 rounded-xl'>
  <h1 className='text-2xl font-medium mb-4'>Recent Orders</h1>
  <div className="overflow-x-auto">
    <table className='min-w-full divide-y divide-gray-200'>
      <thead className='bg-gray-100'>
        <tr>
          <th className='px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider'>Order Number</th>
          <th className='px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider'>Product Name</th>
          <th className='px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider'>Order Date</th>
          <th className='px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider'>Price</th>
          <th className='px-6 py-3 text-left text-sm font-semibold text-gray-600 uppercase tracking-wider'>Status</th>
        </tr>
      </thead>
      <tbody className='bg-white divide-y divide-gray-200'>
        <tr className="hover:bg-gray-50">
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>#FC0005</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>iPhone 15</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>2025-07-18</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>$999</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm'>
            <span className='px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold'>Delivered</span>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>#FC0006</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>Samsung TV</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>2025-07-19</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-700'>$499</td>
          <td className='px-6 py-4 whitespace-nowrap text-sm'>
            <span className='px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold'>Pending</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

      </div>
    </>
  )
}

export default Dashboard
