import React, {useEffect} from 'react'
import MyWorksData from './MyWorksData';
import Aos from 'aos';
import "aos/dist/aos.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib } from '@fortawesome/free-solid-svg-icons';

function MyWorks() {

    useEffect(() => {
      Aos.init({
        duration: 1000,
        easing: "ease-in-sine",
        startEvent: "load",
        once: true,
      });
    }, []);
    

    return (
      <div className='py-12'>
        <div
          className="flex justify-center py-4 text-4xl font-extrabold sm:py-8 sm:text-5xl lg:text-6xl"
          data-aos="zoom-in"
        >
          <FontAwesomeIcon
            icon={faPenNib}
            className="text-[#2563eb] animate-pulse"
          />
          &nbsp; MY WORK
        </div>

        <div className="px-8 py-12 mx-auto md:p-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
            {MyWorksData.map((item, id) => (
              <div
                className="group min-h-[16rem] rounded-md"
                key={id}
                data-aos="zoom-in-up"
              >
                <div
                  className="w-full h-full duration-500 bg-center bg-cover shadow-xl cursor-pointer max-w-md mx-auto group-hover:-translate-y-4 rounded-md lg:max-w-full overflow-hidden"
                  style={{
                    backgroundImage: `url(
                ${item.imgsrc}
              )`,
                  }}
                >
                  <div className="flex flex-col flex-wrap w-full h-full duration-500 transform bg-black bg-opacity-50 hover:bg-opacity-80">
                    <h1 className="px-4 flex flex-col h-full w-full justify-center items-center text-2xl xl:text-3xl text-white duration-1000 transform group-hover:translate-y-[-80%]">
                      {item.title}
                      <div
                        className="w-16 h-2 mt-5 duration-1000 transform rounded-full"
                        style={{ backgroundColor: `${item.lineColor}` }}
                      ></div>
                    </h1>

                    {/* to maintain the height of the div */}
                    <div className="text-xl text-white duration-1000 transform opacity-0">
                      <div className="line-clamp-4">{item.desc}</div>
                      <a
                        href={item.linkToPost}
                        target="_blank"
                        className="text-white opacity-0 group-hover:opacity-80"
                      >
                        Go to repo
                      </a>
                    </div>

                    {/* original div that will show th info */}
                    <div className="absolute h-full w-full text-lg xl:text-xl text-white duration-1000 transform opacity-0 group-hover:opacity-80 -bottom-full group-hover:-bottom-0 flex flex-col justify-around px-3 py-2">
                      <div className="line-clamp-5 xl:line-clamp-6">
                        {item.desc.map((info, idInfo) => (
                          <div key={idInfo}>{info}</div>
                        ))}
                      </div>
                      <a
                        href={item.linkToPost}
                        target="_blank"
                        className="text-white opacity-0 group-hover:opacity-100 fill-white flex items-center justify-center py-1 w-fit px-4 mx-auto hover:bg-white hover:text-black hover:fill-black rounded-2xl text-lg duration-1000"
                      >
                        <span className="mr-2">Link to post</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          height={16}
                          width={16}
                        >
                          <path d="M384 320c-17.67 0-32 14.33-32 32v96H64V160h96c17.67 0 32-14.32 32-32s-14.33-32-32-32L64 96c-35.35 0-64 28.65-64 64V448c0 35.34 28.65 64 64 64h288c35.35 0 64-28.66 64-64v-96C416 334.3 401.7 320 384 320zM488 0H352c-12.94 0-24.62 7.797-29.56 19.75c-4.969 11.97-2.219 25.72 6.938 34.88L370.8 96L169.4 297.4c-12.5 12.5-12.5 32.75 0 45.25C175.6 348.9 183.8 352 192 352s16.38-3.125 22.62-9.375L416 141.3l41.38 41.38c9.156 9.141 22.88 11.84 34.88 6.938C504.2 184.6 512 172.9 512 160V24C512 10.74 501.3 0 488 0z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );


}

export default MyWorks