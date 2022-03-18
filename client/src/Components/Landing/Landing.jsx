import React from "react";
import Lottie from "lottie-web";
import SocialContainer from "./SocialContainer";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import resumePdf from "./Shruti_Bhateja_Resume.pdf";

export default function Landing() {
  useEffect(() => {
    Aos.init({
      easing: "ease-in-sine",
      duration: 1000,
      startEvent: "load",
      once: true,
    });
  }, []);

  const [showTop, setshowTop] = useState(false);
  const rocketRef = useRef(null);

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 80) {
        setshowTop(true);
      } else {
        setshowTop(false);
      }
    });
  });

  useEffect(() => {
    Lottie.loadAnimation({
      container: rocketRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../Animations/rocket_top.json"),
    });
    console.log("Rendered");
  }, [showTop]);

  // useEffect(() => {

  // })

  return (
    <>
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
          <div className="mt-4 text-2xl lg:text-3xl group">
            I am an adventurous soul with a creative bent. I am a tech geek, An
            Android Developer who loves solving real-life challenges and is on
            track to constant improvement. I love writing content that makes a
            difference. <br />
            I'm happy you stopped by!{" "}
            <span className="group-hover:animate-pulse group-hover:text-[#2563eb] text-white duration-500">
              Let's build something amazing together.
            </span>
          </div>
          <SocialContainer />
          <div className="flex flex-col items-center justify-center pb-8 mt-8 text-lg lg:mt-0 xs:justify-around xs:max-w-lg xs:flex-row md:flex-col lg:flex-row 2xl:text-xl xl:max-w-xl">
            <div className="group">
              <button
                className="relative overflow-hidden px-6 py-2 max-w-xs xl:py-3 bg-[#2563eb] transform  rounded-lg before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-indigo-500 before:transition duration-1000 before:duration-1000 before:-z-10 before:-translate-x-full group-hover:before:translate-x-0 group-hover:-translate-y-2 group-hover:scale-110"
                onClick={scrollToBottom}
              >
                CONTACT ME
              </button>
            </div>
            <div className="group">
              <a href={resumePdf} download="Shruti_Bhateja_Resume">
                <button
                  className="relative overflow-hidden px-6 py-2 xl:py-3 mt-4 max-w-xs xs:mt-0 md:mt-4 lg:mt-0 bg-[#2563eb] rounded-lg transform before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-indigo-500 before:transition duration-1000 before:duration-1000 before:-z-10 before:-translate-x-full group-hover:before:translate-x-0 group-hover:-translate-y-2 group-hover:scale-110"
                  title="Click to download resume"
                >
                  RESUME (OPEN TO WORK)
                </button>
              </a>
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
      {showTop ? (
        <div
          className="fixed bottom-0 right-0 -translate-x-4 -translate-y-4 max-w-[3rem] md:max-w-[5rem] md:-translate-x-8 md:-translate-y-8 cursor-pointer z-50"
          title="Scroll to top"
          onClick={scrollToTop}
          ref={rocketRef}
        ></div>
      ) : (
        <></>
      )}
    </>
  );
}
