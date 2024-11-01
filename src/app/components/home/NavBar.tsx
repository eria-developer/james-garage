import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#" },
    { name: "About", href: "/#" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-800 fixed w-full z-20 top-0 left-0 shadow-md py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-orange-500">
            Javi Car Garage
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <span className="text-white hover:text-orange-400 transition">
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/#" passHref>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition">
                Book Appointment
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleNav} className="text-white">
              {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden bg-gray-900">
          <div className="flex flex-col space-y-4 p-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} passHref>
                <span
                  onClick={toggleNav}
                  className="text-white hover:text-orange-400 transition"
                >
                  {link.name}
                </span>
              </Link>
            ))}
            <Link href="/appointment" passHref>
              <button
                onClick={toggleNav}
                className="bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition"
              >
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
