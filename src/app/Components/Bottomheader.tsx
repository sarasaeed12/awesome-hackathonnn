import React from 'react'



import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";



const Bottomheader = () => {
  return (
    <div className='w-full h-[100px] flex justify-between items-center mt-4 bg-[#FBEBB5;]'>
    
    <div className=' gap-[48px] flex justify-between items-center pl-[600px]'>
        {/* <p>Home</p>
        <p>Contact</p>
        <p>About</p>
        <p className='flex'>Sign Up</p> */}
        <Link href='/'>Home</Link>
        <Link href='/Shop'>Shop</Link>
        <Link href='/'>About</Link>
        <Link href='/Contact'>Contact</Link>
        
        </div>
   
      
      
     <div className='flex gap-[30px] pr-[40px] '>
     <CgProfile />

        <CiHeart />
      <MdOutlineShoppingCart />
      <IoIosSearch />

      </div>

      </div>
     
   
  )
}

export default Bottomheader
