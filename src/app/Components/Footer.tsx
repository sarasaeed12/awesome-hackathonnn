import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black mt-9 pt-9">
      {/* Main Footer Container */}
      <div className="w-full flex flex-col items-center px-6 lg:px-16">
        
        {/* Footer Content */}
        <div className="w-full max-w-[1240px] flex flex-col lg:flex-row justify-between gap-10">
          
          {/* Address Section */}
          <div className="flex flex-col text-center lg:text-left">
            <p className="text-gray-600 font-light">400 University Drive Suite 200 Coral</p>
            <p className="text-gray-600 font-light">Gables, FL 33134 USA</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Links */}
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="font-medium text-gray-600">Links</h1>
              <div className="flex flex-col gap-2 mt-3">
                <a href="/" className="hover:underline">Home</a>
                <a href="/" className="hover:underline">Shop</a>
                <a href="/" className="hover:underline">About</a>
                <a href="/" className="hover:underline">Contact</a>
              </div>
            </div>

            {/* Help */}
            <div className="flex flex-col items-center lg:items-start">
              <h1 className="font-medium text-gray-600">Help</h1>
              <div className="flex flex-col gap-2 mt-3">
                <a href="/" className="hover:underline">Payment Options</a>
                <a href="/" className="hover:underline">Returns</a>
                <a href="/" className="hover:underline">Privacy Policies</a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col items-center lg:items-start">
            <label className="text-gray-500">Newsletter</label>
            <form className="flex flex-col lg:flex-row gap-2 mt-3 w-full">
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-lg w-full"
                required
              />
              <button
                type="submit"
                className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
        
        {/* Copyright Section */}
        <div className="w-full text-center mt-6 font-light text-gray-600">
          <p>2022 Meubel House. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

