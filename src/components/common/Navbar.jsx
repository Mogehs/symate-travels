import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-[98%] max-w-[1536px] mx-auto px-3 sm:px-6 py-[14px] h-[73px] bg-gradient-to-r from-[#EAF0F04D]/30 via-[#EAF0F04D]/20 to-transparent backdrop-blur-[20px] left-1/2 -translate-x-1/2 rounded-xl flex items-center justify-between font-sansita fixed top-[21px] z-50">
      {/* Logo & Brand */}
      <div className="flex items-center gap-2">
        <img src="logo.png" alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-black text-md sm:text-lg lg:text-lg">
          Skymate Travels & Holidays
        </span>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex gap-8 text-gray-700 text-sm mr-18 font-dm">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Blog</a>
      </div>

      {/* Sign In / Sign Up */}
      <div className="hidden lg:flex items-center gap-4 font-dm">
        <a href="#" className="text-sm font-medium text-gray-700">
          Sign In
        </a>
        <a
          href="#"
          className="bg-[#EB662B] text-white px-4 py-2 rounded-md text-sm  hover:bg-[#EB662B]/90"
        >
          Sign Up
        </a>
      </div>

      {/* Hamburger Icon */}
      <div className="lg:hidden mt-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="relative w-5 h-[14px] flex flex-col justify-between items-center"
        >
          <span
            className={`block h-[2px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-black transition-all duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block h-[2px] w-full bg-black transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[85px] left-0 w-full bg-white shadow-lg px-6 py-4 flex flex-col gap-4 lg:hidden z-40 font-dm">
          <a href="#" className="text-gray-700 text-sm">
            Home
          </a>
          <a href="#" className="text-gray-700 text-sm">
            About
          </a>
          <a href="#" className="text-gray-700 text-sm">
            Contact
          </a>
          <a href="#" className="text-gray-700 text-sm">
            Blog
          </a>
          <hr />
          <a href="#" className="text-sm font-medium text-gray-700">
            Sign In
          </a>
          <a
            href="#"
            className="bg-[#EB662B] text-white px-2 py-2 rounded-md text-sm hover:bg-[#EB662B]/80"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
