import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { motion } from "framer-motion";
interface AccordionItemProps {
  index: number;
  header: string;
  text: string;
}

const AccordionItem = ({ header, text }: AccordionItemProps) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] lg:p-8">
      <div className="w-full flex flex-row items-center gap-x-6 text-black">
        <motion.div
          className="text-2xl"
          animate={{ rotate: active ? 180 : 0 }}
          transition={{ duration: 0.3 }} // Adjust transition duration as needed
        >
          <MdOutlineKeyboardArrowDown onClick={handleToggle} />
        </motion.div>{" "}
        <h4 className="mt-1 font-semibold z-50">{header}</h4>
      </div>
      <motion.div
        className="pl-[62px]"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
        transition={{ duration: 0.3 }} // Adjust transition duration as needed
        style={{ overflow: "hidden" }}
      >
        <p className="py-3 text-sm lg:text-md leading-relaxed text-body-color text-black/70">
          {text}
        </p>
      </motion.div>
    </div>
  );
};

export default AccordionItem;
