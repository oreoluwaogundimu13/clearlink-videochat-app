import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/16/solid'

const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='pt-9'>
      <nav className='flex  justify-around bg-[#F2F4F7] h-[20%] mx-9 border border-zinc-200 py-3 rounded-3xl'>
        <div className='mt-2'>
          <img src={logo} alt="Logo" width='120'/>
        </div>
          
          <div className='mt-2'>
            <ul className='md:flex gap-[2rem] hidden'>
              <li>
                <Link to='/' className='flex text-[#667085] text-sm'>Products
                   <ChevronDownIcon className='w-5 h-5'/>
                </Link>
              </li>
              <li>
                <Link to='/solutions' className='flex text-[#667085] text-sm'>Solutions
                   <ChevronDownIcon className='w-5 h-5'/>
                </Link>
              </li>
              <li>
                <Link to='/resources' className='flex text-[#667085] text-sm'>Resources
                   <ChevronDownIcon className='w-5 h-5'/>
                </Link>
              </li>
              <li>
                <Link to='/pricing' className='text-[#667085] text-sm'>Pricing</Link>
              </li>
            </ul>
          </div>
          <div className='md:flex hidden'>
            <button className='bg-[#FFFFFF] py-2 rounded-3xl px-3 border border-slate-400 text-[11px] font-semibold'>Talk to sales</button>
            <button className='ml-9 bg-[#175CD3] text-[11px] px-3 py-2 rounded-3xl font-semibold text-slate-50'>Sign up for free</button>
          </div>
          <button className='md:hidden' onClick={toggleNavbar}>
            {isOpen ? (
              <XMarkIcon className='h-6 text-blue-600'/>
              ) : (
                <Bars3Icon className='h-6 text-blue-600'/>
            )}
          </button>
      </nav>
      {isOpen && (
        <div className='flex flex-wrap p-2 flex-col items-center gap-2 bg-slate-100 text-gray-600 font-medium'>
        <li className='list-none'>
                <Link to='/' className='flex text-[#667085] text-sm'>Products
                </Link>
              </li>
              <li  className='list-none'>
                <Link to='/solutions' className='flex text-[#667085] text-sm'>Solutions
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/resources' className='flex text-[#667085] text-sm'>Resources
                </Link>
              </li>
              <li className='list-none'>
                <Link to='/pricing' className='text-[#667085] text-sm'>Pricing</Link>
              </li>
              <button className='bg-[#FFFFFF] py-2 rounded-3xl px-3 border border-slate-400 text-[11px] font-semibold'>Talk to sales</button>
            <button className='ml-4 bg-[#175CD3] text-[11px] px-3 py-2 rounded-3xl font-semibold text-slate-50'>Sign up for free</button>
        </div>
      )}
    </div>
  )
}

export default NavBar