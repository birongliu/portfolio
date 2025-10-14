import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="mx-auto px-8 md:px-12 mt-20 max-w-7xl">
      <div className="flex flex-col">
        <div className="flex-row flex items-center space-x-1">
          <Image
            className="border border-dotted border-slate-400 rounded-full"
            width={36}
            height={36}
            alt="birongliu profile picture via github"
            src="https://avatars.githubusercontent.com/u/62890027?v=4"
          />
          <h1 className="font-bold text-3xl uppercase dark:text-slate-300 tracking-tight">
            birong.liu
          </h1>
        </div>
        <h2 className="mt-2 font-bold tracking-tight dark:text-slate-400/90 text-lg">
          Data Analyst intern @ MTA
        </h2>
        <p className="mt-3 max-w-2xs dark:text-slate-500 leading-normal">
          I turn code into inclusive, AI-driven solutions for real-world
          problems
        </p>
      </div>
      <ul className="flex pt-6 gap-4 text-3xl">
        <li>
          <Link
            href="https://github.com/birongliu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link
            href="https://linkedin.com/in/birongliu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link
            href="/Bi_Rong_Liu_Resume.pdf"
            target="_blank"
            download={true}
            className="hover:text-white"
          >
            <svg
              height="30"
              width="30"
              viewBox="0 0 100 120"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="10"
                y="10"
                width="80"
                height="100"
                rx="6"
                ry="6"
                stroke="#333"
                strokeWidth="2"
              />
              <polygon
                points="70,10 90,10 90,30"
                fill="currentColor"
                stroke="#333"
                strokeWidth="2"
              />
              <line
                x1="70"
                y1="10"
                x2="90"
                y2="30"
                stroke="#333"
                strokeWidth="2"
              />
              <circle cx="35" cy="40" r="12" fill="#555" />
              <rect
                x="55"
                y="30"
                width="25"
                height="6"
                fill="#555"
                rx="1"
                ry="1"
              />
              <rect
                x="55"
                y="45"
                width="30"
                height="6"
                fill="#555"
                rx="1"
                ry="1"
              />
              <rect
                x="20"
                y="65"
                width="60"
                height="6"
                fill="#555"
                rx="1"
                ry="1"
              />
              <rect
                x="20"
                y="80"
                width="50"
                height="6"
                fill="#555"
                rx="1"
                ry="1"
              />
              <rect
                x="20"
                y="95"
                width="55"
                height="6"
                fill="#555"
                rx="1"
                ry="1"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link
            href="https://devpost.com/birongliu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              id="Devpost--Streamline-Simple-Icons"
              height="30"
              width="30"
              fill="currentColor"
              className=""
            >
              <path
                d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436 -3.21 6.302 -6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862 -1.55 3.862 -3.861 0.009 -2.569 -1.096 -3.853 -3.767 -3.853Z"
                strokeWidth="1"
              ></path>
            </svg>
          </Link>
        </li>
      </ul>
    </section>
  );
}
