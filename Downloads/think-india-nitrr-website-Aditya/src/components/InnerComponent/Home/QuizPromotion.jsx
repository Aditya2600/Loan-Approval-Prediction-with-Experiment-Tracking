import React from "react";

function QuizPromotion() {
  return (
    <div className="bg-[#89C3CD] py-10 h-[50vw] px-6 md:px-16 lg:flex lg:items-center">
      <div className="lg:w-1/2 space-y-4">
        <div className="w-full flex justify-center">
          <img src="Quizes.png" alt="Quizes" className="h-[20vw] mb-6" />
        </div>
        <p className="text-black text-3xl font-semibold">Think India Quiz</p>
        <p className="text-gray-700">
          Think India is a vibrant community that actively engages students and
          young professionals in various intellectual and social activities. One
          of their notable initiatives is organizing quiz competitions.
        </p>
        <button className="bg-blue-700 text-white py-2 px-6 rounded-md shadow-lg hover:bg-blue-800 mt-4">
          Register Now
        </button>
      </div>

      <div className="lg:w-1/2 lg:flex lg:items-center lg:justify-center relative">
        <div className="flex flex-col w-[35vw] h-[45vw] items-center space-y-3 bg-white rounded-3xl relative">
          <img src="thinking_woman.png" alt="Main Quiz" className="h-[40vw] w-[40vw] rounded-lg z-10" />

          {/* Question Overlay - Positioned Bottom-Left */}
          <div className="relative bottom-36 right-28 space-y-2 z-20">
            <div className="flex items-center space-x-2 bg-white shadow-lg p-2 rounded-3xl">
              <div className="rounded-full w-5 h-5 bg-black relative">
                <span className="absolute text-white font-bold translate-x-1.5 -translate-y-0.5">?</span>
              </div>
              <p>In what galaxy is our solar system located?</p>
            </div>
            <div className="flex items-center space-x-2 bg-white shadow-lg p-2 rounded-3xl">
              <div className="rounded-full w-5 h-5 bg-black relative">
                <span className="absolute text-white font-bold translate-x-1.5 -translate-y-0.5">?</span>
              </div>
              <p>What is the world's smallest continent?</p>
            </div>
            <div className="flex items-center space-x-2 bg-white shadow-lg p-2 rounded-3xl">
              <div className="rounded-full w-5 h-5 bg-black relative">
                <span className="absolute text-white font-bold translate-x-1.5 -translate-y-0.5">?</span>
              </div>
              <p>In what year did the Titanic sink?</p>
            </div>
          </div>
          
          {/* Optional Cash Prize Box */}
          {/* <div className="bg-orange-500 text-white font-bold py-2 px-4 rounded-md shadow-lg">
            Upto ₹5000 cash Prizes
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default QuizPromotion;