import React from 'react';
import Image from 'next/image';

const Blogs = () => {
    return (
        <div className="w-full bg-white py-10">
            {/* Header */}
            <div className="text-center px-4">
                <h1 className="font-bold text-4xl sm:text-3xl">Our Blogs</h1>
                <p className="text-gray-600 mt-2">Find a bright idea to suit your taste with our great selection.</p>
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 mt-10">
                {/* Blog 1 */}
                <div className="flex flex-col items-center text-center">
                    <Image src="/images/1(29).png" alt="Blog 1" width={393} height={393} className="rounded-lg" />
                    <h5 className="font-normal mt-4">Going all-in with millennial design</h5>
                    <a href="#" className="font-medium text-black hover:underline mt-2">
                        Read More
                    </a>
                    <Image src="/images/1(37).png" alt="Time" width={250} height={40} className="mt-2" />
                </div>

                {/* Blog 2 */}
                <div className="flex flex-col items-center text-center">
                    <Image src="/images/1(30).png" alt="Blog 2" width={393} height={393} className="rounded-lg" />
                    <h5 className="font-normal mt-4">Going all-in with millennial design</h5>
                    <a href="#" className="font-medium text-black hover:underline mt-2">
                        Read More
                    </a>
                    <Image src="/images/1(37).png" alt="Time" width={250} height={40} className="mt-2" />
                </div>

                {/* Blog 3 */}
                <div className="flex flex-col items-center text-center">
                    <Image src="/images/1(31).png" alt="Blog 3" width={393} height={393} className="rounded-lg" />
                    <h5 className="font-normal mt-4">Going all-in with millennial design</h5>
                    <a href="#" className="font-medium text-black hover:underline mt-2">
                        Read More
                    </a>
                    <Image src="/images/1(37).png" alt="Time" width={250} height={40} className="mt-2" />
                </div>
            </div>
        </div>
    );
};

export default Blogs;


