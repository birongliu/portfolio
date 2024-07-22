import { GridItem } from "../../lib/types";
import { motion, AnimatePresence } from "framer-motion"
export default function Grid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid py-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="wait"> 
      {items.map((item) => (
        <motion.div whileHover={{ scale: 1.02 }} className="text-white bg-slate-800 hover:bg-slate-700 rounded-xl p-5">
          <img src={item.photo} className="rounded w-full" alt={item.title} />
          <div className="p-2">
            <h1 className="text-white-100 font-bold text-2xl">{item.title}</h1>
            <p className="text-white-100 text-base mb-4 text-wrap">{item.description}</p>
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
              <div className="flex gap-2">
                {item.action.map((action) => (
                  <a href={action.url}>
                    <img
                      src={action.src}
                      width={25}
                      height={25}
                      alt={action.name}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
      </AnimatePresence>
    </div>
  );
}
