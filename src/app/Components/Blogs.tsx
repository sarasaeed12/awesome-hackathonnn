import React from 'react'
import Image from 'next/image'

const Blogs = () => {
    return (
        <div className='w-full h-[944px] bg-white flex-col items-center justify-center'>
            <div className='flex flex-col text-center mt-14'>
                <h1 className='font-bold text-4xl'>Our Blogs</h1>

                <p>Find a bright ideal to suit your taste with our great selection</p>
            </div>
            {/* 1st blog */}
            <div className='flex flex-row justify-between items-center gap-4 mt-2 pl-[100px]'>
            <div className="flex flex-col w-[416px] bg-white">
                <Image src="/images/Rectangle 13.png" alt="course2" width={393} height={393} />
                <div className="px-4 flex flex-col justify-center items-center">


                    <h5 className="font-normal mt-11">Going all-in with millennial design</h5>
                    
                 
                    <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    Read More
                </a>
                <Image src="/images/timer.png" alt="time" width={250} height={40} />
                        
                </div>
            </div>


            {/* 2nd t blog */}
            <div className="flex flex-col w-[416px] bg-white">
                <Image src="/images/Rectangle 14.png" alt="course2" width={393} height={393} />
                <div className="px-4 flex flex-col justify-center items-center">


                    <h5 className="font-normal mt-11">Going all-in with millennial design</h5>
                    
                 
                    <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    Read More
                </a>
                <Image src="/images/timer.png" alt="time" width={250} height={40} />
                        
                </div>
            </div>



            {/* 3rd blog */}
            <div className="flex flex-col w-[416px] bg-white">
                <Image src="/images/Rectangle 15.png" alt="course2" width={393} height={393} />
                <div className="px-4 flex flex-col justify-center items-center">


                    <h5 className="font-normal mt-11">Going all-in with millennial design</h5>
                    
                 
                    <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    Read More
                </a>
                <Image src="/images/timer.png" alt="time" width={250} height={40} />
                        
                </div>
            </div>

        
            </div>

            <div className='flex justify-center items-center mt-10'>
           <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    View All Post
                </a>
           </div>

        </div>
    )
}

export default Blogs
