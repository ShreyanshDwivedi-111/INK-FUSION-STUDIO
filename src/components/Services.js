import React from "react";
import piercing from "../images/Services/Piercing.webp";
import blackGrey from "../images/Services/blackGreyTattoo.webp";
import coverUp from "../images/Services/coverUpTattoo.webp";
import tattooRemoval from "../images/Services/tattooRemoval.webp";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Services() {
  return (
    <section
      id="services"
      className="flex flex-col items-center pt-9 pb-11 bg-white"
    >
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        className="max-w-[100rem]"
      >
        <div className="text-black text-center p-4 sm:p-8 md:p-12 lg:p-14 xl:p-26 pb-1 sm:pb-2 md:pb-3 lg:pb-3 xl:pb-3">
          <h2 className="font-Raleway font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pt-2">
            SERVICES WE OFFER
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-5 md:p-10 lg:p-14 font-Montserrat">
          <div className="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full aspect-[3/2]"
                src={blackGrey}
                alt="Black & Grey"
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-lg sm:text-xl text-gray-700 font-bold">
                Black & Grey
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
            <div>
              <img
                className="object-center object-cover w-full h-auto aspect-[3/2]"
                src={coverUp}
                alt="Cover Up Tattoos"
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-lg sm:text-xl text-gray-700 font-bold">
                Cover Up Tattoos
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full aspect-[3/2]"
                src={piercing}
                alt="Piercing"
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-lg sm:text-xl text-gray-700 font-bold">
                Piercing
              </p>
            </div>
          </div>
          <div className="w-full bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
            <div>
              <img
                className="object-center object-cover h-auto w-full aspect-[3/2]"
                src={tattooRemoval}
                alt="Tattoo Removal"
              />
            </div>
            <div className="text-center py-8 sm:py-6">
              <p className="text-lg sm:text-xl text-gray-700 font-bold">
                Tattoo Removal
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
