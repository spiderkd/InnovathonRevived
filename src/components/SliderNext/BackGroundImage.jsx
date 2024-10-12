"use client";

/* eslint-disable react/prop-types */

// import React from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
// import { data, currentSliderData } from "./SliderNext";

const BackGroundImage = ({ transitionData, currentSliderData }) => {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.image}
          layoutId={transitionData.image}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.8 },
          }}
          src={transitionData.image}
          className="absolute top-0 left-0 w-full h-full z-10 brightness-50  object-cover"
        ></motion.img>
      )}
      <motion.img
        key={currentSliderData.data.image + "transition"}
        src={currentSliderData.data.image}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      ></motion.img>
    </>
  );
};

export default BackGroundImage;
