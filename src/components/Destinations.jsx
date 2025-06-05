import React, { useState } from "react";

const destinations = {
  London: [
    "dest1.png",
    "dest2.png",
    "dest3.png",
    "dest4.png",
    "dest5.png",
    "dest6.png",
  ],
  Bangkok: [
    "dest1.png",
    "dest2.png",
    "dest3.png",
    "dest4.png",
    "dest5.png",
    "dest6.png",
  ],
  England: [
    "dest1.png",
    "dest2.png",
    "dest3.png",
    "dest4.png",
    "dest5.png",
    "dest6.png",
  ],
  Singapore: [
    "dest1.png",
    "dest2.png",
    "dest3.png",
    "dest4.png",
    "dest5.png",
    "dest6.png",
  ],
  Italy: [
    "dest1.png",
    "dest2.png",
    "dest3.png",
    "dest4.png",
    "dest5.png",
    "dest6.png",
  ],
};

const Destinations = () => {
  const [activeTab, setActiveTab] = useState("London");

  return (
    <section className="py-16 px-4 md:px-6 lg:px-20 font-dm mb-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Destinations Of <span className="text-[#EB662B]">The Month</span>
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {Object.keys(destinations).map((city) => (
          <button
            key={city}
            onClick={() => setActiveTab(city)}
            className={`px-4 py-2 border rounded-full text-sm font-medium transition-all duration-200  cursor-pointer ${
              activeTab === city
                ? "bg-black text-white border-black"
                : "text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {city}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Left: Two stacked images */}
        <div className="flex flex-col gap-6">
          {destinations[activeTab].slice(0, 2).map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={src}
                alt={`Destination ${index}`}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Center: Tall image */}
        <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow h-full">
          <img
            src={destinations[activeTab][2]}
            alt="Destination"
            loading="lazy"
            className="w-full h-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right: Complex Grid */}
        <div className="flex flex-col gap-6">
          {/* Full-width image */}
          <div className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow">
            <img
              src={destinations[activeTab][3]}
              alt="Destination"
              loading="lazy"
              className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Two-column uneven split */}
          <div className="grid grid-cols-3 gap-4">
            {destinations[activeTab].slice(4, 6).map((src, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow ${
                  index === 0 ? "col-span-1" : "col-span-2"
                }`}
              >
                <img
                  src={src}
                  alt={`Destination ${index + 4}`}
                  loading="lazy"
                  className="w-full h-[16.2rem] xl:h-[20.4rem] aspect-square object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
