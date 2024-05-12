"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { LiteratureData } from "@/lib/data";
import { Image } from "@nextui-org/react";
import { motion } from "framer-motion";
import BookModal from "./modules/bookmodal";
import { useDisclosure } from "@nextui-org/react";
function Literature() {
  const { ref, inView } = useSectionInView("Literature");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedDescription, setSelectedDescription] = React.useState("");
  const [selectedTitle, setSelectedTitle] = React.useState("");

  const handleBookClick = (description: string, title: string) => {
    setSelectedDescription(description);
    setSelectedTitle(title);
    onOpen();
  };

  return (
    <section
      id="literature"
      ref={ref}
      className="min-h-screen h-full w-full relative text-white p-10 flex flex-col justify-around gap-y-10"
      style={{
        backgroundImage: "url('/assets/timelinebg.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Background Overlay - Conditionally render based on modal open state */}
      {isOpen && (
        <div className="absolute inset-0 bg-black opacity-10 z-10"></div>
      )}
      <div className="absolute inset-0 bg-black opacity-70 z-10"></div>
      <h1 className="text-4xl lg:text-6xl font-bold pb-20 text-center font-serif   text-yellow-500 z-40">
        Mga natatanging literatura ni Rizal
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 relative z-20">
        {LiteratureData.map((item, index) => (
          <div key={index} className="relative">
            <Image src="/assets/bookcover.jpg" className="" key={index} />
            <div
              onClick={() => handleBookClick(item.description, item.title)}
              className="absolute top-0 left-0 w-full cursor-pointer text-yellow-500  flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-80 text-4xl rounded-lg font-bold h-full z-50"
            >
              Explore More
            </div>
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <h1 className="text-white text-xl lg:text-2xl font-serif w-72 z-40">
                {item.title}
              </h1>
            </div>
          </div>
        ))}
      </div>

      {/* BookModal outside the map */}
      <BookModal
        open={isOpen}
        close={onClose}
        description={selectedDescription}
        title={selectedTitle}
      />
    </section>
  );
}

export default Literature;
