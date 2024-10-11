"use client";
/* eslint-disable react/prop-types */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import { ImPlus } from "react-icons/im";

const EncryptButton = ({ targetText, cyclesPerLetter, shuffleTime, chars }) => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(targetText);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText
        .split("")
        .map((char, index) => {
          if (pos / cyclesPerLetter > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * chars.length);
          const randomChar = chars[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * cyclesPerLetter) {
        stopScramble();
      }
    }, shuffleTime);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(targetText);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-full border-[1px] border-neutral-500 bg-[#D1E8FF] px-2 py-1 font-mono text-xl font-bold uppercase text-black transition-colors hover:text-[#0D1117]"
    >
      <div className="relative z-10 flex items-center justify-around gap-9">
        <div className="flex pl-4 items-center justify-around gap-2">
          <FaLocationArrow className="text-slate-900" />
          <span>{text}</span>
        </div>
        <div className="bg-[#B9CEE2]  flex   z-0 rounded-full p-3">
          <ImPlus className="opacity-95 text-slate-900 rounded-full" />
        </div>
      </div>
    </motion.button>
  );
};

export default EncryptButton;
