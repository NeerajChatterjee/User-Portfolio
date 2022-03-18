import React from 'react'
import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import SocialContainer from '../Landing/SocialContainer'

export default function Footer() {

    const contactMail = useRef(null)

    useEffect(() => {
      Lottie.loadAnimation({
        container: contactMail.current,
        renderer: "svg",
        loop: true,
        autoplay: true,  
        animationData: require("../../Animations/contact_mail.json"),
      });
      console.log("Rendered");
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
    <div className="bg-[#111111]">
      <div className="flex flex-col-reverse gap-5 px-4 md:px-14 py-12 md:grid md:grid-cols-3 lg:mt-16 bg-[#111111] select-text justify-around">
        <div className="flex flex-col justify-center max-w-xl md:col-span-2 gap-5 mx-auto text-white">
          <div className="flex justify-center text-2xl font-bold md:text-3xl lg:text-4xl 2xl:text-5xl">
            CONTACT ME
          </div>
          <div
            className="flex justify-center text-sm md:text-lg"
            data-aos="slide-right"
          >
            IF YOU WANT TO HIRE ME OR HAVE ANY OTHER QUERIES, THEN KNOCK ME
            ANYTIME. I WILL TRY TO REPLY WITHIN 24 HOURS.
          </div>
          <div
            className="flex justify-center text-xl md:text-2xl"
            data-aos="slide-left"
          >
            shrutibhateja1803@gmail.com
          </div>
          <div className="pt-6 sm:pt-8" data-aos="fade">
            <SocialContainer />
          </div>
        </div>

        <div
          className="m-auto max-w-[16rem] md:col-span-1 md:max-w-xl contactMail md:m-0 xl:max-w-6xl"
          ref={contactMail}
          data-aos="zoom-in"
        ></div>
      </div>
      {/* <div
        className="text-white bg-[#111111] flex justify-center text-xl md:text-2xl lg:text-3xl 2xl:text-4xl pb-8"
      >
        THANK YOU ! SEE YA
      </div> */}
    </div>
  );
}