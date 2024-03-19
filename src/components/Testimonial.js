import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import quoteImg from "../images/Testimonial/quote.svg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function Testimonial() {
  const swiperRef = useRef();

  const testimonialData = [
    {
      name: "Samantha Smith",
      message:
        "I had an amazing experience at The Ink-Fusion Studio! The artist was incredibly talented and listened to exactly what I wanted. The result exceeded my expectations. I'll definitely be coming back for more!",
    },
    {
      name: "John Doe",
      message:
        "I've gotten multiple tattoos from The Ink-Fusion Studio and each time has been fantastic. The artists are professional, friendly, and extremely talented. I highly recommend them to anyone looking for a great tattoo experience.",
    },
    {
      name: "Emily Johnson",
      message:
        "Getting a tattoo at The Ink-Fusion Studio was such a great decision. The artist was so patient and understanding, and the studio was clean and welcoming. I couldn't be happier with the result!",
    },
    {
      name: "Michael Brown",
      message:
        "I've been wanting to get a tattoo for a while but was always nervous. The Ink-Fusion Studio made me feel so comfortable and at ease. The artist did an incredible job, and I'm so happy with my tattoo!",
    },
    {
      name: "Jessica Lee",
      message:
        "The artists at The Ink-Fusion Studio are truly talented. I came in with a vague idea of what I wanted, and they turned it into a beautiful piece of art. I couldn't be more thrilled with the result!",
    },
  ];

  return (
    <section className="bg-secondary p-5 md:p-10 lg:mb-14 lg:mt-11">
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        className="max-w-7xl mx-auto space-y-4 py-4 text-center font-Montserrat"
      >
        {/* <h2 className="text-2xl font-semibold text-gray-700">
          Hear What Our Customers Have To Say
        </h2> */}
        <div className="relative group">
          <div className="md:mx-14">
            <Swiper
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              loop={true}
              modules={[Navigation]}
              spaceBetween={50}
              centeredSlides={true}
            >
              {testimonialData.map((slide, index) => {
                const { name, message } = slide;
                return (
                  <SwiperSlide key={index}>
                    <div className="max-w-[1200px] mx-auto flex flex-col items-center lg:flex-row lg:items-start gap-x-[38px]">
                      <div className="w-[154px] h-[109px] mb-5">
                        <img src={quoteImg}  alt="quote" />
                      </div>
                      <div className="flex-1 lg:mt-[54px]">
                        <div className="text-lg lg:text-xl leading-normal mb-6 lg:mb-12">
                          {message}
                        </div>
                        <div className="text-base lg:text-lg font-semibold">
                          {name}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="absolute top-2/4 z-10 w-full md:group-hover:flex justify-between hidden">
            <div
              id="#prev-btn"
              className="p-2 bg-slate-100 rounded-full cursor-pointer mr-4"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </div>
            <div
              id="#next-btn"
              className="p-2 bg-slate-100 rounded-full cursor-pointer ml-4"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRightIcon className="h-5 w-5" />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
