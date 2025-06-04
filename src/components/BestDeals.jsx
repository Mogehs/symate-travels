import React from "react";

const deals = [
  {
    title: "Kyoto, Japan",
    days: "10 Days Trip",
    price: "$5.42k",
    image: "japan.png",
  },
  {
    title: "Rome, Italy",
    days: "12 Days Trip",
    price: "$4.2k",
    image: "/italy.png",
  },
  {
    title: "New York City, USA",
    days: "28 Days Trip",
    price: "$15k",
    image: "usa.png",
  },
  {
    title: "Full Europe",
    days: "28 Days Trip",
    price: "$15k",
    image: "europe.png",
  },
];

export default function BestDeals() {
  return (
    <section className="bg-white px-8 py-12 font-dm">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800">
        Best Deal <span className="text-[#EB662B]">Destinations</span>
      </h2>

      {/* Cards */}
      <div className="flex flex-wrap gap-8 justify-center mb-16">
        {deals.map((deal, idx) => (
          <div
            key={idx}
            className="w-full sm:w-[45%] md:w-[22%] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-68 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {deal.title}
              </h3>
              <div className="flex justify-between items-center text-sm text-gray-600 mt-2">
                <span className="text-[#EB662B]">{deal.days}</span>
                <span className="font-medium">{deal.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Map Section */}
      <div className="bg-[#f9fafa] rounded-xl px-6 pt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Explore Destinations Across the Map
        </h3>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Discover top travel spots around the world — your next adventure is
          just a click away.
        </p>
        <img
          src="/map.png"
          alt="World map with destinations"
          className="mx-auto w-full max-w-4xl object-contain"
        />
      </div>
    </section>
  );
}
