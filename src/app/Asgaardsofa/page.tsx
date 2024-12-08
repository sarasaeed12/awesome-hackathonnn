import React from 'react'
import Link from 'next/link'
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from 'next/image';


const page = () => {
    return (
        
        
        <div className='text-gray-400 mt-[20px] pl-[200px] '>
            <div className='flex justify-start items-center'>
                <a href='/'>Home</a>
                <MdKeyboardArrowRight />

                <a href='/'>Shop</a>
                <MdKeyboardArrowRight />

                <a href='/' className='font-normal text-black'>Asgaard sofa</a>


            </div>


            {/* / product List/ */}
            <div className='flex flex-col items-center'>
            <div className='flex flex-row items-center'>

                <div className='w-full h-[820px] flex justify-center items-center'>

                    <div className='w-[553px] h-[500px] flex justify-center items-center'>


                        <div className="grid gap-4">
                            {/* Main Image */}
                            <div className="flex items-center justify-center bg-[#FFF9E5]">
                                <img
                                    className="h-auto max-w-full "
                                    src="/images/Asgaard sofa 2.png"
                                    alt="1image"
                                />
                            </div>

                            {/* Product Thumbnails */}
                            <div className="grid grid-cols-5 gap-4">
                                <div className="flex items-center justify-center">
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src=""
                                        alt="2image"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src=""
                                        alt="3image"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src=""
                                        alt="4image"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src=""
                                        alt="5image"
                                    />
                                </div>
                                <div className="flex items-center justify-center">
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src=""
                                        alt="6image"
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
                            src={"/images/Vector.png"}
                            alt='star'
                            width={18}
                            height={18} />

                        <Image
                            src={"/images/Vector.png"}
                            alt='star'
                            width={18}
                            height={18} />

                        <Image
                            src={"/images/Vector.png"}
                            alt='star'
                            width={18}
                            height={18} />


                        <Image
                            src={"/images/Vector.png"}
                            alt='star'
                            width={18}
                            height={18} />


                        <Image
                            src={"/images/Vector.png"}
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
                        <div className="w-[30px] [30px] rounded  bg-gray-300 flex items-center justify-center">
                            <p>
                                L </p>
                        </div>

                        <div className="[30px] h-[30px] rounded bg-gray-300 flex items-center justify-center">
                            <p> XL</p>
                        </div>
                        <div className="w-[30px] h-[30px] rounded bg-gray-300 flex items-center justify-center">
                            <p> XL</p>
                        </div>
                    </div>

                    <p>Color</p>
                    <div className='flex justify-start items-center gap-9'>
                        <input type="num" id="email" placeholder="- 1 +" className=" text-gray-900  w-[123px] h-[64px] pl-[100px]" required />
                        <button className='rounded border-black text-2xl text-black '>Add To Cart</button>


                    </div>
                    <div>

                    </div>




                    {/* / Social icons / */}
                    <div className='flex justify-start gap-6'>
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
                        <div>
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
                <div  className='bg-[#D9D9D9] rounded-lg'>
                    <Image
                        src={"/images/Cloud sofa three seater + ottoman_2 1.png"}
                        alt='sofa'
                        width={605}
                        height={348} />
                </div>
                <div className='bg-[#D9D9D9] rounded-lg'>
                    <Image
                        src={"/images/Cloud sofa three seater + ottoman_1 1.png"}
                        alt='sofa'
                        width={605}
                        height={348} />
                </div>



            </div>
            </div>



        </div>
    )
}

export default page
