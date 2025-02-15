import React from 'react';

const Instagram = () => {
    return (
        <div 
            className="relative w-full min-h-[350px] h-auto md:h-[450px] bg-cover bg-center mt-9 flex items-center justify-center" 
            style={{ backgroundImage: "url('/images/1(32).png')" }}
        >
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-20 px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black mb-3">
                    Our Instagram
                </h1>
                <p className="text-sm sm:text-lg text-black mb-5">
                    Follow our store on Instagram
                </p>
                <button
                    type="button"
                    className="py-2.5 px-6 text-sm sm:text-base font-medium text-gray-900 bg-white rounded-lg border border-gray-200 
                    hover:bg-gray-100 hover:text-blue-700 transition duration-300 focus:ring-4 focus:ring-gray-100"
                >
                    Follow Us
                </button>
            </div>
        </div>
    );
};

export default Instagram;

