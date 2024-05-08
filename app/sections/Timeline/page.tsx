"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { experiencesData } from "@/lib/data";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { useInView } from "react-intersection-observer";
import { color } from "framer-motion";
function Timeline() {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  return (
    <section
      className="min-h-screen h-full bg-[#1c1917] w-full scroll-mt-28 mb-28 sm:mb-40 "
      id="timeline"
      ref={ref}
    >
      <VerticalTimeline lineColor="white" className="z-10">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="z-50"
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
              dateStyle={{
                color: "white",
              }}
              icon={item.icon}
              iconStyle={{
                background: "rgba(255, 255, 255, 0.15)",
                fontSize: "1.5rem",
                zIndex: "999",
                color: "white",
              }}
            >
              <h3 className="font-semibold text-black capitalize">
                {item.title}
              </h3>
              <p className="font-normal text-black  !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
