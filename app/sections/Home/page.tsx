"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useSectionInView } from "@/lib/hooks";
import { motion, useAnimation } from "framer-motion";
import { FaArrowDownLong } from "react-icons/fa6";
import PageDots from "@/components/pagedot";

function Banner() {
  const [loading, setLoading] = useState(true); // Loading state
  const [linkVisible, setLinkVisible] = useState(true);
  const { ref, inView } = useSectionInView("Home");

  useEffect(() => {
    // Simulating data loading with setTimeout
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2900); // Adjust the timeout duration as per your requirement

    return () => clearTimeout(timeout); // Clear the timeout on component unmount
  }, []);

  useEffect(() => {
    setLinkVisible(inView);
  }, [inView]);

  const titleAnimationControl = useAnimation();
  const descriptionAnimationControl = useAnimation();

  const titleVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };

  const descriptionVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
  };
  const [animationCompleted, setAnimationCompleted] = useState(false);

  const onAnimationComplete = () => {
    setAnimationCompleted(true);
  };
  useEffect(() => {
    if (inView) {
      titleAnimationControl.start("visible");
      descriptionAnimationControl.start("visible");
    } else {
      titleAnimationControl.start("hidden");
      descriptionAnimationControl.start("hidden");
    }
  }, [inView, titleAnimationControl, descriptionAnimationControl]);

  const handleLinkClick = () => {
    setLinkVisible(false);
  };

  return (
    <section
      className="min-h-screen h-full w-full relative  p-10 font-serif"
      id="home"
      ref={ref}
    >
      <PageDots />
      <div className="absolute inset-0 z-40">
        <Image
          src={"/assets/Rizal Gif-1.gif"}
          layout={"fill"}
          objectFit={"cover"}
          alt={`Rizal`}
          unoptimized={true}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-50 z-40"></div>
      {loading ? (
        <>
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black">
            <motion.img
              src="/assets/flag.gif"
              alt="ph flag"
              initial={{ opacity: 0 }} // Initial opacity, width, and height
              animate={{ opacity: 1 }} // Target opacity
              transition={{ duration: 2.9 }} // Transition duration
            />
          </div>
        </>
      ) : (
        linkVisible && (
          <>
            {" "}
            <motion.div
              className="absolute inset-0 bg-white z-50"
              animate={{ opacity: 0 }} // Fade out the white overlay
              transition={{ duration: 1 }}
              onAnimationComplete={onAnimationComplete} // Triggered when animation completes
              style={{ display: animationCompleted ? "none" : "block" }} // Hide after animation
            />
            <motion.div
              className=" z-40 w-full h-full fixed top-[40%] right-0.5 lg:top-1/2 flex flex-col text-white gap-y-10"
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className=" text-center text-4xl lg:text-[100px]"
                variants={titleVariants}
                transition={{ duration: 0.5 }}
              >
                Explore the life and works of Rizal
              </motion.h1>
              <motion.p
                className="text-center text-xl lg:text-4xl mb-4"
                variants={descriptionVariants}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Unfolding the history
              </motion.p>
              <Link
                onClick={handleLinkClick}
                href="#family"
                className="fixed bottom-5 animate-pulse"
              >
                <FaArrowDownLong className="text-white z-50 text-3xl font-light" />
              </Link>
            </motion.div>
          </>
        )
      )}
    </section>
  );
}

export default Banner;
