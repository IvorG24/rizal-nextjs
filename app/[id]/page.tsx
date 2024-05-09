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
      className="min-h-screen h-full w-full flex flex-col justify-center bg-black/90 text-white p-10"
    >
      {FamilyData.filter((item) => item.name == DataName).map(
        (filteredItem) => (
          <>
            <div className="grid grid-cols-3 pt-20">
              <div className=" col-span-1 flex flex-col  items-center">
                <h1 className="font-bold text-4xl pb-10">
                  {filteredItem.name}
                </h1>
                <Image
                  className="rounded-full object-cover w-3/4 h-full"
                  src={filteredItem.src}
                  alt="Image"
                  width={60} // Set a fixed width
                  height={60} // Set a fixed height
                />
              </div>
              <div className="col-span-2 flex justify-center">
                <div>
                  <Image
                    className=" w-full h-full"
                    src={"/assets/paperimage.png"}
                    alt="Image"
                    width={200} // Set a fixed width
                    height={200} // Set a fixed height
                  />
                  <p className="absolute top-1/4 right-40 w-1/2 text-2xl text-black/90 pt-10">
                    {filteredItem.description}
                  </p>
                </div>
              </div>
            </div>
          </>
        )
      )}
    </section>
  );
}

export default Travels;