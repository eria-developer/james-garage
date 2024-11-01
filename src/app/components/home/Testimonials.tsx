import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Award,
  Shield,
  Clock,
  ThumbsUp,
  ChevronLeft,
  ChevronRight,
  Quote
} from "lucide-react";

const TestimonialsAndTrustSection = () => {
  const [activeTestimonial, setActiveTestimonial] = React.useState(0);
  const [autoplay, setAutoplay] = React.useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      vehicle: "Toyota Camry",
      service: "Full Service & Brake Repair",
      image: "/testimonial1.jpg",
      rating: 5,
      text: "Absolutely outstanding service! They diagnosed and fixed my brake issue quickly and professionally. The team kept me informed throughout the entire process.",
      date: "2 weeks ago"
    },
    {
      name: "Michael Brown",
      vehicle: "BMW 3 Series",
      service: "Engine Diagnostics",
      image: "/testimonial2.jpg",
      rating: 5,
      text: "The expertise here is unmatched. They found an issue that two other garages missed. Saved me from a potentially expensive repair down the line.",
      date: "1 month ago"
    },
    {
      name: "Emily Martinez",
      vehicle: "Honda CR-V",
      service: "Regular Maintenance",
      image: "/testimonial3.jpg",
      rating: 5,
      text: "I've been bringing my CR-V here for 3 years now. Their attention to detail and honest advice have made me a customer for life. Highly recommended!",
      date: "1 week ago"
    }
  ];

  const trustIndicators = [
    {
      icon: Shield,
      title: "Licensed & Certified",
      description: "ASE Certified mechanics with ongoing training",
    },
    {
      icon: Clock,
      title: "Quick Service",
      description: "Most repairs completed same day",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Voted best garage 2023",
    },
    {
      icon: ThumbsUp,
      title: "Satisfaction Guaranteed",
      description: "100% satisfaction or your money back",
    }
  ];

  const statistics = [
    { value: "15+", label: "Years Experience" },
    { value: "10k+", label: "Happy Customers" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Emergency Service" }
  ];

  React.useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const handlePrevious = () => {
    setAutoplay(false);
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-900 to-black">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {trustIndicators.map((indicator, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl" />
                      <indicator.icon className="relative w-10 h-10 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{indicator.title}</h3>
                      <p className="text-gray-400">{indicator.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                {stat.value}
              </h3>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-4"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xl text-gray-400"
          >
            Don't just take our word for it - hear from our satisfied customers
          </motion.p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="relative"
            >
              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <Quote className="absolute text-orange-500/20 w-16 h-16" />
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-amber-500 opacity-50" />
                        <img
                          src="/api/placeholder/96/96"
                          alt={testimonials[activeTestimonial].name}
                          className="object-cover"
                        />
                      </div>
                      <Badge className="absolute -bottom-2 -right-2 bg-orange-500">
                        Verified
                      </Badge>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex justify-center md:justify-start items-center gap-2 mb-2">
                        {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-300 mb-4 pl-8">
                        {testimonials[activeTestimonial].text}
                      </p>
                      <div className="space-y-1">
                        <p className="font-semibold text-white">
                          {testimonials[activeTestimonial].name}
                        </p>
                        <p className="text-gray-400">
                          {testimonials[activeTestimonial].vehicle} - {testimonials[activeTestimonial].service}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonials[activeTestimonial].date}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-6 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              className="bg-gray-800/50 border-orange-500/30 hover:bg-gray-700/50"
            >
              <ChevronLeft className="w-5 h-5 text-orange-500" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              className="bg-gray-800/50 border-orange-500/30 hover:bg-gray-700/50"
            >
              <ChevronRight className="w-5 h-5 text-orange-500" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mt-16"
        >
          <Button 
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-lg px-8"
            onClick={() => window.location.href = '/book-service'}
          >
            Schedule Your Service Today
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsAndTrustSection;