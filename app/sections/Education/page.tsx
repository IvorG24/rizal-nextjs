"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
const Education = () => {
  const { ref } = useSectionInView("Education");
  return (
    <section id="education" ref={ref} className="min-h-screen h-full w-full">
      Education Section
    </section>
  );
};

export default Education;
