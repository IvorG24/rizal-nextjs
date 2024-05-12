"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FamilyData } from "@/lib/data";
import Image from "next/image";
function Travels() {
  const pathname = usePathname();
  const decodedPathname = decodeURIComponent(pathname); // Decode the pathname
  const DataName = decodedPathname.replace(/\//g, ""); // Remove forward slashes
  return (
    <section
      id="id"
      className="min-h-screen h-full w-full flex flex-col justify-start lg:justify-center font-serif bg-black/90 text-white p-10"
    >
      {FamilyData.filter((item) => item.name == DataName).map(
        (filteredItem) => (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 pt-20">
              <div className=" col-span-1 flex flex-col  items-center">
                <h1 className="font-bold text-4xl lg:text-6xl pb-10">
                  {filteredItem.name}
                </h1>
                <Image
                  className="rounded-full w-72 h-72 lg:w-full lg:h-full  "
                  src={filteredItem.src}
                  alt="Image"
                  height={600}
                  width={600}
                />
              </div>
              <div className="col-span-2 flex justify-center">
                <Image
                  className="lg:block hidden "
                  src={"/assets/paperimage.png"}
                  alt="Image"
                  width={1500} // Set a fixed width
                  height={100} // Set a fixed height
                />
                <p className="absolute top-[45%] lg:top-1/4 lg:right-40 lg:w-1/2 text-sm w-full lg:text-2xl font-serif text-white/90 lg:text-black/90 pt-10 p-10 text-justify">
                  {filteredItem.description}
                </p>
              </div>
            </div>
          </>
        )
      )}
    </section>
  );
}

export default Travels;
