import React, { useEffect, useState } from "react";

const Discover = () => {
  const [counters, setCounters] = useState({ counter1: 0, counter2: 0, counter3: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const newCounter1 = prevCounters.counter1 < 299 ? prevCounters.counter1 + 1 : prevCounters.counter1;
        const newCounter2 = prevCounters.counter2 < 399 ? prevCounters.counter2 + 1 : prevCounters.counter2;
        const newCounter3 = prevCounters.counter3 < 599 ? prevCounters.counter3 + 1 : prevCounters.counter3;
        return { counter1: newCounter1, counter2: newCounter2, counter3: newCounter3 };
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" max-w-[1920px] mx-auto">
      <div className="max-w-[1140px] mx-auto px-[20px] xl:px-0 pt-10 md:pt-[60px] lg:pt-[90px] xl:pt-[130px]">
        <div className=" flex justify-center text-center">
          <h2 className="font-inter font-semibold text-3xl md:text-5xl leading-121 text-[#4499ad] max-w-[603px]">
            Discover your perfect journey
          </h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between mt-5 md:mt-10">
          <div className="w-full max-w-[364px] md:w-[32%] xl:w-[364px] h-[540px] rounded-[20px] bg-white border border-[#c1c1c1] hover:border-[#4499ad] duration-300 ease-in-out px-6 flex flex-col justify-center items-center text-center">
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
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  5 Different Places
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  4 Meals Included
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Traveling Vehicle
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 18L6 6M18 6L6 18"
                      stroke="#4D4D4D"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Guider
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 18L6 6M18 6L6 18"
                      stroke="#4D4D4D"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Photographer
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 18L6 6M18 6L6 18"
                      stroke="#4D4D4D"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
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
          <div className="w-full max-w-[364px] md:w-[32%] xl:w-[364px] h-[540px] rounded-[20px] bg-white border border-[#c1c1c1] hover:border-[#4499ad] duration-300 ease-in-out px-6 flex flex-col justify-center items-center text-center mt-5 md:mt-0 relative overflow-hidden">
            <div className="w-[348px] absolute h-[64px] md:h-[40px] lg:h-[54px] flex justify-center items-center bg-[#0066ff] rotate-[37deg] top-0 right-[-40%] md:right-[-64%] md:top-1 lg:right-[-45%] lg:top-[2%] lg:rotate-[40deg] xl:right-[-35%] xl:top-2">
                <p className="font-inter font-medium text-lg md:text-sm  lg:text-base leading-145 text-white">Popular</p>
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
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  7 Different Places
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  8 Meals Included
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Traveling Vehicle
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Guider
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 18L6 6M18 6L6 18"
                      stroke="#4D4D4D"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Photographer
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 18L6 6M18 6L6 18"
                      stroke="#4D4D4D"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
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
          <div className="w-full max-w-[364px] md:w-[32%] xl:w-[364px] h-[540px] rounded-[20px] bg-white border border-[#c1c1c1] hover:border-[#4499ad] duration-300 ease-in-out px-6 flex flex-col justify-center items-center text-center mt-5 md:mt-0">
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
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  5 Different Places
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  4 Meals Included
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
                <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Traveling Vehicle
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
              <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Guider
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
              <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
                <p className="font-inter font-medium text-base leading-150 text-[#4d4d4d]">
                  Photographer
                </p>
              </div>
              <div className="flex items-center gap-2 mt-2.5">
              <span>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21 6.99997L9 19L3.5 13.5L4.91 12.09L9 16.17L19.59 5.58997L21 6.99997Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </span>
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
