import React from 'react'
import "../css/Industries.scss"
import banking from "../assets/banking.png";
import education from "../assets/education.png";
import techincal from "../assets/technical.png";
import hospital from "../assets/hospital.png";
import binance from "../assets/binance.png";
const Industries = () => {
  return (
   <>
    <div className="bg-industries py-5">
      <div className="container">
        <div className="heading-industries fs-5 text-secondary">Industries we serves</div>
        <h2 className=" text-gradient">
          Managed IT Services customized for your industry
        </h2>
        <div className="feature pb-5 ">
          <div className="grid row-indus">
            <div className="row">
              <div className="col-lg-2">
                <div className="col-indus">
                  <img src={banking} alt="" className="w-50" />
                  <h6 className="mt-3 ">Banking</h6>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="col-indus">
                  <img src={techincal} alt="" className="w-50" />
                  <h6 className="mt-3 ">Manufacturing</h6>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="col-indus">
                  <img
                    src={education}
                    alt=""
                    className="w-50"
                   
                  />
                  <h6 className="mt-2 "> Education</h6>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="col-indus">
                  <img src={techincal} alt="" className="w-50" />
                  <h6 className="mt-3 ">Manufacturing</h6>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="col-indus">
                  <img src={hospital} alt="" className="w-50" />
                  <h6 className="mt-3 ">Healthcare</h6>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="col-indus">
                  <img src={banking} alt="" className="w-50" />
                  <h6 className="mt-3 ">Banking</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Industries