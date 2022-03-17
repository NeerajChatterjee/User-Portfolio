import "./App.css";
import Lottie from "lottie-web";
import Landing from "./Components/Landing/Landing";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experiences/Experience";
import MyProjects from "./Components/MyProjects/MyProjects";
import MyWorks from "./Components/MyWorks/MyWorks";
import TextAnim from "./Components/TextAnim/TextAnim";
import Footer from "./Components/Footer/Footer";
import React from "react";
import { useState, useEffect, useRef } from "react";

function App() {
  // const [isLoading, setisLoading] = useState(true);
  // const loadingRef = useRef(null)


  // window.addEventListener("DOMContentLoaded", (event) => {

  //   // setTimeout(() => {
  //     setisLoading(false) 
      
  //   // }, 1000);  

  // });

  // useEffect(() => {
  //   console.log(isLoading)
  //   Lottie.destroy()
  // }, [isLoading])

  // useEffect(() => {
  //   Lottie.loadAnimation({
  //     container: loadingRef.current,
  //     renderer: "svg",
  //     loop: true,
  //     autoplay: true,
  //     animationData: require("./Animations/loading_bird.json"),
  //   });
  //   console.log("Rendered");
  // }); 
  

  return (
    // <>
    //   { isLoading ? (
    //     <div ref={loadingRef} className="max-w-sm">
    //       to
    //     </div>
    //   ) : (
        <div className="overflow-hidden select-none">
          <Landing />
          <TextAnim />
          <Skills />
          <Education />
          <Experience />
          <MyProjects />
          <MyWorks />
          <Footer />
        </div>
    //   )}
    // </>
  );
}

export default App;
