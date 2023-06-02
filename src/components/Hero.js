import React from "react";
import "./css/Hero.scss";

import robot from "./assets/robot.png";
import User from "./user/User";
const Hero = () => {
  return (
    <>
      <div className="bg-herosec">
        <div className="container container-hero">
          <div className="wrapper pt-5">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center">
                <div className="">
                  <div className="hero-text">We Build</div>
                  <div className="hero-heading text-gradient display-5 mt-2 ">
                    Agile <span className="heading-span-tag ">Software</span>{" "}
                    <br />
                    Development Teams
                  </div>
                  <div className="text-white mt-3 sercice-hero-text">
                    Artificial Intelligence | Blockchain | React.Js | Angular |
                    Software Development{" "}
                  </div>
                  <div className="btnlinkhero">
                  <button className="btn  mt-4 btn-nav-link-hero rounded-0 fw-bold ">
                    Explore More
                  </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 d-flex justify-content-center align-items-center life">
                <div className="img-i d-flex justify-content-end align-items-center">
                  <img src={robot} alt="" className="w-100" />
                </div>
                <div className="img-bg w-50 h-50"></div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
      <User/>
    </>
  );
};

export default Hero;
