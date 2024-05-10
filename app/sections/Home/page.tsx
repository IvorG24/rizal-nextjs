"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useSectionInView } from "@/lib/hooks";
import { FaArrowDownLong } from "react-icons/fa6";

function Banner() {
  const [linkVisible, setLinkVisible] = useState(true);
  const { ref, inView } = useSectionInView("Home");

  useEffect(() => {
    if (inView) {
      setLinkVisible(true);
    }
    if (!inView) {
      setLinkVisible(false);
    }
  }, [inView]);

  const handleLinkClick = () => {
    setLinkVisible(false);
  };

  return (
    <section
      className="min-h-screen h-full w-full relative overflow-hidden p-10"
      id="home"
      ref={ref}
    >
      <div className="absolute inset-0 z-40">
        <Image
          src={"/assets/gif-rizal.gif"}
          layout={"fill"}
          objectFit={"cover"}
          alt={`A cute animal!`}
          unoptimized={true}
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-80 z-40"></div>
      <div className=" relative z-40 w-full min-h-screen h-full flex flex-col items-center justify-center text-white gap-y-10">
        <h1 className=" text-center text-2xl lg:text-[80px]">
          Explore the life and works of Rizal
        </h1>
        <p className="text-center text-md lg:text-4xl mb-4">
          Unfolding the history
        </p>
        <Link className="" href={"/"}>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-black to-gray-500 text-white shadow-lg border text-lg"
          >
            Explore More
          </Button>
        </Link>
        {linkVisible && (
          <Link
            onClick={handleLinkClick}
            href="#family"
            className="fixed bottom-5 animate-pulse"
          >
            <FaArrowDownLong className="text-white z-50 text-3xl font-light" />
          </Link>
        )}
      </div>
    </section>
  );
}

export default Banner;
