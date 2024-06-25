import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Testimonial from "./Testimonials/Testimonials";
import CTA from "./CTA/CTA";

const Rogue = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white antialiased">
        <div className="relative overflow-hidden">
          <Hero />
          <Testimonial />
          <CTA />

          <div className="h-screen w-screen bg-white"></div>
        </div>
      </div>
    </>
  );
};

export default Rogue;
