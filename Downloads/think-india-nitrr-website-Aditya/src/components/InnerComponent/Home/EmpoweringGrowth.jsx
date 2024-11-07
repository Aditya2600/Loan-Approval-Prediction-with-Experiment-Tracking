import React from "react";

function EmpoweringGrowth() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-yellow-200 to-orange-200">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-3xl">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-orange-600">Empowering Growth</h1>
          <h2 className="text-2xl font-bold mt-2">Inspiring Futures!</h2>
          <p className="text-gray-700 mt-4">
            Your voice matters, and we want to hear from you! How do you think we
            can empower the people of India to achieve their fullest potential?
          </p>
        </div>
        <div className="flex justify-center mb-6">
          <input
            type="email"
            placeholder="Enter your Email"
            className="p-3 border border-gray-300 rounded-lg mr-4 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="flex justify-center mb-6">
          <textarea
            placeholder="Write Your Idea In form of words"
            className="p-3 border border-gray-300 rounded-lg w-full max-w-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600">
            Send Us
          </button>
        </div>
        <div className="relative mt-8">
          <div className="absolute right-0 top-0 hidden lg:block transform translate-x-1/2 -translate-y-1/2">
            <img
              src="women_pointing.jpg" // Replace with the path to your image
              alt="Woman pointing"
              className="h-48"
            />
          </div>
          <div className="absolute left-1/4 top-1/4 transform -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-4">
            <img
              src="path/to/icon1.png" // Replace with the path to your icons
              alt="Icon 1"
              className="h-16 w-16 rounded-lg shadow-lg"
            />
            <img
              src="path/to/icon2.png" // Replace with the path to your icons
              alt="Icon 2"
              className="h-16 w-16 rounded-lg shadow-lg"
            />
            <img
              src="path/to/icon3.png" // Replace with the path to your icons
              alt="Icon 3"
              className="h-16 w-16 rounded-lg shadow-lg"
            />
            <img
              src="path/to/icon4.png" // Replace with the path to your icons
              alt="Icon 4"
              className="h-16 w-16 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpoweringGrowth;