import React from "react";

const packages = [
  // Tour Packages First
  {
    title: "Thailand Adventure",
    price: "Rs 250000",
    duration: "5 Days",
    rating: 4.92,
    country: "Thailand",
    image: "/packages/pkg1.jpg",
    description:
      "Experience tropical beaches, vibrant nightlife, and exotic Thai culture.",
  },
  {
    title: "Baku Luxury Tour",
    price: "Rs 180000",
    duration: "4 Days",
    rating: 4.0,
    country: "Baku",
    image: "/packages/pkg2.jpg",
    description:
      "Explore Baku’s rich history, luxury shopping, and modern skyline.",
  },
  {
    title: "London Tour",
    price: "Rs 98500/198500",
    // duration: "6 Nights",
    rating: 4.92,
    country: "London",
    image: "/packages/pkg7.jpg",
    description:
      "Visit iconic landmarks, museums, and enjoy high-street shopping in London.",
  },

  // Visa Packages After
  {
    title: "E-Visa",
    price: "Call Now",
    duration: "Consultation",
    rating: 5.0,
    country: "Various Countries",
    image: "/packages/pkg3.jpg",
    description:
      "Quick and hassle-free e-visa processing for multiple destinations.",
  },
  {
    title: "USA Visa",
    price: "Rs 25000",
    duration: "Consultation",
    rating: 4.98,
    country: "USA",
    image: "/packages/pkg4.jpg",
    description:
      "Comprehensive support for your U.S. tourist and business visa needs.",
  },
  {
    title: "Dubai Visit Visa",
    price: "Price Varies",
    duration: "30/60 Days",
    rating: 4.92,
    country: "Dubai",
    image: "/packages/pkg5.jpg",
    description:
      "Get Dubai visit visas for short or long-term travel, stress-free.",
  },
  {
    title: "Europe Visa",
    price: "Rs 25000",
    duration: "Consultation",
    rating: 4.92,
    country: "EU",
    image: "/packages/pkg6.jpg",
    description:
      "Assistance with Schengen visas for smooth entry into European countries.",
  },
  {
    title: "UK Visa",
    price: "Rs 25000",
    duration: "Consultation",
    rating: 4.92,
    country: "UK",
    image: "/packages/pkg8.jpg",
    description:
      "Expert guidance on UK tourist, student, or business visa applications.",
  },
];

const renderPackageCard = (pkg, index) => (
  <div
    key={index}
    className="bg-[#F6F6F6] overflow-hidden hover:shadow-lg transition-shadow duration-300"
  >
    <img src={pkg.image} alt={pkg.title} className="w-full h-70 object-cover" />
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
    <section className="px-8 py-10 bg-white font-dm">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-gray-800">
        Top Package <span className="text-[#EB662B]">Destinations</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
        {packages.map(renderPackageCard)}
      </div>
    </section>
  );
}
