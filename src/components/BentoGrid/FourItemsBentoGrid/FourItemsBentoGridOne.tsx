import React from "react";

export const FourItemsBentoGridOne = () => {
  return (
    <>
      <div className="grid lg:grid-cols-12 md:grid-cols-8 grid-cols-1 gap-4">
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-4 h-[20rem] rounded-xl flex items-center justify-center">
          1
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-4 h-[20rem] rounded-xl flex items-center justify-center">
          2
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full lg:col-span-4 h-[20rem] rounded-xl flex items-center justify-center">
          3
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full h-[20rem] rounded-xl flex items-center justify-center">
          4
        </div>
      </div>
    </>
  );
};
