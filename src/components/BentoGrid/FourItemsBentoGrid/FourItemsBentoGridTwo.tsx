import React from "react";

export const FourItemsBentoGridTwo = () => {
  return (
    <>
      <div className="grid md:grid-cols-8 grid-cols-1 gap-4">
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-4 h-[20rem] rounded-xl flex items-center justify-center">
          1
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-4 h-[20rem] rounded-xl flex items-center justify-center">
          2
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-4 h-[20rem] rounded-xl flex items-center justify-center">
          3
        </div>
        <div className="border bg-primary dark:text-black text-white col-span-full md:col-span-4 h-[20rem] rounded-xl flex items-center justify-center">
          4
        </div>
      </div>
    </>
  );
};
