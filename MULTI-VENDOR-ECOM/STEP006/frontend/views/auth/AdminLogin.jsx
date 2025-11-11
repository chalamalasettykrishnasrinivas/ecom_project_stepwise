// =======================  File: src/pages/Register.jsx  ======================//
import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { admin_login } from '../../store/Reducers/authReducers';

const AdminLogin = () => {
  const dispatch = useDispatch();

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
              dispatch(admin_login (state));
              console.log("Form submitted:", state);
          }
  return (
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center'>
      <div className='w-[400px] text-white'>
        <div className='bg-[#6f68d1] p-6 rounded-md'>
          {/* <h2 className='text-2xl mb-3 flex justify-center  items-center'>welcome to JS Store</h2>
          <p className='text-sm mb-3 mt-2 flex justify-center  items-center'>Please Sign In your account</p> */}
        <div className='h-[70px] flex justify-center items-center'>
            <div className='w-[180px] h-[50px] mb-10'>
                 <img  className="w-full" src='http://localhost:5173/JSstoreLogo.png' alt='JSstorelogo'/>
            </div>
        </div>
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
              className='w-full bg-blue-400 rounded-md hover:bg-blue-300 text-white hover:text-blue-900 font-bold px-4 py-2 mb-3 mt-3'
            >
              Sign In
            </button>





            
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
