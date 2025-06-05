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
    <section
      className="py-16 px-4 md:px-12 lg:px-20 font-dm max-w-[1536px] mx-auto overflow-hidden"
      id="testimonials"
    >
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        What Our <span className="text-[#EB662B]">Customers Say</span>
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        centeredSlides={true}
        initialSlide={1}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1.3 },
          768: { slidesPerView: 2.3 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-8"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-card bg-[#F9FAFB] shadow-md p-6 my-2 w-full max-w-sm mx-auto transition-all duration-300 cursor-grab active:cursor-grabbing h-fit py-10 rounded-[70px] flex justify-center flex-col gap-10 md:mt-6">
              <div className="flex items-center gap-4 mb-4 ">
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
                <span className="text-[#EB662B] text-xl">
                  <img
                    src="Comms-Vector.png"
                    alt=""
                    className="w-[16px] h-[12.2px] object-cover"
                  />
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Highlight center slide */}
      <style jsx>{`
        .swiper-slide-active .swiper-slide-content {
          transform: scale(1.1);
          z-index: 10;
          box-shadow: 0 20px 25px -5px rgba(235, 102, 43, 0.15),
            0 10px 10px -5px rgba(235, 102, 43, 0.1);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
