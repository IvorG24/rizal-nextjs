import React, { useState, useEffect } from "react";

const PageDots = () => {
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.clientHeight;
      const sections = [
        "home",
        "family",
        "timeline",
        "lovelife",
        "literature",
        "otherworks",
        "education",
      ];

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
    <div className="fixed top-1/4 lg:top-1/2 right-6 transform -translate-y-1/2 z-50">
      {[...Array(7)].map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 lg:w-4 lg:h-4 rounded-full m-1 cursor-pointer ${
            index === activeDotIndex ? "bg-yellow-500" : "bg-gray-400"
          }`}
          style={{ position: "absolute", top: `${index * 20}px` }} // Adjust positioning here
        />
      ))}
    </div>
  );
};

export default PageDots;
