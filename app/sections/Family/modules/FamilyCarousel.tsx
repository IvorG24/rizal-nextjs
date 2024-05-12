"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import { FamilyData } from "@/lib/data";
import { motion, useAnimation } from "framer-motion"; //
interface FamilyCrouselProps {
  View: any;
}
const FamilyCarousel = ({ View }: FamilyCrouselProps) => {
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const controls = useAnimation();
  useEffect(() => {
    if (View) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [View, controls]);
  return (
    <>
      <h1 className="text-2xl lg:text-4xl font-bold text-center text-white">
        Mga Kamag Anak
      </h1>
      <div className="flex justify-center gap-x-10 text-white ">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">
          <SwiperSlide className=" pb-16">
            {" "}
            <div className="flex justify-center gap-x-2 lg:gap-x-10">
              {FamilyData.slice(3, 7).map((item, index) => (
                <motion.div // Animate each family member card
                  key={index}
                  className="relative inline-block w-32 h-32 lg:w-60 lg:h-60"
                  variants={cardVariants} // Set animation variants
                  initial="hidden" // Set initial animation state
                  animate={controls} // Trigger animation when in view
                  transition={{ duration: 0.5, delay: index * 0.1 }} // Add delay to stagger animations
                >
                  <Image
                    className="rounded-full object-cover w-full h-full"
                    src={item.src}
                    alt="Image"
                    width={150} // Set a fixed width
                    height={150} // Set a fixed height
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
          </SwiperSlide>
          <SwiperSlide className="pb-16">
            {" "}
            <div className="flex justify-center gap-x-10 border-">
              {FamilyData.slice(8, 13).map((item, index) => (
                <motion.div
                  key={index}
                  className="relative inline-block w-24 h-32 lg:w-60 lg:h-60"
                  variants={cardVariants} // Set animation variants
                  initial="hidden" // Set initial animation state
                  animate={controls} // Trigger animation when in view
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Image
                    className="rounded-full object-cover w-full h-full"
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
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default FamilyCarousel;
