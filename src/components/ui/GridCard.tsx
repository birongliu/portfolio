import { GridItem } from "../../lib/types";
import { motion, AnimatePresence } from "framer-motion";
export default function Grid({ items }: { items: GridItem[] }) {
  return (
    <div className="grid  h-full py-10 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="wait">
        {items.map((item, i) => (
          <motion.div
            key={`${item.title}-${i}`}
            whileHover={{ scale: 1.02, }}
            className="text-white  relative w-full bg-slate-800 hover:bg-slate-700 rounded-xl p-5"
          >
            <img
              src={item.photo}
              className="rounded lg:h-40 xl:h-48 w-full"
              alt={item.title}
    
            />
            <div className="p-2">
              <h1 className="text-white-100 font-bold text-2xl">
                {item.title}
              </h1>
              <p className="text-white-100 h-2/3 text-md mb-4 text-pretty">
                {item.description}
              </p>
              <div className="flex justify-between relative bottom-0 top-0">
                <div className="flex gap-2">
                  {item.tech.map((stack, i) => (
                    <img
                      key={stack.name}
                      src={stack.image}
                      alt={stack.name}
                      height={25}
                      width={25}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  {item.action.map((action) => (
                    <a key={action.name} href={action.url}>
                      <img
                        src={action.src}
                        width={25}
                        key={action.name}
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
