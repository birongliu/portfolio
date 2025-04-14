import React from "react";

export default function About() {
  return (
    <section className="mx-auto px-8 md:px-12  mt-20 max-w-7xl">
      <h1 className="font-bold text-sm uppercase dark:text-slate-400 tracking-tight">
        About Me
      </h1>

      <p className="py-3 dark:text-slate-400 leading-normal">
        I&apos;m Bi Rong Liu, a senior Computer Science student at Brooklyn College
        and 3x hackathon winner specializing in full-stack development with
        Next.js, React, and Flask. As Tech Lead of the Computer Science Club and GenAI
        ambassador, I’ve led projects that improve access and usability—like a
        Retrieval-Augmented chatbot that streamlined student resource discovery
        for 1,000+ computer science students, and NutriVoice, an award-winning voice-powered
        nutrition tracker for the visually impaired built at columbia university hackathon.
      </p>
    </section>
  );
}
