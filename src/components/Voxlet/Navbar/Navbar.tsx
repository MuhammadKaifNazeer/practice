import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between py-8 max-w-[83rem] mx-auto px-8 w-full relative z-[60]">
      <div className="flex flex-row justify-between items-center space-x-1">
        {/* <img
          alt="logo"
          loading="lazy"
          width={20}
          height={20}
          decoding="async"
          className="h-5 w-5"
          style={{ color: "transparent" }}
          srcSet="/_next/image?url=%2Flogo.png&w=32&q=75 1x, /_next/image?url=%2Flogo.png&w=48&q=75 2x"
          src="/_next/image?url=%2Flogo.png&w=48&q=75"
        /> */}
        <a
          href="/"
          className="font-bold text-2xl font-bold text-lg tracking-normal text-zinc-700"
        >
          Voxlet.dev
        </a>
      </div>
      <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-8 lg:space-x-14 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        <a href="/work">
          <span>Work</span>
        </a>
        <a href="/#services">
          <span>Services</span>
        </a>
        <a href="/pricing">
          <span>Pricing</span>
        </a>
        <a href="/components">
          <span>Components</span>
        </a>
        <a
          target="__blank"
          rel="noopener noreferrer"
          href="https://ui.aceternity.com/templates"
        >
          <span>Templates</span>
        </a>
        <a href="/blog">
          <span>Blog</span>
        </a>
      </div>
      <button
        className="bg-slate-900 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white hidden lg:inline-block"
        pirsch-event="Chatbox Open"
      >
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 ring-1 ring-white/10 px-4 py-1">
          <span>Book a call</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>
      <div className="flex lg:hidden">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
