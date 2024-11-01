import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

const CeoMessageSection = () => {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);

  return (
    <div className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative max-w-6xl mx-auto px-4">
        <Card className="overflow-hidden bg-gray-900/50 border-gray-800">
          <CardContent className="p-0">
            <div className="flex flex-col lg:flex-row items-center gap-12 p-8">
              {/* CEO Image Section */}
              <div className="lg:w-1/2 flex flex-col items-center space-y-6">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur opacity-70 group-hover:opacity-100 transition duration-1000"></div>
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src="/ceo.jpeg"
                    alt="CEO Name"
                    className="relative w-64 h-64 rounded-full object-cover border-4 border-orange-500/50"
                  />
                </div>
                <Button
                  variant="outline"
                  className="bg-gray-800/50 border-orange-500/30 hover:bg-gray-700/50 text-orange-500"
                  onClick={() => setIsVideoOpen(true)}
                >
                  Watch CEO&apos;s Message
                </Button>
              </div>

              {/* Message Section */}
              <div className="lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                    A Message From Our Leader
                  </h2>
                  <p className="text-gray-400">
                    Driving Excellence in Automotive Care
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <Quote className="absolute -left-4 -top-4 text-orange-500/20 w-12 h-12" />
                  <p className="text-lg leading-relaxed text-gray-300 pl-8">
                    At Javi Car Garage, we believe in setting new standards in
                    automotive excellence. Our commitment goes beyond mere
                    service – we&apos;re building lasting relationships with our
                    clients through trust, expertise, and unwavering dedication
                    to quality. Every vehicle that enters our garage receives
                    the same level of meticulous attention and care that I would
                    expect for my own.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="pl-8"
                >
                  <p className="text-xl font-semibold text-orange-500">
                    Candia James
                  </p>
                  <p className="text-gray-400">Chief Executive Officer</p>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="bg-gray-900 p-4 rounded-lg max-w-3xl w-full mx-4">
              <div className="aspect-video bg-gray-800 mb-4 rounded flex items-center justify-center">
                <p className="text-gray-400">Video player placeholder</p>
              </div>
              <Button
                onClick={() => setIsVideoOpen(false)}
                className="w-full bg-orange-500 hover:bg-orange-600"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CeoMessageSection;
