import React from "react";

export const ThreeItemBentoGridThree = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4">
        <div className="rounded-xl grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="border bg-primary dark:text-black text-white h-[20rem] md:col-span-1 rounded-xl flex items-center justify-center">
          1
        </div>
        <div className="border bg-primary dark:text-black text-white h-[20rem] md:col-span-1 rounded-xl flex items-center justify-center">
          2
        </div>

        </div>
        <div className="border bg-primary dark:text-black text-white md:col-span-1 h-[20rem] rounded-xl flex items-center justify-center">
          3
        </div>
      </div>
    </>
  );
};
