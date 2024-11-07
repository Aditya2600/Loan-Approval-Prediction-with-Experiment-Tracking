import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const FacultyHead = () => {
  return (
    <div className="flex h-auto lg:h-[100vh] w-full items-center justify-center p-4 lg:p-8">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row bg-white rounded-lg overflow-hidden w-full max-w-5xl shadow-lg">
        
        {/* Faculty Image */}
        <img
          src="faculty-image.png"
          alt="Faculty Head"
          className="w-full lg:w-1/2 h-64 lg:h-auto object-cover"
          style={{ borderRadius: '16px 0 0 16px' }}
        />

        {/* Faculty Content */}
        <div className="flex-1 p-6 lg:p-8">
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">Faculty Head</h3>
          <p className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed">
            Thank you for being an integral part of our journey. Your dedication and enthusiasm are the driving forces
            behind our success. As we look ahead, I am excited about the opportunities that lie before us. Together, we
            can achieve even greater heights, fostering a community that is not only vibrant and inclusive but also a
            beacon of hope and progress. Let us continue to work hand in hand, supporting one another and striving
            towards our shared goals.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg hover:bg-blue-400 hover:text-white transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg hover:bg-blue-700 hover:text-white transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="flex items-center justify-center w-10 h-10 rounded-full shadow-lg hover:bg-pink-500 hover:text-white transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyHead;