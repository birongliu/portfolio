import React from "react";
import { techStack } from "../lib/constants";
export default function About() {
  return (
    <section id="about" className="py-48 h-full px-5">
      <div className="grid lg:grid-cols-2 gap-2 text-gray-50">
        <div className="order-2 lg:order-none">
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
            applications, where I've honed my skills in using React,
            Express, and PostgreSQL, among others.
          </p>
          <a
            href="/birongliu-resume.pdf"
            aria-label="resume"
            download="birongliu-resume.pdf"
          >
            <button className="border bg-primary border-cyan-900 p-2 rounded-xl hover:cursor-pointer hover:bg-cyan-800 text-white-200">
              Download Resume
            </button>
          </a>
          <div className="flex items-center gap-2 pt-10 pb-2">
            <hr className="py-2 w-20 bg-white-100 border-none rounded" />
            <h2 className="font-bold text-2xl text-blue-200 uppercase">
              Technology
            </h2>
          </div>
          <div className="border-cyan-900 border bg-primary h-fit rounded w-fit">
            <ul className="flex gap-1 py-2 px-2 items-center">
              {techStack.map((stack) => (
                <>
                  <span className="text-base flex border h-5 rounded-xl first:hidden last:hidden border-cyan-900" />
                  <li>
                    <img
                      src={stack.image}
                      alt={stack.name}
                      width={25}
                      height={25}
                    />
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
        <img
          src="https://assets.about.me/background/users/b/i/r/birongliu_1598379907_157.jpg"
          className="w-full h-96 object-cover object-top rounded"
          alt="birong-picture"
        />
      </div>
    </section>
  );
}
