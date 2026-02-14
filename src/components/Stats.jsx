"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  {
    num: 5,
    suffix: "+",
    text: "Years of experience",
  },
  {
    num: 20,
    suffix: "+",
    text: "Projects completed",
  },
  {
    num: 500,
    suffix: "+",
    text: "Code commits",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 2.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Stats = () => {
  return (
    <section className="pt-8 pb-12 xl:pt-4 xl:pb-0">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[80vw] mx-auto xl:max-w-none"
        >
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 flex items-center gap-4 justify-center xl:justify-start overflow-hidden hover:border-accent/30 transition-all duration-500"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />

              <CountUp
                end={item.num}
                duration={5}
                delay={3}
                suffix={item.suffix}
                className="relative text-4xl xl:text-6xl font-extrabold text-accent"
              />
              <p className="relative max-w-[120px] leading-snug text-white/70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
