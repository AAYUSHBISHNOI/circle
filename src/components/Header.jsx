import React, { useState, useRef } from "react";
import heroimg from "../assets/image/webp/header-img.webp";
import elpise from "../assets/image/svg/main-elipse.svg";
import aeroplane from "../assets/image/svg/header-elpise.svg";
import { ChevronDownIcon, SearchIcon } from "@heroicons/react/solid";

const Header = () => {
  const options = ["Places", "Agra", "Jaipur", "Goa"];
  const [searchQuery, setSearchQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const selectRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search clicked");
    setSearchQuery("");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    if (!dropdownOpen) {
      selectRef.current.focus();
    }
  };

  const closeDropdowns = () => {
    setDropdownOpen(false);
  };

  return (
    <div className=" max-w-[1920px] mx-auto relative">
      <span>
        <svg
          className=" absolute top-[-15%] left-[-2%] w-[170px] h-[200px] md:left-0 md:top-[-9%] lg:top-[-15%] lg:left-[-6%] lg:w-[234px] lg:h-[254px] xl:left-[3%] 2xl:left-[15%]" 
          viewBox="0 0 238 254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M220.5 -52C253.333 30.3333 255.4 206.5 1 252.5"
            stroke="#F4EAE1"
            stroke-width="3"
          />
        </svg>
      </span>
    <img className=" absolute top-[-12%] left-0 md:left-[34%] md:top-[-8%] lg:left-[23%] lg:top-[-12%] xl:left-[30%]" src={aeroplane} alt="aeroplane-elipse" />
      <span>
        <svg
          className=" absolute right-0 bottom-[-2%] -z-10 "
          width="709"
          height="157"
          viewBox="0 0 709 157"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 26.9741C39.0628 -0.0309337 126.94 -29.2363 173.945 69.982C232.702 194.005 352.434 167.5 576.376 69.982C755.53 -8.03243 828.773 102.155 843 167"
            stroke="#CCD5D4"
            stroke-width="2"
          />
        </svg>
      </span>
      <img  className=" absolute hidden xl:block -z-10 h-[4375px] top-[85%] left-[-1%]" src={elpise} alt="main-elipse" />
      <div className="max-w-[1140px] mx- auto px-0 pt-10 md:pt-[60px] lg:pt-[63px] relative">
        <div className="md:flex flex-wrap lg:items-center xl:items-start">
          <div className="w-full lg:w-[60%] xl:w-[60%]" data-aos="fade-up">
            <img
              className="max-w-[300px] xmd:max-w-[550px] lg:max-w-[680px] xl:max-w-[949px] h-[270px] xmd:h-[450px] lg:h-[500px] xl:h-[629px]"
              src={heroimg}
              alt="expore-img"
            />
          </div>
          <div className="w-full lg:w-[40%] xl:w-[40%] mt-4 md:mt-6 lg:mt-0 px-[20px] xl:px-0 flex justify-center flex-col items-center" data-aos="fade-down">
            <div className="text-center xl:translate-x-[32.5%] 2xl:translate-x-[90%]">
              <p className="font-dancing font-bold text-6xl md:text-7xl xl:text-9xl text-[#4499AD] !leading-110 max-w-[491px] md:max-w-[728px] lg:max-w-[491px]">
                Time to <span className="xl:ml-12">Explore</span>
              </p>
              <p className="font-dancing font-bold text-4xl md:text-5xl xl:text-[64px] leading-121 text-[#DBBFA7] lg:mt-2 xl:mt-4 lg:max-w-[408px] xl:ml-10">
                Find yourDreams
              </p>
              <p className="font-inter font-medium text-base leading-150 text-[#4499AD] mt-3 lg:mt-4 max-w-[434px] md:max-w-[710px] lg:max-w-[434px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <form onSubmit={handleSearch} className=" bg-white">
                <div className="flex items-center justify-between border border-[#b5b3b4] rounded-xl ps-4 py-1 pe-1 w-[95%] mt-8">
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      setSearchQuery("");
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.3853 15.446C13.0375 16.5229 11.3284 17.0429 9.60922 16.8991C7.88999 16.7552 6.29108 15.9586 5.14088 14.6727C3.99068 13.3869 3.3765 11.7094 3.42449 9.9848C3.47248 8.26024 4.17898 6.6195 5.39891 5.39958C6.61883 4.17965 8.25956 3.47315 9.98413 3.42516C11.7087 3.37717 13.3862 3.99135 14.6721 5.14155C15.9579 6.29175 16.7546 7.89066 16.8984 9.60989C17.0422 11.3291 16.5222 13.0382 15.4453 14.386L20.6013 19.541C20.675 19.6097 20.7341 19.6925 20.7751 19.7845C20.8161 19.8765 20.8381 19.9758 20.8399 20.0765C20.8417 20.1772 20.8232 20.2772 20.7855 20.3706C20.7477 20.464 20.6916 20.5488 20.6204 20.62C20.5492 20.6913 20.4643 20.7474 20.3709 20.7851C20.2775 20.8228 20.1775 20.8414 20.0768 20.8396C19.9761 20.8378 19.8768 20.8158 19.7848 20.7748C19.6928 20.7338 19.61 20.6747 19.5413 20.601L14.3853 15.446ZM6.45933 13.884C5.72537 13.15 5.22549 12.2148 5.02284 11.1968C4.8202 10.1787 4.92391 9.12344 5.32084 8.1643C5.71778 7.20517 6.39014 6.38523 7.25295 5.8081C8.11575 5.23098 9.13027 4.92258 10.1683 4.92189C11.2063 4.92119 12.2213 5.22822 13.0848 5.80418C13.9484 6.38014 14.6219 7.19917 15.0201 8.15778C15.4183 9.11638 15.5235 10.1715 15.3222 11.1898C15.1209 12.2082 14.6223 13.144 13.8893 13.879L13.8843 13.884L13.8793 13.888C12.8944 14.8706 11.5598 15.4221 10.1685 15.4214C8.77725 15.4206 7.44318 14.8677 6.45933 13.884Z"
                        fill="#4499AD"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="outline-none ms-2 font-inter font-normal text-base leading-150 w-[50%] md:w-[80%]"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <span>
                    <svg
                      width="2"
                      height="26"
                      viewBox="0 0 2 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity="0.3"
                        d="M1 1L0.999999 25"
                        stroke="#090006"
                        stroke-linecap="round"
                      />
                    </svg>
                  </span>
                  <div className="relative" onClick={closeDropdowns}>
                    <div className="flex items-center gap-1 ms-1">
                      <select
                        ref={selectRef}
                        className={`outline-none font-inter font-normal text-base leading-150 text-[#6b666a] appearance-none ${
                          dropdownOpen ? "border-b border-[#4499AD]" : ""
                        }`}
                        style={{ paddingRight: "24px" }}
                      >
                        {options.map((option, index) => (
                          <option key={index}>{option}</option>
                        ))}
                      </select>
                      <svg
                        className="absolute right-0 top-1/2 transform h-6 w-6 -translate-y-1/2 pointer-events-none text-[#6b666a]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#4499AD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 9L12 15L6 9" />
                      </svg>
                    </div>
                    {dropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg border border-gray-200">
                        {options.map((option, index) => (
                          <div
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                              setSearchQuery(option);
                              setDropdownOpen(false);
                            }}
                          >
                            {option}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="font-poppins ml-2 font-semibold text-base leading-150 text-white bg-[#4499ad] hover:bg-[#bbbbba] duration-300 ease-in-out py-[14px] px-[28px] rounded-[10px]"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
