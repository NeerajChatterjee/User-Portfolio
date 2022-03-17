import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function ProficienyContainer() {
  return (
    <div className="select-none">
      <div className="flex mt-4 text-lg xl:text-xl xl:py-1">
        <FontAwesomeIcon
          icon={faLaptopCode}
          className="hover:text-gray-500 text-[#2563eb] text-2xl xl:text-3xl"
        />
        <div className="w-full pl-4 duration-1000 hover:translate-x-6 hover:text-black">
          C/C++
        </div>
      </div>
      <div className="flex mt-2 text-lg xl:text-xl xl:py-1">
        <FontAwesomeIcon
          icon={faLaptopCode}
          className="hover:text-gray-500 text-[#2563eb] text-2xl xl:text-3xl"
        />
        <div className="w-full pl-4 duration-1000 hover:translate-x-6 hover:text-black">
          Android Developer (Kotlin, React Native)
        </div>
      </div>
      <div className="flex mt-2 text-lg xl:text-xl xl:py-1">
        <FontAwesomeIcon
          icon={faLaptopCode}
          className="hover:text-gray-500 text-[#2563eb] text-2xl xl:text-3xl"
        />
        <div className="w-full pl-4 duration-1000 hover:translate-x-6 hover:text-black">
          Competitive Programming
        </div>
      </div>
      <div className="flex mt-2 text-lg xl:text-xl xl:py-1">
        <FontAwesomeIcon
          icon={faLaptopCode}
          className="hover:text-gray-500 text-[#2563eb] text-2xl xl:text-3xl"
        />
        <div className="w-full pl-4 duration-1000 hover:translate-x-6 hover:text-black">
          Data Structures and Algorithms
        </div>
      </div>
    </div>
  );
}
