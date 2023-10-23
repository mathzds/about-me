import React from "react";
import Header from "@/components/header/header";
import ProjectCard from "@/components/card/card";
import Skills from "@/components/skills/skills";
import Contact from "@/components/contact/contatc";

const projects = [
  {
    title: "Souls Hub",
    description: "Scripts made for lua study purpose",
    link: "https://discord.gg/Fyc8ka3Xsr",
    imageUrl: "https://imgur.com/KfrPDj9.png",
    languages: ["Lua"],
  },
  {
    title: "Anime TV",
    description: "Site made to watch anime for free",
    link: "https://github.com/anime-tv/website",
    imageUrl: "https://i.imgur.com/7VN4CWo.png",
    languages: ["JavaScript", "React", "Tailwind"],
  },
  {
    title: "Portfolio",
    description: "My website to talk about me",
    link: "https://github.com/mathzds/about-me",
    imageUrl: "https://imgur.com/sGjZXFG.png",
    languages: ["JavaScript", "React", "Tailwind"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Section title="Skills" />
      <Skills />
      <Section title="Projects" />
      <div className="flex flex-wrap justify-center animate-fade-in">
        {projects.map((project, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 m-6">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
}

const Section = ({ title }) => (
  <>
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-12 mb-4 animate-fade-in">
      {title}
    </h1>
    <hr className="w-1/4 mx-auto border-b-2 border-neutral-800 my-4 animate-fade-in" />
  </>
);
