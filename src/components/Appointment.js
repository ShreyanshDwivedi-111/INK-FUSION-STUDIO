import React from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import axios from "axios";
import { toast } from "react-toastify";

export default function Appointment({ setShowAppointmentForm }) {
  const handleAppointment = async (e) => {
    try {
      e.preventDefault();
      setShowAppointmentForm(false);
      const data = {
        service_id: process.env.REACT_APP_SERVICE_ID,
        template_id: process.env.REACT_APP_APPOINTMENT_TEMPLATE_ID,
        user_id: process.env.REACT_APP_USER_ID,
        template_params: {
          name: e.target.name.value,
          email: e.target.email.value,
          phone: e.target.phone.value,
          date: e.target.date.value,
          time: e.target.time.value,
          service: e.target.service.value,
          message: e.target.message.value,
        },
      };
      e.target.reset();
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      // console.log(res.data);
      toast.success("Appointment Booked!", {
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

  return (
    <div className="fixed inset-0 bg-black bg-opacity-35 backdrop-blur-sm z-[60] flex justify-center items-center overflow-y-auto">
      <motion.div
        variants={fadeIn("down")}
        initial="hidden"
        whileInView={"show"}
        className="max-w-lg mx-1 mt-10 sm:mt-16 mb-5 flex flex-col gap-3  overflow-hidden"
      >
        <div className="place-self-end">
          <button onClick={() => setShowAppointmentForm(false)}>
            <XMarkIcon className="w-7 text-white" />
          </button>
        </div>
        <div className="shadow-lg rounded-lg overflow-hidden">
          <div className="text-2xl py-4 px-6 bg-gray-700 text-white text-center font-bold uppercase">
            Book an Appointment
          </div>
          <form
            onSubmit={(e) => handleAppointment(e)}
            className="py-4 px-6 bg-white w-full sm:w-96 font-Montserrat text-base xl:text-lg"
          >
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline italic"
                id="name"
                name="name"
                type="text"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline italic"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline italic"
                id="phone"
                name="phone"
                type="tel"
                placeholder="Mobile"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row">
              <div className="w-full sm:w-1/2 sm:mr-2 mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline italic"
                  id="date"
                  name="date"
                  type="date"
                  required
                />
              </div>
              <div className="w-full sm:w-1/2 sm:ml-2 mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline italic"
                  id="time"
                  name="time"
                  type="time"
                  placeholder="Select a time"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <select
                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline flex justify-between items-center italic"
                id="service"
                required
                name="service"
              >
                <option value="">Services</option>
                <option value="Black & Gray">Black & Gray</option>
                <option value="Cover Up Tattoos">Cover Up Tattoos</option>
                <option value="Piercing">Piercing</option>
                <option value="Tattoo Removal">Tattoo Removal</option>
              </select>
            </div>
            <div className="mb-4">
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none italic focus:shadow-outline"
                id="message"
                name="message"
                rows={3}
                required
                placeholder="Enter any additional information"
                defaultValue={""}
              />
            </div>
            <div className="flex items-center justify-center mb-4">
              <button
                className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline text-md lg:text-lg 2xl:text-xl hover:text-white"
                type="submit"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
