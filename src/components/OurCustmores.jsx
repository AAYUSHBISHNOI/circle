import React from "react";
import {
  Ourcustomerbgelipse,  
  Ourcustomersaeroplane,
  Ourcustomersplane,
  Ourcustomerstar,
} from "./common/Icons";

const Ourcustomers = () => {
  return (
    <div className=" max-w-[1920px] mx-auto relative">
      <Ourcustomersaeroplane />
      <div className="max-w-[1140px] mx-auto px-[20px] xl:px-0 pt-10 md:pt-[60px] lg:pt-[90px] xl:pt-[120px] relative">
        <Ourcustomersplane />
        <h2 className=" font-inter font-semibold text-4xl md:text-5xl leading-121 text-[#4499ad] text-center">
          What our customers say
        </h2>
         {/* Customer cards for mobile view */}
        <div className="flex flex-wrap xmd:gap-5 md:gap-0 justify-center lg:hidden mt-5 md:mt-10">
          <div className=" md:flex">
            <div
              className="w-full max-w-[370px] md:w-[50%] lg:w-[234px] xl:w-[267px] h-[231px] lg:h-[255px] xl:h-[231px] rounded-[12px] border border-transparent hover:border-[#bbbbba] duration-300 ease-in-out bg-white shadow-what-card text-center flex flex-col items-center justify-center relative px-3"
              data-aos="zoom-in"
            >
              <Ourcustomerbgelipse />
              <div className="flex items-center gap-2 z-10">
                <Ourcustomerstar />
                <p className="font-inter font-medium text-base leading-150 text-black">
                  4.7/5
                </p>
              </div>
              <p className="font-inter font-semibold text-xl leading-140 mt-4">
                Totally Worth
              </p>
              <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d] max-w-[231px] mt-4">
                Lorem ipsum dolor sit ame sitamet, consectetursit dolors sit
                adipiscing elit, sed do eiu amet smod tempor{" "}
              </p>
            </div>
            <div
              className="w-full max-w-[370px] md:w-[50%] lg:w-[234px] xl:w-[267px] h-[231px] lg:h-[255px] xl:h-[231px] rounded-[12px] border border-transparent hover:border-[#bbbbba] duration-300 ease-in-out bg-white shadow-what-card text-center flex flex-col items-center justify-center relative mt-4 md:mt-0 px-3 md:ms-5 lg:ms-0"
              data-aos="zoom-in-up"
            >
              <Ourcustomerbgelipse />
              <div className="flex items-center gap-2 z-10">
                <Ourcustomerstar />
                <p className="font-inter font-medium text-base leading-150 text-black">
                  4.7/5
                </p>
              </div>
              <p className="font-inter font-semibold text-xl leading-140 mt-4">
                Totally Worth
              </p>
              <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d] max-w-[231px] mt-4">
                Lorem ipsum dolor sit ame sitamet, consectetursit dolors sit
                adipiscing elit, sed do eiu amet smod tempor{" "}
              </p>
            </div>
          </div>
          <div className=" md:flex">
            <div
              className="w-full max-w-[370px] md:w-[50%] lg:w-[234px] xl:w-[267px] h-[231px] lg:h-[255px] xl:h-[231px] rounded-[12px] border border-transparent hover:border-[#bbbbba] duration-300 ease-in-out bg-white shadow-what-card text-center flex flex-col items-center justify-center relative mt-4 md:mt-5 xmd:mt-0 lg:mt-0 px-3"
              data-aos="zoom-in-down"
            >
              <Ourcustomerbgelipse />
              <div className="flex items-center gap-2 z-10">
                <Ourcustomerstar />
                <p className="font-inter font-medium text-base leading-150 text-black">
                  4.7/5
                </p>
              </div>
              <p className="font-inter font-semibold text-xl leading-140 mt-4">
                Totally Worth
              </p>
              <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d] max-w-[231px] mt-4">
                Lorem ipsum dolor sit ame sitamet, consectetursit dolors sit
                adipiscing elit, sed do eiu amet smod tempor{" "}
              </p>
            </div>
            <div
              className="w-full max-w-[370px] md:w-[50%] lg:w-[234px] xl:w-[267px] h-[231px] lg:h-[255px] xl:h-[231px] rounded-[12px] border border-transparent hover:border-[#bbbbba] duration-300 ease-in-out bg-white shadow-what-card text-center flex flex-col items-center justify-center relative mt-4 md:mt-5 lg:mt-0 px-3 md:ms-5 lg:ms-0"
              data-aos="zoom-out"
            >
              <Ourcustomerbgelipse />
              <div className="flex items-center gap-2 z-10">
                <Ourcustomerstar />
                <p className="font-inter font-medium text-base leading-150 text-black">
                  4.7/5
                </p>
              </div>
              <p className="font-inter font-semibold text-xl leading-140 mt-4">
                Totally Worth
              </p>
              <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d] max-w-[231px] mt-4">
                Lorem ipsum dolor sit ame sitamet, consectetursit dolors sit
                adipiscing elit, sed do eiu amet smod tempor{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Customer cards for desktop view */}
        <div className="hidden lg:flex justify-between mt-10">
          <div
            className="w-[237px] h-[260px] xl:w-[267px] xl:h-[231px] rounded-[12px] border border-transparent hover:border-[#bbbbba] duration-300 ease-in-out bg-white shadow-what-card text-center flex flex-col items-center justify-center relative px-3"
            data-aos="zoom-in"
          >
            <Ourcustomerbgelipse />
            <div className="flex items-center gap-2 z-10">
              <Ourcustomerstar />
              <p className="font-inter font-medium text-base leading-150 text-black">
                4.7/5
              </p>
            </div>
            <p className="font-inter font-semibold text-xl leading-140 mt-4">
              Totally Worth
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d] max-w-[231px] mt-4">
              Lorem ipsum dolor sit ame sitamet, consectetursit dolors sit
              adipiscing elit, sed do eiu amet smod tempor{" "}
            </p>
          </div>
          <div
            className="w-[237px] h-[260px] xl:w-[267px] xl:h-[231px] rounded-[12px] border border-transparent hover:border-[#bbbbba] duration-300 ease-in-out bg-white shadow-what-card text-center flex flex-col items-center justify-center relative px-3"
            data-aos="zoom-in-up"
          >
            <Ourcustomerbgelipse />
            <div className="flex items-center gap-2 z-10">
              <Ourcustomerstar />
              <p className="font-inter font-medium text-base leading-150 text-black">
                4.7/5
              </p>
            </div>
            <p className="font-inter font-semibold text-xl leading-140 mt-4">
              Totally Worth
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d] max-w-[231px] mt-4">
              Lorem ipsum dolor sit ame sitamet, consectetursit dolors sit
              adipiscing elit, sed do eiu amet smod tempor{" "}
            </p>
          </div>
          <div
            className="w-[237px] h-[260px] xl:w-[267px] xl:h-[231px] rounded-[12px] border border-transparent hover:border-[#bbbbba] duration-300 ease-in-out bg-white shadow-what-card text-center flex flex-col items-center justify-center relative px-3"
            data-aos="zoom-in-down"
          >
            <Ourcustomerbgelipse />
            <div className="flex items-center gap-2 z-10">
              <Ourcustomerstar />
              <p className="font-inter font-medium text-base leading-150 text-black">
                4.7/5
              </p>
            </div>
            <p className="font-inter font-semibold text-xl leading-140 mt-4">
              Totally Worth
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d] max-w-[231px] mt-4">
              Lorem ipsum dolor sit ame sitamet, consectetursit dolors sit
              adipiscing elit, sed do eiu amet smod tempor{" "}
            </p>
          </div>
          <div
            className="w-[237px] h-[260px] xl:w-[267px] xl:h-[231px] rounded-[12px] border border-transparent hover:border-[#bbbbba] duration-300 ease-in-out bg-white shadow-what-card text-center flex flex-col items-center justify-center relative px-3"
            data-aos="zoom-out"
          >
            <Ourcustomerbgelipse />
            <div className="flex items-center gap-2 z-10">
              <Ourcustomerstar />
              <p className="font-inter font-medium text-base leading-150 text-black">
                4.7/5
              </p>
            </div>
            <p className="font-inter font-semibold text-xl leading-140 mt-4">
              Totally Worth
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d] max-w-[231px] mt-4">
              Lorem ipsum dolor sit ame sitamet, consectetursit dolors sit
              adipiscing elit, sed do eiu amet smod tempor{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourcustomers;
