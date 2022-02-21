import React, { useState } from "react";
import kosanImg from "../assets/kosan.png";
import devfinderImg from "../assets/devfinder.png";
import suitImg from "../assets/suit.png";
import personalImg from "../assets/personal.png";
import bookuImg from "./../assets/booku.png";
import todoImg from "./../assets/todo.png";

const projects = [
  {
    id: 1,
    name: "Booku by SejutaCita",
    desc: "Assignment Test for SejutaCita Frontend Engineer Role, given 2 APIS for books and books category asked to design and create book store web app with certain feature like search bar, category page, pagination",
    stack: "ReactJs, Redux, React-Router, TailwindCSS",
    img: bookuImg,
    githubURL: "https://github.com/althafdaa/sejutacita-reactjs",
    URL: null,
  },
  {
    id: 2,
    name: "This Personal Website",
    desc: "My personal portofolio website",
    stack: "ReactJs & TailwindCs",
    img: personalImg,
    githubURL: "https://github.com/althafdaa/personal-website",
    URL: "https://althafdaa.netlify.app/",
  },
  {
    id: 3,
    name: "Kosan App",
    desc: "Fully functioned, mobile first, fullstack application that heavily inspired by MamiKos. A web-app to start renting your properties",
    stack: "ReactJs, Redux, TailwindCss, Firebase",
    img: kosanImg,
    githubURL: "https://github.com/althafdaa/kosan-app-react",
    URL: "https://kosan-app.netlify.app//",
  },
  {
    id: 4,
    name: "To do list with React & Vue",
    desc: "Assignment test for Frontend Developer role in BonApp, created first with vue and recreate it with react. Both use json-server to create mock backend. It has CRUD, sorting, and searching feature",
    stack: "ReactJs || VueJs, Redux, TailwindCss, json-server",
    img: todoImg,
    githubURL: "https://github.com/althafdaa/bonapp-todo",
    URL: null,
  },
  {
    id: 5,
    name: "DevFinder App",
    desc: "App that utilize GithubAPI that able to search github profile and shows their profile details",
    stack: "ReactJs, TailwindCss, DaisyUI",
    img: devfinderImg,
    githubURL: "https://github.com/althafdaa/devfinder-react",
    URL: "https://app-devfinder.netlify.app/",
  },
  {
    id: 6,
    name: "Suit Game",
    desc: "Challenge from Binar Academy chapter 4 to make Rock Scissor Game with Vanilla Javascript",
    stack: "JavaScript OOP, HTML, CSS",
    img: suitImg,
    githubURL: "https://github.com/althafdaa/binar-4-suit",
    URL: "https://suit-challenge.netlify.app/game.html",
  },
];

const ProjectsList = () => {
  const [personalOver, setPersonalOver] = useState(null);
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          className='w-full h-80 relative shadow-lg'
          onMouseEnter={() => setPersonalOver(project.id)}
          onMouseLeave={() => setPersonalOver(null)}
        >
          <img
            className='w-full h-full object-cover'
            src={project.img}
            alt='gambar'
          />
          {/* OVERLAY */}
          {personalOver === project.id && (
            <div
              className={`absolute flex flex-col inset-0 hover:bg-neutral-900/90 px-4 items-center justify-center  duration-500`}
            >
              <div className='text-white lg:w-1/2'>
                <h2 className='font-semibold mb-2'>{project.name}</h2>
                <p className='text-sm'>{project.desc}</p>
                <p className='text-sm my-2'>Tech Stack: {project.stack}</p>
                <div>
                  <a
                    href={project.githubURL}
                    target='_blank'
                    rel='noreferrer'
                    className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black rounded-xl shadow-lg mr-2'
                  >
                    View Code
                  </a>
                  {project.URL && (
                    <a
                      href={project.URL}
                      target='_blank'
                      rel='noreferrer'
                      className='px-3 py-1 bg-neutral-50 hover:bg-neutral-200 text-black  rounded-xl shadow-lg'
                    >
                      View Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}{" "}
        </div>
      ))}
    </>
  );
};

export default ProjectsList;
