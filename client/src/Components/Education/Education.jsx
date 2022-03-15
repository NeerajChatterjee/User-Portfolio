import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import EducationData from "./EducationData";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Education() {
  
  useEffect(() => {
    Aos.init({
      duration: 1000,
      startEvent: "load",
      easing: "linear",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="flex flex-col py-16 transition duration-1000 transform sm:py-24">
        <div
          className="flex justify-center pb-8 text-4xl font-extrabold sm:text-5xl lg:text-6xl"
          data-aos="fade-up"
        >
          EDUCATION &nbsp;
          <FontAwesomeIcon
            icon={faGraduationCap}
            className="text-[#2563eb] animate-bounce "
          />
        </div>
        <div className="flex flex-col max-w-7xl" data-aos="zoom-in">
          {EducationData.map((data, idx) => {
            return (
              <div className="flex flex-col items-center py-5 text-gray-900 transition duration-1000 transform rounded-3xl lg:flex-row lg:justify-center 2xl:mt-12 lg:hover:translate-x-6 hover:shadow-xl">
                <div className="flex justify-center w-[40%] lg:w-fit">
                  <img
                    src={process.env.PUBLIC_URL + data.imgsrc}
                    alt="logo"
                    className="border-4 rounded-full shadow-lg hover:animate-pulse"
                  />
                </div>
                <div className="flex flex-col items-center justify-center w-[90%] max-w-xl pt-6 border-b-4 px sm:mb-8 lg:border-none lg:max-w-3xl hover:scale-105">
                  <h1 className="text-xl font-bold text-center lg:text-2xl">
                    {data.eName}
                  </h1>
                  <h3 className="pt-1 text-lg text-center lg:text-xl">
                    {data.course}
                  </h3>
                  <h3 className="pt-1 text-center lg:text-xl">
                    {data.duration}
                  </h3>
                  <h3 className="pt-1 mb-6 text-center lg:mb-0 lg:text-xl">
                    {data.location}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
