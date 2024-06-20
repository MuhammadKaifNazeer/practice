import React from "react";

export const EightItemsBentoGridOne = () => {
  return (
    <>
      <div className="grid lg:grid-cols-12 grid-cols-1 h-[50rem] grid-rows-auto gap-4">
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-2 lg:row-span-2 min-h-[20rem] rounded-xl flex items-center justify-center">
          1
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-3 lg:row-span-2 min-h-[20rem] rounded-xl flex items-center justify-center">
          2
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-4 lg:row-span-6 min-h-[20rem] rounded-xl flex items-center justify-center">
          3
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-3 lg:row-span-6 min-h-[20rem] rounded-xl flex items-center justify-center">
          4
        </div>      
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-5 lg:row-span-4 min-h-[20rem] rounded-xl flex items-center justify-center">
          5
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-4 lg:row-span-6 min-h-[20rem] rounded-xl flex items-center justify-center">
          6
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-3 lg:row-span-6 min-h-[20rem] rounded-xl flex items-center justify-center">
          7
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-5 lg:row-span-6 min-h-[20rem] rounded-xl flex items-center justify-center">
          8
        </div>
      </div>
    </>
  );
};
