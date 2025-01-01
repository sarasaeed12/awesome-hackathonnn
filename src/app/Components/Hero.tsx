import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex flex-row justify-center items-center bg-[#FBEBB5] sm:flex-col min-h-screen w-full md:flex-col lg:flex-row xl:flex-row'>
            <div className='flex flex-col mt-5'>
                <h1 className='font-black text-6xl sm:text-4xl md:text-5xl lg:text-6xl'>Rocket single </h1>
                <h1 className='font-medium text-5xl sm:text-2xl  md:text-3xl lg:text-5xl xl:text-5xl'> seater</h1>

                <a href="/" className="font-medium text-black dark hover:underline ">Shop Now</a>

            </div>

            <div>
            <Image src="/images/1(33).png" alt="sofa" width={853} height={1000} />
            </div>
        </div>
    )
}

export default Hero


