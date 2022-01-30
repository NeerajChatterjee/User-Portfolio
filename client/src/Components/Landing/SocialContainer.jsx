import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin, faInstagram, faDiscord, faSpotify, faTwitter, faSlack, faTelegramPlane, faSnapchatGhost } from '@fortawesome/free-brands-svg-icons';
import { faBlog, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function SocialContainer() {
  return (
    <div className="flex flex-col justify-between max-w-xl mt-8 xs:flex-row lg:mt-0 xs:grid xs:grid-cols-2">
      <div className='flex flex-row justify-around'>
        <a href="https://intellectaddict.com/" target="_blank">
          <FontAwesomeIcon
            icon={faBlog}
            className="xl:text-4xl text-3xl hover:text-[#1DA1F2] transition delay-400 ease-linear hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a href="https://github.com/ShrutisLegion" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="xl:text-4xl text-3xl hover:text-[#64748B] transition delay-400 ease-linear hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a href="https://www.linkedin.com/in/shruti-bhateja/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="xl:text-4xl text-3xl hover:text-[#0E76A8] transition delay-400 ease-linear hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a href="mailto:shrutibhateja1803@gmail.com" target="_blank">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="xl:text-4xl text-3xl hover:text-[#DB4437] transition delay-400 ease-linear hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a href="https://www.facebook.com/shruti.bhateja.75" target="_blank">
          <FontAwesomeIcon
            icon={faFacebook}
            className="xl:text-4xl text-3xl hover:text-[#3B5998] transition delay-400 ease-linear hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a href="https://www.instagram.com/shruti.musings/" target="_blank">
          <FontAwesomeIcon
            icon={faInstagram}
            className="xl:text-4xl text-3xl hover:text-[#E1306C] transition delay-400 ease-linear hover:-translate-y-2 hover:scale-125"
          />
        </a>
      </div>
      <div className='flex flex-row justify-around mt-4 xs:mt-0'>
        <a href="https://discord.com/users/789704055182065696" target="_blank">
          <FontAwesomeIcon
            icon={faDiscord}
            className="xl:text-4xl text-3xl hover:text-[#738ADB] transition delay-400 ease-linear hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a
          href="https://open.spotify.com/user/9x2mwqv7v9jpsz57ips25oqz5?si=932a56c200a24e9a"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faSpotify}
            className="xl:text-4xl text-3xl hover:text-[#1DB954] transition delay-400 ease-linear hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a href="https://twitter.com/shrutimusings" target="_blank">
          <FontAwesomeIcon
            icon={faTwitter}
            className="transition delay-400 ease-linear xl:text-4xl text-3xl hover:text-[#1DA1F2] hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a
          href="https://slack.com/app_redirect?channel=U02JNAQ5H6Z"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faSlack}
            className="transition delay-400 ease-linear xl:text-4xl text-3xl hover:text-[#ECB22E] hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faTelegramPlane}
            className="transition delay-400 ease-linear xl:text-4xl text-3xl hover:text-[#0088CC] hover:-translate-y-2 hover:scale-125"
          />
        </a>
        <a href="">
          <FontAwesomeIcon
            icon={faSnapchatGhost}
            className="transition delay-400 ease-linear xl:text-4xl text-3xl hover:text-[#FFFC00] hover:-translate-y-2 hover:scale-125"
          />
        </a>
      </div>
    </div>
  );
}
