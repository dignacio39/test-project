import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <section className="h-screen grid grid-cols-1">
      <div className="grid justify-items-center">
        <div className="relative h-96 w-96">
          <div className="absolute inset-0 py-40">
            <div className='pb-8'>
              <h6 className='text-2xl font-bold pb-3'>Log in to continue...</h6>
              <small className='font-medium text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur adipisicing elit</small>
            </div>
            <form action="">
              <div>
                <p className='text-md font-medium text-slate-500'>Email</p>
                <input type="email" class="px-4 py-3 rounded-sm border-b-4 w-full"></input>
              </div>
              <div>
                <p className='text-md font-medium text-slate-500'>Password</p>
                <input type="text" class="px-4 py-3 rounded-sm border-b-4 w-full"></input>
              </div>
              <div className='grid grid-cols-3 py-6'>
                <div className='col-start-1'>
                  <p className='text-md font-medium text-slate-600'>Remember Me</p>
                </div>
                <div className='col-start-3'>
                  <p className='text-md font-medium text-slate-600 underline underline-offset-4 '>Forgot Password?</p>
                </div>
              </div>
              <div className='grid grid-cols-1'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Login