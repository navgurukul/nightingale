import React from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import Slider from "./Slider";
import PartnerSlider from "./PartnerSlider";
import SupporterSlider from "./SupporterSlider";
import img1 from "./assets/image1.svg";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.jpg";
import img4 from "./assets/image4.png";
import KeyFacilities from "./KeyFacilities";
import Digitallnitiatives from "./DigitalInitiatives";
import bannerimg1 from "./assets/Eternal_university-removebg-preview 1.svg";
import bannerimg2 from "./assets/Sri badrika asharam.svg";
import { useState } from "react";
import OurCampuses from "./OurCampuses";
import AlumniStories from "./AlumniStories";
import PlayBtn from "./assets/playicon.png";
import Banner from "./Banner";

function Home() {
  const [showVideo, setShowVideo] = useState(false);

  const handlePlayButtonClick = () => {
    setShowVideo(true);
  };

  const history = useHistory();
  const screenWidth = window.innerWidth;

  return (
    <>
      <Banner />

      {/* <div className="row align-items-center centered-container">
        <div className="d-none d-md-flex justify-content-end">
          <img src={bannerimg1} alt="banner img1" className="bannerimg1" />
        </div>
        <div className="d-none d-md-flex justify-content-start">
          <img src={bannerimg2} alt="banner img2" className="bannerimg2" />
        </div>
        <div className="col-md">
          <h4 className="mb-0">Eternal University’s Fully-Funded BCA Program for Aspiring Young Women 2024-27</h4>
        </div>
        <div className="col-md d-flex justify-content-end">
       
          <button
            type="button"
            className="btn regular-btn"
            style={{
              height: "48px",
              minWidth: "250px", 
              padding: "0 20px", 
              maxWidth: "100%", 
              whiteSpace: "nowrap", 
              overflow: "hidden", 
              textOverflow: "ellipsis" 
            }}
            onClick={(e) => {
              e.preventDefault();
              window.open("/bca-programme", "_blank");
            }}
          >
            Apply by 11th September 2024
          </button>

        </div>
      </div> */}

      <div className="navgurukul-homepage">
        <div className="container" style={{ marginTop: "80px" }}>
          <div className="row">
            <div className="col-md-12" style={{ textAlign: "center" }}>
              <h2 className=" heading-line ">
                The <span className="text-primary">Gurukul</span> for the <span className="BgColor"> New Age India  {" "} </span><span style={{ marginLeft: "10px" }}>and </span>
                <br></br>
                its New
                Generation{" "}
              </h2>{" "}
              <p className="font body1">
                We are a non-profit dedicated to bring affordable tech education to<br></br>
                underprivileged girls in India.{" "}
              </p>
            </div>
            <div className="col-md-12" style={{ padding: screenWidth > 932 && "0px" }}>

              {!showVideo ? (
                <div className="custom-bg-image" onClick={handlePlayButtonClick} >
                  <div onClick={handlePlayButtonClick}>
                    <img src={PlayBtn} alt="Play Icon" className="play-button" />
                  </div>
                </div>
              ) : (
                <div className="custom-video-container">
                  <iframe
                    className="bg-video"
                    src="https://www.youtube.com/embed/NC2ymm6Sots?autoplay=1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded Video"
                  ></iframe>
                </div>
              )}

            </div>
          </div>
        </div>
        <section className="media-scroll-section d-flex flex-column justify-content-center">
          <div className="container">
            <div className="row w-100">
              <div className="col-lg-3 col-md-2 col-sm-6 ">
                <h3>890+</h3>
                <p className="font body1">students placed across various industries in tech</p>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-6">
                <h3>₹2.8 LPA</h3>
                <p className="font body1">avg. salary secured by students, the highest being 8 LPA</p>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-6">
                <h3>95%</h3>
                <p className="font body1">
                  of our student strength consists of girls from marginalized
                  communities
                </p>
              </div>
              <div className="col-lg-3 col-md-2 col-sm-6">
                <h3>₹23+ Crore</h3>
                <p className="font body1">collectively earned annually by our Alumni</p>
              </div>
            </div>
          </div>
        </section>

        <section className=" d-flex flex-column align-items-center our-initiatives">
          <h3 className="text-center media-font ">Our Schools</h3>

          <div className="container mt-4">
            <div className="row gy-4">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="textlink">
                  <Link to="/job-course">
                    <img src={img1} className="card-image" alt="Placeholder Image" />
                    <div className="card-body text-black">
                      <h4 className="card-title mt-4">School of Programming</h4>
                      <p className="card-text mb-3">
                        Fully-funded course in software engineering with
                        guaranteed jobs
                      </p>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="textlink" >
                  <a href="/school-secondchance" target="">
                    <img src={img2} className="card-image " alt="Placeholder Image" />
                    <div className="card-body text-black ">
                      <h4 className="card-title mt-4">School of Second Chances</h4>
                      <p className="card-text mb-3">
                        Fully funded courses for trauma-survivors
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="row gy-4 mt-4">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="textlink">
                  <a href="https://www.merakilearn.org/" target="_blank">
                    <img src={img3} className="card-image" alt="Placeholder Image" />
                    <div className="card-body text-black">
                      <h4 className="card-title mt-4">School of Business</h4>
                      <p className="card-text mb-3">
                        Fully funded course in Business CRM with guaranteed jobs
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="textlink">
                  <a href="https://www.codeindiafellowship.org/" target="_blank">
                    <img src={img4} className="card-image" alt="Placeholder Image" />
                    <div className="card-body text-black">
                      <h4 className="card-title mt-4">School of Finance</h4>
                      <p className="card-text mb-3">
                        Fully funded course in Finance with guaranteed jobs
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>


        </section>


        <section className=" d-flex flex-column align-items-center our-initiatives">
          <h3 className="text-center media-font ">Digital Initiatives</h3>
          <Digitallnitiatives />
        </section>

        <section className=" d-flex flex-column align-items-center our-initiatives">
          <OurCampuses />
        </section>

        <section className=" d-flex flex-column align-items-center our-initiatives">
          <h3 className="text-center media-font mt-4">
            Key Facilities at NavGurukul
          </h3>
          <KeyFacilities />
        </section>

        <Slider />

        <section className="d-flex home-page-supporters flex-column align-items-center pb-5 justify-content-center mar-3 ">
          <h3>
            Our <span className="BackColor">Supporters</span>
          </h3>
          <div className="container ">
            <SupporterSlider />
          </div>
        </section>
        <section className="d-flex home-page-supporters flex-column align-items-center pb-5 justify-content-center mar-3 ">
          <h3>
            Alumni <span className="BackColor"> Stories</span>
          </h3>
          <div className="container mt-4">
            <AlumniStories />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;



