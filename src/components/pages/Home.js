import React from "react";
import Header from "../Header";
import Hero from "../homePageCom/Hero";
import Services from "../homePageCom/Services";
import User from "../homePageCom/User";
import Aine from "../homePageCom/Aine";
import Slider from "../homePageCom/Slider";
import WhyChoose from "../homePageCom/WhyChoose";
import ContactForm from "../homePageCom/ContactForm";
import Testimonial from "../homePageCom/Testimonial";
import Industries from "../homePageCom/Industries";
import LetsStart from "../homePageCom/LetsStart";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Aine />
      {/* <User /> */}
     <Industries />
      <Testimonial />
      <LetsStart/>
      {/* <Slider /> */}
      <ContactForm />
    </>
  );
};

export default Home;
