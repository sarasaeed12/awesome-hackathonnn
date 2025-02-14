import React from 'react'
import Image from 'next/image'

const Seater = () => {
    return (

        <div className='bg-gray-100 flex justify-center items-center  h-screen w-full gap-[200px] sm:flex-col mt-[400px] lg:flex-row xl:flex-row'>
            <div className='flex flex-col mx-4 '>
            
                <Image
                    
                    src="/images/1(17).png"
                    alt="Table"
                    width={400}
                    height={400}

                />
            

            <div className="flex flex-col ">
                <h1 className="text-2xl font-bold ">
                    Side Table
                </h1>
                <a
                    href="#"
                    className="font-medium text-black hover:underline"
                >
                    View More
                </a>
            </div>
            </div>
            <div className='flex flex-col float-start'>

            
                <Image
                    
                    src="/images/1(11).png"
                    alt="Sofa"
                    width={400}
                    height={400}
                />
            
            <div className='flex flex-col'>
                <h1 className="text-2xl font-bold ">
                    Sofa
                </h1>
                <a
                    href="#"
                    className="font-medium text-black hover:underline"
                >
                    View More
                </a>
            </div>
            </div>


        </div>
    )
}

export default Seater

