import { Spotlight } from "./ui/Spotlight";
import { AnimatePresence, motion } from "framer-motion";
export default function Hero() {
  return (
    <main id="home" className="flex flex-col justify-center items-center h-screen">
      <Spotlight
        fill="white"
        className="h-screen -top-20 -left-10 md:-left-32 md:-top-20"
      />
      <div className="flex justify-center flex-col cursor-default">
        <div 
          className="uppercase tracking-widest text-small text-left text-blue-100 max-w-80">
          👋 Hello, I'm
        </div>
        <div className="text-blue-400 text-5xl md:text-6xl font-bold text-center uppercase">
          Bi Rong Liu
        </div>
        <p className="text-blue-200 text-right">
          Full Stack Developer | Based in NYC
        </p>
      </div>
      <div className="relative h-11 -bottom-56"> 
      <AnimatePresence mode="wait">
        <motion.a
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.2 }}
          exit={{ opacity: 0 }}
          href="#about"
          className=" hover:fill-cyan-300 hover:border-cyan-600 cursor-pointer rounded-xl border-cyan-900 border-2 p-2 fill-cyan-900 hidden lg:block"
        >
          <motion.svg
            height="25px"
            width="25px"
            initial={{ y: 0 }}
            animate={{ y: [0, 3, 0] }}
            transition={{
              repeatType: "loop",
              repeat: Infinity,
              duration: 2,
              ease: "easeIn",
            }}
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330"
            xmlSpace="preserve"
          >
            <path
              id="XMLID_225_"
              d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
            />
          </motion.svg>
        </motion.a>
      </AnimatePresence>
      </div>
    </main>
  );
}
