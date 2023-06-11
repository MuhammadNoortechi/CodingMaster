import React from "react";
import Header from "../Header";
import Hero from "../homePageCom/Hero";
import Services from "../homePageCom/Services";
import User from "../homePageCom/User";
import Aine from "../homePageCom/Aine";
import Slider from "../homePageCom/Slider";
import WhyChoose from "../homePageCom/WhyChoose";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Aine />
      <User />
      {/* <Slider/> */}
      <WhyChoose/>
    </>
  );
};

export default Home;
