import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#fff2ed] text-gray-800 w-[98%] mx-auto rounded-2xl py-10 my-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="">
          {/* Logo & Newsletter */}
          <div className="md:w-2/4">
            <div className="flex items-center mb-4">
              <img
                src="/logo.png" // Replace with your logo path
                alt="Logo"
                className="w-15 h-15 mr-2"
              />
              <span className="font-semibold text-lg font-sansita">
                Skymate Travels & Holidays
              </span>
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-10 lg:justify-start lg:gap-34 xl:gap-38 lg:pl-10 mt-8">
            <div>
              <h3 className="font-semibold mb-2 font-sansita">Newsletter</h3>
              <p className="text-sm mb-2 font-dm">
                Subscribe to the free newsletter and stay up to date
              </p>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-3 py-2 border font-dm border-gray-200 rounded-l-md w-full md:w-auto"
                />
                <button
                  type="submit"
                  className="bg-gray-200 text-black px-4 py-2 rounded-r-md font-dm"
                >
                  Send
                </button>
              </form>
            </div>
            <div>
              <h3 className="font-semibold mb-2 font-sansita">Company</h3>
              <ul className="space-y-1 text-sm font-dm text-nowrap">
                <li>About Us</li>
                <li>Tour Reviews</li>
                <li>Contact Us</li>
                <li>Travel Guides</li>
                <li>Data Policy</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 font-sansita">Support</h3>
              <ul className="space-y-1 text-sm font-dm text-nowrap">
                <li>Get in Touch</li>
                <li>Help Center</li>
                <li>New Services</li>
                <li>Follow Us</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2 font-sansita">Contact</h3>
              <ul className="space-y-1 text-sm font-dm">
                <li className="w-fit">Phone No: +92 300 8680747</li>
                <li className="w-[60%] xl:w-[80%]">
                  Address: 9MQC+4FX, Noor Mahal Rd, adjacent Faysal Bank,
                  Officer Colony, Bahawalpur
                </li>
                <li className="w-fit">Email: skymatetravels@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
