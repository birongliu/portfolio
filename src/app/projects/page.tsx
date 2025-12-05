"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { projects } from "@/app/lib/constants";
import Link from "next/link";

export default function Projects() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;

    return projects.filter((p) => {
      return (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.toLowerCase().includes(q)
      );
    });
  }, [query]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      <div className="w-full max-w-6xl mx-auto px-6 py-20">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors duration-200 mb-8 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-medium">Back to Home</span>
        </Link>

        {/* Hero Section */}
        <section className="flex flex-col items-center text-center gap-8 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Projects & Work
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl">
            A collection of projects I've built — from hackathon wins to
            production applications
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-3xl">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                {/* <FiSearch className="h-5 w-5 text-slate-400 group-focus-within:text-blue-400 transition-colors" /> */}
              </div>
              <input
                id="project-search"
                name="project-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects by name, tech stack, or description..."
                className="w-full rounded-full border-2 border-slate-700/30 bg-slate-900/40 backdrop-blur-2xl pl-14 pr-6 py-5 text-base placeholder-slate-500 text-white shadow-lg shadow-blue-900/10 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500/60 hover:border-slate-600/50 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="mt-12">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">
                No projects match your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((project, index) => (
                <Link
                  key={index}
                  href={project.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative rounded-2xl overflow-hidden border border-transparent hover:border-slate-600/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/30 cursor-pointer block"
                >
                  {/* Project Image - Full Card Background */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Light overlay - darkens on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent group-hover:from-slate-950/95 group-hover:via-slate-950/80 group-hover:to-slate-950/60 transition-all duration-300" />
                  </div>

                  {/* Project Content - Shows more on hover */}
                  <div className="relative h-full aspect-video p-6 flex flex-col justify-end">
                    {/* External Link Icon - Top Right */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-blue-500/90 rounded-full p-2 shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Always visible title */}
                    <div className="mb-2">
                      <h2 className="font-bold text-xl text-white group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h2>
                      <time className="block text-xs text-blue-400 font-medium mt-1">
                        {project.time}
                      </time>
                    </div>

                    {/* Content that slides up and fades in on hover */}
                    <div className="max-h-0 opacity-0 group-hover:max-h-96 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-in-out">
                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.split(",").map((tech, i) => (
                          <span
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-full bg-slate-700/60 text-slate-300 border border-slate-600/40 backdrop-blur-sm"
                          >
                            {tech.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
