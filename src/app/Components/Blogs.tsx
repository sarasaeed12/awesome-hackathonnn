import React from 'react'
import Image from 'next/image'



const Blogs = () => {
    return (
        <div >
            <div className='text-center'><h1 className='font-bold text-4xl sm:mt-7'>Our Blogs</h1>
                <p>Find a bright ideal to suit your taste with our great selection</p>
            </div>

            {/* 1st blog */}
            <div className='flex flex-row justify-center items-center gap-5 mt-9 sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
            <div className='flex flex-col items-center'>
            <Image src="/images/1(29).png" alt="image1" width={393} height={393} />
            <h5 className="font-normal mt-11">Going all-in with millennial design</h5>
            <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    Read More
                </a>
                <Image src="/images/1(37).png" alt="time" width={250} height={40} />
            </div>

            {/* 2nd blog */}

            <div className='flex flex-col items-center'>
            <Image src="/images/1(30).png" alt="image1" width={393} height={393} />
            <h5 className="font-normal mt-11">Going all-in with millennial design</h5>
            <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    Read More
                </a>
                <Image src="/images/1(37).png" alt="time" width={250} height={40} />
            </div>


            {/* 3rd blog */}

            <div className='flex flex-col items-center'>
            <Image src="/images/1(31).png" alt="image1" width={393} height={393} />
            <h5 className="font-normal mt-11">Going all-in with millennial design</h5>
            <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    Read More
                </a>
                <Image src="/images/1(37).png" alt="time" width={250} height={40} />
            </div>
            </div>
        </div>
    )
}

export default Blogs

