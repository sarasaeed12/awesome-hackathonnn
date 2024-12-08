import React from 'react'
import Image from 'next/image'

const Asgaard = () => {
    return (
        <div className='w-full h-[750px] bg-[#FFF9E5;] mt-11 flex justify-start items-center gap-3'>
            <div className='w-[983px] h-[799px] flex'>
                <Image
                    className="h-auto max-w-full rounded-lg mt-5"
                    src="/images/Asgaard sofa 1.png"
                    alt="Sofa"
                />
                  {/* / text / */}
            <div className=' flex flex-col justify-center items-center'>
                <h3 className='font-normal flex flex-row'>New Arrivals</h3>
                <h1 className='font-bold text-5xl w-[331px] h-[72px]'>Asgaard sofa</h1>
                
                <div className=' w-[255px] h-[64px] outline '>
                <button className='bg-[#FFF9E5;] pt-5 pl-[70px] font-medium text-2xl'>Order Now</button>
                </div>
            </div>
            </div>

          


        </div>
    )
}

export default Asgaard
