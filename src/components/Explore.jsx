import React from "react";

import explore from "../assets/image/webp/explore-world.webp";

const Explore = () => {
  return (
    <div className="">
      <div className="container px-0 pt-10 md:pt-[60px] lg:pt-[115px]">
        <div className="md:flex flex-wrap items-center">
          <div className="w-full lg:w-[60%]">
            <img className="w-[957px] h-[380px] md:h-[651px]" src={explore} alt="expore-img" />
          </div>
          <div className="w-full lg:w-[40%] mt-4 lg:mt-0 px-[20px] xl:px-0">
            <div className="text-center">
              <p className="font-dancing font-semibold text-6xl md:text-8xl lg:text-6xl xl:text-8xl text-[#4499AD] leading-121 max-w-[491px] md:max-w-[728px] lg:max-w-[491px]">
                Explore the world with us
              </p>
              <p className="font-dancing font-bold text-5xl md:text-[64px] lg:text-5xl xl:text-[64px] leading-121 text-[#DBBFA7] md:mt-2 xl:mt-4">
                Tour your Dreams
              </p>
              <p className="font-inter font-medium text-base leading-150 text-[#4499AD] mt-3 xl:mt-10 lg:mt-6 max-w-[434px] md:max-w-[710px] lg:max-w-[434px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
