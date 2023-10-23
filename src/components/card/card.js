/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { FaJs, FaReact } from "react-icons/fa";
import { SiLua, SiTailwindcss } from "react-icons/si";

export default function ProjectCard({ title, description, link, imageUrl, languages }) {
  const languageIcons = { Lua: <SiLua />, JavaScript: <FaJs />, React: <FaReact />, Tailwind: <SiTailwindcss /> };

  return (
    <div className="mb-10">
      <div className="max-w-3xl bg-gray shadow-lg rounded-lg overflow-hidden transform hover:scale-105 duration-300 ease-in-out">
        <img src={imageUrl} alt={title} className="w-full h-auto card-image" />
        <div className="p-4">
          <h3 className="text-3xl font-semibold mb-2 text-center underline">{title}</h3>
          <p className="text-white-500 text-lg text-center">{description}</p>
          <div className="flex items-center justify-center mt-2">
            <div className="flex justify-center">
              {languages.map((language, index) => (
                <span key={index} className="mx-2 text-2xl">
                  {languageIcons[language]}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 text-center">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-white btn border border-white border-opacity-10 hover:bg-neutral-800 rounded-lg py-2 px-4 font-bold">
            Project link
          </a>
        </div>
      </div>
    </div>
  );
}

