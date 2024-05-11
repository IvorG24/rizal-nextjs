"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import "react-vertical-timeline-component/style.min.css";
import { useInView } from "react-intersection-observer";

function Timeline() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <section
      className=" min-h-screen h-full p-10 bg-black/90 w-full scroll-mt-28 relative text-white"
      id="timeline"
      ref={ref}
      style={{
        backgroundImage: "url('/assets/timelinebg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 "></div>
      <div className="z-50 relative pb-20">
        <h1 className="text-6xl font-bold text-center pb-6 text-yellow-500">
          Rizal Timeline
        </h1>
      </div>
      <VerticalTimeline lineColor="white">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={inView}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "black",
                fontSize: "1.5rem",
                color: "white",
              }}
            >
              {/* Wrap title with motion component and apply animation */}
              <motion.h3
                className="font-semibold text-black capitalize"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {item.title}
              </motion.h3>
              {/* Wrap description with motion component and apply animation */}
              <motion.p
                className="!mt-1 !font-normal text-black/60 "
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {item.description}
              </motion.p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
