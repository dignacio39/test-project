import React from 'react'
import './Header.css'
import Logo from '../Logo/Logo'

const Header = () => {
  return (
    <header>
        <div className='
        border-y-2
      border-slate-300
        py-1
        grid 
        grid-1'>
        <div className='grid grid-cols-2'>
          <div className='col-start-1'>
          <Logo></Logo>
          </div>
          <div className='col-start-2 flex justify-end items-center gap-2'>
          <button className="h-10 bg-white hover:bg-slate-700 text-[#0e0c3a] font-bold py-2 px-4 border border-[#0e0c3a] rounded">Sign in</button>
          <button className="h-10 mr-10 bg-[#0e0c3a] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-[#0e0c3a] rounded">Sign up</button>
          </div>
        </div>
        </div>
    </header>
  )
}

export default Header