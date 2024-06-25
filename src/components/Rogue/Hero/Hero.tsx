import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div>
        <div>
          <div className="relative flex flex-col overflow-hidden bg-white px-8">
            <div className="relative z-40 mx-auto mt-10 h-full w-full max-w-7xl md:mt-20">
              <div className="mx-auto mt-8 max-w-7xl items-end gap-10 pt-20 md:gap-20">
                <div className="mx-auto">
                  <h1 className="text-center font-[500] text-3xl font-extrabold tracking-tight text-neutral-800 md:text-5xl lg:text-7xl lg:leading-snug __className_cbcdd2">
                    Respond to Government{" "}
                    <div
                      className="relative z-10 inline-block md:w-48"
                      style={{ transform: "none" }}
                    >
                      RFQs
                    </div>
                    <br />
                    <div className="inline-block font-[500]">
                      <div className="relative inline-block bg-gray-100 px-2 py-1 mr-4 ">
                        10x faster
                        <div
                          className="pointer-events-none h-2 w-2 rounded-full bg-black opacity-20 absolute -right-[2px] -top-[2px]"
                          style={{ opacity: 0.2 }}
                        ></div>
                        <div
                          className="pointer-events-none h-2 w-2 rounded-full bg-black opacity-20 absolute -bottom-[2px] -right-[2px]"
                          style={{ opacity: 0.2 }}
                        ></div>
                        <div
                          className="pointer-events-none h-2 w-2 rounded-full bg-black opacity-20 absolute -left-[2px] -top-[2px]"
                          style={{ opacity: 0.3236 }}
                        ></div>
                        <div
                          className="pointer-events-none h-2 w-2 rounded-full bg-black opacity-20 absolute -bottom-[2px] -left-[2px]"
                          style={{ opacity: 0.2036 }}
                        ></div>
                      </div>
                      using AI
                    </div>
                  </h1>
                </div>
              </div>
              <div className="group relative z-10 my-8 w-full cursor-pointer text-center md:mt-20">
                <a
                  className="relative z-10 mx-auto flex w-fit rounded-xl bg-black px-4 py-4 text-center text-base font-extrabold text-white shadow-2xl shadow-white/[0.1] lg:px-8 lg:py-8 lg:text-3xl"
                  tabIndex={0}
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex items-center justify-center p-2 md:px-20 md:py-10">
        <div className="relative w-full py-10 md:py-40">
          <div className="mx-auto -mt-12 h-[14rem] w-full max-w-7xl rounded-2xl border-4 border-[#6C6C6C] bg-[#222222] shadow-xl sm:shadow-[0_0_#0000004d,_0_9px_20px_#0000004a,_0_37px_37px_#00000042,_0_84px_50px_#00000026,_0_149px_60px_#0000000a,_0_233px_65px_#00000003] md:h-[48rem] md:rounded-[30px] md:p-6">
            <div className="h-full w-full overflow-hidden rounded-xl bg-gray-100 md:rounded-2xl md:p-4">
              <img
                alt="hero"
                draggable="false"
                loading="lazy"
                width="1400"
                height="720"
                decoding="async"
                data-nimg="1"
                className="transition duration-500 scale-100 blur-0 mx-auto rounded-2xl object-contain"
                src="https://www.userogue.com/_next/image?url=%2Fimages%2Fhero-latest.png&w=1920&q=75"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full dark:[mask-image:linear-gradient(white,transparent)]">
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/30 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30 dark:opacity-100">
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full fill-black/20 stroke-black/20 mix-blend-overlay dark:fill-black/20 dark:stroke-white/10"
          >
            <defs>
              <pattern
                id=":r3:"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
                x="-12"
                y="4"
              >
                <path d="M.5 40V.5H40" fill="none"></path>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth="0"
              fill="url(#:r3:)"
            ></rect>
            <svg x="-12" y="4" className="overflow-visible">
              <rect
                strokeWidth="0"
                width="41"
                height="41"
                x="560"
                y="120"
              ></rect>
              <rect
                strokeWidth="0"
                width="41"
                height="41"
                x="480"
                y="40"
              ></rect>
              <rect
                strokeWidth="0"
                width="41"
                height="41"
                x="280"
                y="40"
              ></rect>
              <rect
                strokeWidth="0"
                width="41"
                height="41"
                x="400"
                y="240"
              ></rect>
            </svg>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
