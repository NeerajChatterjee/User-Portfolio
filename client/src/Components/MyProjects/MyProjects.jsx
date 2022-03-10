import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {useState, useEffect, useRef} from 'react'
import ProjectsData from "./MyProjectsData";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

function MyProjects() {

    const [count, setCount] = useState(0);

    useInterval(() => {
        if(count) setCount(0);
        else setCount(1);
        // console.log(count);
    }, 1000)
    

  return (
    <>
      <div className="px-10 py-10 mx-auto bg-gray-900 sm:p-12 md:p-20">
        <div className="flex items-center justify-center pb-12 text-4xl font-extrabold sm:pb-14 sm:text-5xl lg:pb-16 lg:text-6xl text-[#2563eb]">
          MY PROJECTS &nbsp;
          <FontAwesomeIcon
            icon={faFileCode}
            className={
              count
                ? "text-white duration-500 ease-in-out"
                : "text-[#2363eb] duration-500 ease-in-out"
            }
          />
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {ProjectsData.map((item, id) => (
            <div className="relative font-bold min-h-[24em] group rounded-tl-3xl rounded-br-3xl hover:border-dashed hover:border-2 hover:border-[#2563eb]">
              <div className="flex flex-col items-center justify-center w-full h-full group-hover:shadow-3xl">
                <img
                  src={item.imgsrc}
                  alt=""
                  className="absolute object-cover w-full h-full opacity-70 group-hover:opacity-90 rounded-tl-3xl rounded-br-3xl"
                />

                <div className="flex items-center justify-center delay-1000 transform group-hover:hidden">
                  <h2 className="px-2 text-2xl font-extrabold text-white xl:text-3xl">
                    {item.title}
                  </h2>
                </div>
                <div className="z-20 h-0 flex flex-col justify-around px-4 py-4 overflow-hidden duration-500 ease-linear bg-white opacity-0 group-hover:-translate-x-8 group-hover:border-[3px] group-hover:border-[#2563eb] group-hover:-translate-y-8 group-hover:h-full group-hover:opacity-100 rounded-tl-3xl rounded-br-3xl">
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="">
                      <span className="hidden xs:inline-block sm:hidden md:inline-block lg:hidden xl:inline-block">
                        Project under&nbsp;
                      </span>
                      {item.projectUnder}
                    </h2>
                    <h2 className="">&#40;{item.date}&#41;</h2>
                  </div>
                  <div className="">
                    <h2>TECH STACK:</h2>
                    <div className="flex flex-wrap text-sm gap-x-3 gap-y-2">
                      {item.techStack.map((tech, techId) => (
                        <div
                          key={techId}
                          className="px-6 py-1 bg-gray-300 rounded-full hover:bg-blue-200"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="py-2">
                    {item.desc.map((info, id) => (
                      <div className="flex hover:fill-[#FACA08]">
                        <span className="mr-2 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            height={16}
                            width={16}
                            className=""
                          >
                            <path d="M112.1 454.3c0 6.297 1.816 12.44 5.284 17.69l17.14 25.69c5.25 7.875 17.17 14.28 26.64 14.28h61.67c9.438 0 21.36-6.401 26.61-14.28l17.08-25.68c2.938-4.438 5.348-12.37 5.348-17.7L272 415.1h-160L112.1 454.3zM191.4 .0132C89.44 .3257 16 82.97 16 175.1c0 44.38 16.44 84.84 43.56 115.8c16.53 18.84 42.34 58.23 52.22 91.45c.0313 .25 .0938 .5166 .125 .7823h160.2c.0313-.2656 .0938-.5166 .125-.7823c9.875-33.22 35.69-72.61 52.22-91.45C351.6 260.8 368 220.4 368 175.1C368 78.61 288.9-.2837 191.4 .0132zM192 96.01c-44.13 0-80 35.89-80 79.1C112 184.8 104.8 192 96 192S80 184.8 80 176c0-61.76 50.25-111.1 112-111.1c8.844 0 16 7.159 16 16S200.8 96.01 192 96.01z" />
                          </svg>
                        </span>
                        <span>{info}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <a
                      href={item.linkToRepo}
                      target="_blank"
                      className="flex items-center justify-center px-8 py-1 text-sm bg-blue-200 w-fit hover:bg-blue-400 hover:shadow-2xl hover:shadow-blue-800 rounded-2xl hover:fill-white"
                    >
                      <span className="pr-2">LINK TO REPO</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height={16}
                        width={16}
                        viewBox="0 0 512 512"
                        className=""
                      >
                        <path d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="absolute h-0 overflow-hidden font-bold text-white duration-500 ease-linear opacity-0 -bottom-10 group-hover:bottom-0 group-hover:opacity-100 group-hover:h-fit">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyProjects;
