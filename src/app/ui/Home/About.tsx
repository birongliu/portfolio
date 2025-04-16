import React from "react";

export default function About() {
  return (
    <section className="mx-auto px-8 md:px-12  mt-20 max-w-7xl">
      <h1 className="font-bold text-sm uppercase dark:text-slate-400 tracking-tight">
        About Me
      </h1>

      <p className="py-3 dark:text-slate-400 leading-normal">
        Bi Rong Liu is a senior Computer Science student at Brooklyn College and
        a three-time hackathon winner, specializing in full-stack development
        with Next.js, React, and Flask. As Tech Lead of the Computer Science
        Club and a GenAI ambassador, Bi Rong has led impactful projects that
        enhance access and usability—such as a Retrieval-Augmented chatbot that
        streamlined resource discovery for over 1,000 computer science students,
        and NutriVoice, an award-winning voice-powered nutrition tracker for the
        visually impaired developed at the Columbia University Hackathon.
      </p>
    </section>
  );
}
