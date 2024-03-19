import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Appointment from "./components/Appointment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [shrinkNav, setShrinkNav] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const shrinkNavbar = () => {
    if (window.scrollY >= 90) {
      setShrinkNav(true);
    } else {
      setShrinkNav(false);
    }
  };

  window.addEventListener("scroll", shrinkNavbar);

  return (
    <div
      className={`App ${
        showAppointmentForm ? "fixed overflow-y-scroll w-screen" : ""
      } overflow-x-hidden scroll-smooth`}
    >
      <div>
        <Navbar
          shrinkNav={shrinkNav}
          setShrinkNav={setShrinkNav}
          showAppointmentForm={showAppointmentForm}
          setShowAppointmentForm={setShowAppointmentForm}
        />
        {showAppointmentForm && (
          <Appointment setShowAppointmentForm={setShowAppointmentForm} />
        )}
        <Home shrinkNav={shrinkNav} />
        <Portfolio />
        <Services />
        <Testimonial />
        <FAQ />
        <About />
        <Contact />
        <Footer />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
