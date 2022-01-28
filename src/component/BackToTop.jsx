import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 1000) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-2 bottom-5 text-lg md:text-xl lg:text-2xl ${
        visible ? 'block' : 'hidden'
      }`}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
