import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCar,
  FaTools,
  FaUserCog,
  FaNewspaper,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface SocialLink {
  icon: React.ComponentType;
  url: string;
  label: string;
}

interface QuickLink {
  text: string;
  url: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = React.useState<string>("");
  const [isSubscribed, setIsSubscribed] = React.useState<boolean>(false);

  const socialLinks: SocialLink[] = [
    { icon: FaFacebook, url: "#", label: "Facebook" },
    { icon: FaTwitter, url: "#", label: "Twitter" },
    { icon: FaInstagram, url: "#", label: "Instagram" },
    { icon: FaLinkedin, url: "#", label: "LinkedIn" },
    { icon: FaYoutube, url: "#", label: "YouTube" },
  ];

  const quickLinks: QuickLink[] = [
    { text: "About Us", url: "#" },
    { text: "Services", url: "#" },
    { text: "Vehicle Catalog", url: "#" },
    { text: "Financing", url: "#" },
    { text: "Career", url: "#" },
  ];

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

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
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <FaCar className="text-3xl text-orange-500" />
              <span className="text-2xl font-bold">Javi Car Garage</span>
            </motion.div>
            <p className="text-gray-400">
              Your trusted partner in automotive excellence. Discover the
              perfect vehicle for your lifestyle.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ y: -3, color: "#f97316" }}
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.a
                    href={link.url}
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center space-x-2"
                    whileHover={{ x: 6 }}
                  >
                    <span>→</span>
                    <span>{link.text}</span>
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4">
              {[
                { icon: FaPhoneAlt, text: "+256-782-788-851" },
                { icon: FaEnvelope, text: "vita@gmail.com" },
                {
                  icon: FaMapMarkerAlt,
                  text: "Market Lane, Arua City",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3 text-gray-400"
                  whileHover={{ x: 6 }}
                >
                  <item.icon className="mt-1 text-orange-500" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold">Newsletter</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates and exclusive
              offers.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                  required
                />
                <AnimatePresence>
                  {isSubscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute -bottom-8 left-0 text-green-500 text-sm"
                    >
                      Thanks for subscribing!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Service Highlights */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-8 border-t border-gray-800"
        >
          {[
            {
              icon: FaCar,
              title: "Wide Selection",
              text: "Browse our extensive inventory",
            },
            {
              icon: FaTools,
              title: "Expert Service",
              text: "Professional maintenance",
            },
            {
              icon: FaUserCog,
              title: "Personal Support",
              text: "24/7 customer assistance",
            },
            {
              icon: FaNewspaper,
              title: "Latest Updates",
              text: "Industry news and tips",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gray-800/50 backdrop-blur"
            >
              <service.icon className="text-2xl text-orange-500 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">{service.title}</h4>
                <p className="text-sm text-gray-400">{service.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Javi Car Garage. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
