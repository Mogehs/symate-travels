import React from "react";

const features = [
  {
    icon: "glob.png",
    title: "Trusted By Thousands Of Travelers",
    desc: "Proven Reliability With Happy Travelers Worldwide.",
  },
  {
    icon: "coin.png",
    title: "Exclusive Deals & Best Price Guarantee",
    desc: "Top Offers With Prices You Won’t Find Elsewhere.",
  },
  {
    icon: "time.png",
    title: "24/7 Personal Travel Concierge",
    desc: "Support Anytime, Anywhere — Always On.",
  },
  {
    icon: "date.png",
    title: "One-Click Secure Booking",
    desc: "Fast, Safe, And Hassle-Free Reservations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative py-12 px-6 lg:px-20 bg-white overflow-hidden font-dm">
      {/* Background floating icons */}
      <img
        src="Group84.png"
        alt="plane"
        className="absolute bottom-14 left-14 w-10 opacity-30 z-0 hidden sm:block"
      />
      <img
        src="Group84.png"
        alt="plane"
        className="absolute top-[25%] right-[48%] w-12 opacity-30 z-0 hidden sm:block"
      />
      <img
        src="Group84.png"
        alt="suitcase icon"
        className="absolute top-[40%] left-2 w-8 opacity-20 z-0 hidden md:block"
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* Left suitcase image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="beautiful-collage-travel-concept.png"
            alt="Suitcase"
            className="max-w-xs md:max-w-sm"
          />
        </div>

        {/* Right content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold text-black mb-8 font-sansita">
            Why Choose Us
          </h2>
          <div className="space-y-8 ">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 cursor-pointer hover:shadow-2xl hover:scale-101 sm:w-[88%] rounded-lg transition-all duration-300 p-4 bg-white shadow-sm"
              >
                <div className="text-2xl">
                  <img src={item.icon} alt="icon" className="w-[50px]" />
                </div>
                <div className="bg-[#EB662B] w-[2px] h-[50px]"></div>
                <div>
                  <h3 className="font-semibold text-lg text-black">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
