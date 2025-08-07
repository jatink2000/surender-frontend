import React from 'react';
import freshcartlogo from '../assets/freshcart-logo.svg';
import { Link } from 'react-router-dom';

const SignNavbar = ({ question, linktext, linkto }) => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-4 shadow-sm bg-white">
      <Link to='/'>
      <img src={freshcartlogo} alt="FreshCart Logo" className="h-8" />
      </Link>

      <p className="text-sm text-gray-600">
       {question}{' '}
        <Link to={linkto} className="text-lime-600 font-semibold hover:underline">
          {linktext}
        </Link>
      </p>
    </div>
  );
};

export default SignNavbar;
