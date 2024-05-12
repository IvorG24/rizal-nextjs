import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";
const NavMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const { ref, inView } = useSectionInView("Home");
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerVariants = {
    hidden: {
      x: "-100%", // Initially off-screen to the left
    },
    visible: {
      x: 0, // Slide in to the left
      transition: {
        duration: 0.3, // Animation duration
        type: "tween", // Animation type
      },
    },
  };

  return (
    <>
      <div className="flex lg:hidden items-center justify-end h-full w-full">
        <MdMenu
          className="text-white text-3xl cursor-pointer hover:text-yellow-400 duration-300"
          onClick={toggleDrawer}
        />
        <Link href={"/"} className="fixed top-5 left-2 z-50">
          <Image
            src="/assets/rizal-image.png"
            height={10}
            width={50}
            alt="rizal word"
          />
        </Link>
      </div>
      {/* Drawer */}
      <motion.div
        className="fixed top-0 left-0 h-full w-full bg-black/90 z-50"
        variants={drawerVariants}
        initial="hidden"
        animate={isDrawerOpen ? "visible" : "hidden"}
      >
        <div className="flex justify-end">
          <MdOutlineCancel
            className="text-white text-3xl cursor-pointer hover:text-yellow-400 duration-300 m-4"
            onClick={toggleDrawer}
          />
        </div>
        {/* Drawer content */}
        <div className="flex flex-col text-white items-center justify-start pt-10 h-full">
          <Link
            href={"/"}
            onClick={toggleDrawer}
            className="fixed top-0 left-50 z-50"
          >
            <Image
              src="/assets/rizal-word.png"
              className=""
              height={10}
              width={150}
              alt="rizal word"
            />
          </Link>
          {links.map((item, index) => (
            <>
              <div key={index} className="flex flex-col gap-10 py-4">
                <Link
                  className="text-4xl text-yellow-500 hover:text-white  "
                  href={item.hash}
                  onClick={toggleDrawer}
                >
                  <motion.h1
                    className="text-4xl hover:animate-bounce duration-200"
                    initial={{ opacity: 0, y: 20 }} // Initial position and opacity
                    animate={{ opacity: 1, y: 0 }} // Target position and opacity
                    transition={{ delay: 0.5 }} // Delay before animation starts
                  >
                    {" "}
                    {item.name}
                  </motion.h1>
                </Link>
              </div>
            </>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default NavMenu;
