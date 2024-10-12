"use client";
import { motion } from "framer-motion";

const items = {
  hidden: {
    y: "100%",
    transition: {
      ease: [0.455, 0.3, 0.515, 0.955],
      duration: 0.85,
    },
  },
  visible: {
    y: 0,
    transition: {
      ease: [0.455, 0.3, 0.515, 0.955],
      duration: 0.75,
    },
  },
};

const OtherInfo = ({ data }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col  my-auto"
    >
      <AnimatedText
        className="spacing overflow-hidden text-3xl text-white"
        data={data?.Number}
      />
      <motion.span layout className=" h-1 w-52 rounded-full bg-white" />
      <AnimatedText
        className="my-1 text-4xl font-semibold  md:my-5 md:text-6xl "
        data={data?.title}
      />
      <AnimatedText
        className="text-base mt-4  text-white"
        data={data?.description}
      />
    </motion.div>
  );
};

const AnimatedText = ({ data, className }) => {
  return (
    <span
      style={{
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      <motion.p className={`${className}`} variants={items} key={data}>
        {data}
      </motion.p>
    </span>
  );
};

export default OtherInfo;
