import React from 'react'
import Image from 'next/image'

const Top = () => {
    return (
        <div className='w-full bg-white'>
            <div className='flex flex-col justify-center items-center text-center mt-10'>
            <h1 className='font-bold text-4xl sm:mt-[400px] md:mt-[400px] lg:text-5xl xl:text-6xl'>Top Picks For You</h1>
            
            <p className='text-center'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            {/* / 1 images/ */}

<div className='flex justify-center items-center gap-8 sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
            <div className='flex justify-center items-center'>
                <div className='w-[287px] h-[372px]'>
                    <div className='w-[287px] h-[287px]'>
                        <Image
                            className="h-auto max-w-full rounded-lg mt-5"
                            src="/images/1(38).png"
                            alt="Sofa"
                            width={287}
                            height={287}
                        />


<Image src="/images/ci_grid-big-round.png" alt="uicons" width={25} height={25} />
                    </div>
                    <div>
                        <p className='font-thin'>Trenton modular sofa_3</p>
                        <h2 className='font-bold'>Rs. 25,000.00</h2>
                    </div>
                </div>

            </div>


            {/* / 2 images/ */}


            <div className='flex justify-center items-center'>
                <div className='w-[287px] h-[372px]'>
                    <div className='w-[287px] h-[287px]'>
                        <Image
                            className="h-auto max-w-full rounded-lg mt-5"
                            src="/images/1(15).png"
                            alt="Sofa"
                            width={255}
                            height={185}
                        />
                    </div>
                    <div>
                        <p className='font-light'>Granite dining table with dining chair</p>
                        <h2 className='font-bold'> Rs. 25,000.00</h2>
                    </div>
                </div>

            </div>

            {/* / 3 images/ */}


            <div className='flex justify-center items-center'>
                <div className='w-[287px] h-[372px]'>
                    <div className='w-[287px] h-[287px]'>
                        <Image
                            className="h-auto max-w-full rounded-lg mt-5"
                            src="/images/1(21).png"
                            alt="Sofa"
                            width={287}
                            height={287}
                        />
                    </div>
                    <div>
                        <p className='font-light'>Outdoor bar table and stool</p>
                        <h2 className='font-bold'> Rs. 25,000.00</h2>
                    </div>
                </div>

            </div>

            {/* / 4 images/ */}


            <div className='flex justify-center items-center'>
                <div className='w-[287px] h-[372px]'>
                    <div className='w-[287px] h-[287px]'>
                        <Image
                            className="h-auto max-w-full rounded-lg mt-5"
                            src="/images/1(23).png"
                            alt="Sofa"
                            width={240}
                            height={174}
                        />
                    </div>
                    <div>
                        <p className='font-light'>Plain console with teak mirror</p>
                        <h2 className='font-bold'> Rs. 25,000.00</h2>
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
    )
}

export default Top
