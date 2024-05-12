"use client";
import PageDots from "@/components/pagedot";
import Education from "./sections/Education/page";
import Family from "./sections/Family/page";
import Banner from "./sections/Home/page";
import Literature from "./sections/Literature/page";
import LoveLife from "./sections/Lovelife/page";
import Otherworks from "./sections/Otherworks/page";
import Timeline from "./sections/Timeline/page";

export default function Home() {
  return (
    <>
      <Banner />
      <Family />
      <Timeline />
      <LoveLife />
      <Literature />
      <Otherworks />
      <Education />
    </>
  );
}
