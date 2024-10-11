"use client";

/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const SlideTabsExample = () => {
  return (
    <div className="top-6 left-[60%] absolute z-[1000] overflow-hidden fixed ">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative  flex w-fit rounded-full border border-black bg-[#151A20] p-1"
    >
      <Tab setPosition={setPosition}>Home</Tab>

      <Tab setPosition={setPosition}>Problems</Tab>
      <Tab setPosition={setPosition}>Organizers</Tab>
      <Tab setPosition={setPosition}>Timeline</Tab>

      <Tab setPosition={setPosition}>Register</Tab>
      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base "
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-slate-300 md:h-12"
    />
  );
};
