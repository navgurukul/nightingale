import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import Slider from "./Slider";
import PartnerSlider from "./PartnerSlider";
import SupporterSlider from "./SupporterSlider";
import { FiExternalLink } from "react-icons/fi";

import { Col, Container, Row } from "react-bootstrap";

function Home() {
  const history = useHistory();
  return (
    <div className="navgurukul-homepage ">
      {/* <div className="home-page-bg text-white home-page-ng ">
        <div class="rgba-black-strong">
          <div className="container">
            <div class="row ">
              <div class="col-lg-12 homepage-hero-data mt-5">
                <h2 class="  home-page-hero-section-data mb-3">
                  {" "}
                  The Gurukul for the New Age India and its New Generation{" "}
                </h2>
                <p className="mt-0 section-para home-page-hero-section-data-p mb-3">
                  {" "}
                  We are a non-profit dedicated to bring affordable tech
                  education to underprivileged girls in India
                </p>
              </div>
            </div>
          </div>
        </div> */}
      <div className="">
        <div class="row">
          <div className="col-md-1"></div>
          <div class="col-md head-div ">
            <h2 className="heading-line ">
              The <span className="text-primary">Gurukul</span> for the <br />
              <span className="BgColor"> New Age India</span> and its New
              Generation{" "}
            </h2>{" "}
            <p className="font para-line">
              We are a non-profit dedicated to bring affordable tech education
              to underprivileged girls in India.{" "}
            </p>
          </div>
          <div className="col-md-1"></div>
          <div class="col-md-7 ">
            <img
              src={require("./assets/student.jpg").default}
              className="home-image"
            />
          </div>
        </div>
      </div>

      <section className="media-scroll-section   d-flex flex-column justify-content-center">
        <h3 className="align-self-center media-font ">
          In the <span className="BackColor">Media</span>
        </h3>
        <Slider />
      </section>
      <section className=" d-flex flex-column align-items-center our-initiatives">
        <h3 className="text-center media-font ">
          Our <span className="BackColor">Initiatives</span>
        </h3>
        {/* <hr className="heading-hr" /> */}
        <div class="container mar-3">
          <div class="row">
            <div class="col-lg-6 initiative-card-parent col-md-12   ">
              <div class="bg-image1 initiative-card card  shadow-1-strong rgba-black-strong">
                <Link to="/job-course">
                  <div className="Initiatives-bg-color rgba-black-strong">
                    <div
                      class="card-body text-white  "
                      title="Guaranteed Job Courses"
                    >
                      <h4 class="card-title mb-1   card-main-text  card-heading ">
                        <span className="BgColor">
                          {" "}
                          School of Programming{" "}
                        </span>
                      </h4>
                      <p class="card-text section-para card-dic ">
                        Fully-funded one year courses in software engineering with
                        guaranteed jobs
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 initiative-card-parent mb-md-2">
              <div className="bg-image2 initiative-card card  shadow-1-strong">
                <a href="/designer" target="_blank">
                <div className="Initiatives-bg-color rgba-black-strong">
                    <div className="card-body text-white ">
                      <div
                        className="d-flex align-items-end "
                        title="Learn Online with Meraki"
                      >
                        <h4 class="card-title mb-1  card-main-text text-center card-heading ">
                          <span className="BgColor">
                            School of Design{" "}
                          </span>
                        </h4>
                      </div>
                      <p class="card-text  section-para  card-dic ">
                        Fully-funded one year course in graphic design with guaranteed jobs
                      </p>
                    </div>
                  </div>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-4">
          <div class="row">
            <div class="col-lg-6 initiative-card-parent col-md-12 mb-4 mb-md-2">
              <div class="bg-image3 initiative-card card shadow-1-strong">
                <a href="https://www.merakilearn.org/" target="_blank">
                  <div className="Initiatives-bg-color rgba-black-strong">
                    <div className="card-body text-white ">
                      <div
                        className="d-flex align-items-end "
                        title="Learn Online with Meraki"
                      >
                        <h4 class="card-title mb-1  card-main-text text-center card-heading ">
                          <span className="BgColor">
                            Learn Online with Meraki{" "}
                          </span> 
                        </h4>
                      </div>
                      <p class="card-text  section-para  card-dic ">
                        Get started with programming in Python, English and Typing at the comfort of your home
                      </p>
                    </div>
                  </div>
                </a>{" "}
              </div>
            </div>

            <div class="col-lg-6 initiative-card-parent mb-md-2">
              <div class="bg-image4 initiative-card card shadow-1-strong">
                <a href="https://www.codeindiafellowship.org/" target="_blank">
                  <div className="Initiatives-bg-color rgba-black-strong">
                    <div
                      class="card-body text-white"
                      title="Code India Fellowships"
                    >
                      <h4 class="card-title mb-1   card-main-text card-heading">
                        <span className="BgColor">
                          Code India Fellowships
                        </span>
                      </h4>
                      <p class="card-text section-para  card-dic">
                        Nurture programming skills in the next generation
                        of India’s youth with your expertise
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >

      <section className="our-partners text-center  d-flex flex-column ">
        <h3 className="align-self-center ">
          Our <span className="BackColor">Partners</span>
        </h3>
        <PartnerSlider />

        <div class="d-flex flex-column align-items-center justify-content-center align-items-center mar-3">
          <h4 className=" "> Bring a change! </h4>
          <button
            class="btn regular-btn our-partner-btn section-para text-white  "
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://forms.gle/NfXdR1dg4zpSyYvZ9", "_blank");
            }}
          >
            Partner with us
          </button>
        </div>
      </section>

      <section className="d-flex home-page-supporters flex-column align-items-center pb-5 justify-content-center mar-3 ">
        <h3>
          Our <span className="BackColor">Supporters</span>
        </h3>
        <div class="container ">
          <SupporterSlider />
        </div>
      </section>
    </div >
  );
}

export default Home;
