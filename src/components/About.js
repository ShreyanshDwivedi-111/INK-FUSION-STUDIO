import React from "react";
import about from "../images/About/about.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function About() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const showDetails =()=>{
    document.getElementById('aboutDetail2').classList.remove('hidden');
    document.getElementById('aboutDetail3').classList.remove('hidden');
    document.getElementById('aboutReadMore').classList.add('hidden');
  }

  return (
    // <section id="about bg-[#f9f9f9]">
    <section id="about">
      <motion.div variants={container} initial="hidden" whileInView={"show"} className="md:flex md:justify-center bg-secondary 2xl:gap-24 pt-4 sm:pt-8 md:pt-12 lg:pt-14 xl:pt-26 my-5 md:my-7 lg:my-11">
        <motion.div variants={fadeIn("right")} className="p-4 lg:p-8 flex items-center justify-center w-full md:max-w-lg">
          <img
            src={about}
            alt="About.jpg"
            className="object-center object-cover h-auto w-full aspect-[3/2] rounded-2xl max-w-md sm:max-w-lg sm:min-w-96"
          />
        </motion.div>
        <motion.div variants={fadeIn("left")} className="text-black p-4 lg:p-8 max-w-3xl flex flex-col justify-center">
          <h2 className="font-Raleway font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl p-2">
            ABOUT US
          </h2>
          <div className="p-2 font-Montserrat text-base xl:text-lg">
            <p id="aboutDetail1" className="py-2">
              At The Ink-Fusion Studio, we believe that tattoos are more than
              just ink on skin - they're symbols of self-expression and personal
              stories. Our studio is a creative space where art and passion come
              together to create unique, meaningful tattoos that last a
              lifetime.
            </p>
            <p id="aboutDetail2" className="py-2 hidden sm:block">
              Our team of experienced artists is dedicated to providing
              exceptional service and creating tattoos that exceed your
              expectations. Whether you're looking for a small, intricate design
              or a large, custom piece, we're here to bring your vision to life.
            </p>
            <p id="aboutDetail3" className="py-2 hidden sm:block">
              With a focus on professionalism and creativity, we strive to make
              your tattoo experience comfortable, memorable, and inspiring.
              Welcome to The Ink-Fusion Studio, where every tattoo tells a
              story.
            </p>
            <p id="aboutReadMore" className="my-2 sm:hidden border-b border-black w-fit cursor-pointer">
              <button onClick={showDetails}>Read more</button>
            </p>
            <p className="py-2">
              - <strong>Elena Stone</strong>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
