import React, { useEffect, useState } from "react";

// Importing icons for use within the component
import {
  DiscoverTick,
  Discovercross,
  Discoverpopulartag,
  Discovertick,
} from "./common/Icons";

const Discover = () => {
  // State to keep track of counters for different plans
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  });
  
  // useEffect hook to increment counters over time until a maximum value is reached
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => ({
        counter1: Math.min(prevCounters.counter1 + 1, 299),
        counter2: Math.min(prevCounters.counter2 + 1, 399),
        counter3: Math.min(prevCounters.counter3 + 1, 599),
      }));
    }, 2);
  
    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  // Render the component UI
  return (
    <div className=" max-w-[1920px] mx-auto">
      <div className="max-w-[1140px] mx-auto px-[20px] xl:px-0 pt-10 md:pt-[60px] lg:pt-[90px] xl:pt-[110px]">
        <div className=" flex justify-center text-center" data-aos="fade-up">
          <h2 className="font-inter font-semibold text-3xl md:text-5xl !leading-121 text-[#4499ad] max-w-[603px]">
            Discover your perfect journey
          </h2>
        </div>
         {/* Plan selection cards */}
        <div className="flex flex-wrap justify-center md:justify-between mt-5 md:mt-10">
          <div
            className="w-full max-w-[364px] md:w-[32%] xl:w-[364px] h-[500px] md:h-[540px] rounded-[20px] bg-white border border-[#c1c1c1] hover:border-[#4499ad] duration-300 ease-in-out px-6 flex flex-col justify-center items-center text-center"
            data-aos="fade-down"
          >
            <p className="font-inter font-semibold text-[32px] leading-130 text-[#010101]">
              Basic
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
              Starter
            </p>
            <p className="font-inter font-semibold text-2xl lg:text-[32px] leading-150 text-[#010101] mt-4 md:mt-2 lg:mt-[20px]">
              ${counters.counter1}
              <span className="text-base font-medium text-[#4d4d4d]">/day</span>
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#010101] mt-5 md:mt-3 lg:mt-[30px]">
              Thrill Delight{" "}
            </p>
            <div className="h-[1px] w-full bg-[#d7d8dc] mt-2"></div>
            <div>
              <div className="flex items-center gap-2 mt-4">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  5 Different Places
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  4 Meals Included
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Traveling Vehicle
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovercross />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Guider
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovercross />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Photographer
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovercross />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Night Stay
                </p>
              </div>
            </div>
            <div className="mt-10">
              <button className="font-inter font-semibold text-base leading-121 py-[14px] px-6 bg-[#439cac] hover:bg-[#bbbbba] duration-300 ease-in-out rounded-[10px] text-white">
                Choose Plan
              </button>
            </div>
          </div>
          <div
            className="w-full max-w-[364px] md:w-[32%] xl:w-[364px] h-[500px] md:h-[540px] rounded-[20px] bg-white border border-[#c1c1c1] hover:border-[#4499ad] duration-300 ease-in-out px-6 flex flex-col justify-center items-center text-center mt-5 md:mt-0 relative overflow-hidden"
            data-aos="fade-right"
          >
            <div>
              <Discoverpopulartag />
            </div>
            <p className="font-inter font-semibold text-[32px] leading-130 text-[#010101]">
              Standard
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
              Better Journey
            </p>
            <p className="font-inter font-semibold text-2xl lg:text-[32px] leading-150 text-[#010101] mt-4 md:mt-2 lg:mt-[20px]">
              ${counters.counter2}
              <span className="text-base font-medium text-[#4d4d4d]">/day</span>
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#010101] mt-5 md:mt-3 lg:mt-[30px]">
              Cultural Odyssey
            </p>
            <div className="h-[1px] w-full bg-[#d7d8dc] mt-2"></div>
            <div>
              <div className="flex items-center gap-2 mt-4">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  7 Different Places
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  8 Meals Included
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Traveling Vehicle
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Guider
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovercross />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Photographer
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovercross />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Night Stay
                </p>
              </div>
            </div>
            <div className="mt-10">
              <button className="font-inter font-semibold text-base leading-121 py-[14px] px-6 bg-[#439cac] hover:bg-[#bbbbba] duration-300 ease-in-out rounded-[10px] text-white">
                Choose Plan
              </button>
            </div>
          </div>
          <div
            className="w-full max-w-[364px] md:w-[32%] xl:w-[364px] h-[500px] md:h-[540px] rounded-[20px] bg-white border border-[#c1c1c1] hover:border-[#4499ad] duration-300 ease-in-out px-6 flex flex-col justify-center items-center text-center mt-5 md:mt-0"
            data-aos="fade-left"
          >
            <p className="font-inter font-semibold text-[32px] leading-130 text-[#010101]">
              Basic
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
              Starter
            </p>
            <p className="font-inter font-semibold text-2xl lg:text-[32px] leading-150 text-[#010101] mt-4 md:mt-2 lg:mt-[20px]">
              ${counters.counter3}
              <span className="text-base font-medium text-[#4d4d4d]">/day</span>
            </p>
            <p className="font-inter font-medium text-base leading-150 text-[#010101] mt-5 md:mt-3 lg:mt-[30px]">
              Thrill Delight
            </p>
            <div className="h-[1px] w-full bg-[#d7d8dc] mt-2"></div>
            <div>
              <div className="flex items-center gap-2 mt-4">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  5 Different Places
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  4 Meals Included
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Traveling Vehicle
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Guider
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Photographer
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <Discovertick />
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Night Stay
                </p>
              </div>
            </div>
            <div className="mt-10">
              <button className="font-inter font-semibold text-base leading-121 py-[14px] px-6 bg-[#439cac] hover:bg-[#bbbbba] duration-300 ease-in-out rounded-[10px] text-white">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
