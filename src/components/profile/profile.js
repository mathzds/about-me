import React from "react";
import { BiLogoGithub, BiLogoSpotify, BiLogoDiscordAlt } from "react-icons/bi";
import LanyardActivities from "@/components/activities/activities";

export default function ProfileCard () {
  const name = "Mathz (Pedro)";
  const description = "Just another dev hailing from Brazil";

  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4 relative">

      <div className="text-center">
        <div className="flex flex-col-reverse md:flex-row items-center space-y-4">
          <div className="order-1 md:order-2 flex flex-col ml-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 animate-fade-in">
              {name}
            </h2>
            <p className="text-lg md:text-xl animate-fade-in">{description}</p>
          </div>
        </div>
      </div>

      <div className="flex mt-4">
        <a
          href="https://github.com/mathzds"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mx-2 transform hover:scale-110 transition-transform animate-fade-in"
        >
          <BiLogoGithub className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-2" />
        </a>
        <a
          href="https://open.spotify.com/user/5kbvf70wh4b5bamfpd5d2d062"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mx-2 transform hover:scale-110 transition-transform animate-fade-in"
        >
          <BiLogoSpotify className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-2" />
        </a>
        <a
          href="https://discord.com/users/433657598772772873"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center mx-2 transform hover:scale-110 transition-transform animate-fade-in"
        >
          <BiLogoDiscordAlt className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-2" />
        </a>
      </div>
      <LanyardActivities />
    </div>
  );
};

