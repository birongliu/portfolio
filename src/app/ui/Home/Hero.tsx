import React from 'react'
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';

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
            <FaDev />
          </a>
        </li>
      </ul>
    </section>
  );
}
