import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const cities = [
  {
    name: "Manila",
    image: "Manila.png",
    rating: 5.0,
    reviews: 35,
    price: "$150",
  },
  {
    name: "Dubai",
    image: "dubai.png",
    rating: 5.0,
    reviews: 35,
    price: "$150",
  },
  {
    name: "Franch",
    image: "france.png",
    rating: 5.0,
    reviews: 35,
    price: "$150",
  },
  {
    name: "Himalaya",
    image: "himalya.png",
    rating: 5.0,
    reviews: 35,
    price: "$150",
  },
];

export default function MostSearched() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-12 bg-gray-100 my-10 font-dm px-6 md:px-12 lg:px-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          The Most Searched For{" "}
          <span className="text-[#EB662B]">
            Cities Skymate Travels & Holidays
          </span>
        </h2>
        <div className="flex space-x-3">
          <div
            ref={prevRef}
            className="cursor-pointer text-gray-700 hover:text-[#EB662B] transition"
          >
            <CircleArrowLeft />
          </div>
          <div
            ref={nextRef}
            className="cursor-pointer text-gray-700 hover:text-[#EB662B] transition"
          >
            <CircleArrowRight />
          </div>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Navigation, Autoplay]}
      >
        {cities.map((city, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white rounded-xl pl-4 py-4 my-5 shadow-md overflow-hidden flex sm:w-[90%] 
            md:w-[98%] xl:w-full"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-35 h-42 object-cover rounded-xl"
              />
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{city.name}</h3>
                <div className="text-sm text-gray-600 flex items-center gap-1">
                  <span className="text-yellow-500 text-base">★</span>
                  {city.rating}({city.reviews})
                </div>
                <div className="text-md font-semibold text-gray-800">
                  {city.price}
                  <span className="text-sm font-normal text-gray-500">
                    /night
                  </span>
                </div>
                <button className="mt-2 px-4 py-1 bg-[#EB662B] text-white rounded-md hover:bg-[#EB662B] text-sm">
                  Book Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
