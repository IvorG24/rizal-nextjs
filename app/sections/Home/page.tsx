"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useSectionInView } from "@/lib/hooks";
function Home() {
  const { ref } = useSectionInView("Home");
  return (
    <section
      className="min-h-screen h-full w-full relative overflow-hidden"
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
      <div className=" relative z-40 w-full min-h-screen h-full flex flex-col items-center justify-center">
        <h1 className="text-white text-[60px]">
          Explore the life and works of Rizal
          <p className="text-center text-2xl mb-4">Unfolding the history</p>
        </h1>
        <Link className="" href={"/"}>
          <Button
            radius="full"
            className="bg-gradient-to-tr from-black to-gray-500 text-white shadow-lg border"
          >
            Explore More
          </Button>
        </Link>
      </div>{" "}
    </section>
  );
}

export default Home;
