import React, { useState } from 'react';
import kosanImg from '../assets/kosan.png';
import devfinderImg from '../assets/devfinder.png';
import suitImg from '../assets/suit.png';
import kohoImg from '../assets/koho.png';
import crudImg from '../assets/crud.png';
import personalImg from '../assets/personal.png';

const Projects = () => {
  const [personalOver, setpersonalOver] = useState(false);
  const [kosanOver, setkosanOver] = useState(false);
  const [finderOver, setfinderOver] = useState(false);
  const [suitOver, setsuitOver] = useState(false);
  const [kohoOver, setkohoOver] = useState(false);
  const [crudOver, setcrudOver] = useState(false);
  return (
    <>
      {' '}
      <div id='projects' className='py-6 px-4'>
        <header className='mb-4'>
          <h1 className='text-4xl font-bold'>My Projects</h1>
        </header>
        <main className='flex flex-col gap-4'>
          {/* PROJECT1 */}
          <div
            className='w-full h-80 relative shadow-lg'
            onMouseEnter={() => setpersonalOver(true)}
            onMouseLeave={() => setpersonalOver(false)}
          >
            <img
              className='w-full h-full object-cover'
              src={personalImg}
              alt='gambar'
            />
            {/* OVERLAY */}
            {personalOver && (
              <div
                className={`absolute flex flex-col inset-0 hover:bg-neutral-900/90 px-4 items-center justify-center  duration-500`}
              >
                <div className='text-white lg:w-1/2'>
                  <h2 className='font-semibold mb-2'>This Personal Website</h2>
                  <p className='text-sm'>My personal portofolio website</p>
                  <p className='text-sm my-2'>
                    Tech Stack: ReactJs & TailwindCss
                  </p>
                  <div>
                    <a
                      href='https://github.com/althafdaa/kosan-app-react'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black rounded-xl shadow-lg mr-2'
                    >
                      View Code
                    </a>
                    <a
                      href='https://kosan-app.netlify.app/'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black  rounded-xl shadow-lg'
                    >
                      View Website
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* PROJECT2 */}
          <div
            className='w-full h-80 relative shadow-lg'
            onMouseEnter={() => setkosanOver(true)}
            onMouseLeave={() => setkosanOver(false)}
          >
            <img
              className='w-full h-full object-cover'
              src={kosanImg}
              alt='gambar'
            />
            {/* OVERLAY */}
            {kosanOver && (
              <div
                className={`absolute flex flex-col inset-0 hover:bg-neutral-900/90 px-4 items-center justify-center  duration-500`}
              >
                <div className='text-white lg:w-1/2'>
                  <h2 className='font-semibold mb-2'>Kosan App</h2>
                  <p className='text-sm'>
                    Fully functioned, mobile first, fullstack application that
                    heavily inspired by MamiKos. A web-app to start renting your
                    properties.
                  </p>
                  <p className='text-sm my-2'>
                    Tech Stack: ReactJs, Redux, TailwindCss, Firebase
                  </p>
                  <div>
                    <a
                      href='https://github.com/althafdaa/kosan-app-react'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black rounded-xl shadow-lg mr-2'
                    >
                      View Code
                    </a>
                    <a
                      href='https://kosan-app.netlify.app/'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black  rounded-xl shadow-lg'
                    >
                      View Website
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* PROJECT3 */}
          <div
            className='w-full h-80 relative shadow-lg'
            onMouseEnter={() => setfinderOver(true)}
            onMouseLeave={() => setfinderOver(false)}
          >
            <img
              className='w-full h-full object-cover'
              src={devfinderImg}
              alt='gambar'
            />
            {/* OVERLAY */}
            {finderOver && (
              <div
                className={`absolute flex flex-col inset-0 hover:bg-neutral-900/90 px-4 items-center justify-center  duration-500`}
              >
                <div className='text-white lg:w-1/2'>
                  <h2 className='font-semibold mb-2'>DevFinder App</h2>
                  <p className='text-sm'>
                    App that utilize GithubAPI that able to search github
                    profile and shows their profile details
                  </p>
                  <p className='text-sm my-2'>
                    Tech Stack: ReactJs, TailwindCss, DaisyUI
                  </p>
                  <div>
                    <a
                      href='https://github.com/althafdaa/devfinder-react'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black rounded-xl shadow-lg mr-2'
                    >
                      View Code
                    </a>
                    <a
                      href='https://app-devfinder.netlify.app/'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black  rounded-xl shadow-lg'
                    >
                      View Website
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* PROJECT4 */}
          <div
            className='w-full h-80 relative shadow-lg'
            onMouseEnter={() => setsuitOver(true)}
            onMouseLeave={() => setsuitOver(false)}
          >
            <img
              className='w-full h-full object-cover'
              src={suitImg}
              alt='gambar'
            />
            {/* OVERLAY */}
            {suitOver && (
              <div
                className={`absolute flex flex-col inset-0 hover:bg-neutral-900/90 px-4 items-center justify-center  duration-500`}
              >
                <div className='text-white lg:w-1/2'>
                  <h2 className='font-semibold mb-2'>Suit Game</h2>
                  <p className='text-sm'>
                    Challenge from Binar Academy chapter 4 to make Rock Scissor
                    Game with Vanilla Javascript
                  </p>
                  <p className='text-sm my-2'>
                    Tech Stack: JavaScript OOP, HTML, CSS
                  </p>
                  <div>
                    <a
                      href='https://github.com/althafdaa/binar-4-suit'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black rounded-xl shadow-lg mr-2'
                    >
                      View Code
                    </a>
                    <a
                      href='https://suit-challenge.netlify.app/game.html'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black  rounded-xl shadow-lg'
                    >
                      View Website
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* PROJECT5 */}
          <div
            className='w-full h-80 relative shadow-lg'
            onMouseEnter={() => setcrudOver(true)}
            onMouseLeave={() => setcrudOver(false)}
          >
            <img
              className='w-full h-full object-cover'
              src={crudImg}
              alt='gambar'
            />
            {/* OVERLAY */}
            {crudOver && (
              <div
                className={`absolute flex flex-col inset-0 hover:bg-neutral-900/90 px-4 items-center justify-center  duration-500`}
              >
                <div className='text-white lg:w-1/2'>
                  <h2 className='font-semibold mb-2'>Comment/Rating App</h2>
                  <p className='text-sm'>
                    Mimicing comment/rating feature on certain website. Capable
                    to CRUD (Create, Read, Update, Delete) to mock JSON Server
                    in the local db, please try it on your system
                  </p>
                  <p className='text-sm my-2'>Tech Stack: ReactJS, Bootstrap</p>
                  <div>
                    <a
                      href='https://github.com/althafdaa/crud-review-app-react'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black rounded-xl shadow-lg mr-2'
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* PROJECT6 */}

          <div
            className='w-full h-80 relative shadow-lg'
            onMouseEnter={() => setkohoOver(true)}
            onMouseLeave={() => setkohoOver(false)}
          >
            <img
              className='w-full h-full object-cover'
              src={kohoImg}
              alt='gambar'
            />
            {/* OVERLAY */}
            {kohoOver && (
              <div
                className={`absolute flex flex-col inset-0 hover:bg-neutral-900/90 px-4 items-center justify-center  duration-500`}
              >
                <div className='text-white lg:w-1/2'>
                  <h2 className='font-semibold mb-2'>Koho E-commerce</h2>
                  <p className='text-sm'>
                    Taking my university friend shop in{' '}
                    <a
                      href='https://www.tokopedia.com/koho'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Tokopedia
                    </a>{' '}
                    and make it to Single Page Application and able to take
                    order
                  </p>
                  <p className='text-sm my-2'>
                    Tech Stack: ReactJs, Bootstrap, Firebase
                  </p>
                  <div>
                    <a
                      href='https://github.com/althafdaa/koho-ecom'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black rounded-xl shadow-lg mr-2'
                    >
                      View Code
                    </a>
                    <a
                      href='https://koho-store.netlify.app/'
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black  rounded-xl shadow-lg'
                    >
                      View Website
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a
            className='self-center hover:text-blue-300'
            href='https://github.com/althafdaa'
            target='_blank'
            rel='noreferrer'
          >
            Check my github for other project
          </a>
        </main>
      </div>
    </>
  );
};

export default Projects;
