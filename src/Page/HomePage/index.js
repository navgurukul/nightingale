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
    <>
      {/* <div className="container-fluid"> */}
      <div className="bg text-white home-page-ng ">
        <div class="rgba-black-strong">
          <div className="container">
            <div class="row ">
              <div class="col-lg-12 mt-5  ">
                <h1 class="h1-responsive font-weight-bold  komal ">
                  {" "}
                  The Gurukul for the New Age India and its New Generation{" "}
                </h1>
                <p className="mt-3 komal-p">
                  {" "}
                  We are a non-profit dedicated to bring affordable tech
                  education to underprivileged girls in India
                </p>
                <button
                  type="button"
                  class="btn ng-labs-btn btn-buttons text-white "
                >
                  Students
                </button>
                <button
                  type="button"
                  class="btn ng-labs-btn btn-buttons text-white"
                  style={{ marginLeft: "10px" }}
                >
                  Partners
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <section className="media-scroll-section d-flex flex-column justify-content-center">
        <h2 className="align-self-center mt-4">In the Media</h2>
        <hr className="mt-2 mb-0 align-self-center" />
        <Slider />
      </section>

      <section className="mt-5">
        <h1 className="text-center ">Our Initiatives</h1>
        <div className=" underliner"></div>

        <div class="container mt-5">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-6 mb-lg-0">
              <div class="bg-image1 card  shadow-1-strong">
                <Link to="/job-course">
                  <div className="Initiatives-bg-color">
                    <div class="card-body text-white  ">
                      <h5 class="card-title card-main-text card-heading ">
                        {" "}
                        Guaranteed Job Courses{" "}
                      </h5>
                      <p class="card-text mt-2 card-dic">
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
                      <h5 class="card-title card-main-text  card-heading ">
                        Learn Online with Meraki{" "}
                      </h5>
                      <p class="card-text mt-2  card-dic ">
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
            <div class="col-lg-6 col-md-12 mb-6 mb-lg-0">
              <div class="bg-image3 card shadow-1-strong">
                <Link to="/cif">
                  <div className="Initiatives-bg-color">
                    <div class="card-body text-white">
                      <h5 class="card-title card-main-text card-heading">
                        {" "}
                        Code India Fellowships
                      </h5>
                      <p class="card-text mt-2 card-dic">
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
                      <h5 class="card-title card-main-text card-heading">
                        {" "}
                        NG Labs{" "}
                      </h5>
                      <p class="card-text mt-2 card-dic">
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

      <section className="container  text-center w-50 fs-1.1 mt-5">
        <p>
          <span className="fw-semiBold">Techalms Consulting:</span> A talent
          group ready to fly in, solve your problems and leave by leaving happy
          faces at the clientplace{" "}
        </p>

        <p className="text-secondary"> Coming soon.........</p>
      </section>

      <section>
        <div class="container-fluid impact mt-5  ">
          <div class="container text-center ">
            <h1 className="text-center  Impact-that-matters ">
              Impact that matters!
              <div className="underliner mt-2"></div>
            </h1>

            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <h1 className="count">160+</h1>
                <p> Software Development Jobs</p>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <div className="software-development-img">
                  <img
                    className="mx-auto impactellipse"
                    src={require("./assets/impactellipse.png").default}
                  />
                  <h1 className="mt-5 count"> 5 </h1>
                  <p>States across India </p>
                </div>
              </div>
              <div class="col-lg-4 mb-4 mb-lg-0 ">
                <h1 className="count ">400+</h1>
                <p> Online Students </p>
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

      <section className="our-partners text-center mx-3 my-5">
        <h2 className="align-self-center mt-4">Our Partners</h2>
        <hr className="mt-3 mb-0 align-self-center" />
        <PartnerSlider />
        <h2> Bring a change! </h2>
        <div class="d-grid  col-4 mx-auto mt-4 ">
          <button class="btn ng-labs-btn  text-white partner " type="button">
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

      <section className="d-flex home-page-supporters p-5 flex-column align-items-center justify-content-center mt-5">
        <h2>Our Supporters</h2>
        <hr className="mb-5" />
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
    </>
  );
}

export default Home;