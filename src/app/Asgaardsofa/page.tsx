import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';

const Page = () => {
  return (
    <div className='w-full flex flex-col items-center px-4 md:px-10 lg:px-20'>
      {/* Breadcrumb */}
      <div className='text-gray-400 mt-5 w-full max-w-6xl'>
        <div className='flex items-center text-sm sm:text-base'>
          <a href='/'>Home</a>
          <MdKeyboardArrowRight />
          <a href='/'>Shop</a>
          <MdKeyboardArrowRight />
          <a href='/' className='font-normal text-black'>Asgaard sofa</a>
        </div>
      </div>

      {/* Product Section */}
      <div className='flex flex-col lg:flex-row items-center w-full max-w-6xl mt-6'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2 flex flex-col items-center'>
          <div className='bg-[#FFF9E5] p-4 rounded-lg'>
            <Image src='/images/1(4).png' alt='Asgaard sofa' width={481} height={391} />
          </div>
          <div className='grid grid-cols-4 sm:grid-cols-5 gap-2 mt-4'>
            {["/images/2(3).png", "/images/2(2).png", "/images/2(1).png", "/images/2(4).png"].map((src, index) => (
              <div key={index} className='flex justify-center'>
                <Image src={src} alt={`Thumbnail ${index + 1}`} width={76} height={80} className='rounded-lg' />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className='w-full lg:w-1/2 mt-6 lg:mt-0 px-4'>
          <h1 className='text-3xl font-bold'>Asgaard Sofa</h1>
          <p className='text-xl font-semibold text-gray-400'>Rs. 250,000.00</p>
          <div className='flex items-center mt-2'>
            {[...Array(5)].map((_, i) => (
              <Image key={i} src='/images/1(1).png' alt='star' width={18} height={18} />
            ))}
            <p className='ml-3 text-sm'>5 Customer Reviews</p>
          </div>
          <p className='mt-4 text-sm text-gray-600'>
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio that boasts a clear midrange and extended highs.
          </p>
          
          {/* Size & Quantity */}
          <div className='mt-4'>
            <p className='font-semibold'>Size</p>
            <div className='flex gap-2 mt-1'>
              {["L", "XL", "XXL"].map((size) => (
                <button key={size} className='px-4 py-2 bg-gray-300 rounded'>{size}</button>
              ))}
            </div>
          </div>
          
          <div className='mt-4'>
            <p className='font-semibold'>Quantity</p>
            <div className='flex items-center gap-2'>
              <button className='px-3 py-2 bg-gray-300 rounded'>-</button>
              <input type='number' value={1} className='w-12 text-center border rounded' readOnly />
              <button className='px-3 py-2 bg-gray-300 rounded'>+</button>
            </div>
          </div>
          
          <a
                href="/Cart"
                className="mt-10 bg-gray-900 text-white font-medium px-8 py-3 rounded-md transition duration-300 hover:bg-gray-700"
            >
                Add to Cart
            </a>
        </div>
      </div>

      {/* Related Products */}
      <div className='w-full max-w-6xl mt-10'>
        <h2 className='text-2xl font-semibold text-center'>Related Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6'>
          {["1(38).png", "1(15).png", "1(22).png", "1(25).png"].map((img, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow'>
              <Image src={`/images/${img}`} alt='Product' width={287} height={287} />
              <p className='mt-2 text-center text-gray-800'>Product {index + 1}</p>
              <p className='text-center font-bold'>Rs. 25,000.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
