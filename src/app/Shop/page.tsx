import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";


const Shop = () => {
    return (
        <div>


            {/* / background / */}
            <div>
                <div className="relative w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/images/Rectangle 1 (1).png')" }}>
                    {/* Overlay Content */}

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-10">
                        <Image src="/images/Meubel House_Logos-05.png" alt="logo" width={77} height={77} />
                        <p className="text-3xl text-black mb-6">Shop</p>
                        <div className='flex justify-center items-center relative top-[-20px] font-light'>
                            <p>Home</p>
                            <IoIosArrowForward />
                            <p>Shop</p>


                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#FAF4F4;] w-full h-[60px] flex justify-center items-center'>
                <div className='flex justify-start items-start gap-6'>
                    <Image src="/images/system-uicons_filtering.png" alt="uicons" width={25} height={25} />
                    <p>Filter</p>
                    <Image src="/images/ci_grid-big-round.png" alt="uicons" width={25} height={25} />
                    <Image src="/images/bi_view-list.png" alt="uicons" width={25} height={25} />
                    <h3>Showing 1–16 of 32 results</h3>
                </div>

                <div className='flex gap-3'>
                    <div className='flex justify-center items-center pl-[600px] '>
                        <label>Show</label>
                        <input type='number' className='w-[55px] h-[55px] ml-4' />
                    </div>
                    <div>
                        <label>Short by</label>
                        <input type='Default' className='w-[188px] h-[55px] ml-4' />
                    </div>

                </div>
                <div />




            </div>

            {/* / 1 products / */}


            <div className='flex justify-center items-center gap-3'>
                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                        <Image src="/images/Trenton modular sofa_3 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Trenton modular sofa_3</p>
                        <h1 className='font-bold space-x-3'>Rs. 25,000.00</h1>

                    </div>
                </div>
                {/* / 2 products / */}

                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Granite dining table with dining chair 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Granite dining table with dining chair3</p>
                        <h1 className='font-bold space-x-3'>Rs. 25,000.00</h1>

                    </div>
                </div>

                {/* / 3 products / */}



                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Outdoor sofa set 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Outdoor bar table and stool</p>
                        <h1 className='font-bold space-x-3'>Rs. 25,000.00</h1>

                    </div>
                </div>


                {/* / 4 products / */}



                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Plain console_ 1 (1).png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Plain console with teak mirror</p>
                        <h1 className='font-bold space-x-3'>Rs. 25,000.00</h1>

                    </div>
                </div>

            </div>



            {/* /5 row product/ */}


            <div className='flex justify-center items-center gap-3'>
                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                        <Image src="/images/Grain coffee table 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Grain coffee table</p>
                        <h1 className='font-bold space-x-3'>Rs. 15,000.00</h1>

                    </div>
                </div>
                {/* / 6 products / */}

                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Kent coffee table 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Kent coffee table</p>
                        <h1 className='font-bold space-x-3'>Rs. 225,000.00</h1>

                    </div>
                </div>

                {/* / 7 products / */}



                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Round coffee table_color 2 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Reclaimed teak coffee table</p>
                        <h1 className='font-bold space-x-3'>Rs. 251,000.00</h1>

                    </div>
                </div>


                {/* / 8 products / */}



                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Reclaimed teak coffee table 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Reclaimed teak coffee table</p>
                        <h1 className='font-bold space-x-3'>Rs. 251,000.00</h1>

                    </div>
                </div>

            </div>


            {/* 9 / */}


            <div className='flex justify-center items-center gap-3'>
                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                        <Image src="/images/Plain console_ 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Plain console_</p>
                        <h1 className='font-bold space-x-3'>Rs. 258,000.00</h1>

                    </div>
                </div>
                {/* / 10 products / */}

                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Reclaimed teak Sideboard 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Reclaimed teak Sideboard</p>
                        <h1 className='font-bold space-x-3'>Rs. 20,000.00</h1>

                    </div>
                </div>

                {/* / 11 products / */}



                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/SJP_0825  1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">SJP_0825 </p>
                        <h1 className='font-bold space-x-3'>Rs. 200,000.00</h1>

                    </div>
                </div>


                {/* / 12 products / */}



                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Bella chair and table 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Bella chair and table</p>
                        <h1 className='font-bold space-x-3'>Rs. 100,000.00</h1>

                    </div>
                </div>

            </div>


            {/* /13/ */}


            <div className='flex justify-center items-center gap-3'>
                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 ">
                    <a href="#">
                        <Image src="/images/Granite square side table 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Granite square side table</p>
                        <h1 className='font-bold space-x-3'>Rs. 255,800.00</h1>

                    </div>
                </div>
                {/* / 14 products / */}

                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Asgaard sofa 2.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Asgaard sofa</p>
                        <h1 className='font-bold space-x-3'>Rs. 25,0000.00</h1>

                    </div>
                </div>

                {/* / 15 products / */}



                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Maya sofa three seater 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Maya sofa three seater 1.png</p>
                        <h1 className='font-bold space-x-3'>Rs. 115,000.00</h1>

                    </div>
                </div>


                {/* / 16 products / */}



                <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image src="/images/Outdoor sofa set 1.png" alt="course2" width={287} height={287} />
                    </a>
                    <div className="p-5">

                        <p className="mb-3 font-normal text-black">Outdoor sofa</p>
                        <h1 className='font-bold space-x-3'>Rs. 244,000.00</h1>

                    </div>
                </div>

            </div>

            <div className='flex justify-center items-center gap-4 font-normal text-black'>
                <input type='text' value='1' className='bg-[#FBEBB5] w-[60px] h-[60px] text-black text-center' />
                <input type='text' value='2' className='bg-[#FBEBB5] w-[60px] h-[60px] text-black text-center' />
                <input type='text' value='3' className='bg-[#FBEBB5] w-[60px] h-[60px] text-black text-center' />
                <a href="/next-page" className='bg-[#FBEBB5] w-[60px] h-[60px] flex justify-center items-center text-black text-center rounded'>
                    Next
                </a>
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


    )
}

export default Shop
