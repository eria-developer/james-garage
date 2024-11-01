import React from "react";
import { FaCarBattery, FaOilCan, FaCarSide, FaWrench } from "react-icons/fa";

const OurServicesSection: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto text-center px-5 lg:px-0">
        <h2 className="text-4xl font-bold text-orange-500 mb-6">
          Our Services
        </h2>
        <p className="text-lg leading-relaxed mb-12">
          We provide comprehensive automotive services to keep your vehicle
          running smoothly and safely. From maintenance to advanced repairs, our
          expert team is here to ensure your car performs at its best.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={FaOilCan}
            title="Oil Change"
            description="Regular oil changes to keep your engine running smoothly and efficiently."
          />
          <ServiceCard
            icon={FaCarSide}
            title="Tire Service"
            description="Tire rotation, balancing, and replacement for better safety and performance."
          />
          <ServiceCard
            icon={FaCarBattery}
            title="Battery Check"
            description="Comprehensive battery checks and replacement to prevent unexpected issues."
          />
          <ServiceCard
            icon={FaWrench}
            title="General Repairs"
            description="Expert repair services for all parts of your vehicle, ensuring a smooth ride."
          />
        </div>
      </div>
    </div>
  );
};

// Reusable service card component
const ServiceCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
    <Icon className="text-orange-500 text-5xl mb-4" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default OurServicesSection;
