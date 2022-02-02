import React, { useState } from 'react';
import { ReactComponent as HtmlIcon } from '../assets/html.svg';
import { ReactComponent as CSSIcon } from '../assets/css.svg';
import { ReactComponent as JsIcon } from '../assets/js.svg';
import { ReactComponent as ReactIcon } from '../assets/react.svg';
import { ReactComponent as TwIcon } from '../assets/tailwind.svg';
import { ReactComponent as GitIcon } from '../assets/git.svg';
import { ReactComponent as FbIcon } from '../assets/firebase.svg';
import { ReactComponent as ReduxIcon } from '../assets/redux.svg';
import { FaBootstrap } from 'react-icons/fa';

const About = () => {
  const [onHover, setOnHover] = useState(false);
  const [htmlOver, setHtmlOver] = useState(false);
  const [cssOver, setcssOver] = useState(false);
  const [jsOver, setjsOver] = useState(false);
  const [reactOver, setreactOver] = useState(false);
  const [reduxOver, setreduxOver] = useState(false);
  const [bootstrapOver, setbootstrapOver] = useState(false);
  const [tailwindOver, settailwindOver] = useState(false);
  const [gitOver, setgitOver] = useState(false);
  const [firebaseOver, setfirebaseOver] = useState(false);

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
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-y-8 mt-4 py-4 rounded-lg border-b-8 border-neutral-400'>
          {' '}
          <div className='flex flex-col items-center cursor-pointer relative'>
            <HtmlIcon
              className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500 '
              onMouseEnter={() => setHtmlOver(true)}
              onMouseLeave={() => setHtmlOver(false)}
            />
            {htmlOver && (
              <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
                HTML
              </p>
            )}
          </div>
          <div className='flex flex-col items-center cursor-pointer  relative'>
            <CSSIcon
              className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500 '
              onMouseEnter={() => setcssOver(true)}
              onMouseLeave={() => setcssOver(false)}
            />
            {cssOver && (
              <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
                CSS
              </p>
            )}
          </div>
          <div className='flex flex-col items-center cursor-pointer relative'>
            <JsIcon
              className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500 '
              onMouseEnter={() => setjsOver(true)}
              onMouseLeave={() => setjsOver(false)}
            />
            {jsOver && (
              <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
                JavaScript
              </p>
            )}
          </div>
          <div className='flex flex-col items-center cursor-pointer relative'>
            <ReactIcon
              className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500 '
              onMouseEnter={() => setreactOver(true)}
              onMouseLeave={() => setreactOver(false)}
            />
            {reactOver && (
              <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
                ReactJS
              </p>
            )}
          </div>
          <div className='flex flex-col items-center cursor-pointer relative'>
            <ReduxIcon
              className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500 '
              onMouseEnter={() => setreduxOver(true)}
              onMouseLeave={() => setreduxOver(false)}
            />
            {reduxOver && (
              <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
                Redux
              </p>
            )}
          </div>
          <div className='flex flex-col items-center cursor-pointer relative'>
            <FaBootstrap
              className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500 text-purple-700'
              onMouseEnter={() => setbootstrapOver(true)}
              onMouseLeave={() => setbootstrapOver(false)}
            />
            {bootstrapOver && (
              <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
                Bootstrap
              </p>
            )}
          </div>
          <div className='flex flex-col items-center cursor-pointer relative'>
            <TwIcon
              className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500 text-purple-700'
              onMouseEnter={() => settailwindOver(true)}
              onMouseLeave={() => settailwindOver(false)}
            />
            {tailwindOver && (
              <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
                TailwindCSS
              </p>
            )}
          </div>
          <div className='flex flex-col items-center cursor-pointer relative'>
            <FbIcon
              className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500 text-purple-700'
              onMouseEnter={() => setfirebaseOver(true)}
              onMouseLeave={() => setfirebaseOver(false)}
            />
            {firebaseOver && (
              <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
                Firebase
              </p>
            )}
          </div>
          <div className='flex flex-col items-center cursor-pointer relative'>
            <GitIcon
              className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500 text-purple-700'
              onMouseEnter={() => setgitOver(true)}
              onMouseLeave={() => setgitOver(false)}
            />
            {gitOver && (
              <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
                Git/Github
              </p>
            )}
          </div>
        </div>
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
