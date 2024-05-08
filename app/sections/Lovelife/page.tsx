"use client";
import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { useSectionInView } from "@/lib/hooks";
function LoveLife() {
  const { ref } = useSectionInView("Lovelife");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const accordionItems = [
    { name: "SEGUNDA KATIGBAK", key: "1" },
    { name: "LENOR VALENZUELA", key: "2" },
    { name: "LENOR RIVERA", key: "3" },
    { name: "CONSUELO ORTIGA", key: "4" },
    { name: "O SEI SAN", key: "5" },
    { name: "GERTRUDE BECKETT", key: "6" },
    { name: "NELLIE BOUSTEAD", key: "7" },
    { name: "SUZANNE JACOBY", key: "8" },
    { name: "JOSEPHINE BRACKEN", key: "9" },
  ];

  return (
    <section
      id="lovelife"
      ref={ref}
      className="min-h-screen h-full w-full flex flex-col items-center justify-center bg-white text-black"
    >
      <h2 className="text-2xl font-bold mb-4">Lovelife Section</h2>
      <div className="transform -rotate-90">
        <Accordion variant="shadow" className="bg-gray-800 text-white">
          {accordionItems.map(({ name, key }, index) => (
            <AccordionItem
              key={key}
              aria-label={`Accordion ${index + 1}`}
              title={
                <div
                  className={`${
                    openIndex === index ? "text-left" : "text-center"
                  }`}
                >
                  {openIndex === index && (
                    <div className="flex items-center mt-2">
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        className="mr-1 text-base"
                      />
                      <span className="text-base">{index + 1}</span>
                    </div>
                  )}
                  {!openIndex || openIndex === index ? name : name}{" "}
                  {/* Ensure the title is displayed when the accordion is open or closed */}
                </div>
              }
              indicator={
                openIndex === index ? null : (
                  <span className="inline-block transform rotate-90 text-white">
                    <FontAwesomeIcon icon={faCircleDot} /> {`${index + 1}`}
                  </span>
                )
              }
              onPress={() => toggleAccordion(index)}
              className={`transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "w-64 transform rotate-90 py-4 ml-6"
                  : "w-64"
              }`}
            >
              <div>{defaultContent}</div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default LoveLife;
