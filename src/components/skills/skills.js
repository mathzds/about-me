import React from "react";
import { BiLogoJavascript, BiLogoReact, BiLogoTailwindCss, BiLogoMongodb} from "react-icons/bi";
import { SiLua } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "Lua", icon: <SiLua size={48} />, color: "#808080" }, 
    { name: "JavaScript", icon: <BiLogoJavascript size={48} />, color: "#808080" }, 
    { name: "React", icon: <BiLogoReact size={48} />, color: "#808080" },
    { name: "Tailwind", icon: <BiLogoTailwindCss size={48} />, color: "#808080" }, 
    { name: "MongoDB", icon: <BiLogoMongodb size={48} />, color: "#808080" },
]

  return (
    <div className="skills p-4 animate-fade-in">
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="text-center p-4">
            <div style={{ color: skill.color }}>{skill.icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
