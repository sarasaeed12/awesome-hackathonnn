import React from 'react';
import Image from 'next/image';

const Top = () => {
    return (
        <div className="w-full bg-white py-10">
            {/* Heading & Description */}
            <div className="flex flex-col justify-center items-center text-center px-4">
                <h1 className="font-bold text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    Top Picks For You
                </h1>
                <p className="text-gray-600 mt-2 max-w-xl">
                    Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
                </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 mt-10">
                {/* Product 1 */}
                <div className="flex flex-col items-center">
                    <Image 
                        className="rounded-lg mt-5" 
                        src="/images/1(38).png" 
                        alt="Sofa" 
                        width={287} 
                        height={287} 
                    />
                    <p className="font-light mt-2">Trenton Modular Sofa_3</p>
                    <h2 className="font-bold">Rs. 25,000.00</h2>
                </div>

                {/* Product 2 */}
                <div className="flex flex-col items-center">
                    <Image 
                        className="rounded-lg mt-5" 
                        src="/images/1(15).png" 
                        alt="Dining Table" 
                        width={255} 
                        height={185} 
                    />
                    <p className="font-light mt-2">Granite Dining Table with Dining Chair</p>
                    <h2 className="font-bold">Rs. 25,000.00</h2>
                </div>

                {/* Product 3 */}
                <div className="flex flex-col items-center">
                    <Image 
                        className="rounded-lg mt-5" 
                        src="/images/1(21).png" 
                        alt="Bar Table" 
                        width={287} 
                        height={287} 
                    />
                    <p className="font-light mt-2">Outdoor Bar Table and Stool</p>
                    <h2 className="font-bold">Rs. 25,000.00</h2>
                </div>

                {/* Product 4 */}
                <div className="flex flex-col items-center">
                    <Image 
                        className="rounded-lg mt-5" 
                        src="/images/1(23).png" 
                        alt="Console Mirror" 
                        width={240} 
                        height={174} 
                    />
                    <p className="font-light mt-2">Plain Console with Teak Mirror</p>
                    <h2 className="font-bold">Rs. 25,000.00</h2>
                </div>
            </div>

            {/* View More Link */}
            <div className="flex justify-center items-center mt-10">
                <a href="#" className="font-medium text-black hover:underline">
                    View More
                </a>
            </div>
        </div>
    );
};

export default Top;

