import React from "react";

import ProjectsList from "../component/ProjectsList";

const Projects = () => {
  return (
    <>
      {" "}
      <div id='projects' className='py-6 px-4'>
        <header className='mb-4'>
          <h1 className='text-4xl font-bold'>My Projects</h1>
        </header>
        <main className='flex flex-col gap-4'>
          <ProjectsList />

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
