import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import freshcartlogo from '../assets/freshcart-logo.svg';
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { BsPeople } from "react-icons/bs";
import { PiStarThin } from "react-icons/pi";
import { HiArrowTurnLeftDown } from "react-icons/hi2";

const DashNavbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `flex items-center gap-3 px-4 py-2 rounded-md font-medium text-sm ${
      isActive(path)
        ? 'bg-green-100 text-green-800'
        : 'text-gray-600 hover:bg-gray-100'
    }`;

  return (
    <div className='w-64 min-h-screen bg-[#f8f9fa] border-r px-5 py-6 flex flex-col'>
      <Link to='/'>
        <img src={freshcartlogo} alt="FreshCart Logo" className="w-32 mb-10" />
      </Link>

      <nav className='flex flex-col gap-1'>
        <Link to='/dashboard' className={linkClass('/dashboard')}>
          <IoHomeOutline className="text-lg" />
          Dashboard
        </Link>

        <p className='mt-5 mb-1 text-xs text-gray-400 font-semibold uppercase'>Store Management</p>

        <Link to='/dashboard/products' className={linkClass('/dashboard/products')}>
          <IoCartOutline className="text-lg" />
          Products
        </Link>

        <Link to='/dashboard/categories' className={linkClass('/dashboard/categories')}>
          <TfiMenuAlt className="text-lg" />
          Categories
        </Link>

        <Link to='/dashboard/orders' className={linkClass('/dashboard/orders')}>
          <IoCartOutline className="text-lg" />
          Orders
        </Link>

        <Link to='/dashboard/sellers' className={linkClass('/dashboard/sellers')}>
          <IoHomeOutline className="text-lg" />
          Sellers / Vendors
        </Link>

        <Link to='/dashboard/customers' className={linkClass('/dashboard/customers')}>
          <BsPeople className="text-lg" />
          Customers
        </Link>

        <Link to='/dashboard/reviews' className={linkClass('/dashboard/reviews')}>
          <PiStarThin className="text-lg" />
          Reviews
        </Link>

        <Link to='/dashboard/menulevel' className={linkClass('/dashboard/menulevel')}>
          <HiArrowTurnLeftDown className="text-lg" />
          Menu Level
        </Link>
      </nav>
    </div>
  );
};

export default DashNavbar;
