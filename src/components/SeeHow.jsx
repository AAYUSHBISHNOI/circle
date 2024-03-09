import React from "react";
import seeimg from "../assets/image/webp/see-how-taj-mahal.webp";
import button from "../assets/image/webp/play-button.webp";
import cross from "../assets/image/svg/cross-icon.svg";
import play from "../assets/image/svg/play-iocn.svg";
import pause from "../assets/image/svg/pause-icon.svg";
import tajmahal from "../assets/video/taj-mahal.mp4";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Seehowship } from "./common/Icons";
import Props from "./common/MainHeading";

const SeeHow = () => {
  const [showModal, setShowModal] = useState(false); // state variable to control modal visibility
  const videoRef = useRef(null); // reference to the video element
  const [isplaying, setisplaying] = useState(false); // state variable to track if video is playing
  const [showPlayPause, setShowPlayPause] = useState(false); // state variable to show/hide play/pause button

  // function to toggle video play/pause
  const togglePlaying = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setisplaying(true);
    } else {
      videoRef.current.pause();
      setisplaying(false);
    }
  };

  // show play/pause button on mouse enter
  const handleMouseEnter = () => {
    setShowPlayPause(true);
  };

  // hide play/pause button on mouse leave
  const handleMouseLeave = () => {
    setShowPlayPause(false);
  };

  // control body overflow based on modal visibility
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
             {/* Text content */}
            <div className="text-center xl:translate-x-[10%] xl:mt-16 flex justify-center flex-col items-center xl:items-start">
            <Props
                heading="See How We tour it"
                para="Tour your Dreams"
                custompara="font-dancing font-bold text-5xl lg:text-5xl xl:text-[64px] !leading-121 text-[#DBBFA7] md:mt-2 xl:mt-4"
                customheading="font-dancing font-semibold text-6xl  xl:text-8xl text-[#4499AD] !leading-121 lg:max-w-[491px]"
              /> 
              <p className="font-inter font-medium text-base !leading-150 text-[#4499AD] mt-3 xl:mt-10 lg:mt-6 max-w-[434px] md:max-w-[710px] lg:max-w-[434px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <Seehowship />
            </div>
          </div>
           {/* Video and button */}
          <div className="w-full lg:w-[60%] flex items-end justify-end">
            <div className="relative">
              <img
                className="max-w-[350px] md:max-w-[985px] lg:max-w-[650px] xxl:max-w-[985px] h-[270px] md:h-[500px] xxl:h-[651px] right-0"
                src={seeimg}
                alt="see-img"
              />
              <button type="button" onClick={() => setShowModal(true)}>
                {/* Image overlay */}
                <img
                  className="lg:w-[90px] w-[40px] h-[40px] md:w-[60px] md:h-[60px] lg:h-[90px] absolute -translate-x-[50%] -translate-y-[50%] top-[52%] left-[52%]"
                  src={button}
                  alt="play-button"
                />
              </button>
               {/* Modal */}
              {showModal ? (
                <>
                  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-[90%] 2xl:max-w-[50%]">
                      <div className="bg-white p-4 rounded-lg shadow-lg">
                         {/* Video player */}
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
                           {/* Play/pause button */}
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
                         {/* Close button */}
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
                  {/* Backdrop */}
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

export default SeeHow;
