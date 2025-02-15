import React from 'react';
import Image from 'next/image';

const Asgaard = () => {
    return (
        <div className="w-full bg-white py-10 px-6 flex flex-col items-center text-center">
            {/* Text Section */}
            <div className="flex flex-col items-center max-w-2xl">
                <h3 className="font-normal text-gray-600">New Arrivals</h3>
                <h1 className="font-bold text-4xl sm:text-5xl">Asgaard Sofa</h1>
            </div>

            {/* Image Section */}
            <div className="w-full max-w-[983px] flex justify-center mt-6">
                <Image
                    className="h-auto w-full rounded-lg"
                    src="/images/1(4).png"
                    alt="Asgaard Sofa"
                    width={983}
                    height={799}
                />
            </div>

            
            <a
                href="/Asgaardsofa"
                className="mt-6 bg-gray-900 text-white font-medium px-8 py-3 rounded-md transition duration-300 hover:bg-gray-700"
            >
                Order Now
            </a>
        </div>
    );
};

export default Asgaard;


