import React, { useState } from "react";
import { Joinaeroplane, Joinship } from "./common/Icons";

const Join = () => {
  const [email, setEmail] = useState(""); // State for storing the email input

  // handleSubmit is triggered when the form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    console.log("Submitting email:", email); // Logs the current email state

    setEmail(""); // Resets the email input field after submission
  };

  // Render the Join section with form
  return (
    <div className=" max-w-[1920px] mx-auto">
      <div className="max-w-[1140px] mx-auto px-[20px] xl:px-0 py-10 md:py-[60px] pt-[90px] xl:pt-[115px] flex justify-center">
        <div
          className="bg-[#4499AD] w-[802px] h-[280px] md:h-[336px] rounded-[30px] py-4 md:py-[58px] px-5 md:px-[168px] flex justify-center flex-col items-center relative"
          data-aos="zoom-in"
        >
          <Joinship />
          <Joinaeroplane />
          <h2 className="font-inter font-bold text-5xl text-white leading-130">
            Join Us
          </h2>
          <p className="max-w-[466px] md:max-w-[570px] lg:max-w-[466px] font-inter font-normal text-base leading-150 text-center text-[#b4d6de] md:mt-4">
            Lorem Ipsum Dolor Sit Amet Consectetur. In Ultrices Orci Urna Eget
            Fringilla Nisl Duis Lectus. Tincidunt Pretium Odio
          </p>
          {/* form-input */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-[10px] flex items-center py-2 ps-2 md:ps-4 justify-between pe-2 mt-4 lg:mt-8 z-10"
          >
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent !text-[#666666] font-inter text-base leading-150 outline-none w-[60%] md:w-[57%]"
            />
            <div className=" flex justify-end items-end">
              <button
                type="submit"
                className="font-inter font-semibold text-sm md:text-base leading-121 text-white bg-[#4499ad] hover:bg-[#bbbbba] duration-300 ease-in-out py-[12px] px-[18px] md:px-[24px] rounded-[10px]"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Join;
