import React, { useState } from "react";
import footer_logo from "../assets/image/svg/footer-logo.svg";
import { Facebook, Instagram, Linkedin, Twitter } from "./Icon";

const Footer = () => {
  // State hook for managing email input in the newsletter subscription form.
  const [email, setEmail] = useState("");

  // Function to handle form submission.
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submit action.

    console.log("Submitting email:", email); // Logs the email to the console for demonstration.

    setEmail(""); // Resets the email input field after submission.
  };

  // Get the current year for the copyright notice.
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-[#1D1C19] max-w-[1920px] mx-auto">
      <div className="max-w-[1140px] mx-auto px-[20px] xl:px-0 pt-10 md:pt-[60px]">
        {/* Flex container for layout adjustment. */}
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
            {/* Social media links. */}
            <div className="mt-2 md:mt-4 flex gap-4">
              <a
                className="footer-icon group"
                href="https://twitter.com/?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>
          {/* Navigation menu section with links. */}
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
          {/* Newsletter subscription form. */}
          <div className="lg:w-[35%] xl:w-[33%] mt-5 md:mt-8 lg:mt-0">
            <ul>
              <li className="font-inter font-semibold text-base text-white leading-121">
                Subscribe Us
              </li>
            </ul>
            <p className="max-w-[336px] font-inter font-normal text-base leading-150 text-lightwhite mt-2 md:mt-4">
              Lorem ipsum dolor sit amet consectetur. Diam pellentesque nulla
              viverra.
            </p>
            {/* Subscription form */}
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
        {/* Footer divider style */}
        <div className="w-full h-[2px] bg-gradient-to-r from-white/0 to-white/1 via-white/30 relative opacity-50"></div>
        {/* Copyright notice */}
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
