import React from "react";
import Hero from "./Hero/Hero";
import Navbar from "./Navbar/Navbar";

const MoonBeam = () => {
  return (
    <>
      <main className="bg-white antialiased flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
      </main>
    </>
  );
};

export default MoonBeam;
