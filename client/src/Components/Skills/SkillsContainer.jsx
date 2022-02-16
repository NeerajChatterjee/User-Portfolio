import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faCuttlefish,
  faGit,
  faJava,
  faJs,
  faJsSquare,
  faPython,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons";

export default function SkillsContainer() {
  return (
    <div className="py-8 select-none flex flex-col xl:grid xl:grid-cols-2">
      <div className="flex flex-row justify-around">
        <div className="flex flex-col items-center text-gray-500 hover:text-[#2563eb]">
          <FontAwesomeIcon icon={faAndroid} className="text-4xl " />
          <p>Android</p>
        </div>
        <div className="flex flex-col items-center text-gray-500 hover:text-[#2563eb]">
          <FontAwesomeIcon icon={faCuttlefish} className="text-4xl" />
          <p>C/C++</p>
        </div>
        <div className="flex flex-col items-center text-gray-500 hover:text-[#2563eb]">
          <FontAwesomeIcon icon={faJava} className="text-4xl" />
          <p>Java</p>
        </div>
        <div className="flex flex-col items-center text-gray-500 hover:text-[#2563eb]">
          <FontAwesomeIcon icon={faWordpress} className="text-4xl" />
          <p>Wordpress</p>
        </div>
      </div>
      <div className="flex flex-row justify-around pt-8 xl:pt-0">
        <div className="flex flex-col items-center text-gray-500 hover:text-[#2563eb]">
          <FontAwesomeIcon icon={faGit} className="text-4xl" />
          <p>Git</p>
        </div>
        <div className="flex flex-col items-center text-gray-500 hover:text-[#2563eb]">
          <FontAwesomeIcon icon={faPython} className="text-4xl" />
          <p>Python</p>
        </div>
        <div className="flex flex-col items-center text-gray-500 hover:text-[#2563eb]">
          <FontAwesomeIcon icon={faReact} className="text-4xl" />
          <p>React</p>
        </div>
        <div className="flex flex-col items-center text-gray-500 hover:text-[#2563eb]">
          <FontAwesomeIcon icon={faJsSquare} className="text-4xl" />
          <p>JavaScript</p>
        </div>
      </div>
    </div>
  );
}
