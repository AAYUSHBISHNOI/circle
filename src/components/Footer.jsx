import React, { useState } from "react";
import footer_logo from "../assets/image/svg/footer-logo.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Submitting email:", email);

    setEmail("");
  };
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-[#1D1C19] max-w-[1920px] mx-auto">
      <div className="max-w-[1140px] mx-auto px-[20px] xl:px-0 pt-10 md:pt-[60px]">
        <div className="flex flex-wrap justify-between pb-8">
          <div className="lg:w-[30%] xl:w-[28%]">
            <a href="/">
              <img src={footer_logo} alt="footer-logo" />
            </a>
            <p className="max-w-[297px] text-lightwhite font-inter font-normal text-base leading-150 mt-4">
              Lorem ipsum dolor sit amet consectetur. Diam pellentesque nulla
              viverra.
            </p>
            <p className="text-white font-inter font-semibold text-base leading-121 mt-3 md:mt-8">
              Follow Us On
            </p>
            <div className="mt-2 md:mt-4 flex gap-4">
              <a
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className=" footer-icon duration-300 ease-in-out"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 2C7.71652 2 1 8.71652 1 17C1 25.2835 7.71652 32 16 32C24.2835 32 31 25.2835 31 17C31 8.71652 24.2835 2 16 2ZM23.2087 13.3069C23.2187 13.4643 23.2187 13.6283 23.2187 13.7891C23.2187 18.7042 19.4754 24.3661 12.635 24.3661C10.5257 24.3661 8.57031 23.7533 6.92299 22.6987C7.22433 22.7321 7.51228 22.7455 7.82031 22.7455C9.56138 22.7455 11.1618 22.1562 12.4375 21.1585C10.8036 21.125 9.4308 20.0536 8.96205 18.5804C9.5346 18.6641 10.0502 18.6641 10.6395 18.5134C9.79819 18.3425 9.04199 17.8855 8.49938 17.2203C7.95678 16.555 7.66123 15.7223 7.66295 14.8638V14.817C8.15513 15.0949 8.73438 15.2656 9.3404 15.2891C8.83095 14.9495 8.41314 14.4895 8.12403 13.9499C7.83493 13.4102 7.68345 12.8075 7.68304 12.1953C7.68304 11.5022 7.86384 10.8694 8.18862 10.3203C9.12244 11.4699 10.2877 12.4101 11.6087 13.0798C12.9297 13.7495 14.3768 14.1338 15.856 14.2076C15.3304 11.6797 17.2188 9.63393 19.4888 9.63393C20.5603 9.63393 21.5246 10.0826 22.2042 10.8058C23.0446 10.6484 23.8482 10.3337 24.5647 9.91183C24.2868 10.7723 23.7042 11.4989 22.9308 11.9576C23.6808 11.8772 24.404 11.6696 25.0737 11.3783C24.5681 12.1217 23.9353 12.7812 23.2087 13.3069Z"
                    fill="#4499AD"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className=" footer-icon duration-300 ease-in-out"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_1343)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 16.0893C0 24.044 5.77733 30.6587 13.3333 32V20.444H9.33333V16H13.3333V12.444C13.3333 8.444 15.9107 6.22267 19.556 6.22267C20.7107 6.22267 21.956 6.4 23.1107 6.57733V10.6667H21.0667C19.1107 10.6667 18.6667 11.644 18.6667 12.8893V16H22.9333L22.2227 20.444H18.6667V32C26.2227 30.6587 32 24.0453 32 16.0893C32 7.24 24.8 0 16 0C7.2 0 0 7.24 0 16.0893Z"
                      fill="#4499AD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_1343">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className=" footer-icon duration-300 ease-in-out"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_1345)">
                    <path
                      d="M16 0C7.16333 0 0 7.16333 0 16C0 24.8367 7.16333 32 16 32C24.8367 32 32 24.8367 32 16C32 7.16333 24.8367 0 16 0ZM12.0833 22.6317H8.84333V12.205H12.0833V22.6317ZM10.4433 10.925C9.42 10.925 8.75833 10.2 8.75833 9.30333C8.75833 8.38833 9.44 7.685 10.485 7.685C11.53 7.685 12.17 8.38833 12.19 9.30333C12.19 10.2 11.53 10.925 10.4433 10.925ZM23.9167 22.6317H20.6767V16.8533C20.6767 15.5083 20.2067 14.595 19.035 14.595C18.14 14.595 17.6083 15.2133 17.3733 15.8083C17.2867 16.02 17.265 16.32 17.265 16.6183V22.63H14.0233V15.53C14.0233 14.2283 13.9817 13.14 13.9383 12.2033H16.7533L16.9017 13.6517H16.9667C17.3933 12.9717 18.4383 11.9683 20.1867 11.9683C22.3183 11.9683 23.9167 13.3967 23.9167 16.4667V22.6317Z"
                      fill="#4499AD"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_1345">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className=" footer-icon duration-300 ease-in-out"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4955 10.8317C12.6495 10.8317 10.3269 13.1543 10.3269 16.0004C10.3269 18.8464 12.6495 21.1691 15.4955 21.1691C18.3416 21.1691 20.6642 18.8464 20.6642 16.0004C20.6642 13.1543 18.3416 10.8317 15.4955 10.8317ZM30.9977 16.0004C30.9977 13.86 31.017 11.739 30.8968 9.60256C30.7766 7.12097 30.2105 4.91857 28.3959 3.10391C26.5773 1.28538 24.3788 0.723146 21.8972 0.602944C19.7569 0.482742 17.6359 0.50213 15.4994 0.50213C13.359 0.50213 11.2381 0.482742 9.10158 0.602944C6.62 0.723146 4.41759 1.28926 2.60294 3.10391C0.784403 4.92245 0.222169 7.12097 0.101968 9.60256C-0.0182341 11.7429 0.00115333 13.8639 0.00115333 16.0004C0.00115333 18.1369 -0.0182341 20.2617 0.101968 22.3982C0.222169 24.8798 0.78828 27.0822 2.60294 28.8969C4.42147 30.7154 6.62 31.2776 9.10158 31.3978C11.2419 31.518 13.3629 31.4986 15.4994 31.4986C17.6398 31.4986 19.7607 31.518 21.8972 31.3978C24.3788 31.2776 26.5812 30.7115 28.3959 28.8969C30.2144 27.0783 30.7766 24.8798 30.8968 22.3982C31.0209 20.2617 30.9977 18.1407 30.9977 16.0004ZM15.4955 23.9531C11.0946 23.9531 7.54283 20.4013 7.54283 16.0004C7.54283 11.5995 11.0946 8.04769 15.4955 8.04769C19.8965 8.04769 23.4482 11.5995 23.4482 16.0004C23.4482 20.4013 19.8965 23.9531 15.4955 23.9531ZM23.7739 9.57929C22.7464 9.57929 21.9166 8.74951 21.9166 7.72198C21.9166 6.69445 22.7464 5.86467 23.7739 5.86467C24.8015 5.86467 25.6312 6.69445 25.6312 7.72198C25.6315 7.96597 25.5837 8.20763 25.4905 8.4331C25.3973 8.65858 25.2605 8.86345 25.0879 9.03598C24.9154 9.20851 24.7105 9.34531 24.4851 9.43853C24.2596 9.53176 24.0179 9.5796 23.7739 9.57929Z"
                    fill="#4499AD"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="lg:w-[15%] xl:w-[13%] mt-5 md:mt-0">
            <ul>
              <li className="font-inter font-semibold text-base text-white leading-121">
                Menu
              </li>
              <li className=" mt-2 md:mt-4">
                <a
                  href=""
                  className="text-lightwhite duration-300 hover:text-[#4499ad] font-inter font-normal text-base leading-150"
                >
                  How It Works
                </a>
              </li>
              <li className=" mt-2 md:mt-4">
                <a
                  href=""
                  className="text-lightwhite duration-300 hover:text-[#4499ad] font-inter font-normal text-base leading-150"
                >
                  Pricing
                </a>
              </li>
              <li className=" mt-2 md:mt-4">
                <a
                  href=""
                  className="text-lightwhite duration-300 hover:text-[#4499ad] font-inter font-normal text-base leading-150"
                >
                  Reviews
                </a>
              </li>
              <li className=" mt-2 md:mt-4">
                <a
                  href=""
                  className="text-lightwhite duration-300 hover:text-[#4499ad] font-inter font-normal text-base leading-150"
                >
                  Our Team
                </a>
              </li>
              <li className=" mt-2 md:mt-4">
                <a
                  href=""
                  className="text-lightwhite duration-300 hover:text-[#4499ad] font-inter font-normal text-base leading-150"
                >
                  FAQ’s
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-[20%] xl:w-[15%] mt-5 md:mt-0">
            <ul>
              <li className="font-inter font-semibold text-base text-white leading-121">
                Register
              </li>
              <li className=" mt-2 md:mt-4">
                <a
                  href=""
                  className="text-lightwhite duration-300 hover:text-[#4499ad] font-inter font-normal text-base leading-150"
                >
                  Contact Us
                </a>
              </li>
              <li className=" mt-2 md:mt-4">
                <a
                  href=""
                  className="text-lightwhite duration-300 hover:text-[#4499ad] font-inter font-normal text-base leading-150"
                >
                  Privacay and Policy
                </a>
              </li>
              <li className=" mt-2 md:mt-4">
                <a
                  href=""
                  className="text-lightwhite duration-300 hover:text-[#4499ad] font-inter font-normal text-base leading-150"
                >
                  Terms and Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="lg:w-[35%] xl:w-[33%] mt-5 md:mt-8 lg:mt-0">
            <ul>
              <li className="font-inter font-semibold text-base text-white leading-121">
                Subscribe Us
              </li>
            </ul>
            <p className="max-w-[336px] font-inter font-normal text-base leading-150 text-lightwhite ">
              Lorem ipsum dolor sit amet consectetur. Diam pellentesque nulla
              viverra.
            </p>
            <form
              onSubmit={handleSubmit}
              className="border rounded-[10px] border-[#61605e] flex items py-1 ps-2 md:ps-4 justify-between pe-1 mt-4 lg:mt-8"
            >
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-lightwhite font-inter text-base leading-150 outline-none w-[60%] md:w-[57%]"
              />
              <div className=" flex justify-end items-end">
                <button
                  type="submit"
                  className="font-inter font-semibold text-sm md:text-base leading-121 text-white bg-[#4499ad] hover:bg-[#bbbbba] duration-300 ease-in-out py-[12px] px-[18px] md:px-[24px] rounded-[10px]"
                >
                  Get Started
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-[2px] w-full linear-line"></div>
        <div className=" text-center py-4">
          <p className="font-inter text-base font-normal text-lightwhite leading-150">
            Copyright © {currentYear} Circle. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
