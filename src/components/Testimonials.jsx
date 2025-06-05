import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // import Autoplay module
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "John Doe",
    image: "user1.png",
    rating: 5,
    location: "New York",
    message:
      "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim.",
  },
  {
    name: "Jane Smith",
    image: "user2.png",
    rating: 5,
    location: "London",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
  },
  {
    name: "Emily Johnson",
    image: "user3.png",
    rating: 4,
    location: "Paris",
    message:
      "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
  },
  {
    name: "Michael Brown",
    image: "user1.png",
    rating: 5,
    location: "Berlin",
    message:
      "Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in.",
  },
  {
    name: "Sarah Lee",
    image: "user2.png",
    rating: 5,
    location: "Tokyo",
    message:
      "Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white font-dm">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          What Our Client Says
        </h2>
      </div>

      <div className="px-4 max-w-6xl mx-auto py-10 ">
        <Swiper
          spaceBetween={24}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`bg-gray-200 rounded-2xl shadow-md p-6 my-2 w-full max-w-sm mx-auto transition-all duration-300 cursor-grab active:cursor-grabbing ${
                  idx % 2 === 0 ? "md:mt-6" : "md:mt-1"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <div className="text-[#EB662B] text-sm">
                      {"★".repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {testimonial.message}
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="bg-[#EB662B] text-white text-xs px-3 py-1 rounded-full">
                    {testimonial.location}
                  </span>
                  <span className="text-[#EB662B] text-xl">”</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        <span className="w-4 h-2 bg-[#EB662B] rounded-full"></span>
        <span className="w-2 h-2 bg-orange-200 rounded-full"></span>
        <span className="w-2 h-2 bg-orange-200 rounded-full"></span>
      </div>
    </section>
  );
};

export default Testimonials;
