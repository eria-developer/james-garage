import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { GoDotFill } from "react-icons/go";
import { IoIosArrowRoundForward } from "react-icons/io";
import {
  FaTools,
  FaClock,
  FaShieldAlt,
  FaStar,
  FaDollarSign,
  FaCalendarCheck,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { IMAGE_BASE_URL } from "@/constants/constants";

interface HeroSectionProps {
  text: string;
  router: {
    push: (path: string) => void;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ text, router }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: FaTools, text: "Expert Technicians" },
    { icon: FaClock, text: "Timely Service" },
    { icon: FaShieldAlt, text: "Quality Parts Guaranteed" },
    { icon: FaStar, text: "Customer Satisfaction" },
    { icon: FaDollarSign, text: "Transparent Pricing" },
    { icon: FaCalendarCheck, text: "Easy Scheduling" },
  ];

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className="min-h-screen relative flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with Fallback */}
      <div className="absolute inset-0">
        {/* Loading skeleton */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black animate-pulse" />
        )}

        {/* Background image with Next.js Image component */}
        <div className="absolute inset-0">
          <Image
            src={`${IMAGE_BASE_URL}/garage1.jpg`}
            alt="Garage Background"
            fill
            priority
            quality={100}
            onLoadingComplete={() => setImageLoaded(true)}
            className={`object-cover transition-opacity duration-1000 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Overlay gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80 pointer-events-none" />
      </div>

      {/* Main content */}
      <div
        className={`relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 transform ${
          isLoaded && imageLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="flex flex-col gap-8 text-center md:text-left">
            {/* Badge */}
            <div className="flex gap-2 items-center justify-center md:justify-start">
              <div className="animate-pulse">
                <GoDotFill className="text-orange-500 h-6 w-6" />
              </div>
              <p className="text-sm uppercase text-white font-semibold tracking-widest bg-orange-500/10 px-4 py-1 rounded-full">
                Trusted Garage Services
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold text-white space-y-2">
              <span className="block">Excellence in</span>
              <span className="block text-transparent bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text animate-gradient">
                {text}
              </span>
              <span className="block">Care</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
              Comprehensive automotive solutions from skilled professionals you
              can trust. Experience the difference of premium service and
              expertise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
              <Button
                onClick={() => router.push("/services")}
                className="relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 overflow-hidden group"
              >
                <span className="relative z-10">Book Appointment</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Button>

              <Link
                href="/services"
                className="group flex items-center text-white hover:text-orange-400 transition-colors duration-300"
              >
                <span className="font-medium">View Services</span>
                <IoIosArrowRoundForward className="ml-2 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Column - Features Card */}
          <div
            className={`hidden md:block transform transition-all duration-1000 ${
              inView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-orange-400 mb-6">
                Why Choose Us?
              </h3>
              <div className="grid gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
                        activeFeature === index
                          ? "bg-orange-500/20 transform scale-105"
                          : "hover:bg-white/5"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 mr-4 text-orange-400 ${
                          activeFeature === index ? "animate-bounce" : ""
                        }`}
                      />
                      <span className="text-white font-medium">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
    </div>
  );
};

export default HeroSection;
