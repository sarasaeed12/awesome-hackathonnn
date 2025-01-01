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
            <p className="text-3xl text-black mb-6">Checkout</p>
            <div className='flex justify-center items-center relative top-[-20px] font-light'>
              <p>Home</p>
              <IoIosArrowForward />
              <p>Checkout</p>
            </div>
          </div>
        </div>
      </div>

      {/* /Billing details/ */}
      <div className='min-h-screen flex-row flex justify-center items-start mt-11 gap-10'>
        <form>
          <div className='flex flex-col justify-start items-start gap-7'>
            <h1 className='font-black text-3xl'>Billing details</h1>

            <div className='flex flex-col gap-4'>
              <div className='flex flex-row justify-between items-center gap-4'>
                <div className='flex flex-col'>
                  <label>First Name</label>
                  <input type='text' placeholder='First Name' className='border p-2 rounded' />
                </div>
                <div className='flex flex-col'>
                  <label>Last Name</label>
                  <input type='text' placeholder='Last Name' className='border p-2 rounded' />
                </div>
              </div>

              <div className='flex flex-col'>
                <label>Company Name (Optional)</label>
                <input type='text' placeholder='Company Name' className='border p-2 rounded' />
              </div>

              <div className='flex flex-col'>
                <label>Country / Region</label>
                <select className='border p-2 rounded'>
                  <option>Sri Lanka</option>
                  <option>USA</option>
                  <option>Canada</option>
                </select>
              </div>

              <div className='flex flex-col'>
                <label>Street Address</label>
                <input type='text' placeholder='Street Address' className='border p-2 rounded' />
              </div>

              <div className='flex flex-row gap-4'>
                <div className='flex flex-col'>
                  <label>Town / City</label>
                  <input type='text' placeholder='Town' className='border p-2 rounded' />
                </div>
                <div className='flex flex-col'>
                  <label>Province</label>
                  <select className='border p-2 rounded'>
                    <option>Sindh</option>
                    <option>Punjab</option>
                    <option>Balochistan</option>
                  </select>
                </div>
              </div>

              <div className='flex flex-row gap-4'>
                <div className='flex flex-col'>
                  <label>ZIP Code</label>
                  <input type='text' placeholder='ZIP Code' className='border p-2 rounded' />
                </div>
                <div className='flex flex-col'>
                  <label>Phone</label>
                  <input type='text' placeholder='Phone' className='border p-2 rounded' />
                </div>
              </div>

              <div className='flex flex-col'>
                <label>Email Address</label>
                <input type='email' placeholder='Email Address' className='border p-2 rounded' />
              </div>

              <div className='flex flex-col'>
                <label>Additional Information</label>
                <input type='text' placeholder='Additional Information' className='border p-2 rounded' />
              </div>
            </div>
          </div>
        </form>

        <div className='w-[608px] h-auto flex flex-col justify-start items-start gap-7'>
          <div className='w-full flex flex-col gap-5'>
            <div className='flex flex-row justify-between'>
              <div>
                <h1 className='font-bold text-3xl'>Product</h1>
                <p className='font-normal'>Asgaard Sofa x 1</p>
              </div>
              <div>
                <h1 className='font-bold text-3xl'>Subtotal</h1>
                <p className='font-normal'>Rs.250,000.00</p>
              </div>
            </div>

            <div className='flex flex-row justify-between'>
              <p className='font-bold'>Total</p>
              <p className='font-bold text-2xl text-[#B88E2F]'>Rs.250,000.00</p>
            </div>
          </div>

          <div className='w-full'>
            <h2 className='font-bold'>Direct Bank Transfer</h2>
            <p className='font-normal'>
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order
              will not be shipped until the funds have cleared in our account.
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <p>Direct Bank Transfer</p>
            <p>Cash On Delivery</p>
          </div>

          <div className='font-medium mt-4'>
            <p>
              Your personal data will be used to support your experience throughout this website, to manage access to your
              account, and for other purposes described in our <b>privacy policy.</b>
            </p>
          </div>

          <div className=' flex justify-center items-center mt-4'>
            <button className='bg-white outline rounded pl-8 pr-8 pt-3 pb-3 ml-[190px]'>Place order</button>
          </div>
        </div>
      </div>

      <div className='w-full h-[300px] bg-[#FAF4F4] flex justify-center items-center mt-9'>
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
