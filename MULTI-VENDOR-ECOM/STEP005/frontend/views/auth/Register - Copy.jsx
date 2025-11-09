import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [ state,setState] = useState(
        {
            name:"",
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
    <div className='min-w-screen min-h-screen bg-[#cdcae9] flex justify-center items-center '>
        <div className='w-[400px] text-[#ffffff] p-2 '>
            <div className='bg-[#6f68d1] p-4 rounded-md '>
                <h2 className='text-xl mb-3  '>welcome to JS Store </h2>
                <p className=' text-sm mb-3 mt-2 '> Please register your account</p>
                <form onSubmit={submit}>
                    <div  className='flex flex-col w-full gap-1 mb-3 justify-center items-center'>
                        <label htmlFor="name" >Username</label>
                        <input  name="name" value={state.name} onChange={inputHandler}  type="text" id="name" placeholder='Name' required  className='p-2 px-7 py-2 outline-none border border-slate-700 bg-transparent  rounded-md text-white'/>
                    </div>

                    <div  className='flex flex-col w-full gap-1 mb-3 justify-center items-center'>
                        <label htmlFor="email"> Email </label>
                        <input name="email" value={state.email} type="email" id="email" onChange={inputHandler}  placeholder='Email' required  className='p-2 px-7 py-2 outline-none border border-slate-700 bg-transparent  rounded-md text-white'/>
                    </div>

                        
                    <div  className='flex flex-col w-full gap-1 mb-3 justify-center items-center'>
                        <label htmlFor="password">Password</label>
                        <input name="password" value={state.password} type="password" id="password" onChange={inputHandler}   placeholder='Password' required  className='p-2 px-7 py-2 outline-none border border-slate-700 bg-transparent  rounded-md text-white'/>
                    </div>
 
                    <div  className='flex w-full gap-3 mb-3 justify-center items-center'>
                       <input name="checkbox" type="checkbox" id="remember" className='w-4 h-4 text-blue-600 bg-green-400 rounded border-gray-300 focus:ring-blue-500'/>
                        <label htmlFor="remember" className='text-sm'>I agree to privacy policy & treams</label>
                    </div>

                      <button type="submit" className='w-full bg-slate-800  p-1 mt-3 rounded-md hover:bg-[#3b37a6] text-white px-3 py-2 mb-3 '>Sign Up</button>
                    <div className='flex items-center mb-3 gap-3 justify-center text-sm'>
                       <p> Already have an account?  <Link className='font-bold' to='/login'> Sign In </Link></p> 
                    </div>
                    <div className='w-full flex items-center mb-3  justify-center '>
                        <div className='w-[45%] bg-slate-800 h-[1px]'></div>
                        <div className='w-[10%] flex items-center'>
                            <span className='pb-1'>Or</span>
                        </div>
                        <div className='w-[45%] bg-slate-800 h-[1px]'></div>  
                    </div>
                    <div className=' flex items-center gap-3  justify-center '>
                        <div>
                            <button className='bg-yellow-400 p-2 rounded-md hover:bg-[#3b37a6] text-white px-10 py-2 mb-3 '>Google</button>
                        </div>
                        <div>

                            <button className='bg-blue-400 p-2 rounded-md hover:bg-[#3b37a6] text-white px-10 py-2 mb-3 '>Facebook</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
}

export default Register



