import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFilePdf } from 'react-icons/fa';
import ProfilePic from '../assets/profilepic.jpg';
import Projects from './Projects';
import { motion, AnimatePresence } from 'framer-motion';

import About from './About';
import BackToTop from '../component/BackToTop';

const Home = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div className='relative'>
      <BackToTop />
      {/* HOME */}
      <main
        id='home'
        className='py-6 px-4 h-screen flex flex-col relative justify-center'
      >
        <AnimatePresence>
          {' '}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {' '}
            <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between'>
              <div className='font-semibold text-6xl order-2 md:order-1 lg:order-1 self-start'>
                <h1 className='text-8xl'>Althaf</h1>
                <h1 className='text-5xl'> Demiandra A</h1>
              </div>

              <img
                className='rounded-full object-cover object-top w-36 h-36 self-center order-1 md:order-2 lg:order-2 shadow-md'
                src={ProfilePic}
                alt='profile pic'
              />
            </div>
            <p>Front-End Engineer | Bogor, West Java</p>
            <div className='h-1 w-full bg-neutral-300 opacity-50 my-2'></div>
            <div className='flex gap-4'>
              <a
                href='https://github.com/althafdaa'
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub className='hover:text-neutral-800 text-4xl' />
              </a>
              <a
                href='https://www.linkedin.com/in/althafdaa/'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <FaLinkedin className='hover:text-neutral-800 text-4xl' />
              </a>
              <a
                href='https://docs.google.com/document/d/1iMPb6paG3xid7KET3WGMd85zwgLgaUj_w8vE2KejF0c/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                <FaFilePdf className='hover:text-neutral-800 text-4xl' />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className='py-4 absolute bottom-10 place-self-center'>
          <a
            className='flex items-center gap-2'
            href='#about'
            onMouseEnter={() => setOnHover(true)}
            onMouseLeave={() => setOnHover(false)}
          >
            <div className='px-2 py-3 border-2 border-black'>
              <div className='w-2 h-2 bg-black rounded-full'></div>
            </div>
            {onHover && <p>About Me</p>}
          </a>
        </div>
      </main>

      {/* ABOUT */}
      <About />

      {/* PROJECTS */}
      <Projects />
    </div>
  );
};

export default Home;
