import React, { useState } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";

const Hero = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <section className="flex flex-col items-center justify-center relative">
      <div className="w-full mt-">
        <div className="text-center px-4">
          <h2 className="text-2xl font-semibold text-gray-600">Welcome to,</h2>
          <span className="text-4xl font-extrabold inline-block text-blue-700 mt-3 ">
            Teacher's Attendance
          </span>

          <p className="text-gray-500 mb-4">
            Effortless Attendance Tracking for Teachers
          </p>

          {/* <button className=" text-gray-700 border border-red-900 px-4 py-2 mb-6 rounded-md transform transition duration-500 hover:scale-110  font-bold">
            How It Works
          </button> */}

          <p className="text-4xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 rounded-lg">
            {currentTime}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center  w-full py-8">
        <h1 className="text-3xl font-bold mt-3 animate-bounce">
          <IoMdArrowRoundDown className="text-red-900" />
        </h1>

        <div className="w-full max-w-md">
          <button className="fancy-button bg-green-700 text-white px-6 py-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-green-900 mb-4 w-full font-medium">
            Generate QR Code
          </button>

          <button className="fancy-button bg-red-800 text-white px-6 py-4 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:bg-red-900 w-full font-medium">
            Scan QR Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
