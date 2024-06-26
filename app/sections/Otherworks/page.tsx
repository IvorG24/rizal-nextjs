"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { Tabs, Tab } from "@nextui-org/tabs";
import { ScrollShadow } from "@nextui-org/react";
import Paintings from "./modules/paintings";
import Sculpture from "./modules/sculpture";
import Etcworks from "./modules/otherwork";

function Otherworks() {
  const { ref, inView } = useSectionInView("Other-Works");

  return (
    <section
      id="otherworks"
      ref={ref}
      className=" h-auto w-full bg-black/90 text-white p-10"
    >
      <h1 className="text-4xl lg:text-6xl font-bold pb-10 text-center font-serif  text-yellow-500 z-40">
        Mga obra na ginawa ni Rizal
      </h1>
      <div className="flex w-full flex-col text-white h-full">
        <Tabs
          aria-label="Options"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-10 border-b border-divider",
            cursor: "w-full bg-[#ffff]",
            tab: "max-w-fit px-0 h-12 text-md lg:text-2xl",
            tabContent: "group-data-[selected=true]:text-[#ffff]",
          }}
        >
          {/* Tabs for the otherworks */}
          <Tab key="paintings" title="Paintings">
            <h1 className="text-2xl font-bold text-center pb-20 text-white">
              Rizal Paintings
            </h1>
            <Paintings View={inView} />
          </Tab>

          <Tab key="sculptures" title="Sculptures">
            <h1 className="text-2xl font-bold text-center pb-20 text-white">
              Rizal Sculpture
            </h1>
            <ScrollShadow
              orientation="vertical"
              className="w-full max-h-[1000px] "
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.1)",
              }}
            >
              <Sculpture View={inView} />
            </ScrollShadow>
          </Tab>

          <Tab key="etc" title="Etc">
            <h1 className="text-2xl font-bold text-center pb-20 text-white">
              Rizal other works
            </h1>
            <Etcworks View={inView} />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default Otherworks;
