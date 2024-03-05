import React, { useEffect, useState } from "react";
import heroimg from "../assets/image/svg/hero-logo.svg";

const Nav = () => {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    if (show) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [show]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.classList.remove("overflow-hidden");
        setShow(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setShow(false);
  };
  return (
    <div>
      <div className="mx-auto max-w-[1164px] px-[20px] xl:px-0">
        <div className="flex items-center justify-between h-[71px] z-50 relative">
          <div>
            <a href="/" className="z-50 relative">
              <img src={heroimg} alt="" className="" />
            </a>
          </div>
          <ul
            className={`${
              show ? "left-0" : ""
            } duration-500 bg-transparent backdrop-blur-[22px] w-full h-full top-[0] -left-full fixed gap-[25px] lg:gap-[32px] flex flex-col justify-center items-center lg:bg-transparent lg:flex-row lg:static lg:w-auto lg:h-full z-40`}
          >
            <li>
              <a
                href=""
                className="font-poppins font-medium text-2xl md:text-base leading-150 duration-300 ease-in-out text-[#4d4d4d] hover:text-[#010101]"
              >
                Destination
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-poppins font-medium text-2xl md:text-base leading-150 duration-300 ease-in-out text-[#4d4d4d] hover:text-[#010101]"
              >
                Trip Plan
              </a>
            </li>
            <li>
              <a
                href=""
                className="font-poppins font-medium text-2xl md:text-base leading-150 duration-300 ease-in-out text-[#4d4d4d] hover:text-[#010101]"
              >
                Discover
              </a>
            </li>
            <button className="font-inter lg:hidden font-semibold text-base leading-145 text-[#439cac] py-[11px] px-8 border rounded-[10px] border-[#439cac]">
              Sign In
            </button>
            <button className="font-inter lg:hidden font-semibold text-base leading-145 text-white py-[12px] px-6 bg-[#439cac] rounded-[10px]">
              Contact US
            </button>
          </ul>
          <div className="flex gap-3">
            <button className="font-inter hidden lg:block font-semibold text-base leading-145 text-[#439cac] py-[11px] px-8 border rounded-[10px] border-[#439cac]">
              Sign In
            </button>
            <button className="font-inter hidden lg:block font-semibold text-base leading-145 text-white py-[12px] px-6 bg-[#439cac] rounded-[10px]">
              Contact US
            </button>
          </div>
          <button
            className="lg:hidden z-50 transition-all duration-300 ease-in-out sm:mr-[25px]"
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? (
              <div className="z-20 relative">
                <span className="flex bg-black absolute rounded-3xl -left-7 duration-300 top-1 rotate-45 h-[3px] w-6"></span>
                <span className="flex bg-black absolute rounded-3xl -left-7 duration-300 -rotate-45 h-[3px] w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative flex flex-col justify-end items-end">
                <span className="flex bg-black h-[3px] rounded-3xl duration-300 w-6"></span>
                <span className="flex bg-black h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
                <span className="flex bg-black h-[3px] rounded-3xl duration-300 w-6 mt-1"></span>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;