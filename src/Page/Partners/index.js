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
        <h2 className="mt-2 fw-semiBold">Partner Highlights</h2>
        <hr className="mt-2" />
        <div className="card-row flex-sm-row flex-column w-75 d-flex justify-content-around align-items-center bg-white">
          <div className="card w-25 my-3 bg-white d-flex justify-content-center align-items-center">
            <span className="fs-2.8 text-primary fw-bold">50</span>
            <p className="fs-1.5">Total Partners</p>
          </div>
          <div className="card w-25 my-3 bg-white d-flex justify-content-center align-items-center">
            <span className="fs-2.8 text-primary fw-bold">2000 +</span>
            <p className="fs-1.5">Students</p>
          </div>
          <div className="card w-25 my-3 bg-white d-flex justify-content-center align-items-center">
            <span className="fs-2.8 text-primary fw-bold">8</span>
            <p className="fs-1.5">Indian States</p>
          </div>
        </div>
        <div className="partner-content-data w-50 text-center fs-1.1 fw-400 d-flex align-items-center justify-content-center mt-4">
          Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
          esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
          Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate
          aute id deserunt nisi.
        </div>
        <button className="btn btn-primary ng-labs-btn fs-1.5 mt-4">
          Partner With Us
        </button>
      </div>
      <div className="partners-data w-100 my-5 d-flex align-items-center flex-column">
        <h2 className="mt-2 fw-semiBold">Recent Partners</h2>
        <hr className="mt-2" />
        <div className="all-partners w-90 d-flex flex-column">
          <div className="all-partners-row d-flex justify-content-around w-100 align-items-center my-1">
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
          </div>
          <div className="all-partners-row d-flex justify-content-around w-100 align-items-center my-1">
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-data w-100 my-5 d-flex align-items-center flex-column">
        <h2 className="mt-2 fw-semiBold">
          Long Term Partners (With us {">"} 1 Year)
        </h2>
        <hr className="mt-2" />
        <div className="all-partners w-90 d-flex flex-column">
          <div className="all-partners-row d-flex justify-content-around w-100 align-items-center my-1">
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
          </div>
          <div className="all-partners-row d-flex justify-content-around w-100 align-items-center my-1">
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
            <div className="card my-3 bg-white py-3 px-3">
              <h3 className="fw-semiBold mb-2">Hope Foundation</h3>
              <p className="fs-1.2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-30 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-support-section d-flex flex-column w-100 align-items-center justify-content-center">
        <h2 className="mt-2 fw-semiBold w-50 text-center">
          Have you taken an interest in what we do and want to support us?
        </h2>
        <button className="btn btn-primary ng-labs-btn fs-1.5 mt-4">
          Contact Us for CSR Enquiries
        </button>
      </div>
    </div>
  );
}

export default Partners;
