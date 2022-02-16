import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faFire, faFireAlt, faMicrophone, faMicrophoneAlt, faPen } from '@fortawesome/free-solid-svg-icons';

export default function OtherSkillsContainer() {
  return (
    <div className="select-none md:w-[40%]">
      <div className="flex mt-4 text-lg xl:text-xl xl:py-2 xl:items-center">
        <FontAwesomeIcon
          icon={faPen}
          className="hover:text-gray-500 text-[#2563eb] text-2xl xl:text-3xl"
        />
        <div className="w-full pl-4 duration-1000 hover:translate-x-6 hover:font-bold">
          Content Writing
        </div>
      </div>
      <div className="flex mt-2 text-lg xl:text-xl xl:py-2 xl:items-center">
        <FontAwesomeIcon
          icon={faBullseye}
          className="hover:text-gray-500 text-[#2563eb] text-2xl xl:text-3xl"
        />
        <div className="w-full pl-4 duration-1000 hover:translate-x-6 hover:font-bold">
          Marketing Skills
        </div>
      </div>
      <div className="flex mt-2 text-lg xl:text-xl xl:py-2 xl:items-center">
        <FontAwesomeIcon
          icon={faFireAlt}
          className="hover:text-gray-500 text-[#2563eb] text-2xl xl:text-3xl"
        />
        <div className="w-full pl-4 duration-1000 hover:translate-x-6 hover:font-bold">
          Dancing
        </div>
      </div>
      <div className="flex mt-2 text-lg xl:text-xl xl:py-2 xl:items-center">
        <FontAwesomeIcon
          icon={faMicrophoneAlt}
          className="hover:text-gray-500 text-[#2563eb] text-2xl xl:text-3xl"
        />
        <div className="w-full pl-4 duration-1000 hover:translate-x-6 hover:font-bold">
          Motivational speaker
        </div>
      </div>
    </div>
  );
}
