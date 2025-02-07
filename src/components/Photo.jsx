"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div>
      <motion.div>
        <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
          <Image
            src='/assets.pics.png'
            priority
            quality={100}
            fill
            alt="hero-image"
            className="object-contain"
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Photo
