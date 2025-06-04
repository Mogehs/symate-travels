import React from "react";

const Achievements = () => {
  const stats = [
    {
      value: "15+K",
      label: "Successful Journeys Delivered",
    },
    {
      value: "12+",
      label: "Prestigious Travel Awards Won",
    },
    {
      value: "10+",
      label: "Years Of Industry Experience",
    },
  ];

  return (
    <section className="px-6 py-12 lg:px-20 bg-white">
      <div className="flex flex-col lg:flex-row lg:items-center gap-8 font-sansita">
        {/* Left Heading */}
        <div className="lg:w-1/4 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold text-black leading-snug">
            Our
            <br />
            Achievements
          </h2>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 lg:gap-10 justify-center lg:w-3/4">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#EB662B] shadow-md hover:shadow-2xl cursor-pointer hover:shadow-[#EB662B] transition-all duration-75 shadow-[#EB662B] rounded-2xl px-6 py-6 text-center w-full sm:w-[200px] flex flex-col items-center"
            >
              <h3 className="text-2xl font-extrabold text-[#EB662B]">
                {item.value}
              </h3>
              <p className="text-sm text-gray-800 mt-2 leading-snug font-dm">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
