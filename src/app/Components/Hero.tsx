import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex justify-center items-center bg-[#FBEBB5]'>
            <div>
                <h1 className='sm:text-2xl md:text-4xl lg:text-6xl font-bold text-left pl-7 '>Rocket single </h1>
                <h1 className='sm:text-2xl md:text-4xl lg:text-6xl font-bold text-left pl-7 '> seater</h1>

                <a href="#" className="font-medium text-black dark hover:underline pl-7 mt-5">Shop Now</a>

            </div>

            <div>
            <Image src="/images/Rocket single seater 1.png" alt="uicons" width={853} height={1000} />
            </div>
        </div>
    )
}

export default Hero

