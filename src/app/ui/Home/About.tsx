import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <section className="mx-auto px-8 md:px-12  mt-20 max-w-7xl">
      <h1 className="font-bold text-sm uppercase dark:text-slate-400 tracking-tight">
        About Me
      </h1>

      <p className="py-3 dark:text-slate-400 leading-normal">
        Bi Rong Liu is a senior Computer Science student at Brooklyn College and
        a 4x hackathon winner, specializing in full-stack development
        and AI. Bi Rong has led impactful projects that
        enhance access and usability such as a Retrieval-Augmented chatbot that
        streamlined resource discovery for over 1,000 computer science students,
        and NutriVoice, an award-winning voice-powered nutrition tracker for the
        visually impaired developed at the Columbia University Hackathon.
      </p>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium rounded-lg transition-all duration-200 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:shadow-[0_4px_12px_0_rgba(0,0,0,0.2),0_2px_4px_0_rgba(0,0,0,0.1)] border border-slate-700 hover:border-slate-600"
      >
        View My Work
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </Link>
    </section>
  );
}
