import React from 'react';
import Image from 'next/image';
import { IoIosArrowForward } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";

const page = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] bg-cover bg-center" style={{ backgroundImage: "url('/images/1(28).png')" }}>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-10">
          <Image src="/images/Meubel House_Logos-05.png" alt="logo" width={77} height={77} />
          <p className="text-lg sm:text-2xl md:text-3xl text-black mb-6">Contact</p>
          <div className="flex justify-center items-center relative top-[-10px] sm:top-[-20px] font-light">
            <p>Home</p>
            <IoIosArrowForward />
            <p>Contact</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 mt-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-2xl sm:text-3xl">Get In Touch With Us</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-500 w-full sm:w-[500px] md:w-[644px] mt-4">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
            Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 mt-12">
          {/* Contact Info Section */}
          <div className="flex flex-row lg:flex-col justify-start items-start gap-4">
            <div className="flex flex-col justify-start items-start gap-8 pt-2">
              <FaLocationDot className="text-xl sm:text-2xl" />
              <FaPhoneAlt className="text-xl sm:text-2xl" />
              <IoIosTime className="text-xl sm:text-2xl" />
            </div>
            <div className="flex flex-col justify-start items-start gap-6">
              <div>
                <h1 className="font-semibold text-base sm:text-lg">Address</h1>
                <p className="text-sm sm:text-base text-gray-700">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
              <div>
                <h1 className="font-semibold text-base sm:text-lg">Phone</h1>
                <p className="text-sm sm:text-base text-gray-700">Mobile: +(84) 546-6789</p>
                <p className="text-sm sm:text-base text-gray-700">Hotline: +(84) 456-6789</p>
              </div>
              <div>
                <h1 className="font-semibold text-base sm:text-lg">Working Time</h1>
                <p className="text-sm sm:text-base text-gray-700">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-sm sm:text-base text-gray-700">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <form className="w-full max-w-md">
            <div className="flex flex-col gap-4">
              <label className="text-sm sm:text-base">Your Name</label>
              <input type="text" placeholder="ABC" className="w-full border border-gray-300 rounded-lg p-3" />
              <label className="text-sm sm:text-base">Email Address</label>
              <input type="email" placeholder="Abc@def.com" className="w-full border border-gray-300 rounded-lg p-3" />
              <label className="text-sm sm:text-base">Subject</label>
              <input type="text" placeholder="This is optional" className="w-full border border-gray-300 rounded-lg p-3" />
              <label className="text-sm sm:text-base">Message</label>
              <textarea placeholder="Hi! I’d like to ask about..." className="w-full h-32 border border-gray-300 rounded-lg p-3"></textarea>
              <button className="bg-gray-700 text-white rounded-lg px-6 py-3 mt-4 hover:bg-gray-800">
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-[#FAF4F4] flex flex-wrap justify-center items-center py-12 px-4 sm:px-8 md:px-16 mt-12 gap-8">
        {[
          { title: "Free Delivery", desc: "For all orders over $50, consectetur adipiscing elit." },
          { title: "90 Days Return", desc: "If goods have problems, consectetur adipiscing elit." },
          { title: "Secure Payment", desc: "100% secure payment, consectetur adipiscing elit." },
        ].map((feature, index) => (
          <div key={index} className="flex flex-col text-center w-full sm:w-[300px]">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{feature.title}</h2>
            <p className="my-4 text-sm sm:text-base md:text-lg text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
