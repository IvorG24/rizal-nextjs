"use client";
import React, { useState } from "react";
import { useSectionInView } from "@/lib/hooks";
import AccordionItem from "./modules/accordionitem";
import { accordionItems } from "@/lib/data";

function LoveLife() {
  const { ref } = useSectionInView("Lovelife");

  return (
    <section
      id="lovelife"
      ref={ref}
      className="min-h-screen h-full w-full flex flex-col items-center justify-center bg-black/90 text-white p-10"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                Naging Kasintahan Ni Rizal
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Tunay nga, si Dr. Jose Rizal, bilang isang manlalakbay at
                iskolar, ay nakatagpo ng maraming kababaihan sa kanyang mga
                paglalakbay sa ibat ibang bansa. Ilan sa mga kilalang babae na
                nakilala niya ay sina
              </p>
            </div>
          </div>
        </div>

        <div className="w-full grid  grid-cols-1 lg:grid-cols-2 gap-x-10">
          <div className="cols-span-1">
            {accordionItems.slice(0, 4).map((item, index) => (
              <AccordionItem
                key={index}
                index={index} // Pass index as a prop
                header={item.name}
                text={item.description}
              />
            ))}
          </div>
          <div className="cols-span-1">
            {accordionItems.slice(5, 8).map((item, index) => (
              <AccordionItem
                key={index}
                index={index} // Pass index as a prop
                header={item.name}
                text={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoveLife;
