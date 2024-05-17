import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='w-full flex justify-between items-center p-6 md:px-8 lg:px-12 xl:px-16 text-white'>
      <img src="/black-logo.png" alt="" className='w-[70px]'/>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-black focus:outline-none'>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 transition-transform duration-300 transform rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8 transition-transform duration-300">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>
      <ul className={`md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block md:items-center md:w-auto w-full text-center`}>
        <Link href="/tools">
          <li className='text-black text-[17px] font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-[#e6e7ed] transition duration-300'>Tools</li>
        </Link>
        <Link href="/about">
          <li className='text-black text-[17px] font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-[#e6e7ed] transition duration-300'>About</li>
        </Link>
        <Link href="/contact">
          <li className='text-black text-[17px] font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-[#e6e7ed] transition duration-300'>Contact</li>
        </Link>
        <Link href="/blog">
          <li className='text-black text-[17px] font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-[#e6e7ed] transition duration-300'>Blog</li>
        </Link>
        {/* Add more links here */}
        {/* <Link href="/other-page">
          <li className='text-black text-[17px] font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-[#e6e7ed] transition duration-300'>Other Page</li>
        </Link> */}
      </ul>
      <div className='md:flex gap-4 hidden'>
        <button className='px-4 py-2  bg-[#e6e7ed] text-black text-[17px] font-semibold rounded-lg'>Login</button>
        <button className='px-4 py-2  bg-black text-white text-[17px] font-semibold rounded-lg'>Start Creating</button>
      </div>
    </div>
  )
}

export default Header;
