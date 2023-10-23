import React from "react";

import Header from "@/components/header/header";
import Timeline from "@/components/timeline";

const events = [
    {
      date: "May 2021",
      title: "Getting started with Python",
      description: "I started studying Python on the Video Course YouTube channel",
      link: "https://www.youtube.com/watch?v=S9uPNppGsGo",
    },
    {
      date: "November 2021",
      title: "Studying JavaScript",
      description: "I also studied JavaScript via the YouTube Video Course",
      link: "https://www.youtube.com/watch?v=BXqUH86F-kA&list=PLntvgXM11X6pi7mW0O4ZmfUI1xDSIbmTm",
    },
    {
      date: "April 2022",
      title: "Beginning of study with Lua",
      description: "I studied Lua and its principles through YouTube and the documentation in general, then applied the knowledge first on MTA servers and then creating exploits for Roblox.",
      link: "https://www.youtube.com/watch?v=dCx_bVm9x88&list=PLw1uWqQBDcgjKqFjPNgtVtBNx3xTGz-l7",
    },
    {
      date: "November 2022 - Current",
      title: "Studying Web Development",
      description: "I'm studying modern web development, covering HTML, CSS, JavaScript, frameworks and databases, with the aim of becoming a complete developer.",
      link: "https://www.udemy.com/course/curso-web/",
    },
  ];
  

export default function AboutPage() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <Timeline events={events} />
    </div>
  );
}
