import React from 'react'



import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";



const Bottomheader = () => {
  return (
    <div className='max-w-full h-[100px] flex justify-center items-center bg-[#FBEBB5] gap-7 sm:items-center w-full'>
    
    <div className=' gap-[20px] flex justify-c'>
        {/* <p>Home</p>
        <p>Contact</p>
        <p>About</p>
        <p className='flex'>Sign Up</p> */}
        <Link href='/'>Home</Link>
        <Link href='/Shop'>Shop</Link>
        <Link href='/'>About</Link>
        <Link href='/Contact'>Contact</Link>
        
        </div>
   
      
      
     <div className='flex gap-[20px] pr-[50px]'>
     <CgProfile />

        <CiHeart />
      <MdOutlineShoppingCart />
      <IoIosSearch />

      </div>

      </div>
     
   
  )
}

export default Bottomheader
