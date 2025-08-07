import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signing from '../assets/signin-g.svg'; // Replace with your image path
import SignNavbar from '../components/SignNavbar';
import axios from 'axios';
import e from 'cors';

const SignIn = () => {


  const [loginformdata, setloginformdata]=useState({})

  const handleloginform=(e)=>{
    setloginformdata((prev)=>({...prev, [e.target.name]:e.target.value}))
  }



  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://surender-backend.vercel.app/signin', {
        loginformdata
      });

      if (res.data.status) {
        alert('Login successful ✅');
      } else {
        alert('Invalid email or password ❌');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Try again later.');
    }
  };



  return (




    <div className=''>




        <div className="bg-gray-50 min-h-screen">
  <SignNavbar question='Do not have a account?' linkto='/signup' linktext='Sign Up'/>

  <div className="flex items-center justify-center px-4 py-10">
    <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-md rounded-xl overflow-hidden">
      
      {/* Left Image */}
      <div className="hidden md:flex items-center justify-center bg-white">
        <img src={signing} alt="Sign In" className="w-4/5" />
      </div>

      {/* Right Form */}
      <div className="p-10 flex flex-col justify-center">
       
          <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign in to FreshCart</h2>
          <p className="text-gray-600 mb-6">Welcome back to FreshCart! Enter your email to get started.</p>

          <form onSubmit={handlelogin}>
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                type="email"
                name='email'
                onChange={handleloginform}
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Password</label>
              <input
                type="password"
                name='password'
                onChange={handleloginform}
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              />
            </div>

            <div className="flex items-center justify-between mb-6 text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="form-checkbox" />
                Remember me
              </label>
              <span>
                Forgot password?{' '}
                <Link to="/forgotpassword" className="text-lime-600 font-semibold hover:underline">
                  Reset It
                </Link>
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
            >
              Sign In
            </button>
          </form>

          <p className="text-sm mt-4 text-center">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-lime-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

        

  

      </div>
  );
};

export default SignIn;
