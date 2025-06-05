import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const packages = [
  { title: "Thailand 5 Days Tour", img: "/packages/pkg1.jpg" },
  { title: "Baku", img: "/packages/pkg2.jpg" },
  { title: "E-Visa", img: "/packages/pkg3.jpg" },
  { title: "Amercia Visa", img: "/packages/pkg4.jpg" },
  { title: "Visit Visa Dubai", img: "/packages/pkg5.jpg" },
  { title: "Europe Visa", img: "/packages/pkg6.jpg" },
  { title: "London Tour", img: "/packages/pkg7.jpg" },
  { title: "UK Visa", img: "/packages/pkg8.jpg" },
];

const CuratedPackages = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 px-4 md:px-12 font-dm max-w-[1536px] mx-auto overflow-hidden">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Explore Our <span className="text-orange-500">Curated Packages</span>
      </h2>

      <div className="relative">
        {/* Custom Nav Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[-32px] md:left-[-40px] z-10">
          <button
            ref={prevRef}
            className="text-neutral-600 text-3xl font-bold px-2 py-1 cursor-pointer"
          >
            <ChevronLeft />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[-32px] md:right-[-40px] z-10">
          <button
            ref={nextRef}
            className="text-neutral-600 text-3xl font-bold px-2 py-1 cursor-pointer"
          >
            <ChevronRight />
          </button>
        </div>

        <Swiper
          modules={[Navigation]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          slidesPerView={1}
          spaceBetween={20}
          centeredSlides={true}
          className="pb-8"
          breakpoints={{
            640: {
              slidesPerView: 1.3,
            },
            768: {
              slidesPerView: 2.3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <div className="transition-transform duration-300 transform bg-white p-4 text-center my-5 relative rounded-xl swiper-slide-content">
                <div className="border-white border-[2px] h-90 w-[88%] absolute left-1/2 -translate-x-1/2 top-6 rounded-lg"></div>

                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-94 object-cover rounded-xl mb-4"
                />
                <p className="text-lg font-medium">{pkg.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .swiper-slide-active .swiper-slide-content {
          transform: scale(1.1);
          z-index: 10;
        }
      `}</style>
    </section>
  );
};

export default CuratedPackages;
