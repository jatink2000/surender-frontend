import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fpg from '../assets/fp-g.svg'; 
import SignNavbar from '../components/SignNavbar';
import axios from 'axios';

const ForgotPassword = () => {

const [forgotformdata, setforgotformdata]=useState({});

const handleforgotform=(e)=>{
  setforgotformdata((prev)=>({...prev, [e.target.name]:e.target.value}))
  
}

const handleforgot=async()=>{
  axios.post("https://surender-backend.vercel.app/forgotpassword", forgotformdata)
}

  return (
<div>
<div className='border-b border-gray-200 shadow  '>

        <SignNavbar question='Do not have a account?' linkto='/signup' linktext='Sign Up' />
</div>

    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center justify-between py-10">
       
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img src={fpg} alt="Forgot Password" className="max-w-[80%] md:max-w-[60%]" />
        </div>

      
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">Forgot your password?</h2>
          <p className="text-gray-600 mb-6">
            Please enter the email address associated with your account and we will email you a link to reset your password.
          </p>
          <form className="space-y-4" onSubmit={handleforgot}>
            <input
              type="email"
              name='email'
              onChange={handleforgotform}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="w-full py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-md"
            >
              Reset Password
            </button>
            <Link to="/login">
              <button

                type="button"
                className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-md"
              >
                Back
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
</div>
  );
};

export default ForgotPassword;
