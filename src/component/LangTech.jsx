import React, { useState } from "react";
import iconHtml from "./../assets/html.svg";
import iconCss from "./../assets/css.svg";
import iconJs from "./../assets/js.svg";
import iconReact from "./../assets/react.svg";
import iconTw from "./../assets/tailwind.svg";
import iconNode from "./../assets/node.svg";
import iconEx from "./../assets/express.svg";
import iconGit from "./../assets/git.svg";
import iconFb from "./../assets/firebase.svg";
import iconRedux from "./../assets/redux.svg";

const techData = [
  {
    id: 1,
    tech: "HTML5",
    img: iconHtml,
  },
  {
    id: 2,
    tech: "CSS",
    img: iconCss,
  },
  {
    id: 3,
    tech: "JavaScript",
    img: iconJs,
  },
  {
    id: 4,
    tech: "ReactJs",
    img: iconReact,
  },
  {
    id: 5,
    tech: "Redux",
    img: iconRedux,
  },
  {
    id: 6,
    tech: "NodeJs",
    img: iconNode,
  },
  {
    id: 7,
    tech: "ExpressJs",
    img: iconEx,
  },
  {
    id: 8,
    tech: "Tailwind",
    img: iconTw,
  },
  {
    id: 9,
    tech: "Git",
    img: iconGit,
  },
  {
    id: 10,
    tech: "Firebase",
    img: iconFb,
  },
];

const LangTech = () => {
  const [onHover, setOnHover] = useState(null);

  return (
    <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-y-12 mt-4 pt-4 pb-8 rounded-lg border-b-8 border-neutral-400'>
      {techData.map((data) => (
        <div
          key={data.id}
          className='flex flex-col items-center cursor-pointer relative'
        >
          <img
            className='w-24 h-24 hover:scale-95 hover:opacity-75 duration-500'
            src={data.img}
            onMouseEnter={() => setOnHover(data.id)}
            onMouseLeave={() => setOnHover(null)}
            alt=''
          />

          {onHover === data.id && (
            <p className='bg-neutral-400 inline-block px-2 text-white mb-2 rounded-lg shadow font-semibold absolute -bottom-10'>
              {data.tech}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default LangTech;
