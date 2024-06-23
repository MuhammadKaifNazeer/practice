import React from "react";

const Navbar = () => {
  return (
    <div className="bg-transparent px-4 md:px-16 py-10 w-full relative z-20 max-w-[90rem] mx-auto flex flex-row justify-between items-center">
      <a href="/" className="h-10 w-auto flex items-center">
        <img
          src="https://www.gomoonbeam.com/_next/image?url=%2Fbrand%2Flogo.png&w=256&q=75"
          alt="logo"
          loading="lazy"
          width={200}
          height={200}
          decoding="async"
          className="transition duration-200 grayscale-0 blur-0 scale-100"
          style={{ color: "transparent" }}
        />
      </a>
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8 h-full">
        <div className="relative group h-full">
          <a
            href="/"
            className="text-zinc-700 hover:text-zinc-900 relative px-2 py-2"
          >
            <span className="relative">Home</span>
          </a>
        </div>
        <div className="relative group h-full">
          <a
            href="/resources"
            className="text-zinc-700 hover:text-zinc-900 relative px-2 py-2"
          >
            <span className="relative">Resources</span>
          </a>
        </div>
        <div className="relative group h-full">
          <a
            href="/pricing"
            className="text-zinc-700 hover:text-zinc-900 relative px-2 py-2"
          >
            <span className="relative">Pricing</span>
          </a>
        </div>
        <div className="relative group h-full">
          <a
            href="mailto:success@gomoonbeam.com"
            className="text-zinc-700 hover:text-zinc-900 relative px-2 py-2"
          >
            <span className="relative">Contact</span>
          </a>
        </div>
        <a
          href="https://app.gomoonbeam.com"
          target="__blank"
          className="rounded-xl bg-zinc-700 text-white font-bold px-6 py-2 hover:bg-zinc-800 transition duration-200 hover:shadow-xl"
        >
          Login
        </a>
      </div>
      <div className="flex items-center md:hidden h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-6 w-6 text-zinc-700 hover:text-zinc-900 cursor-pointer"
        >
          <path
            fill="currentColor"
            d="M432 176H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 272H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zM432 368H80c-8.8 0-16-7.2-16-16s7.2-16 16-16h352c8.8 0 16 7.2 16 16s-7.2 16-16 16z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
