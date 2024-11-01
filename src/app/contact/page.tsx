"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheck } from "react-icons/fa";
import { Alert, AlertDescription } from "@/components/ui/alert";
import Navbar from "../components/home/NavBar";
import Footer from "../components/home/Footer";

const ContactHero = () => {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 bg-[url('/contact.jpg')] bg-cover bg-center"
      />
      <div className="relative z-20 h-full max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center">
        <div className="md:col-start-2 text-white space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold leading-tight"
          >
            Let&apos;s Start a{" "}
            <span className="text-orange-500">Conversation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            We&apos;re here to transform your automotive dreams into reality.
            Reach out and experience excellence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex space-x-6"
          >
            {[FaPhone, FaEnvelope, FaMapMarkerAlt].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 bg-white/10 backdrop-blur-lg rounded-lg"
              >
                <Icon className="text-2xl text-orange-500" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  category: string;
  message: string;
  source: string;
  gender: string;
  updates: boolean;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
    source: "",
    gender: "",
    updates: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    // setCurrentDate(Date.now()); // Removed this line
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const formSections = [
    {
      title: "Personal Details",
      fields: ["name", "email", "phone", "gender"],
    },
    {
      title: "Your Message",
      fields: ["category", "message", "source"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6"
          >
            <Alert className="bg-green-500/10 border-green-500 text-green-500">
              <FaCheck className="h-4 w-4" />
              <AlertDescription>
                Thank you for reaching out! We'll get back to you soon.
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="flex justify-between mb-8">
          {formSections.map((_, index) => (
            <motion.div
              key={index}
              className={`h-1 flex-1 mx-1 rounded ${
                currentStep > index ? "bg-orange-500" : "bg-gray-700"
              }`}
              initial={false}
              animate={{
                backgroundColor: currentStep > index ? "#f97316" : "#374151",
              }}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            {currentStep === 1 && (
              <>
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ y: -2 }} className="space-y-2">
                    <label className="text-lg text-gray-300">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} className="space-y-2">
                    <label className="text-lg text-gray-300">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition"
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileHover={{ y: -2 }} className="space-y-2">
                    <label className="text-lg text-gray-300">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full p-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition"
                      required
                    />
                  </motion.div>

                  <motion.div whileHover={{ y: -2 }} className="space-y-2">
                    <label className="text-lg text-gray-300">Gender</label>
                    <div className="flex space-x-4">
                      {["Male", "Female", "Other"].map((option) => (
                        <label
                          key={option}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="radio"
                            name="gender"
                            value={option}
                            checked={formData.gender === option}
                            onChange={handleChange}
                            className="text-orange-500 focus:ring-orange-500"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </>
            )}

            {currentStep === 2 && (
              <>
                <motion.div whileHover={{ y: -2 }} className="space-y-2">
                  <label className="text-lg text-gray-300">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition"
                    required
                  >
                    <option value="">Select a category</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="service">Service Request</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="space-y-2">
                  <label className="text-lg text-gray-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition"
                    required
                  />
                </motion.div>

                <motion.div whileHover={{ y: -2 }} className="space-y-2">
                  <label className="text-lg text-gray-300">
                    How did you find us?
                  </label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full p-3 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg focus:ring-2 focus:ring-orange-500 transition"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="social">Social Media</option>
                    <option value="search">Search Engine</option>
                    <option value="referral">Referral</option>
                    <option value="other">Other</option>
                  </select>
                </motion.div>

                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="updates"
                    checked={formData.updates}
                    onChange={handleChange}
                    className="text-orange-500 focus:ring-orange-500"
                  />
                  <label className="text-gray-300">
                    Keep me updated with news and offers
                  </label>
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between pt-6">
          {currentStep > 1 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Previous
            </motion.button>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type={currentStep === formSections.length ? "submit" : "button"}
            onClick={() => {
              if (currentStep < formSections.length) {
                setCurrentStep((prev) => prev + 1);
              }
            }}
            className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg hover:from-orange-500 hover:to-orange-400 transition"
          >
            {currentStep === formSections.length ? "Submit" : "Next"}
          </motion.button>
        </div>
      </form>

      <div className="mt-16 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: FaPhone,
            title: "Call Us",
            content: "+256-782-788-851",
            color: "blue",
          },
          {
            icon: FaEnvelope,
            title: "Email Us",
            content: "vita@gmail.com",
            color: "green",
          },
          {
            icon: FaMapMarkerAlt,
            title: "Visit Us",
            content: "Market Lane, Arua City",
            color: "orange",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -5 }}
            className="p-6 bg-gray-800/50 backdrop-blur border border-gray-700 rounded-lg text-center"
          >
            <item.icon className="text-3xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400">{item.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <ContactHero />
      <ContactForm />
      <Navbar />
      <Footer />
    </div>
  );
};

export default ContactPage;
