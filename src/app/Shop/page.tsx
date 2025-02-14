import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";

const Shop = () => {
    return (
        <div>
            {/* Background Section */}
            <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/images/1(28).png')" }}>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-10">
                    <Image src="/images/Meubel House_Logos-05.png" alt="logo" width={77} height={77} />
                    <p className="text-lg sm:text-2xl md:text-3xl text-black mb-6">Shop</p>
                    <div className="flex justify-center items-center relative top-[-10px] sm:top-[-20px] font-light">
                        <p>Home</p>
                        <IoIosArrowForward />
                        <p>Shop</p>
                    </div>
                </div>
            </div>

            {/* Filter Section */}
            <div className="bg-[#FAF4F4] w-full h-[50px] sm:h-[60px] flex justify-between items-center px-4 sm:px-8 md:px-16">
                <div className="flex items-center gap-4 sm:gap-6">
                    <Image src="/images/1(36).png" alt="uicons" width={20} height={20} />
                    <p className="text-sm sm:text-base">Filter</p>
                    <Image src="/images/1(9).png" alt="uicons" width={20} height={20} />
                    <Image src="/images/1(7).png" alt="uicons" width={20} height={20} />
                    <h3 className="text-xs sm:text-sm md:text-base">Showing 1–16 of 32 results</h3>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center">
                        <label className="text-sm sm:text-base">Show</label>
                        <input type="number" className="w-[40px] sm:w-[55px] h-[40px] sm:h-[55px] ml-4 text-center border" />
                    </div>
                    <div className="flex items-center">
                        <label className="text-sm sm:text-base">Sort by</label>
                        <input type="text" className="w-[120px] sm:w-[188px] h-[40px] sm:h-[55px] ml-4 text-center border" />
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-8">
                {/* Product Card */}
                {[
                    { img: "/images/1(38).png", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
                    { img: "/images/1(15).png", name: "Granite dining table with dining chair3", price: "Rs. 25,000.00" },
                    { img: "/images/1(22).png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
                    { img: "/images/1(25).png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
                    { img: "/images/1(14).png", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
                    { img: "/images/1(18).png", name: "Granite dining table with dining chair3", price: "Rs. 25,000.00" },
                    { img: "/images/1(34).png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
                    { img: "/images/1(26).png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
                    { img: "/images/1(25).png", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
                    { img: "/images/1(27).png", name: "Granite dining table with dining chair3", price: "Rs. 25,000.00" },
                    { img: "/images/1(35).png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
                    { img: "/images/1(6).png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
                    { img: "/images/1(16).png", name: "Trenton modular sofa_3", price: "Rs. 25,000.00" },
                    { img: "/images/1(4).png", name: "Granite dining table with dining chair3", price: "Rs. 25,000.00" },
                    { img: "/images/1(19).png", name: "Outdoor bar table and stool", price: "Rs. 25,000.00" },
                    { img: "/images/1(22).png", name: "Plain console with teak mirror", price: "Rs. 25,000.00" },
                ].map((product, index) => (
                    <div key={index} className="max-w-sm mx-auto bg-white dark:bg-gray-800 border border-gray-300">
                        <a href="#">
                            <Image src={product.img} alt={product.name} width={287} height={287} />
                        </a>
                        <div className="p-5">
                            <p className="mb-3 font-normal text-black">{product.name}</p>
                            <h1 className="font-bold text-base sm:text-lg">{product.price}</h1>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-4 mt-8">
                <input type="text" value="1" className="bg-[#FBEBB5] w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] text-center text-black" readOnly />
                <input type="text" value="2" className="bg-[#FBEBB5] w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] text-center text-black" readOnly />
                <input type="text" value="3" className="bg-[#FBEBB5] w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] text-center text-black" readOnly />
                <a href="/next-page" className="bg-[#FBEBB5] w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] flex justify-center items-center text-black rounded">
                    Next
                </a>
            </div>

            {/* Features Section */}
            <div className="w-full h-auto bg-[#FAF4F4] flex flex-wrap justify-center items-center mt-10 py-12 px-4 sm:px-8 md:px-16">
                {[
                    { title: "Free Delivery", desc: "For all orders over $50, consectetur adipiscing elit." },
                    { title: "90 Days Return", desc: "If goods have problems, consectetur adipiscing elit." },
                    { title: "Secure Payment", desc: "100% secure payment, consectetur adipiscing elit." },
                ].map((feature, index) => (
                    <div key={index} className="flex flex-col items-center text-center px-4 sm:px-8 md:px-12">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{feature.title}</h2>
                        <p className="my-4 text-sm sm:text-base text-gray-500">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
