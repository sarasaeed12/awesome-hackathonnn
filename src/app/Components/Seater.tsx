import React from 'react'
import Image from 'next/image'

const Seater = () => {
    return (
        <div className="bg-gray-100 flex flex-col lg:flex-row xl:flex-row justify-center items-center h-auto w-full gap-10 px-6 py-10">
            {/* Table Section */}
            <div className="flex flex-col items-center text-center">
                <Image
                    className="max-w-full h-auto object-cover rounded-lg"
                    src="/images/1(17).png"
                    alt="Table"
                    width={400}
                    height={400}
                />
                <h1 className="text-xl md:text-2xl font-bold mt-3">Side Table</h1>
                <a href="#" className="font-medium text-black hover:underline">View More</a>
            </div>

            {/* Sofa Section */}
            <div className="flex flex-col items-center text-center">
                <Image
                    className="max-w-full h-auto object-cover rounded-lg"
                    src="/images/1(11).png"
                    alt="Sofa"
                    width={400}
                    height={400}
                />
                <h1 className="text-xl md:text-2xl font-bold mt-3">Sofa</h1>
                <a href="#" className="font-medium text-black hover:underline">View More</a>
            </div>
        </div>
    )
}

export default Seater


