import React from "react";

import { CalendarDays, MapPin, Plane } from "lucide-react";

const Hero = () => {
  return (
    <div className="max-w-[1536px] mx-auto">
      <div className="relative h-[47rem]">
        <div>
          <img
            src="hero.png"
            alt="hero"
            className="h-[47rem] w-full object-cover"
          />
          <p className="absolute top-[15%] sm:top-[20%] md:top-[30%] left-[4%] md:left-[8%] text-[40px] lg:text-[76px]  md:w-[45%] capitalize leading-none text-white  font-sansita">
            Holiday Start your unforgettable journey with us.
          </p>
        </div>

        <div className="absolute bottom-1 px-2 sm:left-[4%] md:bottom-18  md:left-[48%] lg:left-[8%] font-dm">
          <div className="flex flex-wrap sm:flex-nowrap justify-center py-1  sm:justify-between items-center bg-white/60 backdrop-blur-[20px] w-fit rounded-[14px] sm:h-[70px] px-10">
            <button className="flex items-center gap-2 bg-[#EB662B] text-white px-4 py-2 rounded-md text-sm font-semibold">
              <Plane size={16} />
              Flights
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
              <img src="Hotel.png" alt="Hotels" className="w-4 h-4" />
              Hotels
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100">
              <img src="Group2.png" alt="Holidays" className="w-4 h-4" />
              Holidays
            </button>
          </div>

          {/* Search Fields */}
          <div className="flex flex-col lg:flex-row gap-4  bg-white/60 backdrop-blur-[20px] items-center justify-between mt-5 py-2  px-10 rounded-[14px]">
            {/* From */}
            <div className="flex flex-col w-full lg:w-[20%]">
              <label className="text-sm text-gray-600 mb-1">From</label>
              <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 shadow-sm">
                <MapPin size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Country, City Or Airport"
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>
            </div>

            {/* To */}
            <div className="flex flex-col w-full lg:w-[20%]">
              <label className="text-sm text-gray-600 mb-1">To</label>
              <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 shadow-sm">
                <MapPin size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Country, City Or Airport"
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>
            </div>

            {/* Depart */}
            <div className="flex flex-col w-full lg:w-[20%]">
              <label className="text-sm text-gray-600 mb-1">Depart</label>
              <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 shadow-sm">
                <CalendarDays size={16} className="text-gray-400" />
                <input
                  type="date"
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="flex flex-col w-full lg:w-[20%]">
              <label className="text-sm text-gray-600 mb-1">Check Out</label>
              <div className="flex items-center gap-2 bg-white rounded-md px-4 py-2 shadow-sm">
                <CalendarDays size={16} className="text-gray-400" />
                <input
                  type="date"
                  className="w-full outline-none text-sm bg-transparent"
                />
              </div>
            </div>

            {/* Search Button */}
            <div className="w-full lg:w-[15%] mt-4 lg:mt-6">
              <button className="w-full bg-[#EB662B] text-white px-4 py-3 rounded-md text-sm font-semibold hover:bg-[#EB662B]-600">
                Search Flights →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
