import React from 'react'
import Image from 'next/image'
import { IoIosArrowForward } from "react-icons/io";

const page = () => {
  return (
    <div>
      {/* / background / */}
      <div>
        <div className="relative w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/images/1(28).png')" }}>
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-10">
            <Image src="/images/Meubel House_Logos-05.png" alt="logo" width={77} height={77} />
            <p className="text-3xl text-black mb-6">Cart</p>
            <div className='flex justify-center items-center relative top-[-20px] font-light'>
              <p>Home</p>
              <IoIosArrowForward />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>

     {/* / Cart Totals / */}

     <div className='flex flex-row justify-center items-start gap-4 min-h-screen p-4'>
      <div className='flex flex-col gap-11'>
      <div className='bg-[#FFF9E5] w-[817px] h-[55px] font-bold flex justify-center items-start gap-9 mt-7'>
        
        <div className='flex justify-center items-center gap-[80px] mt-3'>
        <div className='flex flex-col '>
        <p>Product</p>
        {/* <p>Asgaard sofa</p> */}

        </div>

        <div className='flex flex-col '>
        <p>Price</p>
        {/* <p>Rs.250,000.00</p> */}
        </div>

        <div className='flex flex-col '>
        <p>Quantity</p>
        {/* <input type='1'placeholder='1' className='w-[32px] h-[32px] border rounded text-center '/> */}
        </div>

       <div className='flex flex-col '>
        <p>Subtotal</p>
        {/* <p>Rs.250,000.00</p> */}
        </div>
        </div>

      </div>

      <div className='flex flex-row items-center gap-4 w-[130px] bg-[#D9D9D9] rounded p-4 ml-2'>
        
          <div className='flex shrink-0 gap-5'>
        
          <Image src="/images/1(5).png" alt="asgaardsofa" width={113} height={92} className='rounded'/>

          <div className='flex justify-center items-center gap-[50px] mt-3'>
        <div className='flex flex-col '>
        
        <p>Asgaard sofa</p>

        </div>

        <div className='flex flex-col '>
        
        <p>Rs.250,000.00</p>
        </div>

        <div className='flex flex-col '>
        
        <input type='1'placeholder='1' className='w-[32px] h-[32px] border rounded text-center '/>
        </div>

       <div className='flex flex-col '>
        
        <p>Rs.250,000.00</p>
        </div>
        <div className='flex flex-col '>
        <Image src="/images/1(2).png" alt="asgaardsofa" width={21} height={21} className='rounded'/>
        </div>
        </div>
          
        
        </div>
        
      </div>
      </div>


       
      <div className=' bg-[#FFF9E5] mt-7 w-[390px] h-[390px]'>
      <div className='flex flex-col justify-center items-center gap-9 p-8 mt-6'>
        
          <h1 className='font-black text-3xl text-center'>Cart Totals</h1>
        
        <div className='flex flex-row  justify-between w-full gap-8 px-4'>
          <h1>Subtotal</h1>
          <p>Rs.250,000.00</p>
        </div>
        <div className='flex flex-row  justify-between w-full gap-8 px-4'>
          <h1>Total</h1>
          <p>Rs.250,000.00</p>
        </div>
        
        <a href="/Checkout" className='bg-white outline rounded pl-8 pr-8 pt-3 pb-3'>Check Out</a>
        

      </div>
      </div>

     </div>

      

              

              


        
           
          

      <div className='w-full h-[300px] bg-[#FAF4F4] flex justify-center items-center'>
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
  );
};

export default page;


