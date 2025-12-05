import image from "@/app/images/projects/nutrivoice.png";
import spendly from "@/app/images/projects/spendly.png";
import signlingo from "@/app/images/projects/signlingo.png";
import petpals from "@/app/images/projects/petpals.png";
import { ProjectDetails } from "./Types";

export const projects: ProjectDetails[] = [
  {
    name: "NutriVoice (Hackathon Win)",
    image: image.src,
    url: "",
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
    techStack:
      "cloudflare, flask, nextjs, python, supabase, tailwindcss, websocket",
    time: "October 2024 - October 2024",
  },
  {
    name: "PetPals",
    image: petpals.src,
    description:
      "Web app that helps users explore pet adoption and connect with a supportive community of animal lovers.",
    techStack:
      "nextjs, tailwindcss, expressjs, mongodb, google gemini, websocket",
    time: "August 2024 - December 2024",
  },
];
