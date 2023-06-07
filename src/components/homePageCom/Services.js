import React from "react";
import "../css/Services.scss";
import robotic from "../assets/robotic.png";
import blockchain from "../assets/blockchain.png";
import ai from "../assets/ai.png";
import devops from "../assets/devops.png";
import datasci from "../assets/datasci.png";
import iot from "../assets/iot.png";
import seo from "../assets/seo.png";
const Services = () => {
  return (
    <>
      <section id="features" className="section-padding">
        <div className="container">
          <div className="section-header text-center ">
            <div className="section-title wow fadeInDown text-white display-4 fw-bold">
              Services
            </div>
            <div className="shape wow fadeInDown"></div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="box-item animated wow fadeInLeft">
                  <span className="icon-services">
                    <img src={blockchain} alt="" className="w-100" />
                  </span>
                  <div className="text">
                    <div className="fs-4 fw-bold">Blockchain Web 3</div>
                    <p className="mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <span className="icon-services">
                    <img src={ai} alt="" className="w-100" />
                  </span>
                  <div className="text">
                    <div className="fs-4 fw-bold">Artificial Intelligence</div>
                    <p className="mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInLeft"
                  data-wow-delay="0.9s"
                >
                  <span className="icon-services">
                    <img src={devops} alt="" className="w-100" />
                  </span>
                  <div className="text">
                    <div className="fs-4 fw-bold">DevOps</div>
                    <p className="mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12 bg-o">
              <div className="show-box animated wow fadeInUp  ">
                {/* <img src={robotic} alt="" /> */}
                <section className="main-container">
  <div className="main">
    <div className="big-circle">
      <div className="icon-block">
        <img src="https://ucarecdn.com/614bf107-8b04-45d2-9be6-1123d09b72ba/webdevicon.png" alt="web design icon" />
      </div>
      <div className="icon-block">
        <img src="https://ucarecdn.com/ffcb2c5d-1bfb-4a28-b52d-94ad412b1ced/gamedesignicon.png" alt="game design icon" />
      </div>
      <div className="icon-block">
        <img src="https://ucarecdn.com/37f45061-b881-47a3-985a-ebc6e6a8e81b/gamedevicon.png" alt="game dev icon" />
      </div>
      <div className="icon-block">
        <img src="https://ucarecdn.com/9a14f2fc-d7e7-46bf-aa1a-ee2e2210d425/uiuxicon.png" alt="ui-ux icon" />
      </div>
    </div>
    <div className="circle">
      <div className="icon-block">
        <img src="https://ucarecdn.com/ae76ecf5-1d3f-4edc-884c-dc2984976a7e/appicon.png" alt="app icon" />
      </div>
      <div className="icon-block">
        <img src="https://ucarecdn.com/2323ebfc-5b14-47ae-959a-191e82d0103a/blockchainicon.png" alt="blockchain icon" />
      </div>
      <div className="icon-block">
        <img src="https://ucarecdn.com/5e4802ac-8684-41f3-8657-1e0834d07abe/arvricon.png" alt="ar-vr icon" />
      </div>
      <div className="icon-block">
        <img src="https://ucarecdn.com/61a82adc-7eef-4e50-a7d5-8e11ef76ff31/artificialintelligenceicon.png" alt="artificial intelligence icon" />
      </div>
    </div>
    <div className="center-logo">
      <div className="fs-4 text-white">Coding Master</div>
    </div>
  </div>
</section>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-right">
                <div className="box-item animated wow fadeInRight">
                  <span className="icon-services">
                    <img src={seo} alt="" className="w-100" />
                  </span>
                  <div className="text">
                    <div className="fs-4 fw-bold">SEO</div>
                    <p className="mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <span className="icon-services">
                    <img src={datasci} alt="" className="w-100" />
                  </span>
                  <div className="text">
                    <div className="fs-4 fw-bold">Data Science</div>
                    <p className="mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <span className="icon-services">
                    <img src={iot} alt="" className="w-100" />
                  </span>
                  <div className="text">
                    <div className="fs-4 fw-bold">Internet of things</div>
                    <p className="mt-3">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
