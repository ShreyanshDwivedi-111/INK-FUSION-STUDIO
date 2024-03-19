import React from "react";
import img1 from "../images/Portfolio/img1.webp";
import img2 from "../images/Portfolio/img2.webp";
import img3 from "../images/Portfolio/img3.webp";
import img4 from "../images/Portfolio/img4.webp";
import img5 from "../images/Portfolio/img5.webp";
import img6 from "../images/Portfolio/img6.webp";
import img7 from "../images/Portfolio/img7.webp";
import img8 from "../images/Portfolio/img8.webp";
import img9 from "../images/Portfolio/img1.webp";
import Images from "./Images";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Portfolio() {
  const slides = [
    { src: img1 },
    { src: img2 },
    { src: img3 },
    { src: img4 },
    { src: img5 },
    { src: img6 },
    { src: img7 },
    { src: img8 },
    { src: img9 },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="portfolio"
      className="bg-secondary flex flex-col items-center pt-2 md:pt-3 lg:pt-5"
    >
      <motion.div variants={container} initial="hidden" whileInView={"show"} className="max-w-[100rem]">
        <div className="text-black text-center p-4 sm:p-8 md:p-12 lg:p-14 xl:p-26 pb-1 sm:pb-2 md:pb-3 lg:pb-4 xl:pb-5">
          <motion.h2
            variants={fadeIn("up")}
            className="font-Raleway font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-2"
          >
            OUR PORTFOLIO
          </motion.h2>
        </div>
        {/* Image Component */}
        <motion.div variants={fadeIn("up")} className="block">
          <Images slides={slides} />
        </motion.div>
      </motion.div>
    </section>
  );
}
