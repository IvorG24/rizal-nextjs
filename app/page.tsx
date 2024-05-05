import EducationSection from "./sections/Education/page";
import FamilySection from "./sections/Family/page";
import LiteratureSection from "./sections/Literature/page";
import LovelifeSection from "./sections/Lovelife/page";
import TimelineSection from "./sections/Timeline/page";
import TravelsSection from "./sections/Travels/page";

export default function Home() {
  return (
    <>
      <FamilySection />
      <LovelifeSection />
      <LiteratureSection />
      <TimelineSection />
      <EducationSection />
      <TravelsSection />
    </>
  );
}
