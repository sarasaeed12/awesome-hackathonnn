import React from 'react';
import Image from 'next/image';

const Seater = () => {
    return (
        <div className="w-full h-[672px] flex justify-between items-center bg-[#FAF4F4] px-10">
            {/* Left section (table content and image) */}
            <div className="w-[50%] flex flex-col items-start">
                <h1 className="sm:text-2xl md:text-4xl lg:text-4xl font-bold align-text-bottom pt-[70px]">
                    Side Table
                </h1>
                <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    View More
                </a>
                <Image
                    className="h-auto max-w-full rounded-lg mt-5"
                    src="/images/Granite square side table 1.png"
                    alt="Side Table"
                />
            </div>

            {/* Right section (sofa content and image) */}
            <div className="w-[50%] flex flex-col items-start">
                <h1 className="sm:text-2xl md:text-4xl lg:text-4xl font-bold align-bottom pt-9">
                    Sofa
                </h1>
                <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    View More
                </a>
                <Image
                    className="h-auto max-w-full rounded-lg mt-5"
                    src="/images/Cloud sofa three seater + ottoman_3 1.png"
                    alt="Sofa"
                />
            </div>
        </div>
    );
};

export default Seater;
