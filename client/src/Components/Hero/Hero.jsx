import React from "react";
// import "./Hero.css";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full bg-gradient-to-r from-slate-100 to-gray-100 py-8">
        <div className="text-center px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Hello Teacher,
          </h2>
          <span className="text-5xl font-bold inline-block text-blue-600 mb-6">
            Good Morning🌞
          </span>

          <p className="text-gray-500 mb-6">
            Effortless Attendance Tracking for Teachers
          </p>

          <button className="fancy-button bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:bg-blue-700 uppercase font-bold">
            How It Works
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-100 w-full py-8">
        <h1 className="text-2xl font-bold mb-4">Fancy Buttons</h1>

        <div className="w-full max-w-md px-4">
          <button className="fancy-button bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:bg-blue-700 mb-4 w-full">
            Generate QR Code
          </button>

          <button className="fancy-button bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition duration-500 hover:scale-110 hover:bg-green-700 w-full">
            Scan QR Code
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
