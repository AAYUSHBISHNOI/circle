import React from "react";
import seeimg from "../assets/image/webp/taj-mahal.webp";
import button from "../assets/image/webp/play-button.webp";
import cross from "../assets/image/svg/cross-icon.svg";
import play from "../assets/image/svg/play.svg";
import pause from "../assets/image/svg/pause.svg";
import tajmahal from "../assets/video/taj-mahal.mp4";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

const See = () => {
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  const [isplaying, setisplaying] = useState(false);
  const [showPlayPause, setShowPlayPause] = useState(false);

  const togglePlaying = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setisplaying(true);
    } else {
      videoRef.current.pause();
      setisplaying(false);
    }
  };

  const handleMouseEnter = () => {
    setShowPlayPause(true);
  };

  const handleMouseLeave = () => {
    setShowPlayPause(false);
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showModal]);

  return (
    <div>
      <div className="px-0 pt-10 md:pt-[60px] lg:pt-[90px] xl:pt-[130px] max-w-[1920px] mx-auto">
        <div className="md:flex flex-wrap items-center justify-end">
          <div
            className="w-full lg:w-[40%] xl:w-[30%] px-[20px] xl:px-0"
            data-aos="zoom-in-down"
          >
            <div className="text-center xl:translate-x-[10%] xl:mt-16 flex justify-center flex-col items-center xl:items-start">
              <p className="font-dancing font-semibold text-6xl  xl:text-8xl text-[#4499AD] !leading-121 lg:max-w-[491px]">
                See How We tour it
              </p>
              <p className="font-dancing font-bold text-5xl lg:text-5xl xl:text-[64px] !leading-121 text-[#DBBFA7] md:mt-2 xl:mt-4">
                Tour your Dreams
              </p>
              <p className="font-inter font-medium text-base !leading-150 text-[#4499AD] mt-3 xl:mt-10 lg:mt-6 max-w-[434px] md:max-w-[710px] lg:max-w-[434px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <span>
                <svg
                  className="mt-6 md:mt-[50px] xl:ml-[55%]"
                  width="147"
                  height="82"
                  viewBox="0 0 147 82"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.3">
                    <path
                      d="M142.832 69.9754C137.635 69.9754 134.941 71.6977 132.563 73.2155C130.505 74.5346 128.875 75.5763 125.313 75.5763C124.907 75.5763 124.529 75.5595 124.17 75.5343C132.118 71.0676 138.105 65.8279 141.987 59.8993C141.987 59.8993 141.99 59.8965 141.99 59.8937C142.065 59.7789 142.152 59.6725 142.225 59.5576C146.431 52.9457 146.403 47.9329 146.386 47.3812C146.361 46.6279 146.036 45.9193 145.482 45.4068C144.93 44.8972 144.224 44.6423 143.437 44.6703L128.768 45.4657L91.7546 16.1503C91.2141 15.7218 90.5616 15.5146 89.8307 15.5482L81.4097 16.0887L61.3415 0.5853C60.8514 0.204436 60.2493 0 59.6304 0H40.3912C39.5623 0 38.7781 0.366863 38.2432 0.999769C37.7139 1.63548 37.4871 2.47002 37.6327 3.28495L40.3632 18.7184L33.5132 19.158C31.9954 19.256 30.836 20.5471 30.8948 22.0649L31.5389 38.1312L19.1692 38.7025C18.3823 38.7389 17.6458 39.1058 17.1417 39.7107C16.6376 40.3156 16.4136 41.1081 16.5228 41.8867L17.8642 51.4671L12.1176 51.7779C11.3447 51.8227 10.6222 52.184 10.1237 52.7749C9.62522 53.3658 9.39278 54.1387 9.4852 54.9117L11.5687 72.2914C9.4992 71.0704 6.95637 69.967 2.80047 69.967C1.25181 69.967 0 71.2188 0 72.7675C0 74.3161 1.25181 75.5679 2.80047 75.5679C6.35427 75.5679 7.97854 76.6097 10.0369 77.9259C12.4117 79.4466 15.1029 81.1689 20.295 81.1689C25.4871 81.1689 28.1783 79.4466 30.5531 77.9259C32.6115 76.6097 34.2358 75.5679 37.7924 75.5679C41.3462 75.5679 42.9704 76.6097 45.0288 77.9259C47.4036 79.4466 50.0948 81.1689 55.2869 81.1689C60.4818 81.1689 63.173 79.4466 65.5478 77.9259C67.6062 76.6097 69.2305 75.5679 72.7871 75.5679C76.3409 75.5679 77.9651 76.6097 80.0235 77.9259C82.3983 79.4466 85.0867 81.1689 90.2788 81.1689C95.4737 81.1689 98.1677 79.4466 100.543 77.9259C102.601 76.6097 104.228 75.5679 107.785 75.5679C111.344 75.5679 112.977 76.6097 115.035 77.9287C117.413 79.4466 120.107 81.1689 125.304 81.1689C130.502 81.1689 133.196 79.4466 135.574 77.9287C137.632 76.6097 139.262 75.5679 142.824 75.5679C144.373 75.5679 145.625 74.3161 145.625 72.7675C145.625 71.2188 144.381 69.9754 142.832 69.9754ZM107.04 35.398L83.8349 37.0894C83.6277 37.1006 83.4737 37.0838 83.3616 37.053L82.9248 31.7517C83.0228 31.7013 83.1656 31.6537 83.3476 31.6397L100.769 30.4187L107.04 35.398ZM43.7322 5.60094H58.6783L72.9551 16.6292L45.9893 18.3599L43.7322 5.60094ZM22.5018 44.1606L34.5802 43.6033C36.1205 43.5333 37.3135 42.2339 37.2491 40.6937L36.6022 24.5769L80.8944 21.7373H80.9084L89.1166 21.2108L94.2331 25.2659L82.9276 26.0528C81.1689 26.1928 79.5586 26.9797 78.5084 28.2148C77.6291 29.2509 77.2006 30.5279 77.3042 31.819L77.8083 37.9212C78.0351 40.6824 80.5696 42.6932 83.6809 42.6932C83.8685 42.6932 84.0589 42.6876 84.2494 42.6708L113.537 40.5312L120.333 45.9221L23.482 51.1674L22.5018 44.1606ZM127.909 51.1198C127.937 51.1198 127.962 51.117 127.987 51.1142L140.287 50.4477C139.926 51.7527 139.276 53.4386 138.206 55.3429L16.1055 62.9826L15.4138 57.2164L127.909 51.1198ZM107.796 69.9754C102.604 69.9754 99.9096 71.6977 97.5348 73.2155C95.4765 74.5346 93.8494 75.5763 90.29 75.5763C86.7362 75.5763 85.1119 74.5346 83.0536 73.2183C80.6788 71.6977 77.9903 69.9754 72.7983 69.9754C67.6062 69.9754 64.9149 71.6977 62.5401 73.2155C60.4818 74.5346 58.8547 75.5763 55.2981 75.5763C51.7415 75.5763 50.1172 74.5346 48.0589 73.2183C45.6841 71.6977 42.9956 69.9754 37.8036 69.9754C32.6115 69.9754 29.9202 71.6977 27.5454 73.2183C25.4871 74.5346 23.8628 75.5763 20.3062 75.5763C19.242 75.5763 18.3655 75.4727 17.5814 75.3075L16.772 68.5555L133.851 61.2295C129.844 65.5422 124.316 69.4097 117.368 72.7786C115.147 71.384 112.498 69.9754 107.796 69.9754Z"
                      fill="#010101"
                    />
                    <path
                      d="M71.441 27.8563C70.8809 27.3662 70.1444 27.1394 69.4079 27.173L45.0718 28.8533C43.5287 28.9597 42.3637 30.2955 42.4673 31.8358L43.1983 42.6736C43.2515 43.4157 43.5931 44.1074 44.1532 44.5975C44.6657 45.0428 45.3182 45.2864 45.9931 45.2864C46.0548 45.2864 46.122 45.2836 46.1836 45.2808L70.5169 43.6006C72.0599 43.4941 73.2249 42.1583 73.1213 40.618L72.3932 29.7802C72.3428 29.0353 72.0011 28.3436 71.441 27.8563ZM48.6004 39.4979L48.2447 34.247L66.9939 32.9532L67.3467 38.204L48.6004 39.4979Z"
                      fill="#010101"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div className="w-full lg:w-[60%] flex items-end justify-end">
            <div className="relative">
              <img
                className="max-w-[350px] md:max-w-[985px] lg:max-w-[650px] xxl:max-w-[985px] h-[270px] md:h-[500px] xxl:h-[651px] right-0"
                src={seeimg}
                alt="see-img"
              />
              <button type="button" onClick={() => setShowModal(true)}>
                <img
                  className="lg:w-[90px] w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:h-[90px] absolute -translate-x-[50%] -translate-y-[50%] top-[52%] left-[52%]"
                  src={button}
                  alt="play-button"
                />
              </button>
              {showModal ? (
                <>
                  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-[90%] 2xl:max-w-[50%]">
                      <div className="bg-white p-4 rounded-lg shadow-lg">
                        <div
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          className="relative"
                        >
                          <video
                            ref={videoRef}
                            loop
                            controls
                            src={tajmahal}
                            className="w-full mt-4 relative"
                            onClick={togglePlaying}
                            onPause={() => setisplaying(false)}
                            onPlay={() => setisplaying(true)}
                          ></video>
                          {showPlayPause && (
                            <button
                              className="absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%]"
                              onClick={togglePlaying}
                            >
                              {isplaying ? (
                                <img src={pause} alt="Pause" />
                              ) : (
                                <img src={play} alt="Play" />
                              )}
                            </button>
                          )}
                        </div>
                        <button
                          className="absolute top-1 right-2 background-transparent outline-none focus:outline-none ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          <img src={cross} alt="cross-icon" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default See;
