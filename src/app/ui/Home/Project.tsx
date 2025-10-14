import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { projects } from "@/app/lib/constants";
import Link from "next/link";

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
            className="flex flex-col md:flex-row gap-2 dark:hover:bg-slate-800/40 rounded-xl"
          >
            <Image
              src={project.image}
              className="rounded w-full md:w-fit object-cover over:outline-2 hover:outline-foreground/90"
              width={200}
              height={30}
              alt={project.name}
            />
            <div className="w-full">
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
      <Link href={"/projects"}>
        <button
          type="button"
          className="font-bold flex items-center gap-2  hover:text-gray-300 tracking-tight hover:cursor-pointer text-sm uppercase dark:text-slate-400"
        >
          Discover More Projects
          <span>
            <FaArrowRight />
          </span>
        </button>
      </Link>
    </section>
  );
}
