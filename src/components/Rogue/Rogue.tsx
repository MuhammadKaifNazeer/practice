import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Testimonial from "./Testimonials/Testimonials";
import CTA from "./CTA/CTA";
import FAQs from "./FAQs/FAQs";
import Footer from "./Footer/Footer";

const Rogue = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white antialiased">
        <div className="relative overflow-hidden">
          <Hero />
          <Testimonial />
          <FAQs />
          <CTA />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Rogue;
