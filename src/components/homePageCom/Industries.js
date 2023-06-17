import React from "react";
import "../css/Industries.scss";
import banking from "../assets/banking.png";
import education from "../assets/education.png";
import techincal from "../assets/technical.png";
import hospital from "../assets/hospital.png";
import binance from "../assets/binance.png";
const Industries = () => {
  return (
    <>
  <div className="industries-p">
      <div className="container">
        <div className="fs-1 text-white ">
          We build software you need to succeed
        </div>
      </div>
      <section class="hero-section-indus container pt-5">
        <div class="card-grid">
          <a href="#" class="card">
            <div
              class="card__bg"
              style={{
                backgroundImage:
                  "https://images.unsplash.com/photo-1658519309657-e026d3aa85b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
              }}
            ></div>
            <div class="card__content ">
              <p class="card__category fs-3">100+</p>
              <h3 class="card__heading text-uppercase">Professional</h3>
            </div>
          </a>

          <a href="#" class="card">
            <div
              class="card__bg"
              style={{
                backgroundImage:
                  "https://images.unsplash.com/photo-1658519309657-e026d3aa85b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
              }}
            ></div>
            <div class="card__content">
              <p class="card__category fs-3">150+</p>
              <h3 class="card__heading text-uppercase">Success stories</h3>
            </div>
          </a>

          <a href="#" class="card">
            <div
              class="card__bg"
              style={{
                backgroundImage:
                  "https://images.unsplash.com/photo-1658519309657-e026d3aa85b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
              }}
            ></div>
            <div class="card__content">
              <p class="card__category fs-3">10+</p>
              <h3 class="card__heading">Pattern</h3>
            </div>
          </a>
        </div>
      </section>
      </div>
    </>
  );
};

export default Industries;
