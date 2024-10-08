import Image from "next/image";

export default function HeroSectionOne() {
  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden max-w-7xl mx-auto">
      <div
        className="flex justify-center"
        style={{ opacity: 1, willChange: "auto", transform: "none" }}
      >
        <button className="bg-neutral-50 dark:bg-neutral-700 no-underline group cursor-pointer relative md:shadow-2xl shadow-zinc-900 rounded-full p-px text-[10px] sm:text-xs font-semibold leading-6 text-neutral-700 dark:text-neutral-300 inline-block w-fit mx-auto">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-100 dark:bg-neutral-800 py-1.5 px-4 ring-1 ring-white/10">
            <span>We've raised $69M seed funding</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              ></path>
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-neutral-400/0 via-neutral-400/90 to-neutral-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>

      <h1
        className="text-2xl md:text-4xl lg:text-8xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 text-black dark:text-white"
        style={{ opacity: 1, willChange: "auto", transform: "none" }}
      >
        One-stop solution for all your content needs
      </h1>

      <p
        className="text-center mt-6 text-base md:text-xl text-neutral-700 dark:text-neutral-400 max-w-3xl mx-auto relative z-10"
        style={{ opacity: 1, willChange: "auto", transform: "none" }}
      >
        Space Rocket Tech is a team of passionate and experienced professionals
        who are dedicated to helping you achieve your content marketing goals.
      </p>

      <div
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
        style={{ opacity: 1, willChange: "auto", transform: "none" }}
      >
        <button className="bg-neutral-900 relative z-10 hover:bg-black/90 border border-transparent text-white text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 flex items-center justify-center shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]">
          Get started
        </button>

        <button className="relative z-10 bg-transparent hover:bg-gray-100 border border-transparent text-black text-sm md:text-sm transition font-medium duration-200 rounded-full px-4 py-2 justify-center dark:text-white dark:hover:bg-neutral-800 dark:hover:shadow-xl flex space-x-2 items-center group">
          <span>Contact us</span>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="text-neutral-700 group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-neutral-300"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
        <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none"></div>
        <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
          <Image
            alt="header"
            loading="lazy"
            width={1920}
            height={1080}
            decoding="async"
            className="rounded-[20px]"
            src="https://pro.aceternity.com/_next/image?url=https%3A%2F%2Fassets.aceternity.com%2Fpro%2Fheader.webp&w=1920&q=75"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}
