import React from "react";
import "../css/Aine.scss";
import Button from "../button/Button";
import { AiFillStar } from "react-icons/ai";
import {MdVerifiedUser} from "react-icons/md"
import {BsFillSendFill} from "react-icons/bs"
// import seo from "../assets/seo.png"
const Aine = () => {
  return (
    <>
       <div className="bg-aine-sec py-5">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 text-white">
              <div className="fs-1 fw-bold hello-aine">
                You do the business, <br /> we'll handle the money
              </div>
              <div className="text-secondary mt-4 fw-bold hello-para">
                with the right credit card,you can improve your <br />
                financial life by building credit, earning rewards and <br />{" "}
                saving money. But with hundreds of credit cards on <br />
                the market
              </div>
              <div className="mt-4 mb-5 hello-btn">
                <Button label={"Get started"} className="btn-ok"></Button>
              </div>
            </div>
            <div className="col-lg-6 text-white d-flex  flex-column">
              {/* /// */}
              <div className="bg-hover  px-3 py-2">
                <AiFillStar className="fs-1 icon-anie" />
                <span className="ms-3 fs-3">Rewards</span>
                <div className="ms-5 ps-2 ">
                  The best credit cards after some tantalizing combinations of
                  promotions and prizes
                </div>
              </div>
              {/* /// */}
              <div className="bg-hover  px-3 py-2 mt-3">
                <MdVerifiedUser className="fs-1 icon-anie p-1" />
                <span className="ms-3 fs-3">100% Secured</span>
                <div className="ms-5 ps-2 ">
                  We take proactive steps make sure your information and transactions are secure
                </div>
              </div>
              {/* /// */}
              <div className="bg-hover  px-3 py-2 mt-3">
                <BsFillSendFill className="fs-1 icon-anie p-2" />
                <span className="ms-3 fs-3">Balance Transfer</span>
                <div className="ms-5 ps-2 ">
                  A balance transfer credit card can save you a lot of money in interest charges
                </div>
              </div>
              {/* /// */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aine;
