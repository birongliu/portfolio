import React from "react";

export default function About() {
  return (
    <section id="about" className="h-screen py-24">
      <div className="text-white-100 font-bold text-5xl flex justify-center">
        About Me
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-white-100 pt-10">
            Hello! I'm a passionate Full Stack Developer with a strong focus on creating efficient and scalable web applications. I have a diverse skill set that includes both front-end and back-end technologies.
          </p>
          <div>
            <div className="pt-10">
          <h3 className="text-xl font-semibold text-white-100">Skills</h3>
          <ul className="text-white-100">
            <li>TypeScript</li>
            <li>Node.js</li>
            <li>Git</li>
            <li>React.js</li>
          </ul>
        </div>
        </div>
        </div>
    </section>
  );
}
