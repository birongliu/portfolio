import { GridItem, NavItemProps, TechStack } from "./types";

export const data: GridItem[] = [
  {
    photo: "./projects/empowerED.png",
    category: "web dev",
    title: "EmpowerED",
    description: `Built an interactive education website to enhance personalized learning through gamified activities for underrepresented students`,
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
    image: "https://storage-us-gcs.bfldr.com/h5psv9c3jbk88pwc3xn79pp/v/1069931061/original/MongoDB_SpringGreen.png?Expires=1722435605&KeyName=gcs-bfldr-prod&Signature=Jb70gUvUzP_mO5Ww4Lj9ovO_0Os="
  }
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
