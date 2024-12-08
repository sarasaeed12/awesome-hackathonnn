import React from 'react'
import Image from 'next/image'










const Hero = () => {
    return (
        // left side 
        <div className='w-full h-screen bg-[#FBEBB5;] flex flex-row justify- center items-center'>


            {/* left side */}

            <div className='w-[440] h-[276] flex-row justify-center items-center font-semibold pt-[20px] pl-[202px]'>


                <h1 className='sm:text-2xl md:text-4xl lg:text-6xl font-bold text-left pl-7 '>Rocket single </h1>
                <h1 className='sm:text-2xl md:text-4xl lg:text-6xl font-bold text-left pl-7 '> seater</h1>
                
                 <a href="#" className="font-medium text-black dark hover:underline pl-7 ">Shop Now</a>

            </div>
            <div>
                
{/* /right/ */}
  <Image className="h-auto max-w-full rounded-lg" 
  src={"/images/Rocket single seater 1.png" }alt="Seater"/>
  

            </div>


{/* /table/
            <div className='flex justify-center items-center bg-[#FAF4F4;]'>
                <div className='w-[605px] h-[562px] flex justify-center items-center'>
                <h1 className='sm:text-2xl md:text-4xl lg:text-6xl font-bold text-left pl-7 '> seater</h1>
                
                <a href="#" className="font-medium text-black dark hover:underline pl-7 ">Shop Now</a>


                </div>

            </div> */}




        </div>






    )
}

export default Hero
