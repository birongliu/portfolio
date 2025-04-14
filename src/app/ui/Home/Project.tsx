import image from "@/app/images/projects/nutrivoice.png"
import spendly from "@/app/images/projects/spendly.png";
import signlingo from "@/app/images/projects/signlingo.png"
import petpals from "@/app/images/projects/petpals.png";

import Image from "next/image";
export default function Project() {
  return (
    <section className="mx-auto px-8 md:px-12 lg:hidden mt-20 max-w-7xl">
      <h1 className="font-bold text-sm uppercase dark:text-slate-400 tracking-tight">
        Project
      </h1>
      <ul className="py-5 flex flex-col gap-4">
        <li className="flex flex-col md:flex-row gap-2 p-2 rounded hover:cursor-pointer hover:bg-foreground/10 dark:hover:bg-slate-800">
          <Image
            src={image}
            className="rounded md:w-fit w-full hover:outline-foreground/90"
            width={200}
            height={40}
            alt="Hackathon Project"
          />
          <div>
            <h1 className="font-bold text-lg">NutriVoice (Hackathon Win)</h1>
            <time className="text-sm text-foreground/80">
              March 2025 - March 2025
            </time>
            <p className="text-base dark:text-slate-400">
              A AI-powered nutrition tracker for the visually impaired built at
              columbia university hackathon (devfest 2025)
            </p>
            <p className="text-sm mt-2 dark:text-slate-400">
              <span className="font-bold">Tech Stack: </span>
              React, Flask, OpenAI Whisper & Vision
            </p>
          </div>
        </li>

        <li className="flex py-4 flex-col md:flex-row gap-2 p-2 rounded hover:cursor-pointer hover:bg-foreground/10 dark:hover:bg-slate-800">
          <Image
            src={spendly}
            className="rounded md:w-fit w-full hover:outline-foreground/90"
            width={200}
            height={40}
            alt="Hackathon Project"
          />
          <div>
            <h1 className="font-bold text-lg">Spendly (Hackathon Win)</h1>
            <time className="text-sm text-foreground/80">
              March 2025 - March 2025
            </time>
            <p className="text-base dark:text-slate-400">
              AI powered expense tracker for the individual that have hard time
              managing finances effectively built at Brooklyn College hackathon.
            </p>
            <p className="text-sm mt-2 dark:text-slate-400">
              <span className="font-bold">Tech Stack: </span>
              React, Flask, OpenAI Whisper & Vision
            </p>
          </div>
        </li>

        <li className="flex py-4 flex-col md:flex-row gap-2 p-2 rounded hover:cursor-pointer hover:bg-foreground/10 dark:hover:bg-slate-800">
          <Image
            src={signlingo}
            className="rounded md:w-fit w-full hover:outline-foreground/90"
            width={200}
            height={40}
            alt="Hackathon Project"
          />
          <div>
            <h1 className="font-bold text-lg">Signlingo (Hackathon Win)</h1>
            <time className="text-sm text-foreground/80">
              October 2024 - October 2024
            </time>
            <p className="text-base dark:text-slate-400">
              Built a web app at HackRU to teach American Sign Language using
              bite-sized lessons, real-time gesture recognition, and gamified
              learning. Used a custom CNN model to enable accurate sign
              detection and improve user engagement.
            </p>
            <p className="text-sm mt-2 dark:text-slate-400">
              <span className="font-bold">Tech Stack: </span>
              cloudflare, flask, nextjs, python, supabase, tailwindcss,
              websocket
            </p>
          </div>
        </li>

        <li className="flex py-4 flex-col md:flex-row gap-2 p-2 rounded hover:cursor-pointer hover:bg-foreground/10 dark:hover:bg-slate-800">
          <Image
            src={petpals}
            className="rounded md:w-fit w-full hover:outline-foreground/90"
            width={200}
            height={40}
            alt="Hackathon Project"
          />
          <div>
            <h1 className="font-bold text-lg">PetPals</h1>
            <time className="text-sm text-foreground/80">
              August 2024 - December 2024
            </time>
            <p className="text-base dark:text-slate-400">
              Web application that allows users to discover the joy of pet
              adoption alongside a supportive community of animal lovers and
              those who are new to pet owning.
            </p>
            <p className="text-sm mt-2 dark:text-slate-400">
              <span className="font-bold">Tech Stack: </span>
              NextJS, MongoDB, TailwindCSS, ExpressJS, Google Gemini
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
}
