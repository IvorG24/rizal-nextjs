import Education from "./sections/Education/page";
import Family from "./sections/Family/page";
import Literature from "./sections/Literature/page";
import LoveLife from "./sections/Lovelife/page";
import Timeline from "./sections/Timeline/page";
import Travels from "./sections/Travels/page";

export default function Home() {
  return (
    <>
      <Family />
      <LoveLife />
      <Literature />
      <Timeline />
      <Education />
      <Travels />
    </>
  );
}
