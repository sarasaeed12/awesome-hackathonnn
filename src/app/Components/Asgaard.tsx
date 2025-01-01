import React from 'react'
import Image from 'next/image'

const Asgaard = () => {
    return (
        <div className='flex justify-center items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
            <div>
            <Image
                    className="h-auto max-w-full rounded-lg mt-5"
                    src="/images/1(4).png"
                    alt="Sofa"
                    width={983}
                    height={799}
                />
            </div>

            {/* / text / */}
            <div className=' flex flex-col justify-center items-center'>
                <h3 className='font-normal flex flex-row'>New Arrivals</h3>
                <h1 className='font-bold text-5xl w-[331px] h-[72px]'>Asgaard sofa</h1>
                
               
                <a href="/Asgaardsofa" className='bg-white outline rounded pl-8 pr-8 pt-3 pb-3' >Order Now</a>
                
                <div/>
        </div>
        </div>
    )
}

export default Asgaard
