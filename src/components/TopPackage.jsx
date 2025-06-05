import React from "react";

const packages = [
  {
    title: "Santorini Escape",
    price: "Rs 250000",
    duration: "5 Days",
    rating: 4.92,
    country: "Thailand",
    image: "pkg1.png",
    description:
      "Experience tropical beaches, vibrant nightlife, and exotic Thai culture.",
  },
  {
    title: "Dubai Luxury Tour",
    price: "Rs 180000",
    duration: "4 Days",
    rating: 4.0,
    country: "Baku",
    image: "pkg2.png",
    description:
      "Explore Baku’s rich history, luxury shopping, and modern skyline.",
  },
  {
    title: "Bali Serenity",
    price: "Rs 98500",
    duration: "6 Nights/7 Days",
    rating: 4.92,
    country: "London",
    image: "pkg7.png",
    description:
      "Visit iconic landmarks, museums, and enjoy high-street shopping in London.",
  },

  {
    title: "Paris Romance",
    price: "Call Now",
    duration: "4 Days",
    rating: 5.0,
    country: "USA",
    image: "pkg3.png",
    description:
      "Quick and hassle-free e-visa processing for multiple destinations.",
  },
  {
    title: "Maldives Getaway",
    price: "Rs 25000",
    duration: "30/60 Days",
    rating: 4.98,
    country: "USA",
    image: "pkg4.png",
    description:
      "Comprehensive support for your U.S. tourist and business visa needs.",
  },
  {
    title: "Swiss Alps Retreat",
    price: "Price Varies",
    duration: "5 Days",
    rating: 4.92,
    country: "Dubai",
    image: "pkg5.png",
    description:
      "Get Dubai visit visas for short or long-term travel, stress-free.",
  },
  {
    title: "Culpa est similique",
    price: "Rs 25000",
    duration: "7 Days",
    rating: 4.92,
    country: "EU",
    image: "pkg6.png",
    description:
      "Assistance with Schengen visas for smooth entry into European countries.",
  },
  {
    title: "Culpa est similique",
    price: "Rs 25000",
    duration: "3 Days",
    rating: 4.92,
    country: "UK",
    image: "pkg8.png",
    description:
      "Expert guidance on UK tourist, student, or business visa applications.",
  },
];

const renderPackageCard = (pkg, index) => (
  <div
    key={index}
    className="bg-[#F6F6F6] overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <img src={pkg.image} alt={pkg.title} className="w-full h-50 object-cover" />
    <div className="p-4 space-y-1">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{pkg.title}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-600">
          <span className="material-icons text-yellow-500 text-base">
            <img src="Vector.png" alt="star" className="h-3" />
          </span>
          {pkg.rating.toFixed(2)}
        </div>
      </div>
      <p className="text-sm text-gray-500 line-clamp-2">{pkg.description}</p>
      <div className="flex justify-between items-center pt-3 text-sm text-gray-600 border-t border-dashed border-gray-400">
        <span className="font-bold text-black">{pkg.price}</span>
        <span>{pkg.duration}</span>
        <span className="flex items-center gap-1">
          <span className="material-icons text-base">
            <img src="location.png" alt="location" className="w-4" />
          </span>
          {pkg.country}
        </span>
      </div>
    </div>
  </div>
);

export default function TopPackages() {
  return (
    <section className="px-6 lg:px-20 py-10 bg-white font-dm">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-gray-800">
        Top Package <span className="text-[#EB662B]">Destinations</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {packages.map(renderPackageCard)}
      </div>
    </section>
  );
}
