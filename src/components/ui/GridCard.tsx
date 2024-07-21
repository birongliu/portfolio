import React from "react";


export const data: GridItem = {
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
  action: [""],
};

interface TechStack {
  name: string;
  image: string;
}
interface GridItem {
  photo: string;
  category: string;
  title: string;
  description: string;
  tech: TechStack[]; // images
  action: string[]; //github and website
}

export default function Grid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid py-10 grid-cols-1 gap-5 md:grid-cols-3">
      {items.map((item) => (
        <div className="text-white bg-black-200 hover:bg-black-300 rounded">
          <img src={item.photo} className="rounded w-full" alt={item.title} />

          <div className="p-2">
            <h1 className="text-white-100 font-bold text-2xl">{item.title}</h1>
            <p className="text-white-100 text-base mb-4">{item.description}</p>
            <div className="flex justify-between">
            <div className="flex gap-2">
              {item.tech.map((stack) => (
                <img
                  src={stack.image}
                  alt={stack.name}
                  height={25}
                  width={25}
                />
              ))}
            </div>
            <div>
                <img src="./icons/github.svg" width={25} height={25} alt="github"></img>
            </div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
}
