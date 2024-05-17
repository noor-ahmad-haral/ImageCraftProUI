import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full flex justify-between items-center p-6 md:px-8 lg:px-12 xl:px-16 text-white'>
    <img src="/black-logo.png" alt="" className='w-[70px]'/>  
      <ul className='hidden md:flex justify-center items-center gap-4 '>
        <Link href={"/tools"}>
        
            <li className='text-black text-[17px] font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-[#e6e7ed] '>Tools</li>
            </Link>
            <li className='text-black text-[17px] font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-[#e6e7ed] '>About</li>
            <li className='text-black text-[17px] font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-[#e6e7ed] '>Contact</li>
            <li className='text-black text-[17px] font-semibold px-4 py-2 cursor-pointer rounded-md hover:bg-[#e6e7ed] '>Blog</li>
        </ul>
        <div className='md:flex gap-4 hidden  '>
        <button className='px-4 py-2  bg-[#e6e7ed] text-black text-[17px] font-semibold rounded-lg'>Login</button>

          <button className='px-4 py-2  bg-black text-white text-[17px] font-semibold rounded-lg'>Start Creating</button>
        </div>
    </div>
  )
}

export default Header