import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Slider from "./Slider";
import PartnerSlider from "./PartnerSlider";
import { supportByLinks, partners } from "./config/index.js";

function Home() {
  const [supports, setSupports] = useState(supportByLinks);
  const [partner, setPartner] = useState(partners);
  console.log(partners, "komal");
  return (
    <div className="navgurukul-homepage">
      {/* <div className="container-fluid"> */}
      <div className="home-page-bg text-white home-page-ng ">
        <div class="rgba-black-strong">
          <div className="container">
            <div class="row ">
              <div class="col-lg-12 mt-5  ">
                <h2 class="h1-responsive section-head fs-2.6 home-page-hero-section-data ">
                  {" "}
                  The Gurukul for the New Age India and its New Generation{" "}
                </h2>
                <p className="mt-3 section-para home-page-hero-section-data-p">
                  {" "}
                  We are a non-profit dedicated to bring affordable tech
                  education to underprivileged girls in India
                </p>
                <Link to="/hiring">
                  <button
                    type="button"
                    class="btn ng-labs-btn section-para mt-2 mr-2 text-white "
                  >
                    Students
                  </button>
                </Link>
                <Link to="/partners">
                  <button
                    type="button"
                    class="btn ng-labs-btn section-para mt-2 mr-2 text-white"
                    style={{ marginLeft: "10px" }}
                  >
                    Partners
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <section className="media-scroll-section py-5 d-flex flex-column justify-content-center">
        <h2 className="align-self-center section-head ">In the Media</h2>
        <hr className="mt-2 mb-0 align-self-center heading-hr" />
        <Slider />
      </section>

      <section className="my-5 our-initiatives">
        <h2 className="text-center section-head">Our Initiatives</h2>
        <hr className="heading-hr" />
        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div class="bg-image1 card  shadow-1-strong">
                <Link to="/job-course">
                  <div className="Initiatives-bg-color">
                    <div class="card-body text-white  ">
                      <h5 class="card-title section-head card-main-text  card-heading ">
                        {" "}
                        Guaranteed Job Courses{" "}
                      </h5>
                      <p class="card-text section-para  mt-2 card-dic">
                        Fully-funded courses in software engineering and design
                        with guaranteed jobs
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 mb-6 mb-lg-0">
              <div className="bg-image2 card  shadow-1-strong">
                <a href="https://www.merakilearn.org/">
                  <div className="Initiatives-bg-color">
                    <div className="card-body text-white">
                      <h5 class="card-title section-head card-main-text  card-heading ">
                        Learn Online with Meraki{" "}
                      </h5>
                      <p class="card-text mt-2 section-para  card-dic ">
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
            <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <div class="bg-image3 card shadow-1-strong">
                <Link to="/cif">
                  <div className="Initiatives-bg-color">
                    <div class="card-body text-white">
                      <h5 class="card-title section-head card-main-text card-heading">
                        {" "}
                        Code India Fellowships
                      </h5>
                      <p class="card-text section-para mt-2 card-dic">
                        Nurture programming skills in the next generation of
                        India’s youth with your expertise
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="col-lg-6 mb-6 mb-lg-0">
              <div class="bg-image4 card shadow-1-strong">
                <Link to="/nglabs">
                  <div className="Initiatives-bg-color">
                    <div class="card-body text-white">
                      <h5 class="card-title section-head card-main-text card-heading">
                        {" "}
                        NG Labs{" "}
                      </h5>
                      <p class="card-text section-para mt-2 card-dic">
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

      <section className="container  text-center w-50 fs-1.1 my-5">
        <p className="section-para ">
          <span className="fw-bold">Techalms Consulting:</span> A talent group
          ready to fly in, solve your problems and leave by leaving happy faces
          at the clientplace{" "}
        </p>

        <p className="text-secondary"> Coming soon.........</p>
      </section>

      <section>
        <div class="container-fluid impact py-5  ">
          <div class="container text-center ">
            <h2 className="text-center section-head Impact-that-matters ">
              Impact that matters!
              {/* <div className="underliner mt-2"></div> */}
              <hr className="heading-hr" />
            </h2>

            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <h1 className="count section-head">160+</h1>
                <p className="section-para fs-1.1">
                  {" "}
                  Software Development Jobs
                </p>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <div className="software-development-img">
                  <img
                    className="mx-auto impactellipse"
                    src={require("./assets/impactellipse.png").default}
                  />
                  <h1 className="mt-5 count section-head"> 5 </h1>
                  <p className="section-para fs-1.1">States across India </p>
                </div>
              </div>
              <div class="col-lg-4 mb-4 mb-lg-0 ">
                <h1 className="count section-head">400+</h1>
                <p className="section-para fs-1.1"> Online Students </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="container text-center mt-5">
                <h1> Our Partners  </h1>

                <p>Navgurukul offers a fully-funded skilling </p>
            </section> */}

      {/* <section class="container">
                {supports.map((item) => {
                    console.log(item, 'name ')
                    return (
                        <div class="slide-content" style={{ outline: "none !important;" }}>
                            <a href={item.link} target="_blank" class="nounderline d-flex justify-content-center py-4" rel="nofollow"><img src={item.image.default} style={{ maxWidth: "100%" }} /></a>
                        </div>
                    );
                })}
            </section>  */}

      <section className="our-partners text-center mx-6 my-5">
        <h2 className="align-self-center mt-4 section-head">Our Partners</h2>
        <hr className="mt-3 mb-0 align-self-center heading-hr" />
        <PartnerSlider />

        <div class="d-flex flex-column align-items-center justify-content-center align-items-center my-5 ">
          <h2 className="section-head mb-4"> Bring a change! </h2>
          <button
            class="btn ng-labs-btn our-partner-btn section-para text-white partner "
            type="button"
          >
            Partner with us
          </button>
        </div>
      </section>

      {/* <section >
                <div className="  supporters text-center">
                    <h1 >Our Supporters</h1>
                    <div className="container" style={{ backgroundColor: 'pink' }}>
                        <div class="row ">
                            <div class="col-md-12 col-12">
                                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="  kom " src={require('../logos/wipro.png').default} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class=" kom " src={require('../logos/amazo.png').default} alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class=" kom" src={require('../logos/mrst.png').default} alt="Third slide" style={{ width: '20%' }} />
                                        </div>

                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

 */}

      <section className="d-flex home-page-supporters p-5 flex-column align-items-center justify-content-center mb-0 mt-5">
        <h2 className="section-head">Our Supporters</h2>
        <hr className="mb-5 heading-hr" />
        <div class="container ">
          <div class="row">
            <div class="col-md-12 col-12">
              <div class="row">
                <div class="col">
                  <img
                    className="logo-img"
                    src={require("./logos/infosys.png").default}
                  />
                </div>
                <div class="col">
                  <img
                    className="logo-img"
                    src={require("./logos/amazo.png").default}
                  />
                </div>

                <div class="col">
                  <img
                    className="logo-img"
                    src={require("./logos/microsoft.png").default}
                  />
                </div>
                <div class="col">
                  <img
                    className="logo-img"
                    src={require("./logos/wipro.png").default}
                  />
                </div>
                <div class="col">
                  <img
                    className="logo-img"
                    src={require("./logos/The-north-ace.png").default}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
