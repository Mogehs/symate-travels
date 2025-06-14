import React, { useState, useEffect, useRef } from "react";
import { Plane, ChevronRight } from "lucide-react";
import BookingForm from "./BookingForm";
import "../assets/scrollbar.css";

// Count animation hook
const useCountAnimation = (end, duration = 2000, start = 0) => {
  const [count, setCount] = useState(start);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    // Function to animate the counter
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;

      // Calculate the current count based on progress
      const percentage = Math.min(progress / duration, 1);
      const currentCount = Math.floor(start + (end - start) * percentage);

      setCount(currentCount);

      // Continue animation until duration is complete
      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    // Start animation
    frameRef.current = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [end, duration, start]);

  return count;
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-[1536px] mx-auto">
      <div className="relative h-screen max-h-[800px] min-h-[600px]">
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent z-10"></div>

        {/* Hero Image with optimized height */}
        <img
          src="hero.png"
          alt="Travel Destination"
          className="h-full w-full object-cover object-center"
        />

        {/* Content Container */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 lg:px-16">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[62px] font-sansita font-bold text-white leading-tight mb-6 mt-12">
              Start your unforgettable{" "}
              <span className="text-[#EB662B]">journey</span> with us
            </h1>

            {/* Subheading */}
            <p className="text-white/90 text-lg md:text-xl font-dm mb-8 max-w-xl">
              Explore breathtaking destinations and create memories that last a
              lifetime with our personalized travel packages.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#EB662B] text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-[#d05a26] transition-colors flex items-center gap-2 shadow-lg"
              >
                <Plane className="rotate-45" size={18} />
                Book Your Journey
              </button>

              <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md text-base font-semibold hover:bg-white/30 transition-colors flex items-center gap-2">
                Explore Destinations
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="hidden md:flex mt-16 gap-8">
              <div className="flex flex-col">
                <span className="text-[#EB662B] font-sansita text-4xl font-bold">
                  {useCountAnimation(2000)}+
                </span>
                <span className="text-white/80 font-dm text-sm">
                  Happy Travelers
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#EB662B] font-sansita text-4xl font-bold">
                  {useCountAnimation(100)}+
                </span>
                <span className="text-white/80 font-dm text-sm">
                  Destinations
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#EB662B] font-sansita text-4xl font-bold">
                  {useCountAnimation(10)}+
                </span>
                <span className="text-white/80 font-dm text-sm">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form Modal */}
      {isModalOpen && <BookingForm onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Hero;
