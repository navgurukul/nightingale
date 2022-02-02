import React from "react";
import "./style.css";
import "../../Global.css";
import linkedin from "./assets/linkedin_png.png";
import twitter from "./assets/twitter_png.png";
import www from "./assets/www_png.png";

function Partners() {
  return (
    <div className="partners d-flex flex-column justify-content-center w-100">
      <div className="partnerInfo align-items-center d-flex flex-column mb-5 justify-content-center w-100 mt-5">
        <h2 className="mt-2 section-head">Partner Highlights</h2>
        <hr className="mt-2 heading-hr" />
        <div className="card-row flex-sm-row flex-column w-75 d-flex justify-content-center align-items-center bg-white">
          <div className="card w-25 my-3 bg-white py-3 d-flex justify-content-center mx-3 align-items-center">
            <span className="fs-3.5 text-primary section-head">50</span>
            <p className="fw-400 ">Total Partners</p>
          </div>
          <div className="card w-25 my-3 bg-white py-3 d-flex justify-content-center mx-3 align-items-center">
            <span className="fs-3.5 text-primary section-head">2000 +</span>
            <p className="fw-400">Students</p>
          </div>
          <div className="card w-25 my-3 bg-white py-3 d-flex justify-content-center mx-3 align-items-center">
            <span className="fs-3.5 text-primary section-head">8</span>
            <p className="fw-400">Indian States</p>
          </div>
        </div>
        <div className="partner-content-data w-40 text-center section-para fw-400 d-flex align-items-center justify-content-center mb-2 mt-4">
          Our partners help us give access to aspirational careers to youth who
          want to grow but don’t have means to do so. Our partnerships are the
          backbone of our operations. Our partners share our values, our
          partners share our impact.
        </div>
        <button className="btn btn-primary section-para ng-labs-btn mt-4">
          Partner With Us
        </button>
      </div>
      <div className="partners-data w-100 my-5 d-flex align-items-center flex-column">
        <h2 className="mt-2 section-head">Recent Partners</h2>
        <hr className="mt-2 heading-hr" />
        <div className="all-partners w-80 d-flex flex-column">
          <div className="all-partners-row d-flex justify-content-around w-100 align-items-center my-1">
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
          </div>
          <div className="all-partners-row d-flex justify-content-around w-100 align-items-center my-1">
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-data w-100 my-5 d-flex align-items-center flex-column">
        <h2 className="mt-2 section-head">
          Long Term Partners (With us {">"} 1 Year)
        </h2>
        <hr className="mt-2 heading-hr" />
        <div className="all-partners w-80 d-flex flex-column">
          <div className="all-partners-row d-flex justify-content-around w-100 align-items-center my-1">
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
          </div>
          <div className="all-partners-row d-flex justify-content-around w-100 align-items-center my-1">
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-4">
              <h3 className="fw-semiBold mb-2 fs-1.125">Hope Foundation</h3>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-support-section d-flex flex-column w-100 align-items-center mb-5 justify-content-center">
        <h2 className="mt-2 section-head w-50 text-center">
          Have you taken an interest in what we do and want to support us?
        </h2>
        <button className="btn btn-primary section-para ng-labs-btn mt-4">
          Contact Us for CSR Enquiries
        </button>
      </div>
    </div>
  );
}

export default Partners;
