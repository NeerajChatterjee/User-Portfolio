import React from "react";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import SkillsContainer from './SkillsContainer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCoins } from "@fortawesome/free-solid-svg-icons";
import ProficiencyContainer from './ProficienyContainer'
import OtherSkillsContainer from "./OtherSkillsContainer";

export default function Skills() {

  const containerSkills = useRef(null)
  const otherSkillsContainer = useRef(null);

  useEffect(() => {
    Lottie.destroy()
    Lottie.loadAnimation({
      container: containerSkills.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require('../../Animations/skills_computer.json'),
    })
    console.log("Rendered")

    Lottie.loadAnimation({
      container: otherSkillsContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Animations/other_skills.json"),
    });
    console.log("Rendered");
  }, [])

  return (
    <div className="flex flex-col w-full h-full p-4 sm:p-8">
      <div className="flex justify-center py-4 text-4xl font-extrabold sm:py-8 sm:text-5xl lg:text-6xl">
        SKILLS &nbsp;
        <FontAwesomeIcon icon={faBolt} className="text-[#2563eb] animate-pulse" />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2 lg:mt-16">
        <div
          className="max-w-xl m-auto containerSkills md:m-0 xl:max-w-6xl"
          ref={containerSkills}
        ></div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col">
            <div className="flex justify-center text-2xl font-normal text-gray-500 sm:text-3xl xl:text-4xl">
              Worked with
            </div>
            <SkillsContainer />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start text-2xl font-normal text-gray-500 sm:text-3xl xl:text-4xl">
              Proficient in:
            </div>
            <ProficiencyContainer />
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4 sm:mt-8 md:mt-12">
        <div className="flex justify-center py-4 text-2xl font-bold sm:text-3xl xl:text-4xl">
          OTHER SKILLS &nbsp;
          <FontAwesomeIcon icon={faCoins} className="text-[#2563eb]" />
        </div>
        <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-center">
          <div
            className="max-w-xl m-auto otherSkillsContainer md:m-0 xl:max-w-6xl"
            ref={otherSkillsContainer}
          ></div>
          <OtherSkillsContainer />
        </div>
      </div>
    </div>
  );
}
