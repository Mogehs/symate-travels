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
    <section className="bg-white px-4 sm:px-6 lg:px-20 py-12 font-dm max-w-[1536px] mx-auto">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-gray-800">
        Best Deal <span className="text-[#EB662B]">Destinations</span>
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deals.map((deal, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-64 object-cover"
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
    </section>
  );
}
