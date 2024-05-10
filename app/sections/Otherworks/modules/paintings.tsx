import React from "react";
import { PaintingsData } from "@/lib/data";
import { motion } from "framer-motion";
import useWindowSize from "@/lib/windowsize";

interface PaintingsProps {
  View: any;
}
const Paintings = ({ View }: PaintingsProps) => {
  const { width } = useWindowSize();
  const isLargeScreen = width >= 1024;
  return (
    <>
      {PaintingsData.map((item, index) => (
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
                  <img src={item.src} alt="rizal painting" />
                </motion.div>
                <motion.div className="col-span-2 space-y-4 text-2xl p-10">
                  <h1 className="font-bold">{item.title}</h1>
                  <h1>Material : {item.material}</h1>
                  <p>{item.description}</p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div className="col-span-2 space-y-4 text-2xl p-10">
                  <h1 className="font-bold">{item.title}</h1>
                  <h1>Material : {item.material}</h1>
                  <p>{item.description}</p>
                </motion.div>
                <motion.div className="col-span-1 p-10">
                  <img src={item.src} alt="rizal painting" />
                </motion.div>
              </>
            )
          ) : (
            <>
              <motion.div className="col-span-1 p-10">
                <img src={item.src} alt="rizal painting" />
              </motion.div>
              <motion.div className="col-span-2 space-y-4 text-2xl p-10">
                <h1 className="font-bold">{item.title}</h1>
                <h1>Material : {item.material}</h1>
                <p>{item.description}</p>
              </motion.div>
            </>
          )}
        </motion.div>
      ))}
    </>
  );
};

export default Paintings;
