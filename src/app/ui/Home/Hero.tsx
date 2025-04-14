import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className="mx-auto px-8 md:px-12 lg:hidden mt-20 max-w-7xl">
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl uppercase dark:text-slate-300 tracking-tight">
          birong.liu
        </h1>
        <h2 className="mt-2 font-bold tracking-tight dark:text-slate-400/90 text-lg">
          Full Stack Developer
        </h2>
        <p className="mt-3 max-w-2xs dark:text-slate-500 leading-normal">
          I turn code into inclusive, AI-driven solutions for real-world
          problems
        </p>
      </div>
      <ul className="flex pt-6 gap-4 text-3xl">
        <li>
          <a
            href="https://github.com/birongliu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/birongliu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://devpost.com/birongliu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="Devpost--Streamline-Simple-Icons"
              height="30"
              width="30"
              fill="currentColor"
              className=""
            >
              <path
                d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436 -3.21 6.302 -6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862 -1.55 3.862 -3.861 0.009 -2.569 -1.096 -3.853 -3.767 -3.853Z"
                strokeWidth="1"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </section>
  );
}
