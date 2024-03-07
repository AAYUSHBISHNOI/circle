import React, { useEffect, useState } from "react";
import popular from "../assets/image/webp/popular.webp";

const Discover = () => {
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        const newCounter1 =
          prevCounters.counter1 < 299
            ? prevCounters.counter1 + 1
            : prevCounters.counter1;
        const newCounter2 =
          prevCounters.counter2 < 399
            ? prevCounters.counter2 + 1
            : prevCounters.counter2;
        const newCounter3 =
          prevCounters.counter3 < 599
            ? prevCounters.counter3 + 1
            : prevCounters.counter3;
        return {
          counter1: newCounter1,
          counter2: newCounter2,
          counter3: newCounter3,
        };
      });
    }, 2);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className=" max-w-[1920px] mx-auto">
      <div className="max-w-[1140px] mx-auto px-[20px] xl:px-0 pt-10 md:pt-[60px] lg:pt-[90px] xl:pt-[130px]">
        <div className=" flex justify-center text-center" data-aos="fade-up">
          <h2 className="font-inter font-semibold text-3xl md:text-5xl leading-121 text-[#4499ad] max-w-[603px]">
            Discover your perfect journey
          </h2>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between mt-5 md:mt-10">
          <div
            className="w-full max-w-[364px] md:w-[32%] xl:w-[364px] h-[540px] rounded-[20px] bg-white border border-[#c1c1c1] hover:border-[#4499ad] duration-300 ease-in-out px-6 flex flex-col justify-center items-center text-center"
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
          <div
            className="w-full max-w-[364px] md:w-[32%] xl:w-[364px] h-[540px] rounded-[20px] bg-white border border-[#c1c1c1] hover:border-[#4499ad] duration-300 ease-in-out px-6 flex flex-col justify-center items-center text-center mt-5 md:mt-0 relative overflow-hidden"
            data-aos="fade-right"
          >
            <div>
              <span>
                <svg
                className=" absolute top-[0%] right-[0%] md:top-[-1%] md:right-[-10%] lg:top-0 lg:right-[-5%]"
                  width="200"
                  height="145"
                  viewBox="0 0 200 175"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_1227)">
                    <rect
                      width="348"
                      height="64.1514"
                      transform="translate(41.4023 -99) rotate(40.195)"
                      fill="#0066FF"
                    />
                    <path
                      d="M125.251 23.2053L133.7 13.2057L137.264 16.2173C138.042 16.8746 138.567 17.5607 138.839 18.2757C139.111 18.9907 139.166 19.7012 139.005 20.4072C138.846 21.11 138.508 21.7673 137.991 22.3793C137.471 22.9945 136.875 23.4392 136.203 23.7135C135.536 23.9872 134.825 24.05 134.068 23.9019C133.318 23.7533 132.556 23.3517 131.781 22.6972L129.33 20.6263L130.411 19.347L132.725 21.3024C133.217 21.7177 133.687 21.97 134.136 22.0593C134.588 22.1453 135.01 22.1007 135.404 21.9255C135.797 21.7503 136.153 21.4739 136.472 21.0963C136.792 20.7187 137.003 20.3229 137.107 19.909C137.212 19.495 137.179 19.0744 137.01 18.6471C136.845 18.2226 136.511 17.7985 136.01 17.375L134.116 15.7744L126.76 24.48L125.251 23.2053ZM136.866 33.2781C136.163 32.6841 135.685 32.0045 135.434 31.2395C135.182 30.4744 135.156 29.6798 135.356 28.8557C135.556 28.0315 135.983 27.2321 136.637 26.4574C137.295 25.6794 138.014 25.1215 138.796 24.7836C139.578 24.4457 140.367 24.337 141.164 24.4576C141.96 24.5781 142.71 24.9354 143.413 25.5295C144.116 26.1235 144.594 26.8031 144.845 27.5681C145.097 28.3332 145.122 29.1294 144.919 29.9568C144.716 30.7842 144.287 31.5869 143.629 32.3649C142.975 33.1396 142.258 33.6943 141.479 34.0289C140.699 34.3635 139.911 34.4706 139.115 34.35C138.319 34.2295 137.569 33.8722 136.866 33.2781ZM137.906 32.0567C138.362 32.4418 138.841 32.6404 139.344 32.6525C139.847 32.6646 140.34 32.531 140.821 32.2517C141.306 31.9751 141.752 31.5959 142.159 31.1141C142.563 30.6357 142.861 30.1343 143.053 29.6102C143.251 29.0856 143.303 28.5747 143.21 28.0775C143.117 27.5804 142.842 27.1393 142.387 26.7542C141.928 26.3665 141.444 26.1667 140.935 26.1551C140.429 26.1462 139.932 26.2817 139.445 26.5616C138.963 26.8409 138.52 27.2198 138.116 27.6983C137.709 28.1801 137.408 28.6817 137.213 29.203C137.021 29.7272 136.973 30.2362 137.069 30.7301C137.168 31.2267 137.447 31.6689 137.906 32.0567ZM139.743 40.2697L148.456 29.9577L149.882 31.1623L148.854 32.3781L148.977 32.4812C149.193 32.3965 149.468 32.319 149.801 32.2487C150.133 32.1784 150.506 32.1864 150.918 32.2726C151.334 32.3557 151.774 32.5938 152.239 32.9871C152.845 33.4987 153.256 34.1082 153.473 34.8157C153.689 35.5232 153.689 36.2792 153.473 37.0836C153.259 37.8908 152.81 38.6996 152.126 39.5101C151.441 40.3206 150.718 40.9014 149.959 41.2526C149.202 41.6004 148.455 41.7312 147.719 41.6449C146.986 41.5554 146.317 41.2548 145.711 40.7433C145.256 40.3582 144.947 39.9668 144.787 39.5691C144.63 39.1741 144.557 38.8053 144.567 38.4627C144.578 38.1201 144.606 37.8319 144.653 37.5982L144.565 37.5239L141.203 41.5032L139.743 40.2697ZM146.718 34.9163C146.273 35.4436 145.959 35.9705 145.776 36.4968C145.594 37.0232 145.552 37.5211 145.652 37.9905C145.755 38.4566 146.016 38.867 146.436 39.2218C146.872 39.5903 147.334 39.7828 147.823 39.7992C148.314 39.8124 148.803 39.682 149.291 39.4082C149.782 39.1371 150.24 38.7509 150.663 38.2496C151.081 37.7548 151.382 37.2472 151.565 36.7269C151.751 36.2093 151.793 35.7114 151.689 35.2333C151.588 34.7579 151.319 34.3345 150.879 33.9633C150.456 33.6057 150.006 33.4122 149.529 33.3828C149.055 33.3561 148.578 33.4748 148.098 33.7389C147.618 34.003 147.158 34.3955 146.718 34.9163ZM157.984 45.531L161.693 41.1416L163.157 42.3792L156.821 49.8789L155.385 48.666L156.483 47.3672L156.405 47.3012C155.894 47.5558 155.335 47.6557 154.729 47.6008C154.128 47.5455 153.547 47.2799 152.984 46.8041C152.502 46.3971 152.165 45.931 151.973 45.4059C151.786 44.8803 151.765 44.3181 151.908 43.7195C152.054 43.1236 152.389 42.5164 152.911 41.8979L156.942 37.1276L158.402 38.3611L154.52 42.9556C154.088 43.4667 153.886 43.9932 153.913 44.5352C153.941 45.0772 154.181 45.5393 154.633 45.9216C154.906 46.1526 155.236 46.3139 155.622 46.4055C156.011 46.4998 156.412 46.4842 156.824 46.3588C157.24 46.2361 157.627 45.9602 157.984 45.531ZM168.691 42.7702L160.242 52.7697L158.782 51.5362L167.231 41.5367L168.691 42.7702ZM164.249 56.4392C163.773 56.0377 163.418 55.5867 163.182 55.0864C162.95 54.5829 162.864 54.067 162.925 53.5387C162.99 53.0131 163.23 52.5046 163.645 52.0131C164.003 51.5899 164.378 51.3104 164.772 51.1745C165.166 51.0386 165.569 51.0077 165.98 51.082C166.391 51.1563 166.802 51.2971 167.213 51.5045C167.623 51.7119 168.024 51.9444 168.415 52.2018C168.908 52.5293 169.308 52.795 169.616 52.999C169.926 53.1997 170.177 53.3146 170.37 53.3437C170.563 53.3729 170.734 53.2996 170.882 53.1238L170.911 53.0896C171.272 52.6632 171.43 52.231 171.387 51.7932C171.348 51.358 171.092 50.9411 170.62 50.5423C170.129 50.127 169.649 49.9088 169.182 49.8876C168.72 49.8659 168.324 49.9415 167.994 50.1144L166.886 48.6427C167.434 48.3245 167.982 48.1574 168.531 48.1415C169.086 48.1251 169.623 48.2267 170.14 48.4463C170.66 48.6626 171.146 48.9619 171.599 49.3442C171.898 49.5972 172.185 49.9012 172.46 50.2561C172.741 50.6104 172.949 51.0042 173.086 51.4372C173.225 51.873 173.243 52.3432 173.141 52.8478C173.041 53.3491 172.76 53.8731 172.298 54.42L168.09 59.4002L166.664 58.1956L167.53 57.1703L167.472 57.1208C167.218 57.2298 166.92 57.2957 166.577 57.3185C166.234 57.3412 165.864 57.2877 165.466 57.1579C165.068 57.028 164.662 56.7885 164.249 56.4392ZM165.556 55.5355C165.96 55.8766 166.372 56.0883 166.793 56.1709C167.218 56.2561 167.613 56.2334 167.98 56.1028C168.353 55.9717 168.665 55.758 168.915 55.4618L169.732 54.495C169.636 54.5031 169.494 54.4667 169.306 54.3857C169.124 54.3043 168.924 54.2001 168.708 54.0731C168.494 53.9429 168.287 53.8152 168.086 53.69C167.888 53.5615 167.722 53.4545 167.587 53.369C167.274 53.1655 166.964 53.0071 166.658 52.8937C166.356 52.7831 166.067 52.7484 165.792 52.7896C165.524 52.8304 165.279 52.9809 165.059 53.2413C164.754 53.6027 164.656 53.9888 164.767 54.3999C164.879 54.8077 165.143 55.1862 165.556 55.5355ZM170.034 61.0431L176.371 53.5435L177.782 54.7357L176.775 55.9271L176.853 55.9931C177.331 55.705 177.84 55.5911 178.381 55.6515C178.927 55.7115 179.42 55.9271 179.859 56.2983C179.95 56.3753 180.055 56.4694 180.173 56.5804C180.295 56.6941 180.387 56.7862 180.45 56.8564L179.271 58.2529C179.226 58.1871 179.137 58.0812 179.003 57.9351C178.873 57.7858 178.733 57.6479 178.583 57.5214C178.238 57.2299 177.869 57.0432 177.475 56.9614C177.087 56.8791 176.706 56.9006 176.332 57.0257C175.962 57.1476 175.639 57.3713 175.364 57.6968L171.494 62.2766L170.034 61.0431Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_1227">
                      <rect
                        width="348"
                        height="64.1514"
                        fill="white"
                        transform="translate(41.4023 -99) rotate(40.195)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </span>
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
          <div
            className="w-full max-w-[364px] md:w-[32%] xl:w-[364px] h-[540px] rounded-[20px] bg-white border border-[#c1c1c1] hover:border-[#4499ad] duration-300 ease-in-out px-6 flex flex-col justify-center items-center text-center mt-5 md:mt-0"
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
