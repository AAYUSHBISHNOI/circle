import React from "react";

import explore from "../assets/image/webp/explore-ship.webp";
import { Exploreaeroplane } from "./Icon";
import Props from "./Props";

const Explore = () => {
  return (
    <div className=" max-w-[1920px] mx-auto relative">
      <Exploreaeroplane/>
      <div className=" container px-0 pt-10 md:pt-[60px] lg:pt-[90px] xl:pt-[100px]">
        <div className="md:flex flex-wrap items-center">
          <div className="w-full lg:w-[60%]" data-aos="fade-up">
            <img
              className="!lg:max-w-[750px] xl:!max-w-[957px] h-[270px] md:h-[450px] lg:h-[550px] xl:h-[651px]"
              src={explore}
              alt="expore-img"
            />
          </div>
          <div className="w-full lg:w-[40%] mt-4 px-[20px] xl:px-0 md:mt-6 lg:mt-0 xl:flex xl:justify-end xl:items-end" data-aos="fade-down">
            <div className="text-center lg:-translate-x-[5%] xl:-translate-x-[40%] 2xl:-translate-x-10 flex flex-col justify-center items-center">
               {/* Main heading with responsive font size and leading */}
               <Props
                heading="Explore the world with us"
                para="Tour your Dreams"
                custompara="font-dancing font-bold text-5xl lg:text-5xl xl:text-[64px] leading-121 text-[#DBBFA7] lg:mt-2 xl:mt-4"
                customheading="font-dancing font-semibold text-6xl xmd:text-[55px] md:text-6xl xl:text-8xl text-[#4499AD] leading-121 xl:max-w-[491px]"
              />  
               {/* Description text with responsive max width */}
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
