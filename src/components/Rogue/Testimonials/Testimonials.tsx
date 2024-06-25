import React from "react";

const Testimonial: React.FC = () => {
  return (
    <div className="">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden px-8 py-20">
        <div
          className="absolute inset-0 -top-40 z-0 bg-grid-slate-100/70"
          style={{ maskImage: "linear-gradient(transparent, white, white)" }}
        ></div>
        <div className="relative flex flex-col items-center ">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="pointer-events-none absolute -left-4 -top-10 text-6xl text-neutral-200"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"></path>
          </svg>
          <blockquote className="relative z-40 mx-auto mb-8 max-w-4xl text-center text-sm !leading-9 text-slate-700 md:text-2xl">
            <div>
              Rogue is a game changer for the govcon community. It has
              dramatically reduced our response times and helped us immensely
              with the structure and overall quality of the responses. The chat
              capability produces extremely meaningful content and other
              features like expand, concise, and paraphrase help shape it into a
              gold level draft. Highly recommend this tool!!
            </div>
          </blockquote>
          <p className="mx-auto max-w-4xl text-center text-xs font-medium !leading-9 text-black md:text-lg"></p>
          <span className="mx-auto max-w-4xl text-center text-xs !leading-9 text-slate-500 md:text-base"></span>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
          <div className="absolute -left-8 -right-8 bottom-0 h-px bg-slate-900/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
        </div>
        <div className="absolute bottom-0 right-48 flex h-8 items-end overflow-hidden">
          <div className="-mb-px flex h-[2px] w-80 -scale-x-100">
            <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
            <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
