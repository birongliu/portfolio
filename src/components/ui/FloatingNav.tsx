import { useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { cn } from "../../lib/util";
import { FloatingNavProps } from "../../lib/types";

export default function FloatingNav(options: FloatingNavProps) {
  const { scrollYProgress } = useScroll();
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    console.log(window.location)
    const THRESHOLD = 0.05;
    const previousY = scrollYProgress.getPrevious();
    if (typeof current !== "number" || !previousY) return;
    const direction = current - previousY;
    scrollYProgress.get() < THRESHOLD
      ? setVisible(true)
      : setVisible(direction < 0 ? true : false);
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.2 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        className="flex max-w-fit fixed top-10 dark:bg-primary z-10 bg-white inset-x-0 mx-auto border border-cyan-900 rounded-xl shadow-xl px-5 py-3 items-center justify-center space-x-4"
      >
        <a href="#home" className="flex justify-center" onClick={() => setActive("#home")}>
          <span className="text-base border rounded-[50%] px-2 dark:text-white  border-cyan-900 text-blue-600 hover:text-blue-500 cursor-pointer">
            B
          </span>
        </a>
        <span className="text-base flex border h-5 rounded-xl  border-cyan-900" />
        {options.navItems.map((item, i) => (
          <a
            href={item.link}
            rel="norefer"
            onClick={() => setActive(item.link)}
            key={`link-${i}`}
            className={cn("relative items-center flex space-x-1")}
          >
            <span className={cn(`text-base text-neutral-400  hover:text-neutral-200 ${item.link === active ? "text-neutral-100" : ""}`)}>
              {item.name}
            </span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
}
