// import React from "react";

// interface Picture {
//   src: string;
//   alt: string;
//   title: string;
//   description: string;
// }

// const pictures: Picture[] = [
//   {
//     src: "/garage1.jpg",
//     alt: "Mechanic working on engine",
//     title: "Engine Diagnostics",
//     description:
//       "State-of-the-art diagnostics for accurate and reliable results.",
//   },
//   {
//     src: "/garage2.jpg",
//     alt: "Tire replacement",
//     title: "Tire Replacement",
//     description:
//       "High-quality tire services for better safety and performance.",
//   },
//   {
//     src: "/garage3.jpg",
//     alt: "Oil change service",
//     title: "Oil Change",
//     description: "Regular oil changes to keep your engine running smoothly.",
//   },
//   {
//     src: "/garage4.jpg",
//     alt: "Battery check",
//     title: "Battery Checks",
//     description:
//       "Battery testing and replacements for reliable starts every time.",
//   },
// ];

// const GallerySection: React.FC = () => {
//   return (
//     <div className="py-20 bg-gradient-to-br from-gray-800 to-black text-white">
//       <div className="max-w-7xl mx-auto text-center px-5 lg:px-0">
//         <h2 className="text-4xl font-bold text-orange-500 mb-6">
//           Our Work in Action
//         </h2>
//         <p className="text-lg leading-relaxed mb-12">
//           Take a look at some of the services we provide. We believe in quality
//           and efficiency, with a commitment to keeping your vehicle in top
//           condition.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {pictures.map((picture, index) => (
//             <PictureCard key={index} {...picture} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Reusable card component for each picture
// const PictureCard: React.FC<Picture> = ({ src, alt, title, description }) => (
//   <div className="relative group">
//     <img
//       src={src}
//       alt={alt}
//       className="w-full h-64 object-cover rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105"
//     />
//     <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
//       <h3 className="text-xl font-semibold text-orange-400 mb-2">{title}</h3>
//       <p className="text-gray-300">{description}</p>
//     </div>
//   </div>
// );

// export default GallerySection;



import React, { useState } from 'react';
import { Motion, ZoomIn, Camera } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface Picture {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const pictures: Picture[] = [
  {
    src: "/garage1.jpg",
    alt: "Mechanic working on engine",
    title: "Engine Diagnostics",
    description: "State-of-the-art diagnostics for accurate and reliable results.",
  },
  {
    src: "/garage2.jpg",
    alt: "Tire replacement",
    title: "Tire Replacement",
    description: "High-quality tire services for better safety and performance.",
  },
  {
    src: "/garage3.jpg",
    alt: "Oil change service",
    title: "Oil Change",
    description: "Regular oil changes to keep your engine running smoothly.",
  },
  {
    src: "/garage4.jpg",
    alt: "Battery check",
    title: "Battery Checks",
    description: "Battery testing and replacements for reliable starts every time.",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<Picture | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_#ffffff12_25%,_transparent_25%,_transparent_75%,_#ffffff12_75%,_#ffffff12),linear-gradient(45deg,_#ffffff12_25%,_transparent_25%,_transparent_75%,_#ffffff12_75%,_#ffffff12)] bg-[length:60px_60px] bg-[position:0_0,30px_30px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Camera className="w-8 h-8 text-orange-500" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
              Our Work in Action
            </h2>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Take a look at some of the services we provide. We believe in quality
            and efficiency, with a commitment to keeping your vehicle in top
            condition.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pictures.map((picture, index) => (
            <PictureCard
              key={index}
              {...picture}
              onClick={() => setSelectedImage(picture)}
              isLoading={isLoading}
              onLoad={() => setIsLoading(false)}
            />
          ))}
        </div>

        {/* Modal View */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="sm:max-w-4xl bg-gray-900 border-gray-800">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-2xl font-bold text-orange-400 mb-2">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

const PictureCard = ({ 
  src, 
  alt, 
  title, 
  description, 
  onClick,
  isLoading,
  onLoad
}: Picture & { 
  onClick: () => void;
  isLoading: boolean;
  onLoad: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Loading Skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" />
      )}
      
      {/* Image */}
      <div className="aspect-w-16 aspect-h-12 bg-gray-800">
        <img
          src={src}
          alt={alt}
          onLoad={onLoad}
          className="w-full h-full object-cover transform transition-all duration-500 ease-out group-hover:scale-110"
        />
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent 
          transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="absolute bottom-0 p-6 transform transition-all duration-300">
          <h3 className="text-xl font-bold text-orange-400 mb-2 transform transition-all duration-300">
            {title}
          </h3>
          <p className="text-gray-300 transform transition-all duration-300">
            {description}
          </p>
          <button className="mt-4 flex items-center gap-2 text-white bg-orange-500 px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-orange-600">
            <ZoomIn className="w-4 h-4" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;