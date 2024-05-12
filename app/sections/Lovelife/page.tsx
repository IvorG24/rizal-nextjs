"use client";
import React, { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";
import AccordionItem from "./modules/accordionitem";
import { accordionItems } from "@/lib/data";
import { motion, useAnimation } from "framer-motion";
function LoveLife() {
  const { ref, inView } = useSectionInView("Lovelife");
  const controls = useAnimation(); // Animation controls

  // Animate when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [inView, controls]);
  return (
    <section
      id="lovelife"
      ref={ref}
      className="min-h-screen h-full w-full flex flex-col justify-center bg-black/90 text-white p-10"
    >
      <motion.div // Add motion to the section content
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        style={{ opacity: 0, y: 50 }}
        className="motion-div"
      >
        <h1 className="text-4xl lg:text-6xl font-bold pb-10 text-center font-serif  text-yellow-500">
          Mga naging kasintahan ni Rizal
        </h1>
        <p className="text-center text-body-color text-sm lg:text-lg pb-10 dark:text-dark-6 ">
          Tunay nga, si Dr. Jose Rizal, bilang isang manlalakbay at iskolar, ay
          nakatagpo ng maraming kababaihan sa kanyang mga paglalakbay sa ibat
          ibang bansa. Ilan sa mga kilalang babae na nakilala niya ay sina
        </p>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          <div className="cols-span-1">
            {accordionItems.slice(0, 4).map((item, index) => (
              <AccordionItem
                key={index}
                index={index} // Pass index as a prop
                header={item.name}
                text={item.description}
              />
            ))}
          </div>
          <div className="cols-span-1">
            {accordionItems.slice(5, 8).map((item, index) => (
              <AccordionItem
                key={index}
                index={index} // Pass index as a prop
                header={item.name}
                text={item.description}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default LoveLife;
