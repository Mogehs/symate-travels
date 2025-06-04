import React from "react";

const testimonials = [
  {
    name: "John Doe",
    image: "user1.png",
    rating: 5,
    location: "New York",
    message:
      "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim. Sed auctor massa non arcu posuere, id sodales metus interdum.",
  },
  {
    name: "John Doe",
    image: "user2.png",
    rating: 5,
    location: "New York",
    message:
      "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim. Sed auctor massa non arcu posuere, id sodales metus interdum.",
  },
  {
    name: "John Doe",
    image: "user3.png",
    rating: 5,
    location: "New York",
    message:
      "Praesent non enim sed velit malesuada consectetur id a justo. Fusce quis eros sit amet enim laoreet dignissim. Sed auctor massa non arcu posuere, id sodales metus interdum.",
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

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 px-4">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={`bg-[#f9f9f9] rounded-2xl shadow-md p-6 w-full max-w-sm transition-all duration-300 ${
              idx === 1 ? "md:-mt-8" : "md:mt-4"
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
            <p className="text-sm text-gray-600 mb-4">{testimonial.message}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="bg-[#EB662B] text-white text-xs px-3 py-1 rounded-full">
                {testimonial.location}
              </span>
              <span className="text-[#EB662B] text-xl">”</span>
            </div>
          </div>
        ))}
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
