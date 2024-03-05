import React from "react";
import Slider from "react-slick";
import dubai from "../assets/image/webp/dubai-img.webp";
import wang from "../assets/image/webp/wang-img.webp";
import nepal from "../assets/image/webp/nepal-img.webp";
import singapore from "../assets/image/webp/singapore-img.webp";
import tajmahal from "../assets/image/webp/tajmahal-img.webp";

const Top = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "45px",
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
        },
      },
    ],
  };
  return (
    <div>
      <div className="pt-10 md:pt-[60px] lg:pt-[130px]">
        <h2 className="font-inter font-semibold text-4xl md:text-5xl leading-121 text-[#4499ad] text-center">
          Top Destinations
        </h2>
        <Slider {...settings} className="!h-[390px] mt-5 md:mt-10">
          <div className="!w-[300px] !h-[390px] relative">
            <img className=" h-[382px]" src={dubai} alt="dubai-img" />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[5%] left-[30%]">
              Dubai, UAE
            </p>
          </div>
          <div className="!w-[300px] !h-[390px] relative">
            <img className=" h-[382px]" src={wang} alt="wang-img" />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[5%] left-[20%]">
              Wang, Thailand
            </p>
          </div>
          <div className="!w-[300px] !h-[390px] relative">
            <img className=" h-[382px]" src={nepal} alt="nepal-img" />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[5%] left-[20%]">
              Kathmandu, Nepal
            </p>
          </div>
          <div className="!w-[300px] !h-[390px] relative">
            <img
              className="rounded-[30px]  h-[382px]"
              src={singapore}
              alt="singapore-img"
            />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[5%] left-[20%]">
              Rafels, Singapore
            </p>
          </div>
          <div className="!w-[300px] !h-[390px] relative">
            <img className=" h-[382px]" src={tajmahal} alt="tajmahal-img" />
            <p className="font-inter font-semibold text-xl text-white leading-140 absolute bottom-[5%] left-[30%]">
              Agra,India
            </p>
          </div>
        </Slider>
        <div className=" flex justify-center mt-3 md:mt-8">
          <button className="font-inter font-semibold text-white text-base leading-140 bg-[#439cac] py-[14px] px-6 rounded-[10px] flex items-center gap-3">
            Explore More{" "}
            <span>
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.82908 11.3667L14.168 6L8.82908 0.63333C8.78086 0.570011 8.7196 0.517792 8.64945 0.480206C8.5793 0.442621 8.50189 0.420547 8.42246 0.41548C8.34304 0.410412 8.26345 0.422469 8.18909 0.450834C8.11473 0.479199 8.04733 0.52321 7.99146 0.579887C7.93558 0.636564 7.89254 0.704585 7.86524 0.779343C7.83794 0.854102 7.82702 0.933853 7.83322 1.0132C7.83942 1.09254 7.8626 1.16963 7.90118 1.23924C7.93977 1.30885 7.99286 1.36936 8.05686 1.41666L12.0513 5.44444L1.42352 5.44444C1.27618 5.44444 1.13488 5.50297 1.03069 5.60716C0.926501 5.71135 0.86797 5.85265 0.86797 6C0.86797 6.14734 0.926501 6.28865 1.03069 6.39283C1.13488 6.49702 1.27618 6.55555 1.42352 6.55555L12.0513 6.55555L8.05686 10.5833C7.95298 10.6879 7.89492 10.8295 7.89544 10.977C7.89596 11.1244 7.95502 11.2656 8.05964 11.3694C8.16425 11.4733 8.30584 11.5314 8.45327 11.5309C8.60069 11.5303 8.74187 11.4713 8.84575 11.3667H8.82908Z"
                  fill="white"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Top;