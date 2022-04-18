import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-bg md:h-[700px] h-96 p-5">
      <div className="flex items-center h-full w-full">
        <div className="md:container mx-auto text-white">
          <h1 className="text-3xl md:text-6xl font-bold">Eric Low's</h1>
          <h1 className="text-3xl md:text-6xl font-bold text-rose-500">
            Creative
          </h1>
          <h1 className="text-3xl md:text-6xl font-bold">Photography</h1>
          <p className="mt-5 md:w-1/3">
            I love Photography, and meet new beautiful people all over the
            world. I offer weeding Photography, Product Photography,Travel
            Photography, Wildlife Photography etc.
          </p>
          <button className="px-7 bg-rose-500 border-2 border-rose-500 py-2 rounded-md mt-6 hover:bg-transparent hover:-translate-y-2 duration-500">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
