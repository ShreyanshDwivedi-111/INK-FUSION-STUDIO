import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export default function FAQ() {
  const [answer, setAnswer] = useState({});

  const questions = [
    {
      id: "ans1",
      que: "Is it safe to get a tattoo at your studio?",
      ans: "Yes, safety is our top priority. We adhere to strict sterilization practices and use single-use, disposable needles to ensure a clean and safe environment for every client.",
    },
    {
      id: "ans2",
      que: "How do I schedule a tattoo appointment?",
      ans: "You can schedule an appointment by calling our studio at (555) 123-4567 or by visiting our website and filling out the appointment request form.",
    },
    {
      id: "ans3",
      que: "Can I bring my own design for a tattoo?",
      ans: "Absolutely! We welcome custom designs and encourage you to bring any reference images or ideas you have for your tattoo. Our artists will work with you to create a unique design that meets your vision.",
    },
    {
      id: "ans4",
      que: "How much will my tattoo cost?",
      ans: "The cost of a tattoo depends on various factors, including size, complexity, and placement. We offer free consultations where our artists can provide you with a price estimate based on your design.",
    },
    {
      id: "ans5",
      que: "Do you offer tattoo removal services?",
      ans: "Yes, we do offer tattoo removal services. Our studio uses state-of-the-art laser technology for safe and effective tattoo removal. Please contact us for more information and to schedule a consultation.",
    },
  ];

  const showAnswer = (id) => {
    setAnswer((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <section className="p-5 md:pt-9 md:pb-11 lg:pt-11 lg:pb-14 bg-white">
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView={"show"}
        className="flex justify-center items-start my-2"
      >
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-xl xl:text-2xl font-semibold mb-2 font-Raleway">
            FAQ:
          </h2>
          <ul className="flex flex-col font-Montserrat text-base xl:text-lg">
            {/* FAQ's */}
            {questions.map(({ id, que, ans }) => (
              <li key={id} className="my-2 shadow-md bg-white">
                <div>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => showAnswer(id)}
                  >
                    <div className="p-4 font-semibold">{que}</div>
                    <div className="p-4">
                      <ChevronDownIcon
                        className={`w-5 transition-transform transform duration-500 ${
                          answer[id] ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div
                    className={`border-l-2 border-gray-500 overflow-hidden transition-max-height duration-500 ${
                      answer[id] ? "max-h-40 ease-in" : "max-h-0 ease-out"
                    }`}
                  >
                    <p className="p-3 text-gray-900">{ans}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
