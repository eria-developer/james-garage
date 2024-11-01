import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Settings,
  Battery,
  Radio,
  Gauge,
  Crop,
  Activity,
  Wrench,
  Droplet,
} from "lucide-react";

const OurServicesSection = () => {
  const [selectedService, setSelectedService] = React.useState(null);

  const services = [
    {
      icon: Droplet,
      title: "Oil Change Service",
      description:
        "Professional oil changes using premium synthetic oils to enhance engine life and performance.",
      details:
        "Our comprehensive oil change service includes multi-point inspection, filter replacement, and fluid level checks.",
      price: "From $49.99",
    },
    {
      icon: Gauge,
      title: "Diagnostic Services",
      description:
        "State-of-the-art diagnostic testing to identify and resolve vehicle issues quickly.",
      details:
        "Complete computer diagnostics, sensor testing, and performance analysis.",
      price: "From $89.99",
    },
    {
      icon: Battery,
      title: "Battery Services",
      description:
        "Expert battery testing, maintenance, and replacement services for all vehicle types.",
      details:
        "Including charging system analysis and free battery health check.",
      price: "From $29.99",
    },
    {
      icon: Wrench,
      title: "Brake Services",
      description:
        "Complete brake system inspection, repair, and maintenance for your safety.",
      details:
        "Brake pad replacement, rotor resurfacing, and hydraulic system maintenance.",
      price: "From $129.99",
    },
    {
      icon: Settings,
      title: "Engine Repair",
      description:
        "Comprehensive engine diagnostics and repair services by certified technicians.",
      details: "From minor repairs to complete engine overhauls.",
      price: "Custom Quote",
    },
    {
      icon: Crop,
      title: "Tire Services",
      description:
        "Complete tire maintenance including rotation, balancing, and alignment.",
      details: "New tire sales, repairs, and seasonal tire changes available.",
      price: "From $39.99",
    },
    {
      icon: Radio,
      title: "Electronics",
      description: "Modern vehicle electronics diagnosis and repair services.",
      details:
        "Including computer systems, sensors, and entertainment systems.",
      price: "From $69.99",
    },
    {
      icon: Activity,
      title: "Performance Tuning",
      description:
        "Custom performance upgrades and tuning for enhanced vehicle capability.",
      details: "ECU tuning, performance parts installation, and optimization.",
      price: "Custom Quote",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-6"
          >
            Our Premium Services
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Experience automotive excellence with our comprehensive range of
            services. Each service is delivered with precision, expertise, and
            attention to detail.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group"
            >
              <Card
                className="h-full bg-gray-800/50 border-gray-700 hover:border-orange-500/50 transition-colors duration-300"
                onClick={() => setSelectedService(service)}
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="relative p-4">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-500/30 transition-colors duration-300" />
                    <service.icon className="relative w-12 h-12 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 flex-grow">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full bg-gray-700/50 border-orange-500/30 hover:bg-gray-600/50 text-orange-500"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Details Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-800 rounded-lg max-w-2xl w-full p-6"
            >
              <div className="flex items-center space-x-4 mb-6">
                <selectedService.icon className="w-12 h-12 text-orange-500" />
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-orange-500">{selectedService.price}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                {selectedService.description}
              </p>
              <p className="text-gray-400 mb-6">{selectedService.details}</p>
              <div className="flex space-x-4">
                <Button
                  className="flex-1 bg-orange-500 hover:bg-orange-600"
                  onClick={() => (window.location.href = "/book-service")}
                >
                  Book Now
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-600"
                  onClick={() => setSelectedService(null)}
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServicesSection;
