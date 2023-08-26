import React from "react";
import Footer from "../Footer/index.js";
import Map from "../Maps/Maps.js";
import ContactForm from "./ContactForm/index.js";
const AboutUs = () => {
  const location = { lat: 11.932668, lng: 79.825272 };
  return (
    <div className="mt-40 md:mt-36">
      <ContactForm />
      <h2 className="grid justify-center text-4xl leading-10 font-semibold tracking-normal py-32 capitalize">
        See Where we are located
      </h2>
      <Map location={location} />
      <Footer />
    </div>
  );
};

export default AboutUs;
