"use client";
import React, { useEffect } from "react";
import { FamilyData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import FamilyCarousel from "./modules/FamilyCarousel";
import { motion, useAnimation } from "framer-motion"; // Import motion from framer-motion
import { Divider } from "@nextui-org/react";

function Family() {
  const { ref, inView } = useSectionInView("Family"); // Get ref and inView from useSectionInView

  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
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
      className="min-h-screen h-full w-full bg-black/90 text-white p-10 relative overflow-hidden "
      id="family"
      ref={ref}
    >
      <motion.h1 // Animate the title
        className="text-4xl lg:text-6xl font-bold pb-20 text-center font-serif   text-yellow-500 z-40"
        variants={titleVariants} // Set animation variants
        initial="hidden" // Set initial animation state
        animate={controls} // Trigger animation when in view
        transition={{ duration: 0.5 }} // Set animation duration
      >
        Pamilyang Rizal
      </motion.h1>
      <div className="flex flex-col gap-y-20">
        <h1 className="text-2xl lg:text-4xl font-bold text-center text-white">
          Magulang
        </h1>
        <div className="flex justify-center gap-20">
          {FamilyData.slice(0, 2).map((item, index) => (
            <motion.div // Animate each family member card
              key={index}
              className="relative inline-block w-32 h-32 lg:w-60 lg:h-60"
              variants={cardVariants} // Set animation variants
              initial="hidden" // Set initial animation state
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Add delay to stagger animations
            >
              <Image
                className="rounded-full object-cover w-full h-full shadow-2xl"
                src={item.src}
                alt="Image"
                width={200} // Set a fixed width
                height={200} // Set a fixed height
              />

              {/* Overlay for "Read More" text */}
              <h1 className="text-center text-sm lg:text-2xl font-bold pt-4">
                {item.name}
              </h1>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full">
                <Link
                  href={`/${item.name}`}
                  className="font-bold text-2xl text-yellow-500 "
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <FamilyCarousel View={inView} />
      </div>
    </section>
  );
}

export default Family;
