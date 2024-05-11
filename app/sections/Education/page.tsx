"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import { Divider } from "@nextui-org/react";
import { EducationData } from "@/lib/data";
const Education = () => {
  const { ref } = useSectionInView("Education");
  return (
    <section
      id="education"
      ref={ref}
      className=" h-auto w-full p-10 bg-black/90 text-white"
    >
      Education Section
      <div className="flex justify-center items-center gap-x-10 w-full h-full">
        {EducationData.map((item, index) => (
          <div className="border-2">
            <p>Hell World</p>
            <h1>Hello mima ng bayan</h1>
            <div className="max-w-lg">
              <img
                className="max-w-sm hover:max-w-md duration-300"
                src="https://rizal.raphaelmarco.com/static/files/paintings/dapitan-church-curtains.jpg"
                alt=""
              />
            </div>
            <p>Lorem ipsum dolor </p>
            <Link href={"/"}>Hey</Link>
            <div className="h-96 border-r-3 border-white/50"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
