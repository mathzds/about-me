import React from "react";
import Link from "next/link";

export default function Header() {
  const buttonStyles = "btn border border-white border-opacity-10 hover:bg-neutral-800 rounded-lg py-2 px-4";

  return (
    <header>
      <div className="container mx-auto">
        <nav className="mt-2">
          <ul className="flex items-center justify-center space-x-4">
            <li><Link className={buttonStyles} href="/">Home</Link></li>
            <li><Link className={buttonStyles} href="/projects">Projects</Link></li>
            <li><Link className={buttonStyles} href="/about">About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
