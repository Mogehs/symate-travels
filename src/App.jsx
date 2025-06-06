import React from "react";
import Navbar from "./components/common/Navbar";
import Hero from "./components/Hero";
import PopularTourTypes from "./components/Popular";
import AboutUs from "./components/About";
import WhyChooseUs from "./components/Choose";
import TopPackages from "./components/TopPackage";
import MostSearched from "./components/MostSearched";
import BestDeals from "./components/BestDeals";
import Footer from "./components/common/Footer";
import Testimonials from "./components/Testimonials";
import Destinations from "./components/Destinations";
import CuratedPackages from "./components/CuratedPackages";
import Map from "./components/Map";
import DestinationHighlights from "./components/Destination";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <>
      <div className="max-w-[1536px] mx-auto">
        <Navbar />
        <Hero />
        <PopularTourTypes />
        <AboutUs />
        <WhyChooseUs />
        <TopPackages />
        <MostSearched />
        <BestDeals />
        <CuratedPackages />
        <DestinationHighlights />
        <Map />
        <Testimonials />
        <Destinations />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
};

export default App;
