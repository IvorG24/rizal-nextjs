"use client";
import Education from "./sections/Education/page";
import Family from "./sections/Family/page";
import Banner from "./sections/Home/page";
import Literature from "./sections/Literature/page";
import LoveLife from "./sections/Lovelife/page";
import Timeline from "./sections/Timeline/page";
import Travels from "./sections/Travels/page";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeDotIndex, setActiveDotIndex] = useState(0); // State to manage the active dot index

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.clientHeight;
      const sections = [
        "home",
        "family",
        "lovelife",
        "timeline",
        "literature",
        "education",
        "travels",
      ]; // List of section ids

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;
          if (
            scrollPosition + windowHeight / 2 >= sectionTop &&
            scrollPosition < sectionBottom
          ) {
            setActiveDotIndex(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Banner />
      <Family />
      <LoveLife />
      <Timeline />
      <Literature />
      <Education />
      <Travels />

      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full m-1 cursor-pointer ${
              index === activeDotIndex ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </>
  );
}
