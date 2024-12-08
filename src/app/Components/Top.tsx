import React from 'react'

const Top = () => {
    return (
        <div className='w-full h-[777px]bg-white '>
            <div className='flex flex-col justify-center items-center text-center mt-10'>
            <h1 className='font-bold text-4xl'>Top Picks For You</h1>
            
            <p>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
            </div>
            {/* / 1 images/ */}

<div className='flex justify-center items-center gap-8'>
            <div className='flex justify-center items-center'>
                <div className='w-[287px] h-[372px]'>
                    <div className='w-[287px] h-[287px]'>
                        <img
                            className="h-auto max-w-full rounded-lg mt-5"
                            src="/images/Trenton modular sofa_3 1.png"
                            alt="Sofa"
                        />
                    </div>
                    <div>
                        <p className='font-thin'>Trenton modular sofa_3</p>
                        <h2 className='font-bold'>Rs. 25,000.00</h2>
                    </div>
                </div>

            </div>


            {/* / 2 images/ */}


            <div className='flex justify-center items-center'>
                <div className='w-[287px] h-[372px]'>
                    <div className='w-[287px] h-[287px]'>
                        <img
                            className="h-auto max-w-full rounded-lg mt-5"
                            src="/images/Granite dining table with dining chair 1.png"
                            alt="Sofa"
                        />
                    </div>
                    <div>
                        <p className='font-light'>Granite dining table with dining chair</p>
                        <h2 className='font-bold'> Rs. 25,000.00</h2>
                    </div>
                </div>

            </div>

            {/* / 3 images/ */}


            <div className='flex justify-center items-center'>
                <div className='w-[287px] h-[372px]'>
                    <div className='w-[287px] h-[287px]'>
                        <img
                            className="h-auto max-w-full rounded-lg mt-5"
                            src="/images/Outdoor bar table and stool 1.png"
                            alt="Sofa"
                        />
                    </div>
                    <div>
                        <p className='font-light'>Outdoor bar table and stool</p>
                        <h2 className='font-bold'> Rs. 25,000.00</h2>
                    </div>
                </div>

            </div>

            {/* / 4 images/ */}


            <div className='flex justify-center items-center'>
                <div className='w-[287px] h-[372px]'>
                    <div className='w-[287px] h-[287px]'>
                        <img
                            className="h-auto max-w-full rounded-lg mt-5"
                            src="/images/Plain console with teak mirror 1.png"
                            alt="Sofa"
                        />
                    </div>
                    <div>
                        <p className='font-light'>Plain console with teak mirror</p>
                        <h2 className='font-bold'> Rs. 25,000.00</h2>
                    </div>
                </div>

            </div>
            </div>

            {/* / view More / */}
           <div className='flex justify-center items-center mt-10'>
           <a
                    href="#"
                    className="font-medium text-black hover:underline mt-2"
                >
                    View More
                </a>
           </div>

        </div>
    )
}

export default Top
