"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
function Travels() {
  const { ref } = useSectionInView("Travels");

  return (
    <section id="travels" ref={ref} className=" min-h-screen h-full w-full">
      Travels
    </section>
  );
}

export default Travels;
