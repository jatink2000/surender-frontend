import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import english from '../assets/english.svg';
import freshcartlogo from '../assets/freshcart-logo.svg';
import { CiHeart, CiUser } from 'react-icons/ci';
import { TiShoppingCart } from 'react-icons/ti';
import { RiFunctionLine } from 'react-icons/ri';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ onCartClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Store', path: '/store' },
    { name: 'Mega Menu', path: '/mega-menu' },
    { name: 'Pages', path: '/pages' },
    { name: 'Account', path: '/account' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Docs', path: '/docs' },
  ];

  return (
    <header className="bg-white z-50 shadow-sm">
      {/* Top Banner */}
      <div className='bg-gray-100'>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-1 flex justify-between items-center">
          <span className="text-sm text-gray-600">Super Value Deals - Save more with coupons</span>
          <div className='flex items-center gap-2'>
            <img src={english} alt="lang" className="w-4 h-4" />
            <span className="text-sm">English</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-4 flex justify-between items-center flex-wrap gap-4">
          {/* Logo */}
          <Link to="/">
            <img src={freshcartlogo} alt="logo" className="w-32 sm:w-40 lg:w-48" />
          </Link>

          {/* Search + Location */}
          <div className="hidden lg:flex items-center gap-4 flex-grow max-w-3xl">
            <div className="relative w-full">
              <input
                type="search"
                placeholder="Search for products..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none"
              />
              <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
            </div>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-6-5.686-6-10a6 6 0 1112 0c0 4.314-6 10-6 10z" />
                <circle cx="12" cy="11" r="3" />
              </svg>
              Location
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <Link to="/wishlist" className="relative hover:text-green-500 transition">
              <CiHeart size={24} />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">4</span>
            </Link>
            <Link to='/signin'>
            <CiUser size={24} className="cursor-pointer hover:text-green-500 transition" />
            </Link>
            <div className="relative cursor-pointer hover:text-green-500 transition" onClick={onCartClick}>
              <TiShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-1">5</span>
            </div>
            <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Nav Section */}
      <div className="hidden lg:block border-t">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-20 py-3 flex items-center gap-6">
          <button className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium">
            <RiFunctionLine size={20} />
            All Departments
          </button>
          <ul className="flex items-center gap-6 text-sm font-medium text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="hover:text-green-600 transition">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white border-b lg:hidden px-4 py-4 space-y-4">
          <input
            type="search"
            placeholder="Search for products..."
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none"
          />
          <button className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-full px-4 py-2 text-sm text-gray-700">
            Use my location
          </button>
          <button className="w-full flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium justify-center">
            <RiFunctionLine size={20} />
            All Departments
          </button>
          <ul className="flex flex-col gap-2 text-sm font-medium text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="block hover:text-green-600">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
