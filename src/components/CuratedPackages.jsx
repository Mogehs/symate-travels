import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BookingForm from "./BookingForm";

const packages = [
  { title: "Thailand 5 Days Tour", img: "/packages/pkg1.jpg" },
  { title: "Baku", img: "/packages/pkg2.jpg" },
  { title: "E-Visa", img: "/packages/pkg3.jpg" },
  { title: "Amercia Visa", img: "/packages/pkg4.jpg" },
  { title: "Visit Visa Dubai", img: "/packages/pkg5.jpg" },
  { title: "Europe Visa", img: "/packages/pkg6.jpg" },
  { title: "London Tour", img: "/packages/pkg7.jpg" },
  { title: "UK Visa", img: "/packages/pkg8.jpg" },
  { title: "UK Visa", img: "/packages/pkg8.jpg" },
];

const CuratedPackages = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  return (
    <section className="py-16 px-4 md:px-12 lg:px-20 font-dm max-w-[1536px] mx-auto overflow-hidden ">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Explore Our <span className="text-orange-500">Curated Packages</span>
      </h2>
      <div className="relative">
        {/* Custom Nav Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[-32px] md:left-[-40px] z-10">
          <button className="text-neutral-600 text-3xl font-bold px-2 py-1 cursor-pointer">
            <ChevronLeft ref={prevRef} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-[-32px] md:right-[-40px] z-10">
          <button className="text-neutral-600 text-3xl font-bold px-2 py-1 cursor-pointer">
            <ChevronRight ref={nextRef} />
          </button>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
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
          className="pb-8"
        >
          {" "}
          {packages.map((pkg, index) => (
            <SwiperSlide key={index}>
              <div
                className="transition-transform duration-300 transform bg-white p-4 text-center my-10 relative rounded-xl swiper-slide-content
      shadow-md hover:shadow-xl hover:shadow-orange-300/40 ml-4 cursor-pointer"
                onClick={() => {
                  setSelectedPackage(pkg.title);
                  setIsBookingOpen(true);
                }}
              >
                <div className="border-white border-[2px] h-78 xl:h-84 w-[84%] sm:w-[88%] absolute left-1/2 -translate-x-1/2 top-5 rounded-lg"></div>

                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-80 xl:h-86 object-cover rounded-xl mb-4"
                />
                <p className="text-lg font-medium">{pkg.title}</p>
                <button className="mt-2 bg-[#EB662B] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#d05a26] transition-colors">
                  Book Now
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>{" "}
      <style jsx>{`
        .swiper-slide-active .swiper-slide-content {
          transform: scale(1.1);
          z-index: 10;
        }
      `}</style>
      {/* Booking Form Modal */}
      {isBookingOpen && (
        <BookingForm
          onClose={() => setIsBookingOpen(false)}
          packageName={selectedPackage}
        />
      )}
    </section>
  );
};

export default CuratedPackages;
