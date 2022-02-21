import React, { useState } from "react";

import LangTech from "../component/LangTech";

const About = () => {
  const [onHover, setOnHover] = useState(false);

  return (
    <div
      id='about'
      className='h-screen py-6 px-4 relative flex flex-col justify-between'
    >
      <header>
        <div className='mb-4'>
          <h1 className='text-4xl font-bold mb-2'>About Me</h1>
          <p>
            Hi my name is <span className='font-bold'>Althaf</span>
          </p>
          <p className='text-justify'>
            Im a Front-End Engineer and soon to be Fullstack Engineer with Binar
            Academy. Passionate in building beautiful web application user
            interface with good user experience.
          </p>
        </div>
      </header>
      <main>
        <h2 className='text-2xl font-semibold'>Languages and Technologies</h2>
        <LangTech />

        <p className='mt-4'>
          And <span className='font-semibold'>soon</span> with backend tech
          stack
        </p>
      </main>

      <div className='py-4 place-self-center'>
        <a
          className='flex items-center gap-2'
          href='#projects'
          onMouseEnter={() => setOnHover(true)}
          onMouseLeave={() => setOnHover(false)}
        >
          <div className='px-2 py-3 border-2 border-black'>
            <div className='w-2 h-2 bg-black rounded-full'></div>
          </div>
          {onHover && <p>Projects</p>}
        </a>
      </div>
    </div>
  );
};

export default About;
