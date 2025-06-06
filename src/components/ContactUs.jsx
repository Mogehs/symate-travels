import { sendEmail } from "../utils/sendEmail";

const ContactUs = () => {
  return (
    <section className="px-4 md:px-6 lg:px-20 py-12 bg-white">
      <h2 className="text-5xl font-semibold text-gray-800 mb-8 font-dm">
        Let's <span className="text-[#EB662B]">Talk!</span>
      </h2>
      <div className="w-full mx-auto flex flex-col lg:flex-row items-center gap-5">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="bg-[#FFF1EB] rounded-[40px] p-4 flex items-center justify-center h-[23rem] sm:h-[33rem] w-[16rem] mr-20"></div>
          <img
            src="/contact.png"
            alt="Traveler"
            className="max-w-full h-[20rem] sm:h-[32rem] absolute top-5 object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Have a Question?{" "}
            <span className="text-[#EB662B]">Let’s Talk Travel</span>
          </h2>
          <p className="text-gray-600 mb-6">
            A warm and inviting title that fits perfectly with travel services.
          </p>
          <form className="space-y-4" onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Name *"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#EB662B]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email *"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#EB662B]"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone No"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#EB662B]"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#EB662B]"
            ></textarea>
            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />
            <button
              type="submit"
              className="w-full bg-[#DD5471] hover:bg-[#DD5471]/80 text-white py-3 rounded-md font-semibold transition cursor-pointer"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
