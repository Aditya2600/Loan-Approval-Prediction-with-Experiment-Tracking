import React, { useEffect, useState } from "react";

function CommunityCounter() {
  // State for the animated Students counter
  const [studentsCount, setStudentsCount] = useState(0);

  // Effect to animate the students counter to 2000+
  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter < 2000) {
        counter += 50; // Adjust increment speed here
        setStudentsCount(counter);
      } else {
        setStudentsCount(2000);
        clearInterval(interval);
      }
    }, 20); // Adjust the delay for a smoother animation
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center w-[100%] gap-16 py-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-800">Join Our Community</h2>
      <div className="flex flex-col md:flex-row gap-10 justify-around w-[100%]">
        {/* Counter Item 1 - Students */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="student_icon.png"
            alt="Students Icon"
            className="h-[25vh] w-[25vh] shadow-lg shadow-slate-600 rounded-3xl"
          />

          <h3 className="text-2xl text-orange-500 font-bold">
            {studentsCount.toLocaleString()}+
          </h3>
          <p className="text-xl font-semibold text-gray-800">Students</p>
        </div>

        {/* Counter Item 2 - Followers */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="followers_icon.png"
            alt="Followers Icon"
            className="h-[25vh] w-[25vh] shadow-lg shadow-slate-600 rounded-3xl"
          />

          <h3 className="text-2xl text-orange-500 font-bold">10,000+</h3>
          <p className="text-xl font-semibold text-gray-800">Followers</p>
        </div>

        {/* Counter Item 3 - Colleges */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="collages_icon.png"
            alt="Colleges Icon"
            className="h-[25vh] w-[25vh] shadow-lg shadow-slate-600 rounded-3xl"
          />

          <h3 className="text-2xl text-orange-500 font-bold">50+</h3>
          <p className="text-xl font-semibold text-gray-800">Colleges</p>
        </div>
      </div>
    </div>
  );
}

export default CommunityCounter;