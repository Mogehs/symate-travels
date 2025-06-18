import React, { useState, useEffect } from "react";
import {
  Plane,
  MapPin,
  Compass,
  PhoneCall,
  Home,
  Info,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [navHeight, setNavHeight] = useState(78); // Default height

  // Smooth scroll function with navbar offset
  const scrollToSection = (sectionId, event) => {
    if (event) event.preventDefault();

    const section = document.getElementById(sectionId);
    if (!section) return;

    const navbarOffset = navHeight + 20; // Add extra padding
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: sectionTop - navbarOffset,
      behavior: "smooth",
    });

    // Update active link
    setActiveLink(sectionId);
    if (isOpen) setIsOpen(false);
  };

  // Handle scroll effects and active section detection
  useEffect(() => {
    // Get navbar height for dynamic offset calculation
    const navbar = document.querySelector("nav");
    if (navbar) {
      setNavHeight(navbar.offsetHeight);
    }

    const handleScroll = () => {
      // Update navbar style based on scroll position
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = ["home", "about", "testimonials", "contact"];

      // Determine which section is currently in view
      const currentSection =
        sections.find((section) => {
          if (section === "home" && window.scrollY < 300) return true;

          const element = document.getElementById(section);
          if (!element) return false;

          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom > 150;
        }) || "home";

      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`w-[98%] max-w-[1536px] mx-auto px-3 sm:px-6 py-[14px] ${
        scrolled ? "h-[70px]" : "h-[78px]"
      } bg-gradient-to-r from-[#ffffff8a]/60 via-[#ffffff6b]/40 to-transparent backdrop-blur-[18px] left-1/2 -translate-x-1/2 rounded-xl flex items-center justify-between font-sansita fixed top-[21px] z-50 transition-all duration-300 ease-in-out ${
        scrolled
          ? "shadow-lg shadow-orange-200/10 border-b border-orange-100/30"
          : "shadow-md shadow-orange-100/10"
      }`}
    >
      {/* Logo & Brand with flying plane animation */}
      <div className="flex items-center gap-2 group">
        <div className="relative">
          <img
            src="logo.png"
            alt="Logo"
            className="w-10 h-10 relative z-10 transition-transform group-hover:scale-110 duration-300"
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-br from-orange-100 to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="absolute w-[20px] h-[20px] -right-3 top-[14px] transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-4">
            <Plane size={16} className="text-[#EB662B] rotate-45" />
          </div>
        </div>
        <div>
          <span className="font-bold text-black text-md sm:text-lg lg:text-xl relative">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#EB662B] to-[#ff8f41]">
              Sky
            </span>
            mate
            <div className="h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-[#EB662B] to-transparent transition-all duration-300"></div>
          </span>
          <span className="hidden sm:inline-block text-[10px] -mt-1 font-normal text-gray-600">
            Travels & Holidays
          </span>
        </div>
      </div>{" "}
      {/* Desktop Nav Links with Hover Effects */}
      <div className="hidden lg:flex gap-8 text-gray-700 text-sm mr-5 font-dm items-center">
        <a
          href="#"
          onClick={(e) => {
            scrollToSection("home", e);
          }}
          className={`relative flex items-center gap-2 group py-2 px-3 rounded-full hover:bg-white/60 transition-all duration-300 ${
            activeLink === "home" ? "bg-white/70 shadow-sm" : ""
          }`}
        >
          <Home size={16} className="text-[#EB662B]" />
          <span>Home</span>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-[70%] bg-[#EB662B] rounded-full transition-all duration-300"></div>
        </a>
        <a
          href="#about"
          onClick={(e) => {
            scrollToSection("about", e);
          }}
          className={`relative flex items-center gap-2 group py-2 px-3 rounded-full hover:bg-white/60 transition-all duration-300 ${
            activeLink === "about" ? "bg-white/70 shadow-sm" : ""
          }`}
        >
          <Info size={16} className="text-[#EB662B]" />
          <span>About</span>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-[70%] bg-[#EB662B] rounded-full transition-all duration-300"></div>
        </a>
        <a
          href="#testimonials"
          onClick={(e) => {
            scrollToSection("testimonials", e);
          }}
          className={`relative flex items-center gap-2 group py-2 px-3 rounded-full hover:bg-white/60 transition-all duration-300 ${
            activeLink === "testimonials" ? "bg-white/70 shadow-sm" : ""
          }`}
        >
          <MessageSquare size={16} className="text-[#EB662B]" />
          <span>Testimonials</span>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-[70%] bg-[#EB662B] rounded-full transition-all duration-300"></div>
        </a>
        <a
          href="#contact"
          onClick={(e) => {
            scrollToSection("contact", e);
          }}
          className={`relative flex items-center gap-2 group py-2 px-3 rounded-full hover:bg-white/60 transition-all duration-300 ${
            activeLink === "contact" ? "bg-white/70 shadow-sm" : ""
          }`}
        >
          <PhoneCall size={16} className="text-[#EB662B]" />
          <span>Contact Us</span>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-[70%] bg-[#EB662B] rounded-full transition-all duration-300"></div>
        </a>
      </div>{" "}
      {/* Book Now Button with Animation */}
      <div className="hidden lg:flex items-center font-dm">
        {" "}
        <a
          href="#"
          onClick={(e) => scrollToSection("contact", e)}
          className="relative overflow-hidden group px-5 py-2.5 rounded-full bg-gradient-to-r from-[#EB662B] to-[#ff8a3d] text-white text-sm font-medium shadow-lg shadow-orange-200/30 hover:shadow-orange-300/40 transition-all duration-300"
        >
          <span className="flex items-center gap-2 relative z-10">
            <Compass className="w-4 h-4" />
            Book Now
            <div className="absolute -right-7 opacity-0 group-hover:opacity-100 group-hover:-right-5 transition-all duration-300">
              <Plane size={16} className="animate-pulse" />
            </div>
          </span>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#ff8a3d] to-[#EB662B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></span>
        </a>
      </div>{" "}
      {/* Animated Hamburger Icon */}
      <div className="lg:hidden flex items-center gap-3">
        {" "}
        <a
          href="#"
          onClick={(e) => scrollToSection("contact", e)}
          className="flex items-center gap-1 bg-gradient-to-r from-[#EB662B] to-[#ff8a3d] text-white text-xs px-3 py-1.5 rounded-full shadow-md"
        >
          <Compass className="w-3 h-3" />
          <span>Book</span>
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="relative w-9 h-9 flex items-center justify-center bg-white/80 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white"
        >
          {isOpen ? (
            <X size={18} className="text-[#EB662B]" />
          ) : (
            <Menu size={18} className="text-[#EB662B]" />
          )}
        </button>
      </div>{" "}
      {/* Enhanced Mobile Dropdown Menu with Animations */}
      <div
        className={`absolute top-[78px] right-0 w-[85%] md:w-[50%] max-h-[80vh] overflow-hidden rounded-xl shadow-2xl lg:hidden z-40 font-dm transform transition-all duration-300 ease-in-out origin-top-right ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <div className="bg-white/90 backdrop-blur-md">
          <div className="py-3 px-4 border-b border-orange-100/30">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-orange-100/50 rounded-full">
                <Plane size={12} className="text-[#EB662B]" />
              </div>
              <p className="text-sm font-medium text-gray-800">Navigation</p>
            </div>
          </div>

          <div className="flex flex-col py-2">
            <a
              href="#"
              className="flex items-center gap-3 px-5 py-3 hover:bg-orange-50 transition-colors text-gray-700 text-sm"
              onClick={(e) => {
                scrollToSection("home", e);
              }}
            >
              <div className="w-8 flex justify-center">
                <Home size={16} className="text-[#EB662B]" />
              </div>
              Home
            </a>
            <a
              href="#about"
              className="flex items-center gap-3 px-5 py-3 hover:bg-orange-50 transition-colors text-gray-700 text-sm"
              onClick={(e) => {
                scrollToSection("about", e);
              }}
            >
              <div className="w-8 flex justify-center">
                <Info size={16} className="text-[#EB662B]" />
              </div>
              About
            </a>
            <a
              href="#testimonials"
              className="flex items-center gap-3 px-5 py-3 hover:bg-orange-50 transition-colors text-gray-700 text-sm"
              onClick={(e) => {
                scrollToSection("testimonials", e);
              }}
            >
              <div className="w-8 flex justify-center">
                <MessageSquare size={16} className="text-[#EB662B]" />
              </div>
              Testimonials
            </a>
            <a
              href="#contact"
              className="flex items-center gap-3 px-5 py-3 hover:bg-orange-50 transition-colors text-gray-700 text-sm"
              onClick={(e) => {
                scrollToSection("contact", e);
              }}
            >
              <div className="w-8 flex justify-center">
                <PhoneCall size={16} className="text-[#EB662B]" />
              </div>
              Contact Us
            </a>
          </div>

          <div className="p-4 bg-gradient-to-br from-orange-50 to-white border-t border-orange-100/30">
            {" "}
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-[#EB662B] to-[#ff8a3d] text-white rounded-lg shadow-md"
              onClick={(e) => scrollToSection("contact", e)}
            >
              <Compass size={16} />
              Book Your Adventure
              <Plane size={14} className="ml-1 animate-pulse" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
