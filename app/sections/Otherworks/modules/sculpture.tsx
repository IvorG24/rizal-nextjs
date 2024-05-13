import React from "react";
import { SculptureData } from "@/lib/data";
import { motion } from "framer-motion";
import useWindowSize from "@/lib/windowsize";

interface SculptureProps {
  View: any;
}
const Sculptures = ({ View }: SculptureProps) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;
  return (
    <>
      {SculptureData.map((item, index) => (
        <motion.div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-3  `}
          initial={{
            opacity: 0,
            x: View ? 0 : isLargeScreen && index % 2 === 0 ? -100 : 100,
          }}
          animate={{ opacity: 1, x: View ? 0 : 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          {isLargeScreen ? (
            index % 2 === 0 ? (
              <>
                <motion.div className="col-span-1 p-10">
                  <img
                    className="w-full h-full rounded-xl"
                    src={item.src}
                    alt="rizal painting"
                  />
                </motion.div>
                <motion.div className="col-span-2 space-y-4 text-2xl p-10">
                  <div className="flex gap-x-4 items-center">
                    <h1 className="font-bold ">{item.title}</h1>
                    <h1 className="border-yellow-500 border-3 px-4 py-1 rounded-full">
                      Material : {item.material}
                    </h1>
                  </div>
                  <p>{item.description}</p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div className="col-span-2 space-y-4 text-2xl p-10">
                  <div className="flex gap-x-4 items-center">
                    <h1 className="font-bold ">{item.title}</h1>
                    <h1 className="border-yellow-500 border-3 px-4 py-1 rounded-full">
                      Material : {item.material}
                    </h1>
                  </div>
                  <p>{item.description}</p>
                </motion.div>
                <motion.div className="col-span-1 p-10">
                  <img
                    className="w-full h-full rounded-xl"
                    src={item.src}
                    alt="rizal painting"
                  />
                </motion.div>
              </>
            )
          ) : (
            <>
              <motion.div className="col-span-1 p-10">
                <img
                  className="w-full h-full rounded-xl"
                  src={item.src}
                  alt="rizal painting"
                />
              </motion.div>
              <motion.div className="col-span-2 space-y-4 text-2xl text-justify">
                <div className="flex gap-x-4">
                  <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center  text-justify">
                    <h1 className="font-bold text-lg lg:text-xl">
                      {item.title}
                    </h1>
                    <h1 className="border-yellow-500 border-3 px-4 py-1 rounded-full text-sm lg:text-md">
                      Material : {item.material}
                    </h1>
                  </div>
                </div>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            </>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default Sculptures;
