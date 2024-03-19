import React, { useState } from "react";
import logo from "../images/Nav/logo.webp"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Navbar({
  shrinkNav,
  setShowAppointmentForm,
  showAppointmentForm,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navContents = [
    { title: "HOME", link: "#home" },
    { title: "PORTFOLIO", link: "#portfolio" },
    { title: "SERVICES", link: "#services" },
    { title: "ABOUT", link: "#about" },
    { title: "CONTACT", link: "#contact" },
  ];

  return (
    <div className="w-full overflow-hidden bg-white fixed z-50 top-0 left-0 shadow-lg">
      <nav
        className={`p-3 md:gap-3 text-black flex justify-between md:items-center font-Montserrat font-normal ${
          shrinkNav && !menuOpen
            ? "py-2 sm:py-1 md:py-0 transition-all duration-300 ease-in"
            : "py-3"
        }`}
      >
        <div>
          <img
            className="h-10 md:h-16 lg:h-24 m-auto w-auto"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="w-full flex items-center justify-center text-center">
          <div
            className={`md:flex md:items-center lg:mr-4 xl:mr-7 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="text-center my-0 md:my-auto z-[-1] md:z-auto md:flex md:items-center justify-center">
              {navContents.map((content, index) => {
                return (
                  <li key={index} className="mx-4 my-6 md:my-0 group">
                    <AnchorLink
                      className="text-md lg:text-lg 2xl:text-xl"
                      href={content.link}
                    >
                      {content.title}
                    </AnchorLink>
                    <span className="hidden md:block w-0 h-[1px] bg-black transform group-hover:w-full opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  </li>
                );
              })}
              <li className="block mx-4 my-6 md:my-0 md:hidden">
                <button
                  className="text-md lg:text-lg 2xl:text-xl border p-1 border-black w-24 lg:w-32 hover:bg-gray-700 hover:text-white"
                  onClick={() => {setShowAppointmentForm(!showAppointmentForm);setMenuOpen(!menuOpen)}}
                >
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden mx-4 my-6 md:my-0 md:block">
          <button
            className="text-md lg:text-lg 2xl:text-xl border p-1 border-black w-24 lg:w-32 hover:bg-gray-700 hover:text-white"
            onClick={() => setShowAppointmentForm(!showAppointmentForm)}
          >
            Book Now
          </button>
        </div>
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative top-2"
        >
          {/* <div
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden relative top-2 ${menuOpen?"h-screen":null}`}
        > */}
          {!menuOpen ? (
            <Bars3Icon className="block h-6 w-6" />
          ) : (
            <XMarkIcon className="block h-6 w-6" />
          )}
        </div>
      </nav>
    </div>
  );
}
