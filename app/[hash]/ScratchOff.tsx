"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ScratchOff = ({ name }: { name: string }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[linear-gradient(45deg,_#6BDEA6,_#38334F)]">
      {/* <img
        alt="Heatly"
        title="Heatly"
        width="120"
        height="36"
        decoding="async"
        data-nimg="1"
        className="h-8 sm:h-10 w-auto mb-12"
        src="https://www.heatly.com/images/heatly-logo-purple.svg"
      /> */}
      <div className="relative w-80 h-48 rounded-2xl shadow-2xl overflow-hidden">
        {/* The revealed name underneath */}
        <div className="absolute inset-0 bg-white flex items-center justify-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isRevealed ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
            className="text-center"
          >
            <p className="text-sm text-gray-500 mb-2">Your Secret Santa is</p>
            <p className="text-4xl font-bold text-[#38334]">{name}</p>
            <p className="text-6xl mt-4">🎁</p>
          </motion.div>
        </div>

        <motion.button
          className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-300 flex items-center justify-center cursor-pointer hover:brightness-110 transition-all"
          onClick={() => setIsRevealed(true)}
          initial={{ scale: 1 }}
          animate={
            isRevealed
              ? { scale: 0, opacity: 0, rotate: 10 }
              : { scale: 1, opacity: 1, rotate: 0 }
          }
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="text-center pointer-events-none">
            <p className="text-2xl font-bold text-gray-600 mb-2">
              Click to Reveal
            </p>
            {/* <p className="text-4xl">✨</p> */}
          </div>
        </motion.button>

        {/* Decorative border */}
        <div className="absolute inset-0 border-4 border-[#38334] rounded-2xl pointer-events-none" />
      </div>
    </div>
  );
};

export default ScratchOff;
