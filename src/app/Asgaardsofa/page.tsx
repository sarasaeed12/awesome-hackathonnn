import React from 'react'

import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';


const page = () => {
    return (

        <div className='w-full flex flex-col justify-center items-center'>
            <div className='text-gray-400 mt-[20px] pl-[200px] '>
                <div className='flex justify-start items-center'>
                    <a href='/'>Home</a>
                    <MdKeyboardArrowRight />

                    <a href='/'>Shop</a>
                    <MdKeyboardArrowRight />

                    <a href='/' className='font-normal text-black'>Asgaard sofa</a>


                </div>


                {/* / product List/ */}
                <div className='flex flex-col items-center sm:flex-col'>
                    <div className='flex flex-row items-center'>

                        <div className='w-full h-[820px] flex justify-center items-center'>

                            <div className='w-[553px] h-[500px] flex justify-center items-center'>


                                <div className="grid gap-4">
                                    {/* Main Image */}
                                    <div className="flex items-center justify-center bg-[#FFF9E5]">
                                        <Image
                                            className="h-auto max-w-full "
                                            src="/images/1(4).png"
                                            alt="image"
                                            width={481}
                                            height={391}
                                        />
                                    </div>

                                    {/* Product Thumbnails */}
                                    <div className="grid grid-cols-5 gap-4">
                                        <div className="flex items-center justify-center">
                                            <Image
                                                className="h-auto max-w-full rounded-lg"
                                                src="/images/2(3).png"
                                                alt="2image"
                                                width={76}
                                                height={80}
                                            />
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Image
                                                className="h-auto max-w-full rounded-lg"
                                                src="/images/2(2).png"
                                                alt="3image"
                                                width={76}
                                                height={80}
                                            />
                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Image
                                                className="h-auto max-w-full rounded-lg"
                                                src="/images/2(1).png"
                                                alt="4image"
                                                width={76}
                                                height={80}
                                            />

                                        </div>
                                        <div className="flex items-center justify-center">
                                            <Image
                                                className="h-auto max-w-full rounded-lg"
                                                src="/images/2(4).png"
                                                alt="5image"
                                                width={76}
                                                height={80}
                                            />
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                        {/* / details / */}
                        <div className='w-[600px] h-[730px] '>
                            <h1 className='w-[282px] h-[63px] font-black text-black text-4xl'>Asgaard sofa</h1>
                            <p className='w-[173px] h-[36px] font-bold text-gray-400 text-2xl'>Rs. 250,000.00</p>
                            <div className='flex justify-start items-center mt-5'>
                                <Image
                                    src={"/images/1(1).png"}
                                    alt='star'
                                    width={18}
                                    height={18} />

                                <Image
                                    src={"/images/1(1).png"}
                                    alt='star'
                                    width={18}
                                    height={18} />

                                <Image
                                    src={"/images/1(1).png"}
                                    alt='star'
                                    width={18}
                                    height={18} />


                                <Image
                                    src={"/images/1(1).png"}
                                    alt='star'
                                    width={18}
                                    height={18} />


                                <Image
                                    src={"/images/1(1).png"}
                                    alt='star'
                                    width={18}
                                    height={18} />

                                <div className='pl-5'>
                                    <p className='tracking-wide'>5 Customer Review</p>
                                </div>
                            </div>
                            <p className='w-[440px] leading-[20px]'>Setting the bar as one of the loudest speakers in its class,
                                the Kilburn is a compact, stout-hearted hero with a well-balanced audio
                                which boasts a clear midrange and extended highs for a sound.

                            </p>
                            <p>size</p>
                            <div className='flex justify-start items-center gap-4'>
                                <div className="w-[30px] h-[30px] rounded  bg-gray-300 flex items-center justify-center">
                                    <p>
                                        L </p>
                                </div>

                                <div className="w-[30px] h-[30px] rounded bg-gray-300 flex items-center justify-center">
                                    <p> XL</p>
                                </div>
                                <div className="w-[30px] h-[30px] rounded bg-gray-300 flex items-center justify-center">
                                    <p> XL</p>
                                </div>
                            </div>

                            <p>Color</p>
                            <div className="flex items-center gap-4">
                                <button className="bg-gray-300 w-[40px] h-[40px] rounded">-</button>
                                <input
                                    type="number"
                                    value={1}
                                    className="text-center border w-[50px] h-[40px]"
                                />
                                <button className="bg-gray-300 w-[40px] h-[40px] rounded">+</button>
                            </div>

                            <div className='mt-5 outline-black'>
                                <a href='/Cart' className='bg-white outline rounded pl-8 pr-8 pt-3 pb-3' >Add To Cart</a>
                            </div>




                            {/* / Social icons / */}
                            <div className='flex justify-start gap-6 mt-5 absolute'>
                                <div className='flex flex-col justify-start'>
                                    <p> SKU </p>
                                    <p> Category </p>
                                    <p> Tags </p>
                                    <p> Share </p>
                                </div>


                                <div className='flex flex-col justify-start'>
                                    <p> : </p>
                                    <p> : </p>
                                    <p> : </p>
                                    <p> : </p>
                                </div>
                                <div className='mt-5'>
                                    <p> SS001 </p>
                                    <p> Sofas </p>
                                    <p className='w-[190px] leading-[24px]'> Sofa, Chair, Home, Shop </p>

                                </div>

                            </div>
                        </div>
                    </div>

                    {/* /description/ */}

                    <div className=' flex  flex-col justify-center items-center'>
                        <div className='flex justify-center items-center gap-5  text-black'>
                            <p>Description</p>
                            <p>Additional Information</p>
                            <p>Reviews [5]</p>
                        </div>
                        <div>
                            <p className='w-[1026px] leading-[48px] text-center '>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                            <p className='w-[1026px] leading-[96px] text-center '>
                                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                            </p>
                        </div>

                    </div>
                    <div className='flex justify-between gap-2'>
                        <div className='bg-[#D9D9D9] rounded-lg'>
                            <Image
                                src={"/images/1(10).png"}
                                alt='sofa'
                                width={605}
                                height={348} />
                        </div>
                        <div className='bg-[#D9D9D9] rounded-lg'>
                            <Image
                                src={"/images/1(12).png"}
                                alt='sofa'
                                width={605}
                                height={348} />
                        </div>



                    </div>


                </div>

                <div className='flex  flex-col justify-center items-center mt-9'>
                    <div>
                        <h1 className='font-medium text-3xl'>Related Products</h1>
                    </div>
                    <div>
                        {/* / 1 products / */}


                        <div className='flex justify-center items-center gap-3'>
                            <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 ">
                                <a href="#">
                                    <Image src="/images/1(38).png" alt="sofa" width={287} height={287} />
                                </a>
                                <div className="p-5">

                                    <p className="mb-3 font-normal text-black">Trenton modular sofa_3</p>
                                    <h1 className='font-bold space-x-3'>Rs. 25,000.00</h1>

                                </div>
                            </div>
                            {/* / 2 products / */}

                            <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <Image src="/images/1(15).png" alt="sofa" width={287} height={287} />
                                </a>
                                <div className="p-5">

                                    <p className="mb-3 font-normal text-black">Granite dining table with dining chair3</p>
                                    <h1 className='font-bold space-x-3'>Rs. 25,000.00</h1>

                                </div>
                            </div>

                            {/* / 3 products / */}



                            <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <Image src="/images/1(22).png" alt="sofa" width={287} height={287} />
                                </a>
                                <div className="p-5">

                                    <p className="mb-3 font-normal text-black">Outdoor bar table and stool</p>
                                    <h1 className='font-bold space-x-3'>Rs. 25,000.00</h1>

                                </div>
                            </div>


                            {/* / 4 products / */}



                            <div className="max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <Image src="/images/1(25).png" alt="table" width={287} height={287} />
                                </a>
                                <div className="p-5">

                                    <p className="mb-3 font-normal text-black">Plain console with teak mirror</p>
                                    <h1 className='font-bold space-x-3'>Rs. 25,000.00</h1>

                                </div>
                            </div>

                        </div>
                    </div>
                    {/* / view More / */}
                    <div className='flex justify-center items-center mt-10'>
                        <a
                            href="#"
                            className="font-medium text-black hover:underline mt-2"
                        >
                            View More
                        </a>
                    </div>

                </div>
                <div />






            </div>
        </div>



    )
}

export default page;
