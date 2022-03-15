import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import VanillaTilt from "vanilla-tilt";
import { useEffect } from "react";
import ExperienceData from "./ExperienceData";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
      max: 20,
      speed: 300,
      scale: 1.05,
      glare: true,
      perspective: 1000,
      transition: true,
      easing: "cubic-bezier(.17,.67,.83,.67)",
      "max-glare": 0.7,
      gyroscope: true,
      gyroscopeMinAngleX: -45,
      gyroscopeMaxAngleX: 45,
      gyroscopeMinAngleY: -45,
      gyroscopeMaxAngleY: 45,
    });
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-sine",
      startEvent: "load",
      once: true,
    });
  }, []);

  return (
    <div className="bg-blue-50">
      <div
        className="flex justify-center py-4 text-4xl font-extrabold sm:py-8 sm:text-5xl lg:text-6xl"
        data-aos="zoom-in-up"
      >
        <FontAwesomeIcon
          icon={faUserTie}
          className="text-[#2563eb] animate-pulse"
        />
        &nbsp; EXPERIENCE
      </div>
      <div
        className="grid items-center justify-center grid-cols-1 gap-12 px-12 py-10 sm:grid-cols-2 lg:grid-cols-3"
        data-aos="flip-down"
      >
        {ExperienceData.map((data, id) => (
          <div
            key={id}
            className="flex flex-col text-center bg-white tilt-card rounded-tl-3xl rounded-br-3xl hover:shadow-[#2563eb] hover:bg-[#2563eb] hover:text-white"
          >
            <div className="flex flex-col px-8 py-12">
              <h3 className="text-xl font-extrabold tilt-title hover-title md:text-2xl">
                {data.title}
              </h3>
              <img
                src={data.imgsrc}
                alt="icon"
                className="z-10 w-16 h-16 mx-auto my-4 rounded-full tilt-icon md:w-24 md:h-24"
              />
              <div className="flex flex-col justify-between mt-1 tilt-description">
                <div className="font-bold text-md hover-desc md:text-lg lg:text-xl">
                  {data.pos}
                </div>
                <div className="text-sm font-normal text-center hover-desc md:text-md lg:text-lg">
                  {data.date}
                </div>
                <div className="pt-8 text-sm font-normal text-center hover-desc md:text-md lg:text-lg">
                  {data.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
