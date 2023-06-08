import React from "react";
import "../css/Aine.scss";
import Button from "../button/Button";
import { AiFillStar } from "react-icons/ai";
// import seo from "../assets/seo.png"
const Aine = () => {
  return (
    <>
      <div className="bg-aine-sec">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 text-white ">
              <div className="fs-1 fw-bold ">
                You do the business, <br /> we'll handle the money
              </div>
              <div className="text-secondary mt-3 fw-bold">
                with the right credit card,you can improve your <br />
                financial life by building credit, earning rewards and <br />{" "}
                saving money. But with hundreds of credit cards on <br />
                the market
              </div>
              <div className="mt-3 mb-5">
                <Button label={"Get started"}></Button>
              </div>
            </div>
            <div className="col-lg-6 text-white d-flex justify-content-end flex-column">
        
              
                  {/* /// */}
                 <div className="bg-hover px-3 p-2">
                  <AiFillStar className="fs-1 icon-anie"/><span className="ms-3 fs-3">Rewards</span>
                  <div className="ms-5 ps-2">The best credit cards after some tantalizing combinations of promotions and prizes</div>
                 </div>
                  {/* /// */}
                     {/* /// */}
                 <div className="bg-hover px-3 p-2">
                  <AiFillStar className="fs-1 icon-anie"/><span className="ms-3 fs-3">Rewards</span>
                  <div className="ms-5 ps-2">The best credit cards after some tantalizing combinations of promotions and prizes</div>
                 </div>
                    {/* /// */}
                    <div className="bg-hover px-3 p-2">
                  <AiFillStar className="fs-1 icon-anie"/><span className="ms-3 fs-3">Rewards</span>
                  <div className="ms-5 ps-2">The best credit cards after some tantalizing combinations of promotions and prizes</div>
                 </div>
                </div>
              </div>
            </div>
          </div>
      
    </>
  );
};

export default Aine;
