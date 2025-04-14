import image from "@/app/images/projects/nutrivoice.png"
import spendly from "@/app/images/projects/spendly.png";
import signlingo from "@/app/images/projects/signlingo.png"
import petpals from "@/app/images/projects/petpals.png";

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
      "AI powered expense tracker for the individual that have hard time managing finances effectively built at Brooklyn College hackathon.",
    techStack: "React, Flask, OpenAI Whisper & Vision",
    time: "March 2025 - March 2025",
  },
  {
    name: "SignLingo (Hackathon Win)",
    image: signlingo.src,
    description:
      "Built a web app at HackRU to teach American Sign Language using bite-sized lessons, real-time gesture recognition, and gamified learning. Used a custom CNN model to enable accurate sign detection and improve user engagement.",
    techStack: "React, Flask, OpenAI Whisper & Vision",
    time: "October 2024 - October 2024",
  },
  {
    name: "PetPals",
    image: petpals.src,
    description:
      "Web application that allows users to discover the joy of pet adoption alongside a supportive community of animal lovers and those who are new to pet owning.",
    techStack: "React, Flask, OpenAI Whisper & Vision",
    time: "August 2025 - December 2025",
  },
];



export default function Project() {
  return (
    <section className="mx-auto px-8 md:px-12 lg:hidden mt-20 max-w-7xl">
      <h1 className="font-bold text-sm uppercase dark:text-slate-400 tracking-tight">
        Project
      </h1>
      <ul className="py-5 flex flex-col gap-4">
        {projects.map((project, index) => (
          <li key={index} className="flex flex-col md:flex-row gap-2 p-2 rounded hover:cursor-pointer hover:bg-foreground/10 dark:hover:bg-slate-800">
            <Image
              src={project.image}
              className="rounded md:w-fit w-full hover:outline-foreground/90"
              width={200}
              height={40}
              alt={project.name}
              priority
            />
            <div>
              <h1 className="font-bold text-lg">{project.name}</h1>
              <time className="text-sm text-foreground/80">
               {project.time}
              </time>
              <p className="text-base dark:text-slate-400">
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
    </section>
  );
}
