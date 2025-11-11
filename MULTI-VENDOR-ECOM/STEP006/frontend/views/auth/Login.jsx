// =======================  File: src/pages/Register.jsx  ======================//
import React from 'react'
import { Link } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useState } from 'react';

const Login = () => {
          const [ state,setState] = useState(
              {
                  
                  email:"",
                  password:""
                  
              }
          )
      
          const inputHandler = (e) => {
              setState({...state,[e.target.name]:e.target.value})
          }
      
          const submit = (e) => {
              e.preventDefault();
              console.log("Form submitted:", state);
          }
  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[400px] text-white'>
        <div className='bg-[#6f68d1] p-6 rounded-md'>
          <h2 className='text-2xl mb-3 flex justify-center  items-center'>welcome to JS Store</h2>
          <p className='text-sm mb-3 mt-2 flex justify-center  items-center'>Please Sign In your account</p>

          <form onSubmit={submit}>


            {/* Email */}
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='email'>Email</label>
              <input
                onChange={inputHandler}
                value={state.email} 
                name="email"
                type='email'
                id='email'
                placeholder='Email'
                required
                className='w-full px-4 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-white'
              />
            </div>

            {/* Password */}
            <div className='flex flex-col w-full gap-1 mb-3'>
              <label htmlFor='password'>Password</label>
              <input
                onChange={inputHandler}
                value={state.password} 
                name="password"
                type='password'
                id='password'
                placeholder='Password'
                required
                className='w-full px-4 py-2 outline-none border border-slate-700 bg-transparent rounded-md text-white'
              />
            </div>



            {/* Sign Up Button */}
            <button
              type='submit'
              className='w-full bg-slate-800 rounded-md hover:bg-[#3b37a6] text-white px-4 py-2 mb-3'
            >
              Sign In
            </button>

            {/* Sign In link */}
            <div className='flex items-center mb-3 gap-3 justify-center text-sm'>
              <p>
                Dont have  have an account?
                <Link className='font-bold ml-1' to='/register'>
                  Sign Up
                </Link>
              </p>
            </div>

            {/* Divider */}
            <div className='w-full flex items-center mb-3 justify-center'>
              <div className='w-[45%] bg-slate-800 h-[1px]'></div>
              <div className='w-[10%] flex items-center justify-center'>
                <span className='pb-1'>Or</span>
              </div>
              <div className='w-[45%] bg-slate-800 h-[1px]'></div>
            </div>

            {/* Social Buttons */}
            <div className='flex items-center gap-3 justify-center'>
              <div className='w-[135px] h-[35px]   bg-gray-300 rounded-md hover:bg-gray-100 flex shadow-lg overflow-hidden  justify-center cursor-pointer items-center  py-2'>
                <span><FcGoogle /></span> 
              </div>
              <div className='w-[135px] h-[35px] bg-blue-400 rounded-md hover:bg-blue-600 flex shadow-lg overflow-hidden  justify-center cursor-pointer items-center  py-2'>
                <span><FaFacebook /></span>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
