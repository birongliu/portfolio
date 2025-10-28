"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { projects } from "@/app/lib/constants";

export default function page() {
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
    <main className="min-h-screen flex items-start justify-center">
      <div className="w-full max-w-4xl px-4 py-12">
        <section className="flex flex-col items-center text-center gap-6">
          <h1
            className="text-4xl font-semibold text-sky-400"
            aria-label="Projects heading"
          >
            Project
          </h1>

          <div className="w-full">
            <label htmlFor="project-search" className="sr-only">
              Search projects
            </label>
            <div className="relative">
              <input
                id="project-search"
                name="project-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects..."
                className="w-full rounded-lg border border-slate-700/60 bg-white/3 px-4 py-3 text-sm placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
          </div>
        </section>

        <section className="mt-10">
          <ul className="flex flex-col gap-6">
            {filtered.length === 0 ? (
              <li className="text-center text-slate-400">
                No projects match your search.
              </li>
            ) : (
              filtered.map((project, index) => (
                <li
                  key={index}
                  className="flex flex-col md:flex-row gap-4 items-start rounded-xl p-4 border border-slate-800/60 bg-white/2 backdrop-blur-sm hover:shadow-lg transition-transform duration-150 transform hover:-translate-y-1"
                >
                  <div className="w-full md:w-48 flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={320}
                      height={180}
                      className="rounded object-cover"
                    />
                  </div>
                  <div className="w-full">
                    <h2 className="font-semibold text-lg text-slate-100">
                      {project.name}
                    </h2>
                    <time className="text-sm text-sky-300">{project.time}</time>
                    <p className="mt-2 text-sm text-slate-300">
                      {project.description}
                    </p>
                    <p className="mt-3 text-sm text-slate-400">
                      <span className="font-medium">Tech Stack: </span>
                      {project.techStack}
                    </p>
                  </div>
                </li>
              ))
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}
