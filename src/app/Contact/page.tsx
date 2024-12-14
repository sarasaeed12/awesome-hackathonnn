import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";






const page = () => {
  return (
    <div>
      {/* / background / */}
      <div>
        <div className="relative w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/images/Rectangle 1 (1).png')" }}>
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-10">
            <Image src="/images/Meubel House_Logos-05.png" alt="logo" width={77} height={77} />
            <p className="text-3xl text-black mb-6">Contact</p>
            <div className='flex justify-center items-center relative top-[-20px] font-light'>
              <p>Home</p>
              <IoIosArrowForward />
              <p>Contact</p>
            </div>
          </div>
        </div>
      </div>


      {/* /contact section/ */}

      <div>
        <div className='flex flex-col items-center mt-9'>
          <h1 className='font-bold text-3xl'>Get In Touch With Us</h1>
          <p className='w-[644px] h-[48px] text-center text-gray-500'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className='flex flex-row justify-center items-start gap-4 mt-[80px]'>

          <div className='flex flex-col justify-start items-start gap-[70px] pt-2'>
            <FaLocationDot />
            <FaPhoneAlt />
            <IoIosTime />
          </div>

          <div className='flex flex-col justify-start items-start gap-4'>
            <div>
              <h1 className='font-semibold'>Address</h1>
              <p className='w-[212px] leading[24px]'>236 5th SE Avenue, New York NY10000, United States</p>
            </div>

            <div>
              <h1 className='font-semibold'>Phone</h1>
              <p className='w-[212px] leading[24px]'>Mobile: +(84) 546-6789
              </p>
              <p className='w-[212px] leading[24px]'>Hotline: +(84) 456-6789</p>
            </div>


            <div>
              <h1 className='font-semibold'>Working Time</h1>
              <p className='w-[212px] leading[24px]'>Monday-Friday: 9:00 - 22:00</p>

              <p className='w-[212px] leading[24px]'>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

          <form>
            <div className='flex flex-col justify-start items-start gap-4 w-full'>
              <label>Your name</label>
              <input type='text' placeholder='ABC' className='w-full border border-gray-300 rounded-lg p-3' />
              <label>Email address</label>
              <input type='email' placeholder='Abc@def.com' className='w-full border border-gray-300 rounded-lg p-3' />
              <label>Subject</label>
              <input type='subject' placeholder='This is an optional' className='w-full border border-gray-300 rounded-lg p-3' />
              <label>Message</label>
              <textarea placeholder='Hi! i’d like to ask about' className='w-full h-32 border border-gray-300 rounded-lg p-3' />
              <button className='w-[318px] h-[64px] border-2 border-black p-4 rounded-lg m-9'>Place order</button>

            </div>
          </form>
        </div>

      </div>


      <div className='w-full h-[300px] bg-[#FAF4F4] flex justify-center items-center mt-[80px]'>
        <div className='flex flex-col font-light'>
          <h2 className="text-3xl font-bold dark:text-white">Free Delivery</h2>
          <p className="my-4 text-lg text-gray-500 w-[376px] leading-[30px]">For all oders over $50, consectetur adipim scing elit.</p>
        </div>

        <div className='flex flex-col font-light'>
          <h2 className="text-3xl font-bold dark:text-white">90 Days Return</h2>
          <p className="my-4 text-lg text-gray-500 w-[376px] leading-[30px]">If goods have problems, consectetur adipim scing elit.</p>
        </div>

        <div className='flex flex-col font-light'>
          <h2 className="text-3xl font-bold dark:text-white">Secure Payment</h2>
          <p className="my-4 text-lg text-gray-500 w-[376px] leading-[30px]">100% secure payment, consectetur adipim scing elit.</p>
        </div>
      </div>


    </div>
  )
}

export default page
