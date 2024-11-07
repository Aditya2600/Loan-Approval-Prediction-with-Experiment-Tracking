import React from "react";

function ContactForm() {
  return (
    <div className="bg-white py-12 px-6 md:px-16 lg:flex lg:space-x-10 items-center">
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-orange-600">Be a Catalyst for Positive Change!</h2>
        <p className="text-gray-700">
          Are you passionate about making a difference in society? Do you
          believe in the power of youth to drive meaningful change? If so, we
          invite you to join Think India, a dynamic community dedicated to
          uplifting society and empowering new generations.
        </p>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="border border-gray-300 p-2 w-full rounded-md" />
          <input type="email" placeholder="Email" className="border border-gray-300 p-2 w-full rounded-md" />
          <input type="text" placeholder="Phone Number" className="border border-gray-300 p-2 w-full rounded-md" />
          <input type="text" placeholder="Gender" className="border border-gray-300 p-2 w-full rounded-md" />
          <input type="text" placeholder="University, School or Company" className="border border-gray-300 p-2 w-full rounded-md" />
          <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-md shadow-lg hover:bg-orange-600 w-full">
            Get in Touch
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 flex flex-wrap justify-center mt-8 lg:mt-0 space-x-2 space-y-2">
        {/* Replace these with actual images */}
        <img src="path-to-community-image-1" alt="Community" className="h-24 w-24 rounded-lg shadow-md" />
        <img src="path-to-community-image-2" alt="Community" className="h-24 w-24 rounded-lg shadow-md" />
        <img src="path-to-community-image-3" alt="Community" className="h-24 w-24 rounded-lg shadow-md" />
        <img src="path-to-community-image-4" alt="Community" className="h-24 w-24 rounded-lg shadow-md" />
      </div>
    </div>
  );
}

export default ContactForm;
