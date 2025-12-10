
"use client";
import React from "react";
import { cn } from "../../utils/cn";
import { motion } from "motion/react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteorCount = number || 20;
  // Generate randoms for meteors at module scope
  const randoms = getMeteorRandoms(meteorCount);
  // Helper to generate randoms for meteors at module scope
  const meteorRandomsCache: { [count: number]: { delay: number; duration: number }[] } = {};
  function getMeteorRandoms(count: number) {
    if (!meteorRandomsCache[count]) {
      meteorRandomsCache[count] = Array.from({ length: count }, () => ({
        delay: Math.random() * 5,
        duration: Math.floor(Math.random() * (10 - 5) + 5),
      }));
    }
    return meteorRandomsCache[count];
  }
  const meteors = new Array(meteorCount).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        // Calculate position to evenly distribute meteors across container width
        const position = idx * (800 / meteorCount) - 400; // Spread across 800px range, centered

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-45 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-[50%] before:transform before:bg-linear-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "-40px", // Start above the container
              left: position + "px",
              animationDelay: randoms[idx].delay + "s", // Random delay between 0-5s
              animationDuration: randoms[idx].duration + "s", // Keep some randomness in duration
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};
