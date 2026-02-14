"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="flex justify-center xl:justify-end w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]"
      >
        {/* Animated glow ring */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: [
                "15 120 25 25",
                "16 25 92 72",
                "4 250 22 22",
              ],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* Photo with floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-full h-full rounded-full overflow-hidden mix-blend-lighten"
        >
          <Image
            src="/assets/pics.png"
            priority
            quality={100}
            fill
            alt="Damilola John"
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
