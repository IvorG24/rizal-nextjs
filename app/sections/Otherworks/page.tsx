"use client";
import React from "react";
import { useSectionInView } from "@/lib/hooks";
import { Tabs, Tab } from "@nextui-org/tabs";
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
      <h1 className="text-6xl font-bold text-center pb-20 text-white">
        Other Works
      </h1>
      <div className="flex w-full flex-col text-white items-center">
        <Tabs
          aria-label="Options"
          variant="underlined"
          classNames={{
            tabList:
              "gap-6 w-full relative rounded-none p-0 border-b border-divider",
            cursor: "w-full bg-[#ffff]",
            tab: "max-w-fit px-0 h-12 text-2xl",
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
            <Sculpture View={inView} />
          </Tab>

          <Tab key="etc" title="Etc">
            <h1 className="text-2xl font-bold text-center pb-20 text-white">
              Rizal Paintings
            </h1>
            <Etcworks View={inView} />
          </Tab>
        </Tabs>
      </div>
    </section>
  );
}

export default Otherworks;
