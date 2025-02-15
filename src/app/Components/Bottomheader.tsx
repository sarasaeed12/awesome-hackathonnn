import React from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from 'next/link';
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Bottomheader = () => {
  return (
    <div className="w-full h-[80px] bg-[#FBEBB5] flex justify-between items-center px-6 sm:px-4 md:px-8 lg:px-12">
      
      
      <div className="w-1/4 hidden md:block"></div>

     
      <div className="flex gap-10 sm:gap-4 text-lg sm:text-sm md:text-base font-medium justify-center items-center">
        <Link href="/" className="hover:text-gray-600 transition-all">Home</Link>
        <Link href="/Shop" className="hover:text-gray-600 transition-all">Shop</Link>
        <Link href="/" className="hover:text-gray-600 transition-all">About</Link>
        <Link href="/Contact" className="hover:text-gray-600 transition-all">Contact</Link>
      </div>

      
      <div className="flex gap-6 sm:gap-4 text-xl sm:text-lg">
        <CgProfile className="cursor-pointer hover:text-gray-600" />
        <CiHeart className="cursor-pointer hover:text-gray-600" />
        <MdOutlineShoppingCart className="cursor-pointer hover:text-gray-600" />
        <IoIosSearch className="cursor-pointer hover:text-gray-600" />
      </div>

    </div>
  );
};

export default Bottomheader;
