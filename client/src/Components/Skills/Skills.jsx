import React from "react";
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import SkillsContainer from './SkillsContainer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faCoins } from "@fortawesome/free-solid-svg-icons";
import ProficiencyContainer from './ProficienyContainer'

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
    <div className="flex flex-col w-full h-full p-4">
      <div className="flex justify-center py-4 text-4xl font-extrabold">
        SKILLS &nbsp;
        <FontAwesomeIcon icon={faBolt} className="text-[#2563eb]" />
      </div>
      <div className="flex flex-col">
        <div className="containerSkills" ref={containerSkills}></div>
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex justify-center text-2xl font-normal text-gray-500">
              Worked with
            </div>
            <SkillsContainer />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-start text-2xl font-normal text-gray-500">
              Proficient in:
            </div>
            <ProficiencyContainer />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-center py-4 text-2xl font-bold">
          OTHER SKILLS &nbsp;
          <FontAwesomeIcon icon={faCoins} className="text-[#2563eb]" />
        </div>
        <div className="flex flex-col">
          <div className="otherSkillsContainer" ref={otherSkillsContainer}></div>
          <div>Content</div>
        </div>
      </div>
    </div>
  );
}
