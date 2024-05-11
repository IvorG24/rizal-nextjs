"use client";
import React, { useEffect } from "react";
import { FamilyData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import Link from "next/link";
import FamilyCarousel from "./modules/FamilyCarousel";
import { Divider } from "@nextui-org/react";

function Family() {
  const { ref } = useSectionInView("Family");

  return (
    <section
      className="min-h-screen h-full w-full bg-black/90 text-white p-10 relative overflow-hidden "
      id="family"
      ref={ref}
    >
      <h1 className="text-6xl font-bold  pb-20 text-yellow-500">
        Pamilyang Rizal
      </h1>
      <div className="flex flex-col gap-y-20">
        <div className="flex justify-center gap-20">
          {FamilyData.slice(0, 2).map((item, index) => (
            <div key={index} className="relative inline-block w-60 h-60">
              <Image
                className="rounded-full object-cover w-full h-full shadow-2xl"
                src={item.src}
                alt="Image"
                width={200} // Set a fixed width
                height={200} // Set a fixed height
              />

              {/* Overlay for "Read More" text */}
              <h1 className="text-center text-2xl font-bold pt-4">
                {item.name}
              </h1>
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-full">
                <Link
                  href={`/${item.name}`}
                  className="text-white text-lg font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
        <FamilyCarousel />
      </div>
    </section>
  );
}

export default Family;
