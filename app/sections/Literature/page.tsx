"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
function Literature() {
  const { ref } = useSectionInView("Literature");

  return (
    <section id="literature ref={ref}" className=" min-h-screen h-full w-full">
      Lovelife Section
    </section>
  );
}

export default Literature;
