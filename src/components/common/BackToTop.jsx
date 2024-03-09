import React, { useState, useEffect } from 'react';
import backtotop from "../../assets/image/svg/back-to-top.svg";

const BackToTop = () => {
  // useState hook to manage the visibility state of the back-to-top button
  const [isVisible, setIsVisible] = useState(false);

  // useEffect hook to add side-effects in the component
  useEffect(() => {
    // Function to toggle the visibility of the back-to-top button based on scroll position
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true); // Show button if scrolled down more than 20px
      } else {
        setIsVisible(false); // Hide button otherwise
      }
    };

    // Adding an event listener for scroll events to toggle the button visibility
    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function to remove the event listener on component unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Function to scroll the window back to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Target scroll position
      behavior: 'smooth', // Smooth scroll behavior
    });
  };

  // Rendering the component
  return (
    <>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-20 px-2 border border-white py-2 bg-[#4499ad] text-white rounded-full ease-in-out transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transition: 'transform 0.3s', visibility: isVisible ? 'visible' : 'hidden' }}
      >
       <img src={backtotop} alt="back-to-top" />
      </button>
    </>
  );
};

export default BackToTop;
