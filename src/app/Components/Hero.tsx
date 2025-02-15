import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-center items-center bg-[#FBEBB5] min-h-screen w-full px-6 lg:px-16 py-10">
            
            {/* Left Text Content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-5">
                <h1 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-6xl">
                    Rocket Single
                </h1>
                <h1 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl">
                    Seater
                </h1>
                <a href="/" className="font-medium text-black hover:underline mt-4">
                    Shop Now
                </a>
            </div>

            {/* Right Image */}
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-auto flex justify-center">
                <Image 
                    src="/images/1(33).png" 
                    alt="sofa" 
                    width={853} 
                    height={1000} 
                    className="max-w-full h-auto"
                />
            </div>

        </div>
    );
}

export default Hero;


