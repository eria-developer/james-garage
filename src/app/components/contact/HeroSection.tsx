import { IMAGE_BASE_URL } from "@/constants/constants";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative grid grid-cols-2 h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGE_BASE_URL}/contact.jpg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="hidden md:block" />
      <div className="relative z-10 flex flex-col  justify-center text-white p-8">
        <h1 className="text-4xl font-bold mb-4">Get in Touch with Us</h1>
        <p className="text-lg mb-4">
          We're here to help you with all your automotive needs. Reach out to us
          for inquiries, feedback, or support.
        </p>
        <div className="flex space-x-4">
          <FaFacebook className="text-2xl text-blue-600 transition duration-300" />
          <FaTwitter className="text-2xl text-blue-400 transition duration-300" />
          <FaInstagram className="text-2xl text-pink-600 transition duration-300" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
