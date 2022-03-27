import React, {useState, useEffect, useRef} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import pic from './ECellLogo.jpeg'

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


function TextAnim() {

    const [text, settext] = useState("")
    const [index, setindex] = useState(0)
    // const s = "I AM_AN EXPLORER_AN ADVENTURER_A MOTIVATOR_A DREAMER_AN ACHIEVER_AND_UNSTOPPABLE";
    // const s = "HAPPY_BIRTHDAY_SHRUTI_YOU ARE_VERY SPECIAL_VERY CUTE_AND_YOU ARE_MINE";
    const s = "HAPPY_BIRTHDAY_SHRUTI";
    const [isVisible, setisVisible] = useState(false)
    const containerRef = useRef(null)
    // const [offsetY, setOffsetY] = useState(0)

    // const handleScroll = () => setOffsetY(window.pageYOffset)

    // useEffect(() => {
    //   window.addEventListener("scroll", handleScroll);

    //   return () => window.removeEventListener("scroll", handleScroll);

    // }, [])
    
    
    const callbackFunction = (entries) => {
        const [entry] = entries
        if(entry.isIntersecting){
          setisVisible(true);
          
        }
        else{
          settext("");
          setindex(0);
        }
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    }

    useEffect(() => {
      
      const observer = new IntersectionObserver(callbackFunction, options)
      if(containerRef.current) observer.observe(containerRef.current)
    
      return () => {
        if(containerRef.current) observer.unobserve(containerRef.current)
      }
    }, [containerRef, options])
    

    useInterval(() => {
      
        // for (let i = 0; i < 10; i++) {
          if(isVisible){
            settext(text + s[index])
            setindex(index + 1)
          }
            // document.getElementById("textAnim").innerHTML = text + "|";
        // }

    }, 500)

    useEffect(()=>{

        if(index == s.length){
            settext("")
            setindex(0)
        }

        if (index < s.length && s[index] == '_') {
          settext("");
        }

    }, [text])

    useEffect(() => {
      Aos.init({
        duration: 1000,
        easing: "ease-in-sine",
        startEvent: "load",
        once: true,
      });
    }, []);

  return (
    <div className="flex flex-wrap items-center justify-center min-h-[75vh] px-6 xs:min-h-screen h-fit bg-blue-50 lg:px-0">
      <div
        className="text-[2rem] xs:text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem] animate-charcter flex"
        ref={containerRef}
      >
        <span className="flex items-center justify-center">
          <span className="">
            {isVisible && text.length >= 2 ? text : ""}
            <span className="text-[3rem] xs:text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[10rem] xl:text-[12rem]">
              |
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default TextAnim;
