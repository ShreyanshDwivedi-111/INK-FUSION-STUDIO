import React from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import axios from "axios";
import { toast } from "react-toastify";

export default function Contact() {
  const handleContact = async (e) => {
    try {
      e.preventDefault();
      const data = {
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_CONTACT_TEMPLATE_ID,
        user_id: process.env.REACT_APP_USER_ID,
        template_params: {
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          message: e.target.message.value,
        },
      };
      e.target.reset();
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      // console.log(res.data);
      toast.success("Message Sent!", {
        position: "bottom-right",
      });
    } catch (error) {
      // console.log(error);
      e.target.reset();
      toast.error("An Error Occurred!", {
        position: "bottom-right",
      });
    }
  };

  const showMap = () => {
    document.getElementById("map").classList.remove("hidden");
    document.getElementById("contactShowMap").classList.add("hidden");
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="contact" className="mt-5 md:mt-7 lg:mt-11 bg-white">
      <motion.div variants={container} initial="hidden" whileInView={"show"}>
        <motion.div
          variants={fadeIn("up")}
          className="md:flex md:justify-center xl:gap-36"
        >
          <div className="p-4 pt-7 pb-0 md:p-12 flex items-center md:max-w-[22rem] lg:max-w-[25rem] xl:max-w-[30rem]">
            <h2 className="font-Raleway font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-2">
              GET IN TOUCH WITH US :
            </h2>
          </div>
          <div className="max-w-md p-4 md:p-12 flex md:items-center md:justify-end md:max-w-[30rem] lg:max-w-[33rem] xl:max-w-[40rem] font-Montserrat text-base xl:text-lg">
            <form
              onSubmit={(e) => handleContact(e)}
              className="w-[30rem] lg:w-[33rem] xl:w-[40rem]"
            >
              <fieldset>
                <div className="border-b-2 border-black m-2">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Write your name here"
                    className="bg-transparent outline-none py-3 italic w-full"
                    required
                  />
                </div>
                <div className="border-b-2 border-black m-2">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Write your mobile number here"
                    className="bg-transparent outline-none py-3 italic w-full"
                    required
                  />
                </div>
                <div className="border-b-2 border-black m-2">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Write your email here"
                    className="bg-transparent outline-none py-3 italic w-full"
                    required
                  />
                </div>
                <div className="border-b-2 border-black m-2">
                  <input
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    className="bg-transparent outline-none py-3 italic w-full"
                    required
                  />
                </div>
                <div className="m-2 mt-12">
                  <button
                    type="submit"
                    className="text-center text-md lg:text-lg 2xl:text-xl border p-1 border-black w-24 lg:w-32 hover:bg-white hover:text-black bg-black text-white"
                  >
                    SEND
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up")}
          className="md:flex md:flex-row-reverse md:justify-center md:items-center md:pt-7 xl:gap-36 bg-secondary pb-8 md:pb-10 lg:pb-12 xl:pb-20 font-Montserrat mt-8 md:mt-10 lg:mt-12 xl:mt-20"
        >
          <div className="p-4 md:p-12 max-w-sm xl:max-w-md text-base xl:text-lg">
            <p className="m-1">
              <strong>LA STORE</strong>
            </p>
            <p className="m-1 pb-4">
              Discover artistry and craftsmanship at our intimate tattoo studio
              in Los Angeles. Get inked with passion and precision at our cozy
              urban retreat.
            </p>
            <p className="m-1">
              <MapPinIcon className="w-5 inline-block mr-2" />
              <strong>918 Main Street, Los Angeles</strong>
            </p>
            <p className="m-1">
              <PhoneIcon className="w-5 inline-block mr-2" />
              <strong>(555) 123-4567</strong>
            </p>
            <p className="m-1">
              <EnvelopeIcon className="w-5 inline-block mr-2" />
              <strong>info@inkfusionstudio.com</strong>
            </p>
            <p
              id="contactShowMap"
              className="my-3 md:hidden border-b border-black w-fit cursor-pointer"
            >
              <button onClick={showMap}>Get location</button>
            </p>
          </div>
          <div id="map" className="hidden p-4 md:p-12 md:block">
            <div className="flex items-center justify-center">
              <iframe
                className="w-[290px] h-[290px] sm:w-[400px] sm:h-[300px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
                title="store map"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Los%20Angeles+(LA%20STORE)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              >
                <a href="https://www.gps.ie/">gps devices</a>
              </iframe>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
