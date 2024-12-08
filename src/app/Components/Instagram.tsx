import React from 'react'

const Instagram = () => {
    return (
        <div className="relative w-full h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/images/Rectangle 17.png')" }}>
            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-10">
                <h1 className="text-5xl font-black text-black mb-4">Our Instagram</h1>
                <p className="text-lg text-black mb-6">Follow our store on Instagram</p>
                <button
                    type="button"
                    className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                    Follow Us
                </button>
            </div>
        </div>
    );
};

export default Instagram;
