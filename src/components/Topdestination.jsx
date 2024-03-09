import React from "react";
import Marquee from "react-fast-marquee";
import dubai from "../assets/image/webp/dubai-img.webp";
import wang from "../assets/image/webp/wang-river.webp";
import nepal from "../assets/image/webp/nepal-tempal.webp";
import singapore from "../assets/image/webp/singapore-ferris-wheel.webp";
import tajmahal from "../assets/image/webp/tajmahal-img.webp";
import { Explorearrow, Topodestinationelipse } from "./Icon";

const Topdestination = () => {
  return (
    <div className=" max-w-[1920px] mx-auto relative">
     <Topodestinationelipse/>
      <div className="pt-10 md:pt-[60px] lg:pt-[90px] xl:pt-[130px]" data-aos="zoom-out-down">
        <h2 className="font-inter font-semibold text-4xl md:text-5xl !leading-121 text-[#4499ad] text-center">
          Top Destinations
        </h2>
        {/* marquee */}
        <Marquee speed={100} className="mt-5 md:mt-10"  data-aos="zoom-out-up">
          <div className="w-[260px] lg:!w-[315px] h-[300px] lg:!h-[382px] relative">
            <img className="w-[240px] h-[300px] lg:w-[291px] lg:h-[382px]" src={dubai} alt="dubai-img" />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[1%] left-[30%]">
              Dubai, UAE
            </p>
          </div>
          <div className="w-[260px] lg:!w-[315px] h-[300px] lg:!h-[382px] relative">
            <img className="w-[240px] h-[300px] lg:w-[291px] lg:h-[382px]" src={wang} alt="wang-img" />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[1%] left-[20%]">
              Wang, Thailand
            </p>
          </div>
          <div className="w-[260px] lg:!w-[315px] h-[300px] lg:!h-[382px] relative">
            <img className="w-[240px] h-[300px] lg:w-[291px] lg:h-[382px]" src={nepal} alt="nepal-img" />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[1%] left-[20%]">
              Kathmandu, Nepal
            </p>
          </div>
          <div className="w-[260px] lg:!w-[315px] h-[300px] lg:!h-[382px] relative">
            <img
              className="rounded-[30px] w-[240px] h-[300px] lg:w-[291px] lg:h-[382px]"
              src={singapore}
              alt="singapore-img"
            />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[1%] left-[20%]">
              Rafels, Singapore
            </p>
          </div>
          <div className="w-[260px] lg:!w-[315px] h-[300px] lg:!h-[382px] relative">
            <img className="w-[240px] h-[300px] lg:w-[291px] lg:h-[382px]" src={tajmahal} alt="tajmahal-img" />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[1%] left-[30%]">
              Agra,India
            </p>
          </div>
          <div className="w-[260px] lg:!w-[315px] h-[300px] lg:!h-[382px] relative hidden 2xl:block">
            <img className="w-[240px] h-[300px] lg:w-[291px] lg:h-[382px]" src={nepal} alt="nepal-img" />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[1%] left-[20%]">
              Kathmandu, Nepal
            </p>
          </div>
        </Marquee>
        {/* Explore more button */}
        <div className=" flex justify-center mt-5 md:mt-8" data-aos="zoom-out">
          <button className="font-inter font-semibold text-white text-base leading-140 bg-[#439cac] hover:bg-[#bbbbba] duration-300 ease-in-out py-[13px] px-[26px] rounded-[10px] flex items-center gap-2.5">
            Explore More
           <Explorearrow/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topdestination;
