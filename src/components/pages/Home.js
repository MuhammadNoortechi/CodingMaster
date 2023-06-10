import React from "react";
import Header from "../Header";
import Hero from "../homePageCom/Hero";
import Services from "../homePageCom/Services";
import User from "../homePageCom/User";
import Aine from "../homePageCom/Aine";
import Slider from "../homePageCom/Slider";
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Aine />
      <User />
      <Slider/>
    </>
  );
};

export default Home;
