import React from "react";

const Hero = () => {
  return (
    <>
      <div className="w-full relative max-w-[90rem]">
        <div className="relative flex flex-col items-start">
          <div
            className="absolute inset-0 -top-40 bg-dot-slate-500/25 xl:hidden"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, white, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, white, transparent)",
            }}
          ></div>
          <div className="relative grid grid-cols-1 xl:grid-cols-3 overflow-hidden min-h-[42rem] w-full">
            <div className="relative z-10 col-span-2 px-10 xl:pl-16 flex flex-col items-center xl:items-start mt-20">
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-[600] text-zinc-700 font-bold text-center xl:text-left mt-10 xl:max-w-sm">
                Never write from{" "}
                <span className="inline-block bg-clip-text text-transparent bg-gradient-to-br from-emerald-500 to-teal-600">
                  scratch
                </span>{" "}
                again.
              </h1>
              <h2 className="text-center xl:text-left text-base md:text-xl font-normal my-10 text-zinc-600">
                Kickstart your next great{" "}
                <span className="inline-block font-bold">
                  <div className="Typewriter" data-testid="typewriter-wrapper">
                    <span className="Typewriter__wrapper">Presentation</span>
                    {/* <span className="Typewriter__cursor">|</span> */}
                  </div>
                </span>
                <br />
                with Moonbeam: your long-form writing AI assistant
              </h2>
              <button className="bg-gradient-to-b from-emerald-500 to-teal-600 text-white rounded-xl px-4 py-3 mt-2 shadow-xl relative overflow-hidden flex flex-row space-x-2 items-center">
                <span className="relative text-base md:text-xl font-semibold text-white inline-block">
                  Start writing
                </span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 text-white stroke-[1]"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="absolute top-0 -right-40 hidden xl:block">
              <div
                className="h-10 bg-white w-full absolute top-0 z-20"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, white, white, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, white, white, transparent)",
                }}
              ></div>
              <div className="grid grid-cols-3 divide-x divide-gray-100">
                <div className="flex flex-col space-y-10 items-start relative">
                  {/* Template button 1 */}
                  <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
                    <div className="container relative">
                      <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                        <div
                          className="absolute inset-0 z-20 bg-white"
                          style={{
                            maskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                          }}
                        ></div>
                        <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                          <img
                            decoding="async"
                            alt="skeleton"
                            loading="lazy"
                            width="180"
                            height="80"
                            data-nimg="1"
                            className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                            style={{ color: "transparent" }}
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&w=256&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&w=384&q=75 2x"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&w=384&q=75"
                          />
                        </div>
                      </div>
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 11l7-7 7 7M5 19l7-7 7 7"
                          ></path>
                        </svg>
                      </div>
                      <div className="h-full">
                        <h2 className="font-bold text-xl mt-4 mb-2 relative">
                          Technical Guide
                        </h2>
                        <p className="text-sm text-zinc-600">
                          Use the technical guide template to write a technical
                          guide intended for consumption by developers or other
                          technical users.
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Template button 2 (similar structure repeated for other templates) */}
                  <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
                    <div className="container relative">
                      <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                        <div
                          className="absolute inset-0 z-20 bg-white"
                          style={{
                            maskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                          }}
                        ></div>
                        <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                          <img
                            decoding="async"
                            alt="skeleton"
                            loading="lazy"
                            width="180"
                            height="80"
                            data-nimg="1"
                            className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                            style={{ color: "transparent" }}
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProduct_Update.e3742e44.png&w=256&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProduct_Update.e3742e44.png&w=384&q=75 2x"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FProduct_Update.e3742e44.png&w=384&q=75"
                          />
                        </div>
                      </div>
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3 text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          ></path>
                        </svg>
                      </div>
                      <div className="h-full">
                        <h2 className="font-bold text-xl mt-4 mb-2 relative">
                          Product Update Communication (beta)
                        </h2>
                        <p className="text-sm text-zinc-600">
                          Use the product update template to quickly write a
                          product update intended for consumption by users or
                          potential users interested in your product.
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="-mt-44">
                  <div className="flex flex-col space-y-10 items-start relative">
                    <span
                      className="absolute z-[999] -left-px h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] style_meteor__iBwXl"
                      style={{
                        visibility: "visible",
                        "--meteor-delay": "2s",
                        "--meteor-duration": "2s",
                        "--meteor-width": "103px",
                      }}
                    ></span>

                    {/* Card 1 */}
                    <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
                      <div className="container relative">
                        <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                          <div
                            className="absolute inset-0 z-20 bg-white"
                            style={{
                              maskImage:
                                "linear-gradient(to bottom, transparent, transparent, white)",
                              WebkitMaskImage:
                                "linear-gradient(to bottom, transparent, transparent, white)",
                            }}
                          ></div>
                          <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                            <img
                              decoding="async"
                              alt="skeleton"
                              loading="lazy"
                              width="180"
                              height="80"
                              data-nimg="1"
                              className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                              style={{ color: "transparent" }}
                              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEssay.94f64971.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEssay.94f64971.png&amp;w=384&amp;q=75 2x"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FEssay.94f64971.png&amp;w=384&amp;q=75"
                            />
                          </div>
                        </div>
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3 text-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            ></path>
                          </svg>
                        </div>
                        <div className="h-full">
                          <h2 className="font-bold text-xl mt-4 mb-2 relative">
                            Essay
                          </h2>
                          <p className="text-sm text-zinc-600">
                            Use the essay template to quickly write an
                            informative essay.
                          </p>
                        </div>
                      </div>
                    </button>

                    {/* Card 2 */}
                    <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 shadow-2xl cursor-pointer">
                      <div className="container relative">
                        <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                          <div
                            className="absolute inset-0 z-20 bg-white"
                            style={{
                              maskImage:
                                "linear-gradient(to bottom, transparent, transparent, white)",
                              WebkitMaskImage:
                                "linear-gradient(to bottom, transparent, transparent, white)",
                            }}
                          ></div>
                          <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                            <img
                              decoding="async"
                              alt="skeleton"
                              loading="lazy"
                              width="180"
                              height="80"
                              data-nimg="1"
                              className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                              style={{ color: "transparent" }}
                              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBlog.13eabc78.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBlog.13eabc78.png&amp;w=384&amp;q=75 2x"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBlog.13eabc78.png&amp;w=384&amp;q=75"
                            />
                          </div>
                        </div>
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3 text-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z"
                            ></path>
                          </svg>
                        </div>
                        <div className="h-full">
                          <h2 className="font-bold text-xl mt-4 mb-2 relative">
                            Blog
                          </h2>
                          <p className="text-sm text-zinc-600">
                            Use the blog template to quickly write a blog
                            intended for publication online.
                          </p>
                        </div>
                      </div>
                    </button>

                    {/* Card 3 */}
                    <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
                      <div className="container relative">
                        <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                          <div
                            className="absolute inset-0 z-20 bg-white"
                            style={{
                              maskImage:
                                "linear-gradient(to bottom, transparent, transparent, white)",
                              WebkitMaskImage:
                                "linear-gradient(to bottom, transparent, transparent, white)",
                            }}
                          ></div>
                          <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                            <img
                              decoding="async"
                              alt="skeleton"
                              loading="lazy"
                              width="180"
                              height="80"
                              data-nimg="1"
                              className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                              style={{ color: "transparent" }}
                              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTwitter_Thread.0b773706.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTwitter_Thread.0b773706.png&amp;w=384&amp;q=75 2x"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTwitter_Thread.0b773706.png&amp;w=384&amp;q=75"
                            />
                          </div>
                        </div>
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3 text-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                            ></path>
                          </svg>
                        </div>
                        <div className="h-full">
                          <h2 className="font-bold text-xl mt-4 mb-2 relative">
                            Twitter Thread (beta)
                          </h2>
                          <p className="text-sm text-zinc-600">
                            Use the twitter thread template to quickly write the
                            first draft of a thread.
                          </p>
                        </div>
                      </div>
                    </button>

                    {/* Card 4 */}
                    <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
                      <div className="container relative">
                        <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                          <div
                            className="absolute inset-0 z-20 bg-white"
                            style={{
                              maskImage:
                                "linear-gradient(to bottom, transparent, transparent, white)",
                              WebkitMaskImage:
                                "linear-gradient(to bottom, transparent, transparent, white)",
                            }}
                          ></div>
                          <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                            <img
                              decoding="async"
                              alt="skeleton"
                              loading="lazy"
                              width="180"
                              height="80"
                              data-nimg="1"
                              className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                              style={{ color: "transparent" }}
                              srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=384&amp;q=75 2x"
                              src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnical_Guide.efd9ff0c.png&amp;w=384&amp;q=75"
                            />
                          </div>
                        </div>
                        <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-3 w-3 text-white"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M5 11l7-7 7 7M5 19l7-7 7 7"
                            ></path>
                          </svg>
                        </div>
                        <div className="h-full">
                          <h2 className="font-bold text-xl mt-4 mb-2 relative">
                            Technical Guide
                          </h2>
                          <p className="text-sm text-zinc-600">
                            Use the technical guide template to write a
                            technical guide intended for consumption by
                            developers or other technical users.
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col space-y-10 items-start relative">
                  <span
                    className="absolute z-[999] -left-px h-[0.1rem] w-[0.1rem] rounded-[9999px] bg-blue-700 shadow-[0_0_0_1px_#ffffff10] rotate-[180deg] style_meteor__iBwXl"
                    style={{
                      visibility: "visible",
                      "--meteor-delay": "0s",
                      "--meteor-duration": "2s",
                      "--meteor-width": "84px",
                    }}
                  ></span>

                  {/* Button/Card 1 */}
                  <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
                    <div className="container relative">
                      <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                        <div
                          className="absolute inset-0 z-20 bg-white"
                          style={{
                            maskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                          }}
                        ></div>
                        <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                          <img
                            decoding="async"
                            alt="skeleton"
                            loading="lazy"
                            width="180"
                            height="80"
                            data-nimg="1"
                            className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                            style={{ color: "transparent" }}
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNewsletter.ced03cb5.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNewsletter.ced03cb5.png&amp;w=384&amp;q=75 2x"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNewsletter.ced03cb5.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3 text-white"
                        >
                          <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <div className="h-full">
                        <h2 className="font-bold text-xl mt-4 mb-2 relative">
                          Newsletter
                        </h2>
                        <p className="text-sm text-zinc-600">
                          Use the newsletter template to quickly write a
                          newsletter intended for consumption by a private
                          audience.
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Button/Card 2 */}
                  <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
                    <div className="container relative">
                      <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                        <div
                          className="absolute inset-0 z-20 bg-white"
                          style={{
                            maskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                          }}
                        ></div>
                        <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                          <img
                            decoding="async"
                            alt="skeleton"
                            loading="lazy"
                            width="180"
                            height="80"
                            data-nimg="1"
                            className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                            style={{ color: "transparent" }}
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLesson_Plan.c19e442e.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLesson_Plan.c19e442e.png&amp;w=384&amp;q=75 2x"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLesson_Plan.c19e442e.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3 text-white"
                        >
                          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="h-full">
                        <h2 className="font-bold text-xl mt-4 mb-2 relative">
                          Lesson Plan
                        </h2>
                        <p className="text-sm text-zinc-600">
                          Use the lesson plan template to write a lesson plan
                          intended for consumption by teachers or students.
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Button/Card 3 */}
                  <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
                    <div className="container relative">
                      <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                        <div
                          className="absolute inset-0 z-20 bg-white"
                          style={{
                            maskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                          }}
                        ></div>
                        <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                          <img
                            decoding="async"
                            alt="skeleton"
                            loading="lazy"
                            width="180"
                            height="80"
                            data-nimg="1"
                            className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                            style={{ color: "transparent" }}
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiscussion_Post.8b591a48.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiscussion_Post.8b591a48.png&amp;w=384&amp;q=75 2x"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDiscussion_Post.8b591a48.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3 text-white"
                        >
                          <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                      </div>
                      <div className="h-full">
                        <h2 className="font-bold text-xl mt-4 mb-2 relative">
                          Discussion Post
                        </h2>
                        <p className="text-sm text-zinc-600">
                          Use the discussion post template to write a discussion
                          post intended for a forum or private audience.
                        </p>
                      </div>
                    </div>
                  </button>

                  {/* Button/Card 4 */}
                  <button className="text-black px-8 py-6 border border-gray-200 rounded-3xl transition duration-100 text-left group hover:shadow h-full flex flex-col items-start max-w-xs mx-4 opacity-[0.5] cursor-default">
                    <div className="container relative">
                      <div className="img-container aspect-[2/1] h-20 relative w-[100%] overflow-hidden rounded-lg bg-slate-100 transition duration-100">
                        <div
                          className="absolute inset-0 z-20 bg-white"
                          style={{
                            maskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                            WebkitMaskImage:
                              "linear-gradient(to bottom, transparent, transparent, white)",
                          }}
                        ></div>
                        <div className="absolute w-[60%] -bottom-10 left-0 right-0 mx-auto flex justify-center">
                          <img
                            decoding="async"
                            alt="skeleton"
                            loading="lazy"
                            width="180"
                            height="80"
                            data-nimg="1"
                            className="transition duration-500 blur-0 scale-100 rounded-md w-full h-full shadow-xl"
                            style={{ color: "transparent" }}
                            srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPersonal_Story.1727ab62.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPersonal_Story.1727ab62.png&amp;w=384&amp;q=75 2x"
                            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPersonal_Story.1727ab62.png&amp;w=384&amp;q=75"
                          />
                        </div>
                      </div>
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-green-300 to-green-500 via-green-400 mt-4 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="2"
                          stroke="currentColor"
                          aria-hidden="true"
                          className="h-3 w-3 text-white"
                        >
                          <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="h-full">
                        <h2 className="font-bold text-xl mt-4 mb-2 relative">
                          Personal Story
                        </h2>
                        <p className="text-sm text-zinc-600">
                          Use the personal story template to write a personal
                          story intended for consumption by a private audience.
                          This template is great for using the AI text expander.
                        </p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
