import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerHandler = () => {
    setHamburger((prev) => !prev);
  };

  return (
    <>
      <nav className='flex justify-between py-2 px-4 items-center rounded-md'>
        <Link to='/' className='font-bold text-3xl'>
          AD
        </Link>

        {/* HAMBURGER */}
        <div
          className='space-y-2 cursor-pointer hover:bg-neutral-300 p-2 duration-200 rounded-md md:hidden'
          onClick={hamburgerHandler}
        >
          <span className='block w-8 h-0.5 bg-gray-600 rounded-xl'></span>
          <span className='block w-8 h-0.5 bg-gray-600 rounded-xl'></span>
          <span className='block w-8 h-0.5 bg-gray-600 rounded-xl'></span>
        </div>

        <div className='hidden md:flex gap-4'>
          <div className='hover:bg-neutral-300 p-2 duration-200 rounded-md hover:font-semibold'>
            <a href='/'>Home</a>
          </div>
          <div className='hover:bg-neutral-300 p-2 duration-200 rounded-md hover:font-semibold'>
            <a href='#about'>About</a>
          </div>
          <div className='hover:bg-neutral-300 p-2 duration-200 rounded-md hover:font-semibold'>
            <a href='#projects'>Projects</a>
          </div>
          <div className='hover:bg-neutral-300 p-2 duration-200 rounded-md hover:font-semibold'>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
      </nav>
      {hamburger && (
        <AnimatePresence>
          {' '}
          {/* TRY TO CREATE MODAL FOR NAVBAR AND CONTACT */}
          <div className='py-2 px-6 sticky h-screen w-full overflow-y-hidden bg-neutral-200 transition-shadow flex flex-col items-center justify-center z-10'>
            <motion.div
              className='w-full'
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
            >
              <div className='w-full flex flex-col'>
                <button
                  className='text-3xl self-end'
                  onClick={() => setHamburger(false)}
                >
                  X
                </button>

                <div className='text-center space-y-4 w-1/2 self-center'>
                  <div
                    className='hover:bg-neutral-300 p-2 duration-200 rounded-md hover:font-semibold'
                    onClick={() => setHamburger(false)}
                  >
                    <a href='/'>Home</a>
                  </div>
                  <div
                    className='hover:bg-neutral-300 p-2 duration-200 rounded-md hover:font-semibold'
                    onClick={() => setHamburger(false)}
                  >
                    <a href='#about'>About</a>
                  </div>
                  <div
                    className='hover:bg-neutral-300 p-2 duration-200 rounded-md hover:font-semibold'
                    onClick={() => setHamburger(false)}
                  >
                    <a href='#projects'>Projects</a>
                  </div>
                  <div
                    className='hover:bg-neutral-300 p-2 duration-200 rounded-md hover:font-semibold'
                    onClick={() => setHamburger(false)}
                  >
                    <Link to='/contact'>Contact</Link>
                  </div>
                </div>
                <div className='h-1 w-full bg-neutral-300 opacity-50 mt-4'></div>
                <div className='flex justify-center gap-4 mt-4'>
                  <a
                    href='https://github.com/althafdaa'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaGithub className='hover:text-neutral-800' size={36} />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/althafdaa/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    {' '}
                    <FaLinkedin className='hover:text-neutral-800' size={36} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}
    </>
  );
};

export default Navbar;
