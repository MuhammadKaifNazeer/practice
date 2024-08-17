import React from "react";
import styles from "../voxlet.module.css";

const Hero: React.FC = () => {
  return (
    <div className="relative pb-4 md:pb-10 flex flex-col items-center justify-center px-8 md:px-8 overflow-hidden">
      <div className="relative flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 mt-20 relative text-center text-zinc-700 max-w-6xl mx-auto !leading-snug __className_399708">
          Crafting High-Performance Websites <br className="hidden md:block" />
          with{" "}
          <span className={`${styles.radialGradientText}`}>
            Stunning Design & Speed
          </span>{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-14 w-14 stroke-yellow-500 stroke-[1px]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"
                fill="rgba(253, 225, 86, 1)"
                opacity="0.9533333333333758"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="0.9513333333332715px 1px"
              />
            </svg>
          </span>
        </h1>
        <h2 className="relative font-regular text-base md:text-xl text-zinc-500 tracking-wide mb-8 text-center max-w-3xl mx-auto antialiased">
          We build websites that drive results and help your business grow.
          <br />
          No Calls. No BS. <span className="font-medium">Just Results.</span>
          <br />
        </h2>
      </div>
      <div className="relative z-10 group mb-10">
        <button
          className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block"
          pirsch-event="Chatbox Open"
        >
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 ring-1 ring-white/10 px-8 md:py-4 md:text-xl">
            <span>Book a call</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M10.75 8.75L14.25 12L10.75 15.25"
                pathLength="1"
                strokeDashoffset="0px"
                strokeDasharray="1px 1px"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>
      <div>
        <h2 className="text-neutral-500 text-center mb-4 relative z-40">
          Trusted by Founders and Entrepreneurs from all over the world
        </h2>
        <div className="flex flex-row items-center justify-center mb-10">
          <div className="-mr-4 relative group">
            <img
              alt="John Shahawy"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-cover object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fjohn.jpeg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fjohn.jpeg&amp;w=256&amp;q=75 2x"
              src="/_next/image?url=%2Fimages%2Ftestimonials%2Fjohn.jpeg&amp;w=256&amp;q=75"
            />
          </div>
          <div className="-mr-4 relative group">
            <img
              alt="Henrik Söderlund"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-cover object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fhenrik.jpeg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fhenrik.jpeg&amp;w=256&amp;q=75 2x"
              src="/_next/image?url=%2Fimages%2Ftestimonials%2Fhenrik.jpeg&amp;w=256&amp;q=75"
            />
          </div>
          <div className="-mr-4 relative group">
            <img
              alt="John Ferry"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-cover object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fjohnferry2.jpeg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fjohnferry2.jpeg&amp;w=256&amp;q=75 2x"
              src="/_next/image?url=%2Fimages%2Ftestimonials%2Fjohnferry2.jpeg&amp;w=256&amp;q=75"
            />
          </div>
          <div className="-mr-4 relative group">
            <img
              alt="Meru Gokhale"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-cover object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fmeru.webp&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fmeru.webp&amp;w=256&amp;q=75 2x"
              src="/_next/image?url=%2Fimages%2Ftestimonials%2Fmeru.webp&amp;w=256&amp;q=75"
            />
          </div>
          <div className="-mr-4 relative group">
            <img
              alt="Georg Weingartner"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-cover object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fgeorg.jpeg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fgeorg.jpeg&amp;w=256&amp;q=75 2x"
              src="/_next/image?url=%2Fimages%2Ftestimonials%2Fgeorg.jpeg&amp;w=256&amp;q=75"
            />
          </div>
          <div className="-mr-4 relative group">
            <img
              alt="Jonathan Barshop"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-cover object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fjonathan.jpeg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fjonathan.jpeg&amp;w=256&amp;q=75 2x"
              src="/_next/image?url=%2Fimages%2Ftestimonials%2Fjonathan.jpeg&amp;w=256&amp;q=75"
            />
          </div>
          <div className="-mr-4 relative group">
            <img
              alt="Ray Thai"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-cover object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Fray.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Fray.png&amp;w=256&amp;q=75 2x"
              src="/_next/image?url=%2Fimages%2Ftestimonials%2Fray.png&amp;w=256&amp;q=75"
            />
          </div>
          <div className="-mr-4 relative group">
            <img
              alt="Tony Pujals"
              loading="lazy"
              width="100"
              height="100"
              decoding="async"
              data-nimg="1"
              className="object-cover object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
              style={{ color: "transparent" }}
              srcSet="/_next/image?url=%2Fimages%2Ftestimonials%2Ftony.jpeg&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftestimonials%2Ftony.jpeg&amp;w=256&amp;q=75 2x"
              src="/_next/image?url=%2Fimages%2Ftestimonials%2Ftony.jpeg&amp;w=256&amp;q=75"
            />
          </div>
          <div className="flex justify-center ml-6">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="hidden"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="hidden"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="hidden"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="hidden"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
