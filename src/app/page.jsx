"use client";

import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

/* ========================= ANIMATION ========================= */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ========================= COMPONENT ========================= */

const Home = () => {
  return (
    <section className="relative h-full overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/8 blur-[140px]" />
      </div>

      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 w-full gap-8">
          {/* ─── Left Section: Text ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center xl:text-left order-2 xl:order-none max-w-[600px]"
          >
            {/* Status badge */}
            <motion.div variants={fadeUp} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/5 px-4 py-1.5 text-sm text-accent backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                Available for work
              </span>
            </motion.div>

            {/* Role */}
            <motion.p
              variants={fadeUp}
              className="text-sm uppercase tracking-widest text-accent mb-3"
            >
              Full Stack Engineer
            </motion.p>

            {/* Headline */}
            <motion.h1 variants={fadeUp} className="h1 mb-6">
              Hello I&apos;m <br />
              <span className="text-accent">Damilola John</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="max-w-[500px] mb-9 text-white/70 leading-relaxed mx-auto xl:mx-0"
            >
              I build scalable web applications, backend systems, and
              cross-platform mobile experiences. Turning complex problems into
              clean, performant solutions.
            </motion.p>

            {/* CTA Row */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <a
                href="https://damilola-resume.tiiny.site/Esan-Damilola.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center
                  items-center text-accent text-base hover:bg-accent
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* ─── Right Section: Photo ─── */}
          <div className="order-1 xl:order-none flex-1 flex justify-end">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
};

export default Home;
