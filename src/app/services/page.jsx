"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I build high-performance, scalable, and visually stunning websites tailored to your business needs. From sleek landing pages to complex web applications, I ensure a seamless user experience with modern technologies.",
    href: "",
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Crafting intuitive and aesthetically pleasing user interfaces that enhance engagement and usability. I focus on user-centric design principles to deliver seamless experiences across all devices.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Your brand’s identity starts with a strong logo. I create unique, memorable, and timeless logos that reflect your brand’s personality and leave a lasting impression.",
    href: "",
  },
  {
    num: "04",
    title: "Graphics Design",
    description:
      "Elevate your brand with stunning visuals that captivate your audience. From social media graphics to marketing materials, I bring creativity and precision to every design.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className='text-white/60'>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
