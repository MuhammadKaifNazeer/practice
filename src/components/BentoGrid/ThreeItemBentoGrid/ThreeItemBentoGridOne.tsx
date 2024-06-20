import React from "react";

export const ThreeItemBentoGridOne = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="md:col-span-1 h-[40rem] rounded-xl grid grid-cols-1 grid-rows-2 gap-4">
        <div className="border bg-primary dark:text-black text-white md:col-span-1 row-span-1 rounded-xl flex items-center justify-center">
          1
        </div>
        <div className="border bg-primary dark:text-black text-white md:col-span-1 row-span-1 rounded-xl flex items-center justify-center">
          2
        </div>

        </div>
        <div className="border bg-primary dark:text-black text-white md:col-span-1 h-[40rem] rounded-xl flex items-center justify-center">
          3
        </div>
      </div>
    </>
  );
};
