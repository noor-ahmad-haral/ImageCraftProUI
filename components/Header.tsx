import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <div className='w-full flex justify-between items-center p-4 text-white'>
    <img src="/black-logo.png" alt="" className='w-[70px]'/>  
      <ul className='flex justify-center items-center gap-4 text-white'>
            <li className='text-black text-[17px] font-semibold'>Tools</li>
            <li className='text-black text-[17px] font-semibold'>About</li>
            <li className='text-black text-[17px] font-semibold'>Contact</li>
            <li className='text-black text-[17px] font-semibold'>Blog</li>
        </ul>
        <div>
          <button className='p-2'>Login</button>
        </div>
    </div>
  )
}

export default Header