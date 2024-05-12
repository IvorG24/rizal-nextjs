"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Import motion from framer-motion
import { useSectionInView } from "@/lib/hooks";
import Link from "next/link";
import { EducationData } from "@/lib/data";
import { ScrollShadow } from "@nextui-org/react";

const Education = () => {
  const { ref, inView } = useSectionInView("Education");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const animationControl = useAnimation(); // Create animation controls

  // Animation variants
  const itemVariants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -100, opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      animationControl.start("visible");
    } else {
      animationControl.start("hidden");
    }
  }, [animationControl, inView]);

  return (
    <section
      id="education"
      ref={ref}
      className="h-auto w-full bg-black/90 text-white p-10 "
    >
      <h1 className="text-4xl lg:text-6xl font-bold pb-20 text-center font-serif  lg:text-start text-yellow-500 z-40">
        Edukasyon ni Rizal
      </h1>
      <div className="flex justify-center items-center w-full h-full">
        <ScrollShadow
          orientation="horizontal"
          className="max-w-[1900px] max-h-[1000px] flex gap-x-10 items-center "
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.1)",
          }}
        >
          {EducationData.map((item, index) => (
            <motion.div // Wrap the item with motion.div
              key={index}
              className="py-10 space-y-6 "
              initial="hidden" // Set initial animation state
              animate={animationControl} // Pass animation control to animate prop
              variants={itemVariants} // Set animation variants
              transition={{ duration: 0.5, delay: index * 0.1 }} // Animation duration and delay
            >
              <p className="text-md lg:text-xl">{item.Date}</p>
              <h1 className="text-lg lg:text-2xl font-bold">{item.title}</h1>
              <div className="max-w-lg">
                <img
                  className={`max-w-sm rounded-lg transition-transform ${
                    hoveredIndex === index ? "transform scale-210" : ""
                  }`}
                  src={item.src}
                  alt=""
                />
              </div>
              <p className="text-xl text-white/50">{item.University}</p>
              <Link
                className="text-blue-500"
                href={item.Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read More
              </Link>
            </motion.div>
          ))}
        </ScrollShadow>
      </div>
    </section>
  );
};

export default Education;
