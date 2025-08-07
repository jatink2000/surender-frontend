import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signupg from '../assets/signup-g.svg'; 
import SignNavbar from '../components/SignNavbar';
import axios from 'axios';

const SignUp = () => {

  const [formdata, setformdata] = useState({})

  const handleform = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


const [getuser, setgetuser]=useState([])


  useEffect(() => {
    allusers()
  }, [])

  let allusers = () => {
    axios.get('http://localhost:8080/allusers').then((res) => {
      if (res.data.status) {
        setgetuser(res.data.ouruser)
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  const go=useNavigate()


  const filteremail=getuser.filter(data=>data.email===formdata.email)
 const alreasyuser=filteremail[0]

  const handlesignup = () => {

    if(alreasyuser){
      alert('already signup')
      go('/signin')
    }else{
3
      axios.post('http://localhost:8080/signup',{formdata}).then((res) => {
        // console.log(res.data)
        if (res.data.status) {
          alert(res.data.msg)
             go('/signin')
        } else {
          alert(res.data.msg)
        }
      }).catch((err) => { console.log(err) })
    }


  }


  return (
    <div className="bg-gray-50 min-h-screen">
      <SignNavbar question='already have a account?' linkto='/signin' linktext='Sign In' />

      <div className="flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-md rounded-xl overflow-hidden">

          {/* Left image */}
          <div className="hidden md:flex items-center justify-center bg-white">
            <img src={signupg} alt="Sign Up Illustration" className="w-4/5" />
          </div>

          {/* Right Sign Up Form */}
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Get Start Shopping</h2>
            <p className="text-gray-600 mb-6">Welcome to FreshCart! Enter your email to get started.</p>

            <form onSubmit={(e) => {
              e.preventDefault();
              handlesignup();
            }}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  name='firstname'
                  placeholder="First Name"
                  onChange={handleform}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
                <input
                  type="text"
                  name='lastname'
                  placeholder="Last Name"
                  onChange={handleform}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>

              <div className="mb-4">
                <input
                  type="email"
                  name='email'
                  placeholder="Email"
                  onChange={handleform}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  name='password'
                  placeholder="Password"
                  onChange={handleform}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-lime-600 hover:bg-lime-700 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
              >
                Register
              </button>
            </form>

            <p className="text-sm text-gray-600 mt-4 text-center">
              By continuing, you agree to our{' '}
              <Link to="#" className="text-lime-600 font-medium underline">Terms of Service</Link>{' '}
              &amp;{' '}
              <Link to="#" className="text-lime-600 font-medium underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
