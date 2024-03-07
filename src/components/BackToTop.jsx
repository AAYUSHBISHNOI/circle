import React, { useState, useEffect } from 'react';
import backtotop from "../assets/image/svg/back-to-top.svg";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-2 right-2 z-20 px-2 border border-white py-2 bg-[#4499ad] text-white rounded-full ease-in-out transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transition: 'transform 0.3s', visibility: isVisible ? 'visible' : 'hidden' }}
      >
       <img src={backtotop} alt="back-to-top" />
      </button>
    </>
  );
};

export default BackToTop;
