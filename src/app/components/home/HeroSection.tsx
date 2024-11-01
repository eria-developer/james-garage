// // import React from "react";
// // import { useInView } from "react-intersection-observer";
// // import { GoDotFill } from "react-icons/go";
// // import { IoIosArrowRoundForward } from "react-icons/io";
// // import {
// //   FaTools,
// //   FaClock,
// //   FaShieldAlt,
// //   FaStar,
// //   FaDollarSign,
// //   FaCalendarCheck,
// // } from "react-icons/fa";
// // import { Button } from "@/components/ui/button";
// // import Link from "next/link";

// // interface HeroSectionProps {
// //   text: string;
// //   router: any;
// // }

// // const HeroSection: React.FC<HeroSectionProps> = ({ text, router }) => {
// //   const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

// //   return (
// //     <div
// //       ref={ref}
// //       className="min-h-screen pt-[100px] pb-10 md:pb-48 relative flex items-center justify-center" // Added min-h-screen and justify-center
// //       style={{
// //         backgroundImage: `url('/garage7.jpg')`,
// //         backgroundRepeat: "no-repeat",
// //         backgroundPosition: "center",
// //         backgroundSize: "cover",
// //       }}
// //     >
// //       <div className="flex items-center absolute inset-0 bg-black opacity-50" />
// //       <div className="grid md:grid-cols-2 grid-cols-1 gap-10 relative z-10 text-center md:text-left mx-20 my-auto">
// //         {" "}
// //         {/* Added my-auto */}
// //         <div className="flex flex-col gap-7 justify-center">
// //           {" "}
// //           {/* Added justify-center */}
// //           <div className="flex gap-1 justify-center md:justify-start">
// //             <GoDotFill color="orange" size={25} />
// //             <p className="text-sm uppercase mt-[3px] text-white font-semibold tracking-widest">
// //               Trusted Garage Services
// //             </p>
// //           </div>
// //           <h2
// //             className="text-3xl sm:text-6xl text-white font-bold ml-1"
// //             style={{ lineHeight: 1.2 }}
// //           >
// //             <span className="block md:hidden">
// //               Excellence in <br />
// //               <span className="text-orange-400">{text}</span> Care
// //             </span>
// //             <span className="hidden md:block">
// //               Excellence in <span className="text-orange-400">{text}</span> Care
// //             </span>
// //           </h2>
// //           <p className="text-white tracking-widest">
// //             Comprehensive automotive solutions from skilled professionals you
// //             can trust.
// //           </p>
// //           <div className="flex gap-5 flex-row justify-center md:justify-start">
// //             <Button
// //               label="Book Appointment"
// //               className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-3xl p-[10px] text-white opacity-90 font-semibold w-36 hover:bg-orange-500 hover:text-white transition-all duration-300"
// //               type="button"
// //               onClick={() => router.push("/services")}
// //             />
// //             <Link
// //               href="/services"
// //               className="group flex items-center mt-2 text-white font-semibold hover:text-orange-500 transition-all duration-300"
// //             >
// //               View Services
// //               <IoIosArrowRoundForward
// //                 size={30}
// //                 className="ml-2 group-hover:translate-x-2 transition-transform duration-300"
// //               />
// //             </Link>
// //           </div>
// //         </div>
// //         <div className="relative z-10 hidden md:block">
// //           <div className="w-full h-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl">
// //             <h3 className="text-2xl font-bold text-orange-600 mb-4">
// //               Why Choose Us?
// //             </h3>
// //             <ul className="space-y-4">
// //               <li className="flex items-center text-white">
// //                 <FaTools className="mr-3 text-orange-400" />
// //                 Expert Technicians
// //               </li>
// //               <li className="flex items-center text-white">
// //                 <FaClock className="mr-3 text-orange-400" />
// //                 Timely Service
// //               </li>
// //               <li className="flex items-center text-white">
// //                 <FaShieldAlt className="mr-3 text-orange-400" />
// //                 Quality Parts Guaranteed
// //               </li>
// //               <li className="flex items-center text-white">
// //                 <FaStar className="mr-3 text-orange-400" />
// //                 Customer Satisfaction
// //               </li>
// //               <li className="flex items-center text-white">
// //                 <FaDollarSign className="mr-3 text-orange-400" />
// //                 Transparent Pricing
// //               </li>
// //               <li className="flex items-center text-white">
// //                 <FaCalendarCheck className="mr-3 text-orange-400" />
// //                 Easy Appointment Scheduling
// //               </li>
// //             </ul>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeroSection;

// import React, { useState, useEffect } from "react";
// import { useInView } from "react-intersection-observer";
// import { GoDotFill } from "react-icons/go";
// import { IoIosArrowRoundForward } from "react-icons/io";
// import {
//   FaTools,
//   FaClock,
//   FaShieldAlt,
//   FaStar,
//   FaDollarSign,
//   FaCalendarCheck,
// } from "react-icons/fa";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// interface HeroSectionProps {
//   text: string;
//   router: any;
// }

// const HeroSection: React.FC<HeroSectionProps> = ({ text, router }) => {
//   const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [activeFeature, setActiveFeature] = useState(0);

//   const features = [
//     { icon: FaTools, text: "Expert Technicians", delay: "delay-0" },
//     { icon: FaClock, text: "Timely Service", delay: "delay-100" },
//     { icon: FaShieldAlt, text: "Quality Parts Guaranteed", delay: "delay-200" },
//     { icon: FaStar, text: "Customer Satisfaction", delay: "delay-300" },
//     { icon: FaDollarSign, text: "Transparent Pricing", delay: "delay-400" },
//     { icon: FaCalendarCheck, text: "Easy Scheduling", delay: "delay-500" },
//   ];

//   useEffect(() => {
//     setIsLoaded(true);
//     const interval = setInterval(() => {
//       setActiveFeature((prev) => (prev + 1) % features.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className="min-h-screen relative flex items-center justify-center overflow-hidden"
//     >
//       {/* Background with parallax effect */}
//       <div
//         className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110 transition-transform duration-1000"
//         style={{
//           backgroundImage: `url('/garage6.jpg')`,
//           transform: inView ? "scale(105)" : "scale(110)",
//         }}
//       />

//       {/* Overlay with gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

//       {/* Main content */}
//       <div
//         className={`relative z-10 container mx-auto px-6 py-20 transition-all duration-1000 transform ${
//           isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
//         }`}
//       >
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           {/* Left Column */}
//           <div className="flex flex-col gap-8 text-center md:text-left">
//             {/* Badge */}
//             <div className="flex gap-2 items-center justify-center md:justify-start">
//               <div className="animate-pulse">
//                 <GoDotFill className="text-orange-500 h-6 w-6" />
//               </div>
//               <p className="text-sm uppercase text-white font-semibold tracking-widest bg-orange-500/10 px-4 py-1 rounded-full">
//                 Trusted Garage Services
//               </p>
//             </div>

//             {/* Main Heading */}
//             <h1 className="text-4xl md:text-6xl font-bold text-white space-y-2">
//               <span className="block">Excellence in</span>
//               <span className="block text-orange-400 bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
//                 {text}
//               </span>
//               <span className="block">Care</span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
//               Comprehensive automotive solutions from skilled professionals you
//               can trust. Experience the difference of premium service and
//               expertise.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start">
//               <Button
//                 onClick={() => router.push("/services")}
//                 className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
//               >
//                 Book Appointment
//               </Button>

//               <Link
//                 href="/services"
//                 className="group flex items-center text-white hover:text-orange-400 transition-colors duration-300"
//               >
//                 <span className="font-medium">View Services</span>
//                 <IoIosArrowRoundForward className="ml-2 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" />
//               </Link>
//             </div>
//           </div>

//           {/* Right Column - Features Card */}
//           <div
//             className={`hidden md:block transform transition-all duration-1000 ${
//               inView ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
//             }`}
//           >
//             <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/10">
//               <h3 className="text-2xl font-bold text-orange-400 mb-6">
//                 Why Choose Us?
//               </h3>
//               <div className="grid gap-4">
//                 {features.map((feature, index) => {
//                   const Icon = feature.icon;
//                   return (
//                     <div
//                       key={index}
//                       className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
//                         activeFeature === index
//                           ? "bg-orange-500/20 transform scale-105"
//                           : "hover:bg-white/5"
//                       }`}
//                     >
//                       <Icon
//                         className={`w-5 h-5 mr-4 text-orange-400 ${
//                           activeFeature === index ? "animate-bounce" : ""
//                         }`}
//                       />
//                       <span className="text-white font-medium">
//                         {feature.text}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
//       <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent" />
//     </div>
//   );
// };

// export default HeroSection;

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

interface HeroSectionProps {
  text: string;
  router: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ text, router }) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { icon: FaTools, text: "Expert Technicians", delay: "delay-0" },
    { icon: FaClock, text: "Timely Service", delay: "delay-100" },
    { icon: FaShieldAlt, text: "Quality Parts Guaranteed", delay: "delay-200" },
    { icon: FaStar, text: "Customer Satisfaction", delay: "delay-300" },
    { icon: FaDollarSign, text: "Transparent Pricing", delay: "delay-400" },
    { icon: FaCalendarCheck, text: "Easy Scheduling", delay: "delay-500" },
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
            src="/garage1.jpg"
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
