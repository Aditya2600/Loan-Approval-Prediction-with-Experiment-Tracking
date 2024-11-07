import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Button from "../../ui/Button";
import Section2 from "./Section2";

const HeroSection = () => {
  return (
    <div>
      <div className="relative w-screen h-screen">
        {/* Hero Section Background */}
        <div className="absolute inset-0">
          <img
            src="/RIT_5194 1.png"
            alt="Group photo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Social Media Links */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-6 z-40">
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border border-gray-300 transition-transform duration-300 hover:translate-y-[-15px]"
          >
            <FaLinkedin className="text-black w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border border-gray-300 transition-transform duration-300 hover:translate-y-[-15px]"
          >
            <FaInstagram className="text-black w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border border-gray-300 transition-transform duration-300 hover:translate-y-[-15px]"
          >
            <FaFacebook className="text-black w-6 h-6 sm:w-8 sm:h-8" />
          </a>
          <a
            href="#"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center border border-gray-300 transition-transform duration-300 hover:translate-y-[-15px]"
          >
            <FaXTwitter className="text-black w-6 h-6 sm:w-8 sm:h-8" />
          </a>
        </div>

        {/* Hero Text and Logo */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center text-center z-10 h-1/3 pb-12 sm:pb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mt-24 sm:mt-32 md:mt-[130px] font-bold text-white mb-4">
            Empowering Minds,
            <br />
            Enriching Lives
          </h1>
          <div className="bg-white p-6 sm:p-8 rounded-lg mt-8 shadow-xl w-full max-w-lg mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-orange-500">
              THINK INDIA
            </h2>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mt-2">
              NIT RAIPUR
            </p>
            <div className="flex justify-center mt-4">
              <img
                src="/Logo_ThinkIndia_Transparent.png"
                alt="Think India Logo"
                className="w-1/4 sm:w-1/3 md:w-5/12 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default HeroSection;
