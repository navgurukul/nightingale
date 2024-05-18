import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import Slider from "./Slider";
import PartnerSlider from "./PartnerSlider";
import SupporterSlider from "./SupporterSlider";
import { FiExternalLink } from "react-icons/fi";
import img1 from "./assets/image1.svg"
import img2 from "./assets/image2.svg"
import img3 from "./assets/image3.jpg"
import img4 from "./assets/image4.png"


import { Col, Container, Row } from "react-bootstrap";
import KeyFacilities from "./KeyFacilities";
import Digitallnitiatives from "./DigitalInitiatives";

function Home() {
  const history = useHistory();
  const screenWidth = window.innerWidth;
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
            <h2 className=" heading-line ">
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
           <div class="col-md-6" style={{padding: screenWidth >932&& "0px" }}>
            <img
              src={require("./assets/student.jpg").default}
              className="home-image"
            />
          </div>
        </div>
      </div>
      <section className="media-scroll-section d-flex flex-column justify-content-center">
        <div className="row"> 
          <div className="col-md-3"> 
            <h3>890+</h3>
            <p>
              students placed across various industries in tech
            </p>
          </div>
          <div className="col-md-3">
            <h3>₹2.8 LPA</h3>
            <p>
              avg. salary secured by students, the highest being 8 LPA
            </p>
          </div>
          <div className="col-md-3">
            <h3>95%</h3>
            <p>
              of our student strength consists of girls from marginalized communities
            </p>
          </div>
          <div className="col-md-3">
            <h3>₹23+ Crore</h3>
            <p>
              collectively earned annually by our Alumni 
            </p>
          </div>
        </div>
      </section>

       <section className=" d-flex flex-column align-items-center our-initiatives">
        <h3 className="text-center media-font ">
        Our Schools
        </h3>
      
        <div class="container mt-4">
          <div class="row gy-4"> 
            <div class="col-lg-6 col-md-6 col-sm-12">
                <div class="card shadow-1-strong"> 
                  <Link to="/job-course">
                    <img src={img1} class="card-image" alt="Placeholder Image"/>
                    <div class="card-body text-black"> 
                        <h4 class="card-title mt-4">School of Programming</h4>
                        <p class="card-text mb-3">Fully-funded course in software engineering with guaranteed jobs</p>
                    </div>
                    </Link>
                </div>
            </div>
            
            <div class="col-lg-6 col-md-6 col-sm-12"> 
                <div class="card shadow-1-strong">
                  <a href="/designer" target="_blank">
                      <img src={img2} class="card-image" alt="Placeholder Image" />
                      <div class="card-body text-black ">
                          <h4 class="card-title mt-4">School of Design</h4>
                          <p class="card-text mb-3">Fully-funded course in graphic design with guaranteed jobs</p>
                      </div>
                    </a>
                </div>
            </div>
          </div>
        
          <div class="row gy-4 mt-4"> 
              <div class="col-lg-6 col-md-6 col-sm-12"> 
                  <div class="card shadow-1-strong">
                    <a href="https://www.merakilearn.org/" target="_blank">
                      <img src={img3} class="card-image" alt="Placeholder Image" />
                      <div class="card-body text-black">
                          <h4 class="card-title mt-4">School of Business</h4>
                          <p class="card-text mb-3">Fully funded course in Business CRM with guaranteed jobs</p>
                      </div>
                    </a>
                  </div>
              </div>
              
              <div class="col-lg-6 col-md-6 col-sm-12"> 
                  <div class="card shadow-1-strong">
                    <a href="https://www.codeindiafellowship.org/" target="_blank">
                      <img src={img4} class="card-image" alt="Placeholder Image" />
                      <div class="card-body text-black">
                          <h4 class="card-title mt-4">School of Finance</h4>
                          <p class="card-text mb-3">Fully funded course in Finance with guaranteed jobs</p>
                      </div>
                    </a>
                  </div>
              </div>
          </div>
        </div>
      </section>


      <section className=" d-flex flex-column align-items-center our-initiatives">
        <h3 className="text-center media-font ">
          Digital Initiatives
        </h3>
        <Digitallnitiatives />
      </section>
  
      <section className=" d-flex flex-column align-items-center our-initiatives">
        <h3 className="text-center media-font ">
          Key Facilities at NavGurukul
        </h3>
        <KeyFacilities />
      </section>
      <section className="media-scroll-section   d-flex flex-column justify-content-center">
        <h3 className="align-self-center media-font ">
          In the <span className="BackColor">Media</span>
        </h3>
        <Slider />
      </section>

      <section className="our-partners text-center  d-flex flex-column ">
        <h3 className="align-self-center ">
          Our <span className="BackColor">Partners</span>
        </h3>
        {/* <hr className="align-self-center heading-hr" /> */}
        <PartnerSlider />

        <div class="d-flex flex-column align-items-center justify-content-center align-items-center mar-3">
          <h4 className=" "> Bring a change! </h4>
          <div class="d-flex justify-content-start"> 
            <button
                type="button"
                class="btn section-para regular-btn mx-3 career-button fixed-dimensions"
                onClick={(e) => {
                    e.preventDefault();
                    window.open("https://forms.gle/NfXdR1dg4zpSyYvZ9", "_blank");
                }}
            >
                Partner with us
            </button>

            <button
                type="button"
                class="btn section-para regular-btn mx-3 career-button fixed-dimensions"
                onClick={(e) => {
                    e.preventDefault();
                    window.open("/donate", "_blank");
                }}
            >
                CSR Enquiries
            </button>
          </div>
        </div>
      </section>

      <section className="d-flex home-page-supporters flex-column align-items-center pb-5 justify-content-center mar-3 ">
        <h3>
          Our <span className="BackColor">Supporters</span>
        </h3>
        {/* <hr className="heading-hr" /> */}
        <div class="container ">
          <SupporterSlider />
        </div>
      </section>
    </div>
  );
}

export default Home;
