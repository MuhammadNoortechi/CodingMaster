import React from "react";
import "../css/User.scss";
import { AiFillStar } from "react-icons/ai";
import {MdVerifiedUser} from "react-icons/md"
import {BsFillSendFill} from "react-icons/bs"
const User = () => {
  return (
    <>
      <div className="bg-user pb-3">
     
        <div className="container">
        <div className="row ">
          <div className="col-lg-4 ">
            <div className=" mt-3">
              <div className=" text-center">
                <div className="about_icon">
                  <i className="fa-solid fa-star fs-1 pt-2"></i>
                
                </div>
                <h5 className=" text-capitalize mt-3 font-weight-bold text-white pt-1 fs-2 fw-bold">
                Rewards
                </h5>
                <p className=" mt-1 mb-0 text-white fs-5 ">
                the best credit card offer some combinations of promotions and prizes
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className=" mt-3">
              <div className=" text-center">
                <div className="about_icon">
                <i class="fa-regular fa-file-shield fs-2 pt-2"></i>
            
                </div>
                <h5 className=" text-capitalize mt-3 font-weight-bold text-white pt-1 fs-2 fw-bold">
                 100% secured
                </h5>
                <p className=" mb-0 mt-1 text-white fs-5">
                  We take proactive steps make sure your information and transactions are secure
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className=" mt-3">
              <div className=" text-center ">
                <div className="about_icon">
                <i className="fa-solid fa-paper-plane fs-1 pt-2 pe-1"></i>
                  {/* <BsFillSendFill className="i"/> */}
                </div>
                <h5 className=" text-capitalize mt-3 font-weight-bold text-white pt-1 fs-2 fw-bold">
                  Balance Transfer
                </h5>
                <p className=" mb-0 mt-1  text-white fs-5">
                  A balance transfer credit card can save you alot of money in interest charges
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default User;
