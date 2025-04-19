import { useState } from "react";
import {
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  Link,
} from "lucide-react";
import logo from "./assets/logo.png";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-gray-900 text-white text-sm py-2 px-6 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-center md:justify-start items-center gap-4">
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-orange-500" />
            internationkitchensolution@gmail.com
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-500" />
            +917011468782
          </span>
        </div>
        <div className="flex justify-center md:justify-end items-center gap-4 mt-2 md:mt-0">
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-orange-500" />
            +919958652941
          </span>
          <a href="#" className="text-orange-500 hover:text-white">
            <Facebook />
          </a>

          <a href="#" className="text-orange-500 hover:text-white">
            <Instagram />
          </a>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="IEC Logo" className="h-20 mx-2" />
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-blue-900 font-semibold relative">
          <a href="/">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
          </a>
          <a href="#about-us">
            <li className="hover:text-orange-500 cursor-pointer">About us</li>
          </a>
          <a href="/gallery">
            <li className="hover:text-orange-500 cursor-pointer">Gallery</li>
          </a>
          <a href="#testimonials">
            <li className="hover:text-orange-500 cursor-pointer">
              Testimonials
            </li>
          </a>
          <a href="/contact">
            <li className="hover:text-orange-500 cursor-pointer">Contact us</li>
          </a>
        </ul>

        {/* Mobile Menu (Hamburger) */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-blue-900 text-2xl"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Popup */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`fixed right-0 top-0 w-64 h-full bg-white shadow-md p-6 flex flex-col space-y-4 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="self-end text-blue-900 text-2xl"
          >
            <X />
          </button>
          <a href="/" className="hover:text-orange-500">
            Home
          </a>
          <a href="#about-us" className="hover:text-orange-500">
            About Us
          </a>
          <a href="/gallery" className="hover:text-orange-500">
            Gallery
          </a>
          <a href="#testimonials" className="hover:text-orange-500">
            Testimonials
          </a>
          <a href="/contact" className="hover:text-orange-500">
            Contact Us
          </a>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
