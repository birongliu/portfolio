import image from "@/app/images/projects/nutrivoice.png"
import spendly from "@/app/images/projects/spendly.png";
import signlingo from "@/app/images/projects/signlingo.png"
import petpals from "@/app/images/projects/petpals.png";
import { FaArrowRight } from "react-icons/fa";

import Image from "next/image";

interface ProjectDetails {
  name: string,
  image: string,
  description: string,
  techStack: string,
  time: string,
}

const projects: ProjectDetails[] = [
  {
    name: "NutriVoice (Hackathon Win)",
    image: image.src,
    description:
      "A AI-powered nutrition tracker for the visually impaired built at columbia university hackathon (devfest 2025)",
    techStack: "React, Flask, OpenAI Whisper & Vision",
    time: "March 2025 - March 2025",
  },
  {
    name: "Spendly (Hackathon Win)",
    image: spendly.src,
    description:
      "AI-powered expense tracker that helps users manage finances with automated spending insights",
    techStack: "React, Flask, OpenAI Whisper & Vision",
    time: "March 2025 - March 2025",
  },
  {
    name: "SignLingo (Hackathon Win)",
    image: signlingo.src,
    description:
      "Built an ASL learning app at HackRU with bite-sized lessons and real-time gesture recognition using machine learning.",
    techStack: "React, Flask, OpenAI Whisper & Vision",
    time: "October 2024 - October 2024",
  },
  {
    name: "PetPals",
    image: petpals.src,
    description: 'Web app that helps users explore pet adoption and connect with a supportive community of animal lovers.',
    techStack: "React, Flask, OpenAI Whisper & Vision",
    time: "August 2024 - December 2024",
  },
];



export default function Project() {
  return (
    <section className="mx-auto py-20 px-8 md:px-12  max-w-7xl">
      <div className="flex items-center justify-between gap-2">
        <h1 className="font-bold text-sm uppercase dark:text-slate-400 tracking-tight">
          Project
        </h1>
      </div>
      <ul className="py-5 flex flex-col gap-4">
        {projects.map((project, index) => (
          <li
            key={index}
            className="flex flex-col md:flex-row gap-2 p-2 dark:hover:bg-slate-800/40 rounded-xl"
          >
            <Image
              src={project.image}
              className="rounded md:w-fit object-cover w-full hover:outline-2 hover:outline-foreground/90"
              width={200}
              height={30}
              alt={project.name}
            />
            <div>
              <h1 className="font-bold text-lg">{project.name}</h1>
              <time className="text-sm text-foreground/80">{project.time}</time>
              <p className="text-sm dark:text-slate-400">
                {project.description}
              </p>
              <p className="text-sm mt-2 dark:text-slate-400">
                <span className="font-bold">Tech Stack: </span>
                {project.techStack}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="font-bold flex items-center gap-2  hover:text-gray-300 tracking-tight hover:cursor-pointer text-sm uppercase dark:text-slate-400"
      >
        Discover More Projects
        <span>
          <FaArrowRight />
        </span>
      </button>
    </section>
  );
}
