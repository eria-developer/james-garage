// import Image from "next/image";
"use client";

import HeroSection from "./components/home/HeroSection";
import { useRouter } from "next/navigation";
import Navbar from "./components/home/NavBar";
import GarageServiceSection from "./components/home/GarageServiceSection";
import GallerySection from "./components/home/GallerySection";
import CeoMessageSection from "./components/home/CeoMessage";
import Footer from "./components/home/Footer";
import TestimonialsAndTrustSection from "./components/home/Testimonials";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <Navbar />
      <HeroSection text="Garage" router={router} />
      <GarageServiceSection />
      <GallerySection />
      <CeoMessageSection />
      <TestimonialsAndTrustSection />
      <Footer 
    </div>
  );
}
