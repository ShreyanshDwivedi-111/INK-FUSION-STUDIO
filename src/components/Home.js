import React from "react";
import bg from "../images/Hero/Bg.webp";
import { motion } from "framer-motion";
import { fadeIn, widthAnimation } from "../variants";

export default function Home({ shrinkNav }) {

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  return (
    <section
      id="home"
      className={`${
        shrinkNav
          ? "mt-[3.75rem] sm:mt-[3.25rem] md:mt-[4.75rem] lg:mt-[6.75rem]"
          : "mt-[4rem] md:mt-[5.5rem] lg:mt-[7.5rem]"
      } w-full h-fit bg-no-repeat bg-cover border-b-2 border-gray-700`}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView={"show"}
        className="pt-14 grid grid-cols-2 justify-between font-Mestizo relative sm:pt-20 md:pt-24 md:h-[27rem] lg:pt-28 lg:h-[30rem] xl:pt-32 xl:h-[35rem] 2xl:h-[40rem] 2xl:pt-36"
      >
        <div className="flex flex-col w-72 pb-16 sm:w-96 md:w-[30rem] lg:w-[36rem] xl:w-[50rem] 2xl:w-[70rem]">
          <motion.h1
            variants={fadeIn("down")}
            className="text-xl text-red-600 pt-3 px-2 tracking-wider sm:px-7 sm:text-2xl md:px-11 md:text-3xl lg:text-4xl lg:px-16 xl:px-24 xl:text-5xl 2xl:px-40 2xl:text-6xl"
          >
            The
          </motion.h1>
          <motion.h1
            variants={fadeIn("down")}
            className="mt-0 my-2 text-5xl h-16 text-white px-2  tracking-wider sm:px-7 sm:text-6xl sm:mt-1 md:px-11 md:text-7xl lg:px-16 lg:text-8xl xl:px-24 xl:text-9xl 2xl:px-40 2xl:text-[9rem] 2xl:leading-4 2xl:mt-16"
          >
            Ink Fusion
          </motion.h1>
          <div className="ml-24 -mt-7 sm:-mt-4 sm:ml-[8.3rem] md:-mt-2 md:ml-[10.6rem] lg:mt-3 lg:ml-[14.4rem] xl:mt-10 xl:ml-[19.6rem] 2xl:ml-[24.8rem] 2xl:mt-0 w-[7.5rem] h-[1.5px] 2xl:h-[2px] sm:w-[10rem] md:w-[12.1rem] lg:w-[16.3rem] xl:w-[22.2rem] 2xl:w-[25.9rem]">
            {/*<hr className="w-2 border-red-600 border-[1.5px] 2xl:border-2 px-[3.7rem] sm:px-20 md:px-24 lg:px-32 xl:px-44 2xl:px-52" />*/}
            {/* <div
              className={`w-0 h-[1.5px] 2xl:h-[2px] bg-red-600 transform ${isTransitionComplete?"w-full":"w-0"} transition-all duration-500`}
            ></div> */}
            <motion.div
              variants={widthAnimation("0%", "100%", 1.6)}
              className="w-0 h-[1.5px] 2xl:h-[2px] bg-red-600"
            ></motion.div>
          </div>
          <motion.h1
            variants={fadeIn("down")}
            className="mt-0 my-2 px-2 text-4xl text-white tracking-wider sm:px-7 sm:text-5xl sm:mt-2 md:px-11 md:text-6xl lg:px-16 lg:text-7xl xl:px-24 xl:text-8xl 2xl:px-40 2xl:text-9xl"
          >
            Studio
          </motion.h1>
          <div className="px-2 -mt-3 font-Montserrat font-medium text-[0.5rem] text-white sm:px-7 sm:text-xs sm:-mt-2 md:px-11 md:text-sm lg:px-16 lg:text-lg xl:px-24 xl:text-xl 2xl:px-40 2xl:text-2xl">
            <motion.span variants={fadeIn()} className="pr-1">
              CRAFTING STORIES
            </motion.span>
            <motion.span variants={fadeIn()}>|</motion.span>
            <motion.span variants={fadeIn()} className="pl-1">
              INKING MEMORIES
            </motion.span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
