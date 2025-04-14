"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface NavItems {
  name: string,
  path: string
}

const navItems: NavItems[] = [{
  name: "Project",
  path: "/project"
}, 
{
  name: "Blogs",
  path: "/blogs"
}]

export default function Dialog({
  open,
  handleToggleAction,
}: {
  open: boolean;
  handleToggleAction: () => void;
}) {
  const [isOpen, setIsOpen] = useState(open);
  const dialogRef = (ref: HTMLDialogElement | null) => {
    if (ref && ref instanceof HTMLDialogElement && !ref.open && isOpen) {
      ref.showModal();
    }

  };

  const handleClose = () => {
    setIsOpen((prev) => !prev);
    handleToggleAction();
  };

  const pathname = usePathname()

  return (
    <dialog
      id="dialogs"
      className={`w-full h-full dark:bg-background ${
        !isOpen && "hidden"
      } max-w-7xl max-h-screen fixed p-4 top-0 inset-0 md:hidden`}
      ref={dialogRef}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="text-2xl text-white font-bold">
          <Link
            href={"/"}
            onClick={handleClose}
            className={`focus:outline-none text-foreground ${pathname === "/" && "text-slate-400"}`}
          >
            birong.liu
          </Link>
        </span>
        <button
          onClick={handleClose}
          className="text-2xl text-white hover:cursor-pointer focus:outline-none"
          type="button"
        >
          {"ｘ"}
        </button>
      </div>

      <div className="mt-4 max-w-7xl container flex flex-col gap-4 rounded-2xl shadow-md">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.path}
            className={`text-xl w-full hover:bg-gray-500 ${
              pathname === item.path ? "dark:bg-slate-700" : "bg-inherit"
            } text-gray-700 font-black dark:text-foreground p-2 rounded-lg`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="fixed bottom-0 w-full border-t-2 dark:border-foreground/20 border-l-2 mx-auto items-center gap-4 flex dark:bg-foreground/5 dark:text-white rounded-t-2xl p-6 shadow-xl">
        <button
          type="button"
          className={
            "px-6 py-3 rounded-2xl uppercase cursor-pointer font-semibold bg-sky-500 hover:bg-sky-600 text-white shadow-md shadow-sky-500/40 transition duration-200"
          }
        >
          <Link href={"mailto:birong.liu75@gmail.com"}>contact me</Link>
        </button>
        <ul className="flex gap-2 items-center text-3xl">
          <li>
            <a
              href="https://github.com/birongliu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white bg-foreground"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/birongliu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </dialog>
  );
}
