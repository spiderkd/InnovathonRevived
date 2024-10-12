"use client";
import { motion } from "framer-motion";

const SliderCard = ({ data }) => {
  return (
    <motion.div
      className="relative h-52 min-w-[230px] rounded-2xl shadow-md md:h-80 md:min-w-[240px]"
      layout
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, transition: { duration: 0.4 } }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <motion.img
        src={data.image}
        layoutId={data.image}
        className="absolute w-full h-full rounded-2xl object-cover brightness-75"
      />
      <motion.div className="absolute z-10 flex h-full items-end p-4">
        <motion.div>
          <motion.div
            layout
            className=" mb-2 h-[2px] w-3 rounded-full bg-white"
          ></motion.div>
          <motion.p layoutId={data.Number} className="text-xs text-slate-400">
            {data.Number}
          </motion.p>
          <motion.h1
            layoutId={data.title}
            className="text-xl leading-6 text-white"
          >
            {data.title}
          </motion.h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SliderCard;
