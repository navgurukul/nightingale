// import React, { useState } from "react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import Slider from "./Slider";
import PartnerSlider from "./PartnerSlider";
import { supportByLinks, partners } from "./config/index.js";

function Home() {
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/supporters.json`,
    }).then((res) => {
      setSupports(res.data);
    });
  }, []);
  const [supports, setSupports] = useState([]);
  console.log(supports);
  // const [partner, setPartner] = useState(partners);
  const history = useHistory();
  console.log(partners, "komal");
  return (
    <div className="navgurukul-homepage">
      {/* <div className="container-fluid"> */}
      <div className="home-page-bg text-white home-page-ng ">
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
                <div className="d-flex home-page-hero-btns justify-content-sm-start mx-3 justify-content-center">
                  <button
                    type="button"
                    class="btn regular-btn section-para mt-0 mr-3 text-white"
                    onClick={() => {
                      history.push("/hiring");
                    }}
                  >
                    Students
                  </button>
                  <button
                    type="button"
                    class="btn regular-btn section-para mt-0 mr-0 text-white"
                    onClick={() => {
                      history.push("/partners");
                    }}
                  >
                    Partners
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <section className="media-scroll-section py-5 d-flex flex-column justify-content-center">
        <h3 className="align-self-center mb-3">In the Media</h3>
        <hr className="align-self-center heading-hr" />
        <Slider />
      </section>

      <section className="my-5 d-flex flex-column align-items-center our-initiatives">
        <h3 className="text-center  mb-3">Our Initiatives</h3>
        <hr className="heading-hr" />
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6 initiative-card-parent col-md-12 mb-4 mb-md-2">
              <div class="bg-image1 initiative-card card  shadow-1-strong">
                <Link to="/job-course">
                  <div className="Initiatives-bg-color">
                    <div class="card-body text-white  ">
                      <h3 class="card-title mb-3   card-main-text  card-heading ">
                        {" "}
                        Guaranteed Job Courses{" "}
                      </h3>
                      <p class="card-text section-para   card-dic">
                        Fully-funded courses in software engineering and design
                        with guaranteed jobs
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 initiative-card-parent mb-md-2">
              <div className="bg-image2 initiative-card card  shadow-1-strong">
                <a href="https://www.merakilearn.org/">
                  <div className="Initiatives-bg-color">
                    <div className="card-body text-white">
                      <h3 class="card-title mb-3  card-main-text  card-heading ">
                        Learn Online with Meraki{" "}
                      </h3>
                      <p class="card-text  section-para  card-dic ">
                        Get started with programming in Python, English and
                        Typing
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
                <Link to="/cif">
                  <div className="Initiatives-bg-color">
                    <div class="card-body text-white">
                      <h3 class="card-title mb-3   card-main-text card-heading">
                        {" "}
                        Code India Fellowships
                      </h3>
                      <p class="card-text section-para  card-dic">
                        Nurture programming skills in the next generation of
                        India’s youth with your expertise
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="col-lg-6 initiative-card-parent mb-md-2">
              <div class="bg-image4 initiative-card card shadow-1-strong">
                <Link to="/nglabs">
                  <div className="Initiatives-bg-color">
                    <div class="card-body text-white">
                      <h3 class="card-title mb-3   card-main-text card-heading">
                        {" "}
                        NG Labs{" "}
                      </h3>
                      <p class="card-text section-para  card-dic">
                        Experiments in non-profit space for otherwise for-profit
                        solutions such as non-profit Uber
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container text-left text-md-center w-50 my-5">
        <p className="section-para ">
          <span className="fw-bold">Techalms Consulting:</span> A talent group
          ready to fly in, solve your problems and leave by leaving happy faces
          at the clientplace{" "}
        </p>

        <p className="text-secondary text-center mb-0"> Coming soon.........</p>
      </section>

      <section className="container-fluid impact ">
        <div class=" py-0 py-md-5 pt-5 w-100">
          <div class="container d-flex flex-column text-center w-100">
            <h3 className="text-center  Impact-that-matters mb-3">
              Impact that matters!
              {/* <div className="underliner mt-2"></div> */}
            </h3>
            <hr className="heading-hr align-self-center" />
            <div class="row">
              <div class="col-lg-4 col-md-12 mb-lg-0">
                <span className="count d-block">160+</span>
                <p className="section-para"> Software Development Jobs</p>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <div className="software-development-img">
                  <img
                    className="mx-auto impactellipse"
                    src={require("./assets/impactellipse.png").default}
                  />
                  <span className="mt-md-5 mt-4 count d-block"> 5 </span>
                  <p className="section-para">States across India </p>
                </div>
              </div>
              <div class="col-lg-4 mb-4 mb-lg-0 ">
                <span className="count d-block">400+</span>
                <p className="section-para"> Online Students </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-partners text-center mx-6 my-0 mt-5 my-md-5 d-flex flex-column">
        <h3 className="align-self-center mb-3 ">Our Partners</h3>
        <hr className="align-self-center heading-hr" />
        <PartnerSlider />

        <div class="d-flex flex-column align-items-center justify-content-center align-items-center mb-5 ">
          <h3 className=" mb-4"> Bring a change! </h3>
          <button
            class="btn regular-btn our-partner-btn section-para text-white partner "
            type="button"
          >
            Partner with us
          </button>
        </div>
      </section>

      <section className="d-flex home-page-supporters py-5 flex-column align-items-center justify-content-center mb-0 mt-0 mt-md-5">
        <h3 className=" mb-3">Our Supporters</h3>
        <hr className="heading-hr" />
        <div class="container ">
          <div class="row d-flex align-items-center justify-content-center justify-content-md-start">
            {Object.keys(supports).length ? (
              Object.keys(supports).map((item) => {
                return (
                  <a href={supports[item].Website} className="supporters-link mx-5 py-3">
                    <div class="col d-flex justify-content-center">
                      <img className="logo-img" src={supports[item].Logo} />
                    </div>
                  </a>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
// (
//
// )
