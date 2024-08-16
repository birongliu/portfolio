import React from "react";
import { techStack } from "../lib/constants";
export default function About() {
  return (
    <section id="about" className="py-48 px-5">
      <div className="grid lg:grid-cols-2 gap-x-10 text-gray-50">
        <div className="lg:order-none">
        <div className="relative mt-4 mb-10">
          <div className="bg-white-100 rounded w-10 h-5 absolute z-0 -left-5 -top-2"></div>
          <div className="bg-white-100 rounded w-10 h-5 absolute z-0 -right-5 -top-2"></div>
          <img
            src="https://assets.about.me/background/users/b/i/r/birongliu_1598379907_157.jpg"
            className="w-full h-96 object-cover object-top rounded z-10 relative shadow-lg border-4 border-white-200"
            alt="birong-picture"
          />
          <div className="bg-white-100 rounded w-10 h-5 absolute z-0 -right-5 -bottom-2"></div>
          <div className="bg-white-100 rounded w-10 h-5 absolute z-0 -left-5 -bottom-2"></div>
        </div>
          <div className="flex items-center gap-2">
            <hr className="py-2 w-20 bg-white-100 border-none rounded-sm" />
            <h2 className="font-bold text-2xl text-blue-200 uppercase">
              About Me
            </h2>
          </div>
          <p className="mb-5 md:text-base font-semibold">
            I am passionate about creating Web Apps with UI/UX User Interface, I
            specialize in a wide range of programming languages and
            technologies. My experience includes developing full-stack web
            applications, where I've honed my skills in using React, Express,
            and PostgreSQL, among others.
          </p>
          <div className="flex gap-2"> 
          <a
            href="/birongliu-resume.pdf"
            aria-label="resume"
            download="birongliu-resume.pdf"
          >
            <button className="border bg-primary border-cyan-900 p-2 rounded-md hover:cursor-pointer hover:bg-cyan-800 text-white-200">
              Download Resume
            </button>
          </a>
          <a
            href="#contact"
            aria-label="contact"          >
            <button className="border bg-primary border-cyan-900 p-2 rounded-md hover:cursor-pointer hover:bg-cyan-800 text-white-200">
              Contact ME
            </button>
          </a>
          </div>
        </div>
        <div className="flex gap-2 flex-col md:mt-0 mt-10 ">
          <div className="flex gap-1 items-center lg:mt-0 mt-10">
            <hr className="py-2 w-20 h-4 bg-white-100 border-none rounded" />
            <h2 className="font-bold text-2xl text-blue-200 uppercase">
              Technology
            </h2>
            </div>
            <ul className="h-full mb-20 grid-cols-2 mt-2 md:grid-cols-3  rounded grid">
             {techStack.map(stack => (
              <li key={stack.name} className="h-full p-10 hover:bg-black-100 flex justify-center items-center flex-col">
                <img height={50} width={50} className="object-contain" src={stack.image} alt={stack.name} />
              </li>
             ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
