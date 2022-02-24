import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
import "../../Global.css";
import linkedin from "./assets/linkedin_png.png";
import twitter from "./assets/twitter_png.png";
import www from "./assets/www_png.png";

function Partners() {
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/partners.json`,
    }).then((res) => {
      setPartners(res.data);
    });
  }, []);
  const [partners, setPartners] = useState([]);
  return (
    <div className="partners d-flex flex-column justify-content-center w-100">
      <div className="container partnerInfo align-items-center d-flex flex-column  justify-content-center w-100 mt-5">
        <h3 className="mt-2 section-head mb-3">Partner Highlights</h3>
        <hr className="mb-3 heading-hr" />
        {/* <div className="card-row flex-sm-row flex-column w-75 d-flex justify-content-center align-items-center bg-white">
          <div className="card w-25 my-3 bg-white py-3 d-flex justify-content-center mx-3 align-items-center">
            <span className=" text-primary section-head">50</span>
            <p>Total Partners</p>
          </div>
          <div className="card w-25 my-3 bg-white py-3 d-flex justify-content-center mx-3 align-items-center">
            <span className=" text-primary section-head">2000 +</span>
            <p>Students</p>
          </div>
          <div className="card w-25 my-3 bg-white py-3 d-flex justify-content-center mx-3 align-items-center">
            <span className=" text-primary section-head">8</span>
            <p>Indian States</p>
          </div>
        </div> */}
        <div className="partner-content-data col-8 section-para d-flex align-items-center justify-content-center mb-2 mt-4">
          Our partners help us give access to aspirational careers to youth who
          want to grow but don’t have means to do so. Our partnerships are the
          backbone of our operations. Our partners share our values, our
          partners share our impact.
        </div>
        <button
          className="btn btn-primary section-para regular-btn mt-4"
          onClick={(e) => {
            e.preventDefault();
            window.open("https://forms.gle/NfXdR1dg4zpSyYvZ9", "_blank");
          }}
        >
          Partner With Us
        </button>
      </div>
      <div className="partners-data w-100 mb-0 mb-md-5 d-flex align-items-center flex-column">
        <h3 className="mb-3 section-head">Recent Partners</h3>
        <hr className="mb-3 heading-hr" />
        <div className="all-partners w-75 d-flex flex-column">
          <div className="all-partners-row d-flex justify-content-around w-100 my-1">
            {Object.keys(partners).length ? (
              Object.keys(partners).map((item) => {
                return (
                  <div className="card my-3 bg-white py-3 px-4 position-relative">
                    <h4 className="fw-bold mb-2">{partners[item].Name}</h4>
                    <span className="status mb-2">{partners[item].Type}</span>
                    <p className="my-1 mb-5">{partners[item].Content}</p>
                    <div className="social-media-icons d-flex  w-40 mb-3 position-absolute">
                      {partners[item].LinkedIn ? (
                        <a href={partners[item].LinkedIn} target="_blank">
                          <img
                            className="social-icon mr-3"
                            src={linkedin}
                          ></img>
                        </a>
                      ) : (
                        <></>
                      )}
                      {partners[item].Twitter ? (
                        <a href={partners[item].Twitter} target="_blank">
                          <img className="social-icon mr-3" src={twitter}></img>
                        </a>
                      ) : (
                        <></>
                      )}
                      {partners[item].Website ? (
                        <a href={partners[item].Website} target="_blank">
                          <img className="social-icon mr-3" src={www}></img>
                        </a>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <></>
            )}
            {/* <div className="card my-3 bg-white py-3 px-4">
              <h4 className="fw-bold mb-2  ">Hope Foundation</h4>
              <p className="my-1 mb-2">
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor.{" "}
              </p>
              <div className="social-media-icons d-flex justify-content-between w-40 mb-3">
                <img className="social-icon" src={linkedin}></img>
                <img className="social-icon" src={twitter}></img>
                <img className="social-icon" src={www}></img>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="partners-data w-100 my-5 d-flex align-items-center flex-column">
        <h3 className="mb-3">
          Long Term Partners (With us {">"} 1 Year)
        </h3>
        <hr className="mb-3 heading-hr" />
        <div className="all-partners w-80 d-flex flex-column">
          <div className="all-partners-row d-flex justify-content-around w-100 align-items-center my-1">
            <div className="card my-3 bg-white py-3 px-4">
              <h4 className="fw-bold mb-2  ">Hope Foundation</h4>
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
              <h4 className="fw-bold mb-2  ">Hope Foundation</h4>
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
              <h4 className="fw-bold mb-2  ">Hope Foundation</h4>
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
              <h4 className="fw-bold mb-2  ">Hope Foundation</h4>
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
              <h4 className="fw-bold mb-2  ">Hope Foundation</h4>
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
              <h4 className="fw-bold mb-2  ">Hope Foundation</h4>
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
      </div> */}
      <div className="container partners-support-section d-flex flex-column w-100 align-items-center mb-5 pb-5 justify-content-center">
        <h3 className="mt-2 section-head w-50 text-center">
          Have you taken an interest in what we do and want to support us?
        </h3>
        <button
          className="btn btn-primary section-para regular-btn mt-4"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdehRy3gDHgkj4bC-0AehiCNrk1_WgP39Zm7-l0YXowREupdw/viewform",
              "_blank"
            );
          }}
        >
          Contact Us for CSR Enquiries
        </button>
      </div>
    </div>
  );
}

export default Partners;
