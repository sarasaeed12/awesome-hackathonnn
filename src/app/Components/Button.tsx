import React from 'react';

const Button = () => {
  return (
    <div className="flex justify-center">
      <a
        href="/Asgaardsofa"
        className="bg-white border border-gray-300 rounded-lg px-6 py-3 text-black font-medium hover:bg-gray-100 transition-all duration-300 text-sm sm:text-base md:text-lg"
      >
        Order Now
      </a>
    </div>
  );
};

export default Button;
