import React from "react";
import { techStack } from "../lib/constants";
export default function About() {
  return (
    <section id="about" className="py-40 h-full px-5">
      <div className="grid lg:grid-cols-2 gap-2 text-gray-50">
        <div className="order-2 lg:order-none">
          <div className="flex items-center gap-2">
            <hr className="py-2 w-20 bg-white-100 border-none rounded-sm" />
            <h2 className="font-bold text-2xl text-blue-200 uppercase">About Me</h2>
          </div>
          <p>
            I am passionate about web development and have a strong foundation
            in HTML, CSS, and JavaScript. I enjoy creating dynamic and
            responsive web applications that provide a great user experience.
          </p>
          <div className="flex items-center gap-2 pt-10 pb-2">
            <hr className="py-2 w-20 bg-white-100 border-none rounded-sm" />
            <h2 className="font-bold text-2xl text-blue-200 uppercase">Technology</h2>
          </div>
          <div className="border-cyan-900 bg-white-100 border bg-primary h-32 rounded w-full">
            <ul className="flex gap-1 py-2 px-2">
              {techStack.map(stack => (
                <li><img src={stack.image} alt={stack.name} width={25} height={25} /></li>
              ))}
            </ul>
          </div>
        </div>
        <img
          src="/projects/empowerED.png"
          className="object-cover rounded w-full h-full"
          alt="birong-picture"
        />
      </div>
    </section>
  );
}
