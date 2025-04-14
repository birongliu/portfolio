'use client';
import { useState } from "react";
import Dialog from "./Dialog";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    if(!isOpen) {
      document.body.classList.add("overflow-hidden") 
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };
  const pathname = usePathname()
  return (
    <header className="fixed top-0 z-50 bg-background w-full text-slate-100">
      <div className="max-w-7xl   mx-auto md:hidden flex items-center justify-between p-4 dark:border-b-white/20 transition-colors border-b-white">
        <span className="text-2xl text-white font-bold">
          <Link
            href={"/"}
            className={`focus:outline-none text-foreground ${
              pathname === "/" && "text-slate-400 hidden"
            }`}
          >
            birong.liu
          </Link>
        </span>
        <button
          type="button"
          onClick={handleToggle}
          aria-label="Open menu"
          className={`text-2xl hover:cursor-pointer`}
        >
          ☰
        </button>
      </div>
      {isOpen && <Dialog open={isOpen} handleToggleAction={handleToggle} />}
    </header>
  );
}
