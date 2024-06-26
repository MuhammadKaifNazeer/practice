import React from "react";

export const TenItemsBentoGridOne = () => {
  return (
    <>
      <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-1 grid-row-auto gap-4 md:auto-rows-[20rem]">
        <div className="border bg-red-500 dark:text-black text-white col-span-full md:col-span-8 min-h-[20rem] rounded-xl flex items-center justify-center">
          1
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-4 min-h-[20rem] rounded-xl flex items-center justify-center">
          2
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-4 min-h-[20rem] rounded-xl flex items-center justify-center">
          3
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-8 min-h-[20rem] rounded-xl flex items-center justify-center">
          4
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-8 min-h-[20rem] rounded-xl flex items-center justify-center">
          5
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-4 min-h-[20rem] rounded-xl flex items-center justify-center">
          6
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-4 min-h-[20rem] rounded-xl flex items-center justify-center">
          7
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-4 min-h-[20rem] rounded-xl flex items-center justify-center">
          8
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-4 min-h-[20rem] row-span-2 rounded-xl flex items-center justify-center">
          9
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-8 min-h-[20rem] rounded-xl flex items-center justify-center">
          10
        </div>
      </div>
    </>
  );
};
