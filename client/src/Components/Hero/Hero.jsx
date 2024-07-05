import React from "react";
import { IoMdArrowRoundDown } from "react-icons/io";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center relative">
      <div className="w-full mt-">
        <div className="text-center px-4">
          <h2 className="text-italic font-semibold text-gray-600 mb-2">
            Hello Teacher,
          </h2>
          <span className="text-4xl font-bold inline-block text-blue-700 mb-2">
            Good Morning
          </span>

          <p className="text-gray-500 mb-4">
            Effortless Attendance Tracking for Teachers
          </p>

          <button className=" text-gray-700 border border-red-900 px-4 py-2 mb-6 rounded-md transform transition duration-500 hover:scale-110  font-bold">
            How It Works
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  w-full py-8">
        <h1 className="text-5xl font-bold mb-1 animate-bounce">
          <IoMdArrowRoundDown className="text-red-900" />
        </h1>

        <div className="w-full max-w-md">
          <button className="fancy-button bg-blue-700 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-blue-900 mb-4 w-full font-medium">
            Generate QR Code
          </button>

          <button className="fancy-button bg-green-700 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-green-900 w-full font-medium">
            Scan QR Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
