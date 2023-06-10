import React from "react";
import "../css/Aine.scss";
import Button from "../button/Button";
import { Link } from "react-router-dom";
import tech from "../assets/tech.png";
// import seo from "../assets/seo.png"
const Aine = () => {
  return (
    <>
      <section className="about-section">
        <div className="container">
          <div className="row">
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title ">About Coding master</span>
                  <h2 className="text-white">
                    We are Creative Tech Enthusiast working since 2015
                  </h2>
                </div>
                <div className="text text-white">
                  Coding master works at Css3 Transition since last 3 years. We
                  are here to provide touch notch solution for your website or
                  web application that helps you to make your website look
                  attractive & efficient in handling by creating usefull plugins
                  thats you need.
                </div>
                <div className="text text-white">
                  We are here to serve you next level tutorial that currently in
                  trend to match you with your expertise. Css3 transition is a
                  learning website. where you can find many good quality content
                  related to web development and tutorials about plugins. here
                  we are using html, html5, css, css3, jquery & javascript along
                  with inspirational UI design layout by professionals by using
                  Photoshop and adobe allustrator.
                </div>
                <div className="btn-box">
                  <Link>
                    <Button label={"Explore more"} />
                  </Link>
                </div>
              </div>
            </div>

            {/* <!-- Image Column --> */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column wow fadeInLeft">
                {/* <div className="author-desc">
                        <h2>Rahul Kumar Yadav</h2>
                        <span>Web Developer</span>
                      </div> */}
                <div className="image-1 ">
                  <img title="" className="img-aine w-75 mt-3 " src={tech} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aine;
