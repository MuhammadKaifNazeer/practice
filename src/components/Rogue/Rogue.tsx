import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

const Rogue = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white antialiased">
        <div className="relative overflow-hidden">
          <Hero />
        </div>
      </div>
    </>
  );
};

export default Rogue;
