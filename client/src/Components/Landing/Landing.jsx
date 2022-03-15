import React from "react";
import SocialContainer from "./SocialContainer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Landing() {
  
  useEffect(() => {
    Aos.init({
      easing: "ease-in-sine",
      duration: 1000,
      startEvent: "load",
      once: true,
    });
  }, []);

  return (
    <div className="flex flex-col justify-around w-full h-full bg-[#111111] p-4 md:grid md:grid-cols-2">
      {/* <div className="" data-aos="fade-in"> */}
        <img
          src={process.env.PUBLIC_URL + "./images/Landing/Shruti_web.png"}
          alt="Profile picture"
          className="object-cover md:hidden rounded-xl"
        />
      {/* </div> */}
      <div
        className="flex flex-col justify-around mt-4 text-white"
        data-aos="fade-right"
      >
        <div className="text-3xl font-bold md:text-4xl lg:text-5xl 2xl:text-6xl">
          Hi, I'm{" "}
          <span className="text-[#2563eb] font-extrabold xl:font-[900]">
            Shruti Bhateja
          </span>{" "}
          <br /> a.k.a.{" "}
          <span className="text-[#2563eb] font-extrabold xl:font-[900]">
            ShrutisLegion
          </span>
        </div>
        <div className="mt-4 text-2xl lg:text-3xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga minus
          modi dolor qui tempora esse nihil nostrum! Inventore accusamus quis
          unde laboriosam necessitatibus expedita asperiores, cupiditate aut
          quae, blanditiis quibusdam.
        </div>
        <SocialContainer />
        <div className="flex flex-col items-center justify-center pb-8 mt-8 text-lg lg:mt-0 xs:justify-around xs:max-w-lg xs:flex-row md:flex-col lg:flex-row 2xl:text-xl xl:max-w-xl">
          <div className="group">
            <button className="relative overflow-hidden px-6 py-2 max-w-xs xl:py-3 bg-[#2563eb] transform  rounded-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-indigo-500 before:transition duration-1000 before:duration-1000 before:-z-10 before:-translate-x-full group-hover:before:translate-x-0 group-hover:-translate-y-2 group-hover:scale-110">
              CONTACT ME
            </button>
          </div>
          <div className="group">
            <button className="relative overflow-hidden px-6 py-2 xl:py-3 mt-4 max-w-xs xs:mt-0 md:mt-4 lg:mt-0 bg-[#2563eb] rounded-lg transform before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-indigo-500 before:transition duration-1000 before:duration-1000 before:-z-10 before:-translate-x-full group-hover:before:translate-x-0 group-hover:-translate-y-2 group-hover:scale-110">
              RESUME (OPEN TO WORK)
            </button>
          </div>
        </div>
      </div>
      <div
        className="items-center justify-around hidden w-full h-full md:flex md:pl-4 group"
        data-aos="fade-in"
      >
        <img
          src={process.env.PUBLIC_URL + "./images/Landing/Shruti_web.png"}
          alt="Profile picture"
          className="object-cover w-full max-w-xl h-[65%] group-hover:skew-y-6 grayscale group-hover:grayscale-0 transition duration-1000 rounded-xl group-hover:scale-90"
        />
      </div>
    </div>
  );
}
