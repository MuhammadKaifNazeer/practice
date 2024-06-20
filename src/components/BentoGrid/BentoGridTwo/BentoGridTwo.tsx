import React from "react";

export const BentoGridTwo = () => {
  return (
    <>
      <div className="grid grid-cols-12 grid-rows-12 h-screen w-screen row p-8 gap-2">
        <div className="border bg-primary dark:text-black text-white col-span-3 row-span-3 rounded-xl flex items-center justify-center">1</div>
        <div className="border bg-primary dark:text-black text-white col-start-4 col-end-5 row-span-2 rounded-xl flex items-center justify-center">2</div>
        <div className="border bg-primary dark:text-black text-white col-start-5 col-end-6 row-span-2 rounded-xl flex items-center justify-center">3</div>
        <div className="border bg-primary dark:text-black text-white col-start-6 col-end-7 row-span-2 rounded-xl flex items-center justify-center">4</div>
        <div className="border bg-primary dark:text-black text-white col-span-2 row-span-4 rounded-xl flex items-center justify-center">5</div>
        <div className="border bg-primary dark:text-black text-white col-span-2 row-span-4 rounded-xl flex items-center justify-center">6</div>
        <div className="border bg-primary dark:text-black text-white col-span-4 row-span-2 rounded-xl flex items-center justify-center">7</div>
        <div className="border bg-primary dark:text-black text-white col-span-4 row-span-6 rounded-xl flex items-center justify-center">8</div>
      </div>
    </>
  );
};
