import { GridItem, NavItemProps, TechStack } from "./types";

export const data: GridItem[] = [
  {
    photo: "./projects/empowerED.png",
    category: "web development",
    title: "EmpowerED",
    description: `An interactive education website to enhance personalized learning through gamified activities for underrepresented students`,
    tech: [
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      },
      {
        name: "JS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      },
      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      },
    ],
    action: [
      {
        name: "github",
        url: "https://github.com/pranitha05/EmpowerED",
        src: "./icons/github.png",
      },
      {
        name: "website",
        url: "https://google.com",
        src: "./icons/globe.svg",
      },
    ],
  },
  {
    title: "Pantry Tracker",
    category: "web development",
    description:
      "A web app that helps you manage your food inventory and snacks efficiently. Easily monitor the quantity, category, and status of your pantry items to ensure you never run out of your favorite foods.",
    photo: "./projects/pantry-tracker.png",
    action: [
      {
        name: "website",
        url: "https://pantry-tracker-neon.vercel.app",
        src: "./icons/globe.svg",
      },
      {
        name: "github",
        url: "https://github.com/birongliu/pantry-tracker",
        src: "./icons/github.png",
      },
    ],
    tech: [
      {
        name: "TS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
      },
      {
        name: "NextJS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Firebase",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
      },
      {
        name: "tailwindcss",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      },
    ],
  },
];

export const techStack: TechStack[] = [
  {
    name: "HTML",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  },
  {
    name: "JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  },
  {
    name: "NodeJS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png?20170401104355",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
  },
];

export const navItems: NavItemProps[] = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Project",
    link: "#project",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];
